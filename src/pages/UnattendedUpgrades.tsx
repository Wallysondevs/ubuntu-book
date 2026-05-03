import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function UnattendedUpgrades() {
  return (
    <PageContainer
      title="Unattended-Upgrades — Updates automáticos"
      subtitle="O serviço que mantém seu Ubuntu seguro sem você tocar nele. Aplica patches de segurança automaticamente, com janelas de manutenção, blacklists e reboot opcional."
      difficulty="intermediario"
      timeToRead="8 min"
    >
      <h2>O que faz?</h2>
      <p>
        <code>unattended-upgrades</code> é um daemon que roda
        diariamente (via systemd timer), checa repositórios habilitados,
        baixa e instala atualizações de segurança sem intervenção. Vem
        instalado e ativado por padrão no Ubuntu Server desde o 18.04.
        No Desktop, você ativa via <em>Software & Updates → Updates →
        Automatically check</em>.
      </p>

      <AlertBox type="info" title="Quem dispara o quê?">
        <ul>
          <li><code>apt-daily.timer</code> — roda <code>apt update</code> + download (default: 2x/dia, com offset randômico).</li>
          <li><code>apt-daily-upgrade.timer</code> — roda <code>unattended-upgrade</code> (default: 6h da manhã).</li>
          <li><code>unattended-upgrades.service</code> — script principal em Python.</li>
        </ul>
      </AlertBox>

      <h2>Instalação e ativação</h2>
      <CodeBlock
        language="bash"
        code={`# Instalar (já vem em Ubuntu Server)
sudo apt install unattended-upgrades

# Ativar via wizard
sudo dpkg-reconfigure --priority=low unattended-upgrades

# Equivalente manual:
sudo tee /etc/apt/apt.conf.d/20auto-upgrades > /dev/null << 'EOF'
APT::Periodic::Update-Package-Lists "1";
APT::Periodic::Unattended-Upgrade "1";
APT::Periodic::Download-Upgradeable-Packages "1";
APT::Periodic::AutocleanInterval "7";
EOF

# Verificar timers ativos
systemctl list-timers | grep apt`}
      />

      <h2>Configuração principal</h2>
      <p>
        O arquivo <code>/etc/apt/apt.conf.d/50unattended-upgrades</code>
        define o comportamento. Edite-o (não o sobrescreva — perde
        comentários úteis):
      </p>

      <CodeBlock
        language="bash"
        code={`Unattended-Upgrade::Allowed-Origins {
    "\${distro_id}:\${distro_codename}-security";
    "\${distro_id}ESMApps:\${distro_codename}-apps-security";
    "\${distro_id}ESM:\${distro_codename}-infra-security";
//  "\${distro_id}:\${distro_codename}-updates";       // descomente para todos updates
//  "\${distro_id}:\${distro_codename}-proposed";      // NÃO USE em prod
//  "\${distro_id}:\${distro_codename}-backports";
};

// Pacotes que NUNCA devem ser atualizados automaticamente
Unattended-Upgrade::Package-Blacklist {
    "linux-";          // kernel — exige reboot
    "nginx";           // controle manual de versão
    "postgresql-1";
};

// Reboot automático após updates que pedem (kernel, libs críticas)
Unattended-Upgrade::Automatic-Reboot "true";
Unattended-Upgrade::Automatic-Reboot-Time "03:00";
Unattended-Upgrade::Automatic-Reboot-WithUsers "false";

// Email de relatório (precisa de MTA local)
Unattended-Upgrade::Mail "ops@empresa.com";
Unattended-Upgrade::MailReport "on-change";   // always | only-on-error | on-change

// Limitar bandwidth (KB/s)
Acquire::http::Dl-Limit "200";

// Remover dependências órfãs
Unattended-Upgrade::Remove-Unused-Dependencies "true";
Unattended-Upgrade::Remove-Unused-Kernel-Packages "true";`}
      />

      <h2>Casos práticos</h2>
      <CodeBlock
        language="bash"
        code={`# Simulação (dry-run) — não instala nada
sudo unattended-upgrade --dry-run --debug

# Forçar execução agora
sudo unattended-upgrade -d

# Ver últimos relatórios
ls /var/log/unattended-upgrades/
cat /var/log/unattended-upgrades/unattended-upgrades.log | tail -30

# Verificar se reboot é necessário
[ -f /var/run/reboot-required ] && cat /var/run/reboot-required.pkgs

# Histórico geral de upgrades
zgrep -h 'install\\|upgrade ' /var/log/dpkg.log* | tail`}
      />

      <h2>Padrões da Allowed-Origins</h2>
      <p>
        O bloco <code>Allowed-Origins</code> usa as variáveis
        <code> $&#123;distro_id&#125; </code> (ex.: <code>Ubuntu</code>) e
        <code> $&#123;distro_codename&#125; </code> (ex.: <code>noble</code>).
        Para descobrir o que está disponível:
      </p>
      <CodeBlock
        language="bash"
        code={`# Listar todos os origins disponíveis no APT
apt-cache policy | grep -E "^\\s+(release|origin)" | sort -u

# Saída típica:
# o=Ubuntu,a=noble-security,n=noble,l=Ubuntu,c=main
# o=Ubuntu,a=noble-updates,n=noble,l=Ubuntu,c=universe
# o=UbuntuESMApps,a=noble-apps-security,n=noble,l=UbuntuESMApps`}
      />

      <h2>Janelas de manutenção customizadas</h2>
      <CodeBlock
        language="bash"
        code={`# Mudar horário do upgrade diário (ex.: 4h da manhã)
sudo systemctl edit apt-daily-upgrade.timer
# Cole:
# [Timer]
# OnCalendar=
# OnCalendar=04:00
# RandomizedDelaySec=30min

sudo systemctl daemon-reload
sudo systemctl restart apt-daily-upgrade.timer
systemctl list-timers apt-daily-upgrade.timer`}
      />

      <h2>Armadilhas comuns</h2>
      <AlertBox type="danger" title="Reboot automático em horário errado">
        <code>Automatic-Reboot=true</code> sem
        <code> Automatic-Reboot-Time </code> reboota assim que termina
        o upgrade — pode ser 14h num servidor de produção. Sempre
        defina o horário e confira o timezone do servidor
        (<code>timedatectl</code>).
      </AlertBox>

      <AlertBox type="warning" title="Travamento do dpkg">
        Se outro processo (apt, snap auto-refresh) está usando o
        dpkg, unattended-upgrade espera 5min e desiste. Sintoma:
        <code> Could not get lock /var/lib/dpkg/lock-frontend</code>
        no log. Solução: stagger os timers (offset 30min entre
        apt-daily e snap.refresh).
      </AlertBox>

      <AlertBox type="warning" title="Updates de kernel sem reboot">
        Sem <code>Automatic-Reboot=true</code>, novos kernels ficam
        instalados mas não ativos. <code>uname -r</code> continua
        antigo. Combine com <strong>Livepatch</strong> (Ubuntu Pro)
        para rodar patches no kernel ativo até o próximo reboot
        agendado.
      </AlertBox>

      <h2>Cheat sheet</h2>
      <CodeBlock
        language="bash"
        code={`# Ativar
sudo dpkg-reconfigure --priority=low unattended-upgrades

# Configurar
sudoedit /etc/apt/apt.conf.d/50unattended-upgrades

# Testar
sudo unattended-upgrade --dry-run --debug

# Logs
tail -f /var/log/unattended-upgrades/unattended-upgrades.log

# Estado dos timers
systemctl list-timers apt-daily*

# Pacote que precisa de reboot
ls /var/run/reboot-required* 2>/dev/null`}
      />
    </PageContainer>
  );
}

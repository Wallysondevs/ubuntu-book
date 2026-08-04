import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function UbuntuPro() {
  return (
    <PageContainer
      title="Ubuntu Pro & Livepatch"
      subtitle="Subscrição gratuita para uso pessoal (até 5 máquinas) que estende o suporte de segurança de 5 para 10 anos, libera patches no kernel sem reboot e ativa hardening pronto para produção."
      difficulty="intermediario"
      timeToRead="9 min"
    >
      <h2>O que é Ubuntu Pro?</h2>
      <p>
        Ubuntu Pro é a camada de subscrição da Canonical que adiciona
        ao Ubuntu padrão: <strong>ESM</strong> (Expanded Security
        Maintenance), <strong>Livepatch</strong> (kernel sem reboot),
        <strong> USG</strong> (Ubuntu Security Guide com perfis CIS/DISA),
        <strong> FIPS</strong> certificado e <strong>Real-Time Kernel</strong>.
        Para uso pessoal e até 5 máquinas, é gratuito.
      </p>

      <AlertBox type="info" title="LTS padrão vs LTS + Pro">
        <ul>
          <li><strong>LTS sem Pro</strong> — 5 anos de patches em <code>main</code>; <code>universe</code> não recebe CVE fixes pagos.</li>
          <li><strong>LTS com Pro</strong> — 10 anos em <code>main</code> via ESM-Infra + 10 anos em <code>universe</code> via ESM-Apps + Livepatch.</li>
        </ul>
      </AlertBox>

      <h2>Ativação (gratuita até 5 máquinas)</h2>
      <CodeBlock
        language="bash"
        code={`# 1. Crie token grátis em https://ubuntu.com/pro/dashboard

# 2. Anexe a máquina
sudo pro attach C1abcDEF...seuToken

# 3. Status
pro status --all
# Veja serviços ESM-Infra, ESM-Apps, Livepatch, USG, FIPS, etc.`}
      />

      <h2>Habilitar serviços</h2>
      <CodeBlock
        language="bash"
        code={`# Já vêm ativos por padrão após 'attach':
#   esm-infra, esm-apps, livepatch

# Ativar manualmente
sudo pro enable livepatch
sudo pro enable usg

# Desativar
sudo pro disable usg

# Listar disponíveis
pro status

# Renovar contrato
sudo pro refresh`}
      />

      <h2>Livepatch — patches no kernel sem reboot</h2>
      <CodeBlock
        language="bash"
        code={`# Status do canal
canonical-livepatch status --verbose

# Forçar verificação de novos patches
sudo canonical-livepatch refresh

# Ver patches já aplicados
canonical-livepatch status --verbose | grep -A2 patches

# Quais kernels são suportados
# → 4.15+ em LTS (Bionic, Focal, Jammy, Noble)
# → HWE kernels também
# → Não suporta kernels custom compilados manualmente`}
      />

      <AlertBox type="warning" title="Livepatch não substitui reboot eternamente">
        Patches críticos de microcódigo, mudanças no scheduler ou
        upgrade de versão major do kernel ainda exigem reboot.
        Livepatch é uma janela: dá 60-90 dias entre os reboots,
        não os elimina.
      </AlertBox>

      <h2>ESM (Expanded Security Maintenance)</h2>
      <CodeBlock
        language="bash"
        code={`# ESM-Infra cobre pacotes de 'main' (~2.300 pacotes)
# ESM-Apps cobre 'universe' (~23.000 pacotes)
# Após o suporte padrão de 5 anos, sem Pro o apt simplesmente
# não recebe mais updates — Pro estende isso para 10 anos.

# Ver origem de um pacote (esm vs main vs universe)
apt-cache policy nginx

# Saída esperada com ESM ativo:
#  500 https://esm.ubuntu.com/apps/ubuntu noble-apps-security/main`}
      />

      <h2>USG — Ubuntu Security Guide (CIS / DISA STIG)</h2>
      <CodeBlock
        language="bash"
        code={`sudo pro enable usg
sudo apt install usg

# Auditar contra CIS Level 1 (Server)
sudo usg audit cis_level1_server

# Gera relatório HTML
ls /var/lib/usg/

# Aplicar (cuidado em produção!)
sudo usg fix cis_level1_server

# Personalizar (excluir regras específicas)
sudo usg generate-tailoring cis_level1_server tailor.xml
# Edite tailor.xml e:
sudo usg fix --tailoring-file tailor.xml`}
      />

      <h2>FIPS 140-3 (compliance governamental)</h2>
      <CodeBlock
        language="bash"
        code={`# Ativar módulos criptográficos certificados FIPS
sudo pro enable fips-updates    # versão atualizável
# OU (não exclusivos)
sudo pro enable fips            # versão "frozen" certificada

sudo reboot

# Verificar
cat /proc/sys/crypto/fips_enabled
# 1`}
      />

      <h2>Casos práticos</h2>
      <CodeBlock
        language="bash"
        code={`# Auditar ESM ativo em fleet de servidores via Ansible
ansible all -m shell -a "pro status --format json | jq .services"

# Webhook quando livepatch falhar (systemd timer)
sudo systemctl status canonical-livepatchd
journalctl -u snap.canonical-livepatch.canonical-livepatchd

# Desanexar máquina (devolver licença)
sudo pro detach`}
      />

      <h2>Attach em escala: token, cloud-init e Landscape</h2>
      <p>
        Anexar uma maquina a mao funciona para a primeira. Para a decima, o
        token entra no provisionamento e nunca em um comando digitado no
        historico do shell.
      </p>
      <CodeBlock
        language="bash"
        code={`# Attach nao interativo, lendo o token de arquivo
sudo pro attach --attach-config /etc/ubuntu-advantage/attach.yaml

# attach.yaml: define token e quais servicos ligar de saida
# token: SEU_TOKEN
# enable_services: [esm-infra, esm-apps, livepatch, usg]

# No provisionamento de uma VM, via cloud-init
# ubuntu_advantage:
#   token: SEU_TOKEN
#   enable: [esm-infra, esm-apps, livepatch]

# Conferir o resultado do outro lado
sudo pro status --all
sudo pro api u.pro.status.is_attached.v1

# Soltar a maquina (ao desativar um servidor, libere a licenca)
sudo pro detach --assume-yes`}
      />

      <AlertBox type="danger" title="Token no historico do shell e vazamento">
        <code>pro attach SEU_TOKEN</code> deixa o token no
        <code> ~/.bash_history</code>, nos logs de auditoria e em qualquer
        gravacao de terminal. Use <code>--attach-config</code> com arquivo
        <code> 600 </code>de dono root, ou o bloco do cloud-init.
      </AlertBox>

      <h2>Auditar o que o Pro realmente esta cobrindo</h2>
      <p>
        A pergunta pratica nao e "esta ativo?", e "quantos pacotes deste
        servidor sairiam de suporte sem o Pro?". Isso da para medir.
      </p>
      <CodeBlock
        language="bash"
        code={`# Panorama por pacote instalado
pro security-status

# Quantos pacotes vem de cada origem
pro security-status --format json | \\
  python3 -c "import json,sys; d=json.load(sys.stdin); print(d['summary'])"

# Pacotes que so recebem correcao com esm-apps
pro security-status --esm-apps

# CVEs pendentes na maquina, com o utilitario oficial
sudo apt install ubuntu-security-tools 2>/dev/null || true
pro fix CVE-2024-3094           # aplica a correcao de um CVE especifico
pro fix --dry-run USN-6700-1    # simula, sem instalar nada

# Data em que esta release sai do suporte padrao
ubuntu-distro-info --supported-esm
ls /var/lib/ubuntu-advantage/`}
      />

      <h2>Quando o Pro nao resolve o seu problema</h2>
      <p>
        Ele estende suporte de seguranca. Ele nao atualiza versao de software,
        nao substitui backup e nao conserta configuracao ruim.
      </p>
      <CodeBlock
        language="bash"
        code={`# esm-apps corrige seguranca, mas mantem a versao antiga do pacote
apt policy nginx
# Se voce precisa da versao nova, o caminho e PPA, snap, container ou upgrade de release

# Livepatch cobre so o kernel, e so alguns CVEs
canonical-livepatch status --verbose

# Reboot ainda e necessario quando o kernel muda de verdade
ls /var/run/reboot-required 2>/dev/null && cat /var/run/reboot-required.pkgs

# Conferir o que o unattended-upgrades ja aplica sem Pro nenhum
grep -r "Allowed-Origins" -A6 /etc/apt/apt.conf.d/50unattended-upgrades`}
      />

      <h2>Armadilhas comuns</h2>
      <AlertBox type="danger" title="Container herda token do host">
        Containers LXD/Docker copiam <code>/etc/ubuntu-advantage/</code>
        do host por padrão e contam como máquina separada — estoura
        o limite de 5. Solução: <code>pro detach</code> dentro do
        container ou use imagens "minimal" sem ubuntu-advantage-tools.
      </AlertBox>

      <AlertBox type="warning" title="USG fix em produção sem snapshot">
        <code>usg fix cis_level2_server</code> aplica ~150 mudanças de
        config (sshd, sysctl, partições, auditd). Sempre snapshot
        antes — algumas regras quebram aplicações que dependem de
        SSH com senha, NFS v3 ou syscalls bloqueadas pelo seccomp.
      </AlertBox>

      <AlertBox type="warning" title="Real-time kernel não convive com NVIDIA proprietário">
        O kernel RT (também via Pro) recompila módulos sem suporte ao
        driver proprietário NVIDIA. Use <code>nouveau</code> ou
        kernel padrão se precisar de GPU.
      </AlertBox>

      <h2>Cheat sheet</h2>
      <CodeBlock
        language="bash"
        code={`sudo pro attach TOKEN              # ativar
pro status --all                    # ver serviços
sudo pro enable livepatch|usg|fips
sudo pro disable SERVICO
sudo pro refresh                    # renovar
sudo pro detach                     # desanexar

canonical-livepatch status --verbose
sudo usg audit cis_level1_server
cat /proc/sys/crypto/fips_enabled

# Token gratuito: https://ubuntu.com/pro/dashboard`}
      />
    </PageContainer>
  );
}

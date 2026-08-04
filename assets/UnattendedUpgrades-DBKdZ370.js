import{j as e}from"./index-_kFPLDpE.js";import{P as t}from"./PageContainer-eafNNqkI.js";import{C as a}from"./CodeBlock-ByIkwE54.js";import{A as d}from"./AlertBox-NzOB7YP7.js";function n(){return e.jsxs(t,{title:"Unattended-Upgrades — Updates automáticos",subtitle:"O serviço que mantém seu Ubuntu seguro sem você tocar nele. Aplica patches de segurança automaticamente, com janelas de manutenção, blacklists e reboot opcional.",difficulty:"intermediario",timeToRead:"8 min",children:[e.jsx("h2",{children:"O que faz?"}),e.jsxs("p",{children:[e.jsx("code",{children:"unattended-upgrades"})," é um daemon que roda diariamente (via systemd timer), checa repositórios habilitados, baixa e instala atualizações de segurança sem intervenção. Vem instalado e ativado por padrão no Ubuntu Server desde o 18.04. No Desktop, você ativa via ",e.jsx("em",{children:"Software & Updates → Updates → Automatically check"}),"."]}),e.jsx(d,{type:"info",title:"Quem dispara o quê?",children:e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"apt-daily.timer"})," — roda ",e.jsx("code",{children:"apt update"})," + download (default: 2x/dia, com offset randômico)."]}),e.jsxs("li",{children:[e.jsx("code",{children:"apt-daily-upgrade.timer"})," — roda ",e.jsx("code",{children:"unattended-upgrade"})," (default: 6h da manhã)."]}),e.jsxs("li",{children:[e.jsx("code",{children:"unattended-upgrades.service"})," — script principal em Python."]})]})}),e.jsx("h2",{children:"Instalação e ativação"}),e.jsx(a,{language:"bash",code:`# Instalar (já vem em Ubuntu Server)
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
systemctl list-timers | grep apt`}),e.jsx("h2",{children:"Configuração principal"}),e.jsxs("p",{children:["O arquivo ",e.jsx("code",{children:"/etc/apt/apt.conf.d/50unattended-upgrades"}),"define o comportamento. Edite-o (não o sobrescreva — perde comentários úteis):"]}),e.jsx(a,{language:"bash",code:`Unattended-Upgrade::Allowed-Origins {
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
Unattended-Upgrade::Remove-Unused-Kernel-Packages "true";`}),e.jsx("h2",{children:"Casos práticos"}),e.jsx(a,{language:"bash",code:`# Simulação (dry-run) — não instala nada
sudo unattended-upgrade --dry-run --debug

# Forçar execução agora
sudo unattended-upgrade -d

# Ver últimos relatórios
ls /var/log/unattended-upgrades/
cat /var/log/unattended-upgrades/unattended-upgrades.log | tail -30

# Verificar se reboot é necessário
[ -f /var/run/reboot-required ] && cat /var/run/reboot-required.pkgs

# Histórico geral de upgrades
zgrep -h 'install\\|upgrade ' /var/log/dpkg.log* | tail`}),e.jsx("h2",{children:"Padrões da Allowed-Origins"}),e.jsxs("p",{children:["O bloco ",e.jsx("code",{children:"Allowed-Origins"})," usa as variáveis",e.jsx("code",{children:" ${distro_id} "})," (ex.: ",e.jsx("code",{children:"Ubuntu"}),") e",e.jsx("code",{children:" ${distro_codename} "})," (ex.: ",e.jsx("code",{children:"noble"}),"). Para descobrir o que está disponível:"]}),e.jsx(a,{language:"bash",code:`# Listar todos os origins disponíveis no APT
apt-cache policy | grep -E "^\\s+(release|origin)" | sort -u

# Saída típica:
# o=Ubuntu,a=noble-security,n=noble,l=Ubuntu,c=main
# o=Ubuntu,a=noble-updates,n=noble,l=Ubuntu,c=universe
# o=UbuntuESMApps,a=noble-apps-security,n=noble,l=UbuntuESMApps`}),e.jsx("h2",{children:"Janelas de manutenção customizadas"}),e.jsx(a,{language:"bash",code:`# Mudar horário do upgrade diário (ex.: 4h da manhã)
sudo systemctl edit apt-daily-upgrade.timer
# Cole:
# [Timer]
# OnCalendar=
# OnCalendar=04:00
# RandomizedDelaySec=30min

sudo systemctl daemon-reload
sudo systemctl restart apt-daily-upgrade.timer
systemctl list-timers apt-daily-upgrade.timer`}),e.jsx("h2",{children:"Armadilhas comuns"}),e.jsxs(d,{type:"danger",title:"Reboot automático em horário errado",children:[e.jsx("code",{children:"Automatic-Reboot=true"})," sem",e.jsx("code",{children:" Automatic-Reboot-Time "})," reboota assim que termina o upgrade — pode ser 14h num servidor de produção. Sempre defina o horário e confira o timezone do servidor (",e.jsx("code",{children:"timedatectl"}),")."]}),e.jsxs(d,{type:"warning",title:"Travamento do dpkg",children:["Se outro processo (apt, snap auto-refresh) está usando o dpkg, unattended-upgrade espera 5min e desiste. Sintoma:",e.jsx("code",{children:" Could not get lock /var/lib/dpkg/lock-frontend"}),"no log. Solução: stagger os timers (offset 30min entre apt-daily e snap.refresh)."]}),e.jsxs(d,{type:"warning",title:"Updates de kernel sem reboot",children:["Sem ",e.jsx("code",{children:"Automatic-Reboot=true"}),", novos kernels ficam instalados mas não ativos. ",e.jsx("code",{children:"uname -r"})," continua antigo. Combine com ",e.jsx("strong",{children:"Livepatch"})," (Ubuntu Pro) para rodar patches no kernel ativo até o próximo reboot agendado."]}),e.jsx("h2",{children:"Cheat sheet"}),e.jsx(a,{language:"bash",code:`# Ativar
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
ls /var/run/reboot-required* 2>/dev/null`})]})}export{n as default};

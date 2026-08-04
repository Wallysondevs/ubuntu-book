import{j as e}from"./index-_kFPLDpE.js";import{P as s}from"./PageContainer-eafNNqkI.js";import{C as a}from"./CodeBlock-ByIkwE54.js";import{A as o}from"./AlertBox-NzOB7YP7.js";function c(){return e.jsxs(s,{title:"Ubuntu Pro & Livepatch",subtitle:"Subscrição gratuita para uso pessoal (até 5 máquinas) que estende o suporte de segurança de 5 para 10 anos, libera patches no kernel sem reboot e ativa hardening pronto para produção.",difficulty:"intermediario",timeToRead:"9 min",children:[e.jsx("h2",{children:"O que é Ubuntu Pro?"}),e.jsxs("p",{children:["Ubuntu Pro é a camada de subscrição da Canonical que adiciona ao Ubuntu padrão: ",e.jsx("strong",{children:"ESM"})," (Expanded Security Maintenance), ",e.jsx("strong",{children:"Livepatch"})," (kernel sem reboot),",e.jsx("strong",{children:" USG"})," (Ubuntu Security Guide com perfis CIS/DISA),",e.jsx("strong",{children:" FIPS"})," certificado e ",e.jsx("strong",{children:"Real-Time Kernel"}),". Para uso pessoal e até 5 máquinas, é gratuito."]}),e.jsx(o,{type:"info",title:"LTS padrão vs LTS + Pro",children:e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"LTS sem Pro"})," — 5 anos de patches em ",e.jsx("code",{children:"main"}),"; ",e.jsx("code",{children:"universe"})," não recebe CVE fixes pagos."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"LTS com Pro"})," — 10 anos em ",e.jsx("code",{children:"main"})," via ESM-Infra + 10 anos em ",e.jsx("code",{children:"universe"})," via ESM-Apps + Livepatch."]})]})}),e.jsx("h2",{children:"Ativação (gratuita até 5 máquinas)"}),e.jsx(a,{language:"bash",code:`# 1. Crie token grátis em https://ubuntu.com/pro/dashboard

# 2. Anexe a máquina
sudo pro attach C1abcDEF...seuToken

# 3. Status
pro status --all
# Veja serviços ESM-Infra, ESM-Apps, Livepatch, USG, FIPS, etc.`}),e.jsx("h2",{children:"Habilitar serviços"}),e.jsx(a,{language:"bash",code:`# Já vêm ativos por padrão após 'attach':
#   esm-infra, esm-apps, livepatch

# Ativar manualmente
sudo pro enable livepatch
sudo pro enable usg

# Desativar
sudo pro disable usg

# Listar disponíveis
pro status

# Renovar contrato
sudo pro refresh`}),e.jsx("h2",{children:"Livepatch — patches no kernel sem reboot"}),e.jsx(a,{language:"bash",code:`# Status do canal
canonical-livepatch status --verbose

# Forçar verificação de novos patches
sudo canonical-livepatch refresh

# Ver patches já aplicados
canonical-livepatch status --verbose | grep -A2 patches

# Quais kernels são suportados
# → 4.15+ em LTS (Bionic, Focal, Jammy, Noble)
# → HWE kernels também
# → Não suporta kernels custom compilados manualmente`}),e.jsx(o,{type:"warning",title:"Livepatch não substitui reboot eternamente",children:"Patches críticos de microcódigo, mudanças no scheduler ou upgrade de versão major do kernel ainda exigem reboot. Livepatch é uma janela: dá 60-90 dias entre os reboots, não os elimina."}),e.jsx("h2",{children:"ESM (Expanded Security Maintenance)"}),e.jsx(a,{language:"bash",code:`# ESM-Infra cobre pacotes de 'main' (~2.300 pacotes)
# ESM-Apps cobre 'universe' (~23.000 pacotes)
# Após o suporte padrão de 5 anos, sem Pro o apt simplesmente
# não recebe mais updates — Pro estende isso para 10 anos.

# Ver origem de um pacote (esm vs main vs universe)
apt-cache policy nginx

# Saída esperada com ESM ativo:
#  500 https://esm.ubuntu.com/apps/ubuntu noble-apps-security/main`}),e.jsx("h2",{children:"USG — Ubuntu Security Guide (CIS / DISA STIG)"}),e.jsx(a,{language:"bash",code:`sudo pro enable usg
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
sudo usg fix --tailoring-file tailor.xml`}),e.jsx("h2",{children:"FIPS 140-3 (compliance governamental)"}),e.jsx(a,{language:"bash",code:`# Ativar módulos criptográficos certificados FIPS
sudo pro enable fips-updates    # versão atualizável
# OU (não exclusivos)
sudo pro enable fips            # versão "frozen" certificada

sudo reboot

# Verificar
cat /proc/sys/crypto/fips_enabled
# 1`}),e.jsx("h2",{children:"Casos práticos"}),e.jsx(a,{language:"bash",code:`# Auditar ESM ativo em fleet de servidores via Ansible
ansible all -m shell -a "pro status --format json | jq .services"

# Webhook quando livepatch falhar (systemd timer)
sudo systemctl status canonical-livepatchd
journalctl -u snap.canonical-livepatch.canonical-livepatchd

# Desanexar máquina (devolver licença)
sudo pro detach`}),e.jsx("h2",{children:"Attach em escala: token, cloud-init e Landscape"}),e.jsx("p",{children:"Anexar uma maquina a mao funciona para a primeira. Para a decima, o token entra no provisionamento e nunca em um comando digitado no historico do shell."}),e.jsx(a,{language:"bash",code:`# Attach nao interativo, lendo o token de arquivo
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
sudo pro detach --assume-yes`}),e.jsxs(o,{type:"danger",title:"Token no historico do shell e vazamento",children:[e.jsx("code",{children:"pro attach SEU_TOKEN"})," deixa o token no",e.jsx("code",{children:" ~/.bash_history"}),", nos logs de auditoria e em qualquer gravacao de terminal. Use ",e.jsx("code",{children:"--attach-config"})," com arquivo",e.jsx("code",{children:" 600 "}),"de dono root, ou o bloco do cloud-init."]}),e.jsx("h2",{children:"Auditar o que o Pro realmente esta cobrindo"}),e.jsx("p",{children:'A pergunta pratica nao e "esta ativo?", e "quantos pacotes deste servidor sairiam de suporte sem o Pro?". Isso da para medir.'}),e.jsx(a,{language:"bash",code:`# Panorama por pacote instalado
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
ls /var/lib/ubuntu-advantage/`}),e.jsx("h2",{children:"Quando o Pro nao resolve o seu problema"}),e.jsx("p",{children:"Ele estende suporte de seguranca. Ele nao atualiza versao de software, nao substitui backup e nao conserta configuracao ruim."}),e.jsx(a,{language:"bash",code:`# esm-apps corrige seguranca, mas mantem a versao antiga do pacote
apt policy nginx
# Se voce precisa da versao nova, o caminho e PPA, snap, container ou upgrade de release

# Livepatch cobre so o kernel, e so alguns CVEs
canonical-livepatch status --verbose

# Reboot ainda e necessario quando o kernel muda de verdade
ls /var/run/reboot-required 2>/dev/null && cat /var/run/reboot-required.pkgs

# Conferir o que o unattended-upgrades ja aplica sem Pro nenhum
grep -r "Allowed-Origins" -A6 /etc/apt/apt.conf.d/50unattended-upgrades`}),e.jsx("h2",{children:"Armadilhas comuns"}),e.jsxs(o,{type:"danger",title:"Container herda token do host",children:["Containers LXD/Docker copiam ",e.jsx("code",{children:"/etc/ubuntu-advantage/"}),"do host por padrão e contam como máquina separada — estoura o limite de 5. Solução: ",e.jsx("code",{children:"pro detach"}),' dentro do container ou use imagens "minimal" sem ubuntu-advantage-tools.']}),e.jsxs(o,{type:"warning",title:"USG fix em produção sem snapshot",children:[e.jsx("code",{children:"usg fix cis_level2_server"})," aplica ~150 mudanças de config (sshd, sysctl, partições, auditd). Sempre snapshot antes — algumas regras quebram aplicações que dependem de SSH com senha, NFS v3 ou syscalls bloqueadas pelo seccomp."]}),e.jsxs(o,{type:"warning",title:"Real-time kernel não convive com NVIDIA proprietário",children:["O kernel RT (também via Pro) recompila módulos sem suporte ao driver proprietário NVIDIA. Use ",e.jsx("code",{children:"nouveau"})," ou kernel padrão se precisar de GPU."]}),e.jsx("h2",{children:"Cheat sheet"}),e.jsx(a,{language:"bash",code:`sudo pro attach TOKEN              # ativar
pro status --all                    # ver serviços
sudo pro enable livepatch|usg|fips
sudo pro disable SERVICO
sudo pro refresh                    # renovar
sudo pro detach                     # desanexar

canonical-livepatch status --verbose
sudo usg audit cis_level1_server
cat /proc/sys/crypto/fips_enabled

# Token gratuito: https://ubuntu.com/pro/dashboard`})]})}export{c as default};

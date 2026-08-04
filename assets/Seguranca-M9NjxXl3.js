import{j as a}from"./index-_kFPLDpE.js";import{P as o}from"./PageContainer-eafNNqkI.js";import{C as e}from"./CodeBlock-ByIkwE54.js";import{A as r}from"./AlertBox-NzOB7YP7.js";function d(){return a.jsxs(o,{title:"Segurança no Ubuntu",subtitle:"UFW, Fail2Ban, AppArmor, auditd e boas práticas — hardening completo para Ubuntu Desktop e Server.",difficulty:"avancado",timeToRead:"30 min",children:[a.jsxs(r,{type:"info",title:"Pré-requisitos",children:["Ubuntu Server ou Desktop exposto à internet. ",a.jsx("code",{children:"sudo"}),". Útil ter visto ",a.jsx("a",{href:"#/ssh",children:"SSH"}),", ",a.jsx("a",{href:"#/fail2ban",children:"Fail2Ban"}),", ",a.jsx("a",{href:"#/usuarios",children:"Usuários"}),"."]}),a.jsx("h2",{children:"Glossário rápido"}),a.jsxs("p",{children:[a.jsx("strong",{children:"Hardening"})," — processo de reduzir superfície de ataque do sistema."]}),a.jsxs("p",{children:[a.jsx("strong",{children:"UFW"})," — Uncomplicated Firewall — frontend amigável para o iptables/nftables. Padrão do Ubuntu."]}),a.jsxs("p",{children:[a.jsx("strong",{children:"AppArmor"})," — MAC baseado em paths. Habilitado por padrão."]}),a.jsxs("p",{children:[a.jsx("strong",{children:"unattended-upgrades"})," — aplica patches de segurança automaticamente."]}),a.jsxs("p",{children:[a.jsx("strong",{children:"Princípio do menor privilégio"})," — dar a cada usuário/serviço só o que ele precisa, nada mais."]}),a.jsx("p",{children:"O Ubuntu tem várias camadas de segurança ativadas por padrão — mais do que a maioria das distribuições Linux. Ainda assim, existem configurações importantes a fazer especialmente em servidores expostos à internet. Este guia cobre as principais ferramentas e práticas de segurança do Ubuntu."}),a.jsx("h2",{children:"1. UFW — Firewall Simplificado"}),a.jsxs("p",{children:["O ",a.jsx("strong",{children:"UFW"})," (Uncomplicated Firewall) já vem instalado no Ubuntu e é a interface mais simples para gerenciar o iptables/nftables."]}),a.jsx(e,{title:"Configuração completa do UFW",code:`# Verificar status
sudo ufw status verbose

# Configurar políticas padrão ANTES de habilitar:
sudo ufw default deny incoming    # Bloquear tudo que entra
sudo ufw default allow outgoing   # Permitir tudo que sai

# Adicionar regras essenciais
sudo ufw allow ssh                # Porta 22 (CRÍTICO: faça isso antes de habilitar!)
sudo ufw allow 80/tcp             # HTTP
sudo ufw allow 443/tcp            # HTTPS

# Habilitar o firewall
sudo ufw enable

# Outras regras úteis:
sudo ufw allow 3306/tcp           # MySQL (apenas se necessário!)
sudo ufw allow from 192.168.1.0/24  # Permitir rede local

# Limitar tentativas de conexão SSH (anti-brute-force básico)
sudo ufw limit ssh

# Ver regras numeradas
sudo ufw status numbered

# Remover regra por número
sudo ufw delete 3

# Remover regra por especificação
sudo ufw delete allow 80/tcp

# Ver log do UFW
sudo tail -f /var/log/ufw.log
sudo grep "UFW BLOCK" /var/log/ufw.log | tail -20

# Desabilitar temporariamente
sudo ufw disable`}),a.jsxs(r,{type:"danger",title:"Sempre adicione a regra SSH ANTES de habilitar o UFW",children:["Se você habilitar o UFW sem adicionar a regra ",a.jsx("code",{children:"sudo ufw allow ssh"})," primeiro, e estiver acessando via SSH, você perderá o acesso ao servidor imediatamente. Sem como desfazer remotamente — precisaria de acesso físico ao servidor."]}),a.jsx("h2",{children:"2. Fail2Ban — Proteção Contra Brute Force"}),a.jsxs("p",{children:["O ",a.jsx("strong",{children:"Fail2Ban"})," monitora logs do sistema e bane automaticamente IPs que fazem muitas tentativas de login falhas — essencial para servidores expostos à internet."]}),a.jsx(e,{title:"Instalar e configurar Fail2Ban",code:`# Instalar
sudo apt install fail2ban

# Copiar configuração padrão para customização:
sudo cp /etc/fail2ban/jail.conf /etc/fail2ban/jail.local

# Editar configuração
sudo nano /etc/fail2ban/jail.local

# Configurações importantes no jail.local:
[DEFAULT]
bantime  = 3600      # Banir por 1 hora (em segundos)
findtime = 600       # Janela de tempo para contar tentativas (10 min)
maxretry = 5         # Número de tentativas antes de banir

# Ativar proteção para SSH
[sshd]
enabled = true
port    = ssh
filter  = sshd
backend = systemd
maxretry = 3          # Somente 3 tentativas no SSH
bantime  = 86400      # Banir por 24 horas

# Iniciar e habilitar o serviço:
sudo systemctl enable --now fail2ban

# Ver status e jails ativas:
sudo fail2ban-client status
sudo fail2ban-client status sshd

# Ver IPs banidos:
sudo fail2ban-client status sshd | grep "Banned IP"

# Desbanir um IP manualmente (ex: se você se baniu):
sudo fail2ban-client set sshd unbanip 192.168.1.100

# Ver log do fail2ban:
sudo tail -f /var/log/fail2ban.log`}),a.jsx("h2",{children:"3. AppArmor — Controle Mandatório de Acesso"}),a.jsxs("p",{children:["O ",a.jsx("strong",{children:"AppArmor"})," é um sistema MAC (Mandatory Access Control) que restringe o que programas podem acessar. Já vem ativo no Ubuntu por padrão."]}),a.jsx(e,{title:"Verificando e gerenciando AppArmor",code:`# Verificar status do AppArmor
sudo apparmor_status
# ou
aa-status

# Ver todos os perfis carregados
sudo aa-status | grep "profiles are loaded"

# Modos de perfil:
# enforce = perfil aplicado, ações bloqueadas e logadas
# complain = perfil de monitoramento apenas, sem bloquear

# Instalar ferramentas adicionais
sudo apt install apparmor-utils

# Ver perfis disponíveis
ls /etc/apparmor.d/

# Carregar um perfil
sudo apparmor_parser -r /etc/apparmor.d/usr.sbin.nginx

# Colocar perfil em modo de reclamação (para testar sem bloquear)
sudo aa-complain /usr/sbin/nginx

# Colocar em modo enforce (bloqueio real)
sudo aa-enforce /usr/sbin/nginx

# Ver logs do AppArmor
sudo grep apparmor /var/log/syslog | tail -20
sudo journalctl | grep "apparmor" | tail -20`}),a.jsx("h2",{children:"4. Atualizações de Segurança Automáticas"}),a.jsx(e,{title:"Configurar atualizações de segurança automáticas",code:`# O Ubuntu tem Unattended Upgrades para patches de segurança automáticos
sudo apt install unattended-upgrades

# Configurar
sudo dpkg-reconfigure -plow unattended-upgrades

# Arquivo de configuração principal:
sudo nano /etc/apt/apt.conf.d/50unattended-upgrades

# Configurações importantes:
# Unattended-Upgrade::Allowed-Origins {
#     "\${distro_id}:\${distro_codename}-security";  ← Somente segurança (padrão)
#     "\${distro_id}:\${distro_codename}-updates";   ← Adicionar para updates normais
# };
# Unattended-Upgrade::Automatic-Reboot "false";    ← false = não reiniciar automaticamente
# Unattended-Upgrade::Mail "admin@exemplo.com";    ← Notificação por email

# Testar manualmente (modo seco):
sudo unattended-upgrade --dry-run -d

# Ver o que foi atualizado automaticamente:
cat /var/log/unattended-upgrades/unattended-upgrades.log`}),a.jsx("h2",{children:"5. Hardening SSH"}),a.jsx(e,{title:"Protegendo o servidor SSH",code:`# Editar configuração do SSH:
sudo nano /etc/ssh/sshd_config

# Alterações recomendadas de segurança:

# 1. Trocar a porta padrão (22 → outra porta)
Port 2222     # Reduz ataques automatizados

# 2. Proibir login do root via SSH
PermitRootLogin no

# 3. Permitir apenas autenticação por chave
PasswordAuthentication no
PubkeyAuthentication yes

# 4. Limitar o número de tentativas de login
MaxAuthTries 3

# 5. Definir timeout para sessões inativas (segundos)
ClientAliveInterval 300
ClientAliveCountMax 2

# 6. Permitir apenas usuários específicos
AllowUsers joao deploy

# 7. Restringir versão do protocolo
Protocol 2

# Após editar, testar configuração:
sudo sshd -t   # Verificar sintaxe sem reiniciar

# Aplicar mudanças:
sudo systemctl restart ssh

# IMPORTANTE: Mantenha uma sessão SSH aberta durante o teste!
# Abra nova sessão para confirmar que consegue entrar antes de fechar a atual.`}),a.jsx("h2",{children:"6. GPG — Criptografia de Arquivos"}),a.jsx(e,{title:"Criptografando arquivos com GPG",code:`# Gerar par de chaves GPG
gpg --gen-key

# Listar chaves
gpg --list-keys
gpg --list-secret-keys

# Exportar chave pública
gpg --export --armor joao@exemplo.com > chave-publica.gpg

# Importar chave pública de alguém
gpg --import chave-publica-maria.gpg

# Criptografar arquivo para um destinatário
gpg --encrypt --recipient maria@exemplo.com arquivo.txt
# Resultado: arquivo.txt.gpg

# Criptografar com senha (sem precisar de par de chaves)
gpg --symmetric arquivo.txt

# Descriptografar
gpg --decrypt arquivo.txt.gpg > arquivo.txt

# Assinar um arquivo (sem criptografar)
gpg --sign arquivo.txt

# Verificar assinatura
gpg --verify arquivo.txt.gpg`}),a.jsx("h2",{children:"7. Verificar Integridade do Sistema"}),a.jsx(e,{title:"Monitorando mudanças no sistema",code:`# Instalar AIDE (Advanced Intrusion Detection Environment)
sudo apt install aide

# Inicializar banco de dados de referência
sudo aideinit

# Copiar banco de dados para uso:
sudo cp /var/lib/aide/aide.db.new /var/lib/aide/aide.db

# Verificar integridade contra a referência (executar regularmente)
sudo aide --check

# Ver logs de autenticação para atividade suspeita:
sudo grep "sudo" /var/log/auth.log | tail -30
sudo grep "Failed password" /var/log/auth.log | tail -20
sudo grep "Invalid user" /var/log/auth.log | tail -20

# Verificar conexões de rede abertas
sudo ss -tlnp

# Verificar serviços que iniciam no boot
systemctl list-unit-files --state=enabled

# Verificar arquivos com SUID (podem ser explorados)
sudo find / -type f -perm -4000 2>/dev/null`}),a.jsx("h2",{children:"8. Boas Práticas Gerais de Segurança"}),a.jsx(r,{type:"warning",title:"Checklist de segurança para servidores Ubuntu",children:a.jsxs("ul",{className:"mt-1 mb-0",children:[a.jsx("li",{children:"✓ UFW habilitado com regras mínimas necessárias"}),a.jsx("li",{children:"✓ Fail2Ban instalado e protegendo SSH"}),a.jsx("li",{children:"✓ Login root SSH desabilitado (PermitRootLogin no)"}),a.jsx("li",{children:"✓ Autenticação por chave SSH (PasswordAuthentication no)"}),a.jsx("li",{children:"✓ Atualizações de segurança automáticas habilitadas"}),a.jsx("li",{children:"✓ AppArmor ativo (vem por padrão no Ubuntu)"}),a.jsx("li",{children:"✓ Usuários sem senhas padrão ou fracas"}),a.jsx("li",{children:"✓ Revisão regular dos logs de autenticação"}),a.jsx("li",{children:"✓ Princípio do menor privilégio (sudo apenas quando necessário)"}),a.jsx("li",{children:"✓ Backups regulares e testados"})]})})]})}export{d as default};

import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function Fail2Ban() {
  return (
    <PageContainer
      title="Fail2Ban — Proteção contra Brute Force"
      subtitle="Configure o Fail2Ban para banir IPs que tentam ataques de força bruta no SSH, Nginx e outros serviços."
      difficulty="intermediario"
      timeToRead="18 min"
    >
      <p>
        O <strong>Fail2Ban</strong> monitora logs do sistema e bane automaticamente IPs
        que tentam muitas autenticações falhas — protegendo contra ataques de força bruta.
      </p>

      <h2>1. Instalação e Configuração Básica</h2>
      <AlertBox type="info">
        NUNCA edite <code>/etc/fail2ban/jail.conf</code>. Crie um arquivo em
        <code>/etc/fail2ban/jail.local</code> que sobrescreve as configurações padrão.
      </AlertBox>
      <CodeBlock title="Instalando e configurando o Fail2Ban" code={`# Instalar:
sudo apt install fail2ban

# Iniciar e habilitar:
sudo systemctl enable --now fail2ban

# Criar configuração personalizada (NÃO editar jail.conf):
sudo cp /etc/fail2ban/jail.conf /etc/fail2ban/jail.local
sudo nano /etc/fail2ban/jail.local

# Configurações globais importantes em [DEFAULT]:
[DEFAULT]
bantime  = 1h           # Duração do ban (10m, 1h, 1d, -1 = permanente)
findtime = 10m          # Janela de tempo para contar falhas
maxretry = 5            # Tentativas antes de banir
ignoreip = 127.0.0.1/8 192.168.1.0/24  # IPs que NUNCA serão banidos

# Backend de notificação:
destemail = admin@meusite.com
sender = fail2ban@meusite.com
mta = sendmail

# Reiniciar após mudanças:
sudo systemctl restart fail2ban`} />

      <h2>2. Configurando Jails</h2>
      <CodeBlock title="Proteção para SSH, Nginx e outros" code={`# No jail.local, configurar jails específicos:

# SSH — proteção padrão (geralmente já ativo):
[sshd]
enabled  = true
port     = ssh
filter   = sshd
logpath  = /var/log/auth.log
maxretry = 3
bantime  = 24h

# Para SSH em porta não padrão:
[sshd]
enabled  = true
port     = 2222
filter   = sshd
logpath  = /var/log/auth.log

# Nginx — proteção contra bots:
[nginx-http-auth]
enabled  = true
filter   = nginx-http-auth
logpath  = /var/log/nginx/error.log
maxretry = 3

[nginx-limit-req]
enabled  = true
filter   = nginx-limit-req
logpath  = /var/log/nginx/error.log
maxretry = 10

# WordPress — tentativas de login:
[wordpress]
enabled  = true
filter   = wordpress
logpath  = /var/log/nginx/access.log
maxretry = 5
bantime  = 2h`} />

      <h2>3. Gerenciando Bans</h2>
      <CodeBlock title="Monitorar e gerenciar IPs banidos" code={`# Ver status de todos os jails:
sudo fail2ban-client status

# Ver status de um jail específico:
sudo fail2ban-client status sshd

# Ver IPs banidos:
sudo fail2ban-client status sshd | grep "Banned IP"

# Desbanir um IP:
sudo fail2ban-client set sshd unbanip 192.168.1.100

# Banir IP manualmente:
sudo fail2ban-client set sshd banip 1.2.3.4

# Ver logs do Fail2Ban:
sudo journalctl -u fail2ban
sudo tail -f /var/log/fail2ban.log

# Testar se um filtro funciona:
sudo fail2ban-regex /var/log/auth.log /etc/fail2ban/filter.d/sshd.conf`} />
    </PageContainer>
  );
}

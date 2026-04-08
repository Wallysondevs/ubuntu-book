import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";

  export default function Fail2Ban() {
    return (
      <PageContainer
        title="Fail2Ban — Proteção Contra Ataques de Força Bruta"
        subtitle="Guia completo do Fail2Ban no Ubuntu: instalação, configuração de jails, proteção de SSH, Apache, Nginx, email e monitoramento de bans."
        difficulty="intermediario"
        timeToRead="30 min"
      >
        <p>
          O <strong>Fail2Ban</strong> monitora logs do sistema em busca de tentativas de login
          falhadas e bloqueia automaticamente os IPs ofensores usando o firewall (iptables/nftables).
          É essencial para qualquer servidor exposto à internet, especialmente para proteger SSH,
          servidores web e serviços de email contra ataques de força bruta.
        </p>

        <h2>Como o Fail2Ban Funciona</h2>
        <ul>
          <li><strong>Monitora logs</strong> — Lê arquivos de log em tempo real (auth.log, access.log, etc.)</li>
          <li><strong>Detecta padrões</strong> — Usa expressões regulares (filters) para identificar tentativas falhadas</li>
          <li><strong>Aplica ações</strong> — Quando um IP ultrapassa o limite de tentativas, executa uma ação (ban via iptables, envio de email, etc.)</li>
          <li><strong>Desbloqueia automaticamente</strong> — Após o tempo configurado, o IP é desbloqueado</li>
        </ul>

        <h2>1. Instalação e Configuração Inicial</h2>
        <CodeBlock
          title="Instalar e configurar o Fail2Ban"
          code={`# Instalar o Fail2Ban
  sudo apt update
  sudo apt install -y fail2ban

  # Verificar o status
  sudo systemctl status fail2ban
  sudo systemctl enable fail2ban

  # IMPORTANTE: Nunca edite jail.conf diretamente!
  # Crie jail.local (sobrescreve as configurações do jail.conf)
  sudo cp /etc/fail2ban/jail.conf /etc/fail2ban/jail.local

  # Configuração básica do jail.local
  sudo tee /etc/fail2ban/jail.local > /dev/null << 'EOF'
  [DEFAULT]
  # Tempo de banimento (em segundos). 3600 = 1 hora
  bantime = 3600

  # Janela de tempo para contar as tentativas (600s = 10 minutos)
  findtime = 600

  # Número máximo de tentativas antes do ban
  maxretry = 5

  # IPs que NUNCA serão banidos (sua rede local, seu IP fixo)
  ignoreip = 127.0.0.1/8 ::1 192.168.1.0/24

  # Ação padrão: banir via iptables e enviar email
  # action = %(action_mwl)s  # Ban + email com whois + log
  action = %(action_)s        # Apenas ban (sem email)

  # Backend para monitorar logs (systemd é recomendado no Ubuntu)
  backend = systemd

  # Email para receber notificações (se usar action com email)
  destemail = admin@seudominio.com
  sender = fail2ban@seudominio.com

  # Banimento incremental (ban aumenta a cada reincidência)
  bantime.increment = true
  bantime.factor = 2
  bantime.maxtime = 604800
  # 1º ban: 1h, 2º ban: 2h, 3º ban: 4h, ... máximo: 7 dias

  [sshd]
  enabled = true
  port = ssh
  logpath = %(sshd_log)s
  maxretry = 3
  bantime = 3600
  EOF

  # Reiniciar o Fail2Ban após mudanças
  sudo systemctl restart fail2ban`}
        />

        <AlertBox type="danger" title="Cuidado com o ignoreip">
          Sempre adicione seu próprio IP ou rede ao <code>ignoreip</code> para não se
          bloquear acidentalmente. Se você se bloquear de um servidor remoto e não tiver
          outro acesso, pode perder o acesso ao servidor.
        </AlertBox>

        <h2>2. Configurar Jails para Serviços</h2>
        <CodeBlock
          title="Proteger SSH, Nginx, Apache e outros serviços"
          code={`# Adicione estas seções ao /etc/fail2ban/jail.local

  # === SSH (o mais importante) ===
  # [sshd]
  # enabled = true
  # port = ssh
  # maxretry = 3
  # bantime = 3600
  # findtime = 600

  # SSH com porta customizada
  # [sshd]
  # enabled = true
  # port = 2222
  # maxretry = 3

  # === NGINX ===
  # Proteger contra tentativas de login em apps web
  cat >> /etc/fail2ban/jail.local << 'JAILS'

  [nginx-http-auth]
  enabled = true
  port = http,https
  logpath = /var/log/nginx/error.log
  maxretry = 5

  [nginx-limit-req]
  enabled = true
  port = http,https
  logpath = /var/log/nginx/error.log
  maxretry = 10

  [nginx-botsearch]
  enabled = true
  port = http,https
  logpath = /var/log/nginx/access.log
  maxretry = 2

  # === APACHE ===
  [apache-auth]
  enabled = true
  port = http,https
  logpath = /var/log/apache2/error.log
  maxretry = 5

  [apache-badbots]
  enabled = true
  port = http,https
  logpath = /var/log/apache2/access.log
  maxretry = 2

  [apache-overflows]
  enabled = true
  port = http,https
  logpath = /var/log/apache2/error.log
  maxretry = 2

  # === MySQL/MariaDB ===
  [mysqld-auth]
  enabled = true
  port = 3306
  logpath = /var/log/mysql/error.log
  maxretry = 5

  # === Postfix (email) ===
  [postfix]
  enabled = true
  port = smtp,465,submission
  logpath = /var/log/mail.log
  maxretry = 5

  # === Dovecot (IMAP/POP3) ===
  [dovecot]
  enabled = true
  port = pop3,pop3s,imap,imaps
  logpath = /var/log/mail.log
  maxretry = 5
  JAILS

  # Reiniciar para aplicar
  sudo systemctl restart fail2ban`}
        />

        <h2>3. Monitorar e Gerenciar Bans</h2>
        <CodeBlock
          title="Verificar status e gerenciar IPs banidos"
          code={`# Ver o status geral do Fail2Ban
  sudo fail2ban-client status
  # Saída:
  # Status
  # |- Number of jail:      3
  # \`- Jail list:   nginx-http-auth, postfix, sshd

  # Ver detalhes de um jail específico
  sudo fail2ban-client status sshd
  # Saída:
  # Status for the jail: sshd
  # |- Filter
  # |  |- Currently failed: 3
  # |  |- Total failed:     127
  # |  \`- File list:       /var/log/auth.log
  # \`- Actions
  #    |- Currently banned: 2
  #    |- Total banned:     45
  #    \`- Banned IP list:  185.234.219.44 103.99.0.118

  # Desbanir um IP específico
  sudo fail2ban-client set sshd unbanip 192.168.1.100

  # Banir um IP manualmente
  sudo fail2ban-client set sshd banip 10.0.0.50

  # Ver todos os IPs banidos de todos os jails
  sudo fail2ban-client banned

  # Verificar se um IP específico está banido
  sudo fail2ban-client get sshd banned | grep "192.168.1.100"

  # Ver o log do Fail2Ban
  sudo tail -f /var/log/fail2ban.log

  # Filtrar apenas bans e unbans no log
  sudo grep "Ban\|Unban" /var/log/fail2ban.log

  # Ver quantos bans aconteceram por dia
  sudo grep "Ban" /var/log/fail2ban.log | awk '{print $1}' | sort | uniq -c

  # Recarregar configuração sem reiniciar
  sudo fail2ban-client reload

  # Testar um filtro contra um log (debug)
  sudo fail2ban-regex /var/log/auth.log /etc/fail2ban/filter.d/sshd.conf`}
        />

        <h2>4. Criar Filtros Personalizados</h2>
        <CodeBlock
          title="Criar filtros para aplicações específicas"
          code={`# Exemplo: Proteger uma aplicação web com login
  # O filtro precisa de uma regex que identifique tentativas falhadas

  # Criar o filtro
  sudo tee /etc/fail2ban/filter.d/minha-app.conf > /dev/null << 'EOF'
  [Definition]
  # Regex para detectar login falhado
  # O <HOST> é substituído pelo IP automaticamente pelo Fail2Ban
  failregex = ^.*Login failed for .* from <HOST>.*$
              ^.*Authentication failure from <HOST>.*$
              ^.*Invalid credentials from <HOST>.*$

  # Ignorar estas linhas (não são falhas)
  ignoreregex = ^.*Login successful.*$
  EOF

  # Criar o jail
  cat >> /etc/fail2ban/jail.local << 'EOF'

  [minha-app]
  enabled = true
  port = http,https
  logpath = /var/log/minha-app/access.log
  filter = minha-app
  maxretry = 5
  bantime = 3600
  findtime = 600
  EOF

  # Testar o filtro antes de ativar
  sudo fail2ban-regex /var/log/minha-app/access.log /etc/fail2ban/filter.d/minha-app.conf

  # Se o teste mostrar matches, ativar:
  sudo systemctl restart fail2ban

  # Verificar
  sudo fail2ban-client status minha-app`}
        />

        <h2>5. Configurações Avançadas</h2>
        <CodeBlock
          title="Banimento permanente e notificações"
          code={`# Ban permanente para reincidentes (recidive jail)
  cat >> /etc/fail2ban/jail.local << 'EOF'

  [recidive]
  enabled = true
  logpath = /var/log/fail2ban.log
  banaction = %(banaction_allports)s
  bantime = 604800    # 7 dias
  findtime = 86400    # 24 horas
  maxretry = 3        # Se foi banido 3 vezes em 24h → ban de 7 dias
  EOF

  # Configurar notificação por email
  # 1. Instalar o envio de email
  sudo apt install -y msmtp msmtp-mta

  # 2. No jail.local, seção [DEFAULT]:
  # destemail = admin@seudominio.com
  # sender = fail2ban@seudominio.com
  # mta = mail
  # action = %(action_mwl)s

  # Ações disponíveis:
  # %(action_)s      → apenas ban (iptables)
  # %(action_mw)s    → ban + email com whois do IP
  # %(action_mwl)s   → ban + email com whois + linhas do log

  # Usar nftables ao invés de iptables (Ubuntu 22.04+)
  # No jail.local [DEFAULT]:
  # banaction = nftables-multiport
  # banaction_allports = nftables-allports

  sudo systemctl restart fail2ban`}
        />

        <h2>Troubleshooting</h2>
        <CodeBlock
          title="Problemas comuns com Fail2Ban"
          code={`# Fail2Ban não inicia
  sudo fail2ban-client -d    # Debug mode — mostra a configuração carregada
  # Procure erros de sintaxe no jail.local

  # Jail não está banindo ninguém
  # 1. Verificar se o jail está ativo:
  sudo fail2ban-client status nome-do-jail
  # 2. Testar o filtro:
  sudo fail2ban-regex /caminho/do/log /etc/fail2ban/filter.d/filtro.conf
  # 3. Verificar se o log existe e tem conteúdo:
  ls -la /var/log/auth.log

  # Me bani por acidente! Como desbanir?
  # Se tem outro acesso (console, outro IP):
  sudo fail2ban-client set sshd unbanip SEU_IP
  # Se não tem acesso:
  # Use o console do provedor de hosting (painel web)
  # Ou espere o bantime expirar

  # Ban não funciona (IP continua acessando)
  # Verificar se as regras do iptables estão sendo criadas:
  sudo iptables -L -n | grep fail2ban
  # Se não aparecer, o backend pode estar errado:
  # No jail.local: backend = systemd (ou auto)

  # Fail2Ban usa muita CPU
  # Causa: Logs muito grandes ou muitos filtros regex complexos
  # Solução: Rotacionar logs mais frequentemente
  # E usar backend = systemd ao invés de polling

  # Verificar a versão do Fail2Ban
  fail2ban-client version`}
        />

        <AlertBox type="info" title="Fail2Ban + UFW">
          O Fail2Ban funciona com qualquer firewall (iptables, nftables, UFW). Se você usa
          UFW, o Fail2Ban adiciona regras automaticamente. As regras do Fail2Ban são
          temporárias e removidas quando o ban expira.
        </AlertBox>
      </PageContainer>
    );
  }
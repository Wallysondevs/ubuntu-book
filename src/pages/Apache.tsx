import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";

  export default function Apache() {
    return (
      <PageContainer
        title="Apache HTTP Server no Ubuntu"
        subtitle="Instalação, virtual hosts, HTTPS com Let's Encrypt, módulos, proxy reverso, .htaccess, segurança e performance do Apache."
        difficulty="intermediario"
        timeToRead="35 min"
      >
        <AlertBox type="info" title="Pré-requisitos">
          Ubuntu Server ou Desktop com acesso <code>sudo</code>. Porta 80 e 443 livres
          (pare nginx/lighttpd se já estiverem rodando). Útil ter visto <a href="#/systemd">systemd</a>.
        </AlertBox>

        <h2>Glossário rápido</h2>
        <p>
          <strong>Apache HTTP Server</strong> — servidor web com mais de 25 anos. No Ubuntu
          o pacote chama <code>apache2</code> e o serviço também.
        </p>
        <p>
          <strong>Virtual Host</strong> — configuração que permite servir vários sites no mesmo IP.
          Ficam em <code>/etc/apache2/sites-available/</code>.
        </p>
        <p>
          <strong>Módulo</strong> — extensão (<code>mod_rewrite</code>, <code>mod_ssl</code>, <code>mod_php</code>).
          Ative com <code>a2enmod</code>, desative com <code>a2dismod</code>.
        </p>
        <p>
          <strong>DocumentRoot</strong> — pasta raiz pública de um site. Padrão Ubuntu: <code>/var/www/html</code>.
        </p>

        <p>
          O <strong>Apache HTTP Server</strong> é o servidor web mais usado do mundo, servindo
          mais de 30% de todos os sites. É extremamente maduro, flexível e bem documentado.
          Suporta virtual hosts, módulos dinâmicos, .htaccess, rewrite rules e integração nativa
          com PHP via mod_php ou PHP-FPM.
        </p>

        <h2>1. Instalação e Primeiros Passos</h2>
        <CodeBlock
          title="Instalar e configurar o Apache"
          code={`# Instalar o Apache
  sudo apt update
  sudo apt install -y apache2

  # Verificar status
  sudo systemctl status apache2
  sudo systemctl enable apache2

  # Acessar o servidor
  # Abra o navegador em http://localhost
  # Deve aparecer a página padrão do Apache

  # Verificar a versão
  apache2 -v
  # Saída: Server version: Apache/2.4.58 (Ubuntu)

  # Comandos de controle
  sudo systemctl start apache2
  sudo systemctl stop apache2
  sudo systemctl restart apache2    # Para e reinicia (interrompe conexões)
  sudo systemctl reload apache2     # Recarrega config sem parar

  # Verificar configuração (antes de reiniciar)
  sudo apache2ctl configtest
  # Saída: Syntax OK

  # Estrutura de diretórios do Apache no Ubuntu:
  # /etc/apache2/                   → Configurações
  # /etc/apache2/apache2.conf       → Config principal
  # /etc/apache2/sites-available/   → Virtual hosts disponíveis
  # /etc/apache2/sites-enabled/     → Virtual hosts ativos (links simbólicos)
  # /etc/apache2/mods-available/    → Módulos disponíveis
  # /etc/apache2/mods-enabled/      → Módulos ativos
  # /var/www/html/                  → Raiz padrão dos arquivos web
  # /var/log/apache2/               → Logs (access.log, error.log)`}
        />

        <h2>2. Virtual Hosts</h2>
        <CodeBlock
          title="Configurar múltiplos sites no Apache"
          code={`# Criar diretório para o site
  sudo mkdir -p /var/www/meusite.com.br/public_html
  sudo chown -R www-data:www-data /var/www/meusite.com.br
  sudo chmod -R 755 /var/www/meusite.com.br

  # Criar uma página de teste
  echo '<h1>Meu Site Funcionando!</h1>' | sudo tee /var/www/meusite.com.br/public_html/index.html

  # Criar o virtual host
  sudo tee /etc/apache2/sites-available/meusite.com.br.conf > /dev/null << 'EOF'
  <VirtualHost *:80>
      ServerAdmin admin@meusite.com.br
      ServerName meusite.com.br
      ServerAlias www.meusite.com.br

      DocumentRoot /var/www/meusite.com.br/public_html

      <Directory /var/www/meusite.com.br/public_html>
          Options -Indexes +FollowSymLinks
          AllowOverride All
          Require all granted
      </Directory>

      ErrorLog \${APACHE_LOG_DIR}/meusite-error.log
      CustomLog \${APACHE_LOG_DIR}/meusite-access.log combined
  </VirtualHost>
  EOF

  # Ativar o site
  sudo a2ensite meusite.com.br.conf

  # Desativar o site padrão (opcional)
  sudo a2dissite 000-default.conf

  # Verificar e reiniciar
  sudo apache2ctl configtest
  sudo systemctl reload apache2`}
        />

        <h2>3. HTTPS com Let's Encrypt (Certbot)</h2>
        <CodeBlock
          title="Configurar HTTPS gratuito com Let's Encrypt"
          code={`# Instalar o Certbot
  sudo apt install -y certbot python3-certbot-apache

  # Obter certificado e configurar automaticamente
  sudo certbot --apache -d meusite.com.br -d www.meusite.com.br
  # O Certbot:
  # 1. Verifica a propriedade do domínio
  # 2. Obtém o certificado SSL
  # 3. Configura o Apache automaticamente
  # 4. Cria redirecionamento HTTP → HTTPS

  # Renovar certificados (automático via cron/timer)
  sudo certbot renew --dry-run   # Testar renovação
  sudo certbot renew             # Renovar de fato

  # Verificar o timer de renovação automática
  sudo systemctl status certbot.timer

  # Verificar certificados instalados
  sudo certbot certificates

  # Revogar um certificado
  sudo certbot revoke --cert-path /etc/letsencrypt/live/meusite.com.br/fullchain.pem`}
        />

        <h2>4. Módulos Essenciais</h2>
        <CodeBlock
          title="Habilitar e configurar módulos do Apache"
          code={`# Listar módulos carregados
  apache2ctl -M

  # Habilitar módulos comuns
  sudo a2enmod rewrite      # URL rewriting (essencial para WordPress, Laravel)
  sudo a2enmod ssl          # HTTPS
  sudo a2enmod headers      # Manipular headers HTTP
  sudo a2enmod expires      # Cache de arquivos estáticos
  sudo a2enmod deflate      # Compressão gzip
  sudo a2enmod proxy        # Proxy reverso
  sudo a2enmod proxy_http   # Proxy HTTP
  sudo a2enmod proxy_wstunnel  # WebSocket proxy

  # Desabilitar módulo
  sudo a2dismod status      # Desabilitar mod_status

  # Após ativar/desativar módulos:
  sudo systemctl restart apache2

  # Habilitar PHP com Apache
  sudo apt install -y php libapache2-mod-php php-mysql php-mbstring php-xml
  sudo a2enmod php8.3
  sudo systemctl restart apache2

  # Ou usar PHP-FPM (recomendado para performance)
  sudo apt install -y php-fpm
  sudo a2enmod proxy_fcgi setenvif
  sudo a2enconf php8.3-fpm
  sudo systemctl restart apache2`}
        />

        <h2>5. Proxy Reverso</h2>
        <CodeBlock
          title="Configurar Apache como proxy reverso"
          code={`# Habilitar módulos de proxy
  sudo a2enmod proxy proxy_http proxy_wstunnel headers

  # Proxy reverso para aplicação Node.js (porta 3000)
  sudo tee /etc/apache2/sites-available/app.conf > /dev/null << 'EOF'
  <VirtualHost *:80>
      ServerName app.meusite.com.br

      ProxyPreserveHost On
      ProxyPass / http://127.0.0.1:3000/
      ProxyPassReverse / http://127.0.0.1:3000/

      # WebSocket support
      RewriteEngine On
      RewriteCond %{HTTP:Upgrade} websocket [NC]
      RewriteCond %{HTTP:Connection} upgrade [NC]
      RewriteRule ^/?(.*) "ws://127.0.0.1:3000/$1" [P,L]

      ErrorLog \${APACHE_LOG_DIR}/app-error.log
      CustomLog \${APACHE_LOG_DIR}/app-access.log combined
  </VirtualHost>
  EOF

  sudo a2ensite app.conf
  sudo systemctl reload apache2`}
        />

        <h2>6. Segurança e Performance</h2>
        <CodeBlock
          title="Hardening e otimização"
          code={`# Esconder versão do Apache
  sudo tee -a /etc/apache2/conf-available/security.conf > /dev/null << 'EOF'
  ServerTokens Prod
  ServerSignature Off
  EOF
  sudo a2enconf security
  sudo systemctl reload apache2

  # Headers de segurança
  sudo tee /etc/apache2/conf-available/security-headers.conf > /dev/null << 'EOF'
  Header always set X-Content-Type-Options "nosniff"
  Header always set X-Frame-Options "SAMEORIGIN"
  Header always set X-XSS-Protection "1; mode=block"
  Header always set Strict-Transport-Security "max-age=31536000; includeSubDomains"
  Header always set Referrer-Policy "strict-origin-when-cross-origin"
  EOF
  sudo a2enconf security-headers
  sudo a2enmod headers
  sudo systemctl reload apache2

  # Compressão (reduzir tamanho das respostas)
  sudo tee /etc/apache2/conf-available/compression.conf > /dev/null << 'EOF'
  <IfModule mod_deflate.c>
      AddOutputFilterByType DEFLATE text/html text/plain text/xml
      AddOutputFilterByType DEFLATE text/css text/javascript
      AddOutputFilterByType DEFLATE application/json application/javascript
      AddOutputFilterByType DEFLATE application/xml application/xhtml+xml
  </IfModule>
  EOF
  sudo a2enconf compression
  sudo a2enmod deflate
  sudo systemctl reload apache2`}
        />

        <h2>Troubleshooting</h2>
        <CodeBlock
          title="Problemas comuns com Apache"
          code={`# Erro 403 Forbidden
  # Causa: Permissões de arquivo ou configuração Directory
  # Solução:
  sudo chown -R www-data:www-data /var/www/meusite/
  sudo chmod -R 755 /var/www/meusite/
  # Verificar se o Directory tem "Require all granted"

  # Erro 500 Internal Server Error
  # Ver o log de erros:
  sudo tail -f /var/log/apache2/error.log

  # Porta 80 já em uso
  sudo ss -tlnp | grep :80
  # Se outro serviço estiver usando, pare-o ou mude a porta

  # .htaccess não funciona
  # Verificar se AllowOverride está em "All":
  # <Directory ...>
  #     AllowOverride All
  # </Directory>
  # E se mod_rewrite está ativo:
  sudo a2enmod rewrite
  sudo systemctl restart apache2

  # Verificar sintaxe antes de reiniciar (SEMPRE!)
  sudo apache2ctl configtest

  # Apache consumindo muita memória
  # Verificar e ajustar MPM (Multi-Processing Module):
  sudo nano /etc/apache2/mods-available/mpm_prefork.conf
  # Reduzir MaxRequestWorkers`}
        />

        <AlertBox type="info" title="Apache vs Nginx">
          O Apache é ideal quando você precisa de <code>.htaccess</code>, módulos dinâmicos
          ou compatibilidade com hospedagem compartilhada. O Nginx é geralmente mais rápido
          para servir arquivos estáticos e como proxy reverso. Muitas configurações usam
          Nginx como proxy na frente do Apache.
        </AlertBox>
      </PageContainer>
    );
  }
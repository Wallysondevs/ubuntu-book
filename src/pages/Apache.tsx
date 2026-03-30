import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function Apache() {
  return (
    <PageContainer
      title="Apache HTTP Server"
      subtitle="Configure o Apache no Ubuntu: Virtual Hosts, .htaccess, módulos e SSL."
      difficulty="intermediario"
      timeToRead="20 min"
    >
      <h2>1. Instalação e Controle</h2>
      <CodeBlock title="Instalando e controlando o Apache" code={`# Instalar Apache:
sudo apt update && sudo apt install apache2

# Controle do serviço:
sudo systemctl status apache2
sudo systemctl start apache2
sudo systemctl stop apache2
sudo systemctl reload apache2       # Recarregar sem interromper
sudo systemctl enable apache2       # Auto-iniciar no boot

# Testar configuração:
sudo apache2ctl configtest           # Verificar syntax
sudo apachectl -t                    # Equivalente

# Abrir firewall:
sudo ufw allow 'Apache Full'

# Acessar: http://SEU-IP
# Página padrão: /var/www/html/index.html`} />

      <h2>2. Virtual Hosts</h2>
      <CodeBlock title="Configurar múltiplos sites no Apache" code={`# Criar diretório do site:
sudo mkdir -p /var/www/meusite.com/html
sudo chown -R \$USER:\$USER /var/www/meusite.com
echo "<h1>Meu Site Apache!</h1>" > /var/www/meusite.com/html/index.html

# Criar virtual host:
sudo nano /etc/apache2/sites-available/meusite.com.conf

<VirtualHost *:80>
    ServerName meusite.com
    ServerAlias www.meusite.com
    ServerAdmin admin@meusite.com
    DocumentRoot /var/www/meusite.com/html

    ErrorLog \${APACHE_LOG_DIR}/meusite-error.log
    CustomLog \${APACHE_LOG_DIR}/meusite-access.log combined

    <Directory /var/www/meusite.com/html>
        Options -Indexes +FollowSymLinks
        AllowOverride All        # Permite .htaccess
        Require all granted
    </Directory>
</VirtualHost>

# Ativar site:
sudo a2ensite meusite.com.conf
sudo a2dissite 000-default.conf   # Desativar padrão

# Recarregar:
sudo systemctl reload apache2`} />

      <h2>3. Módulos Essenciais</h2>
      <CodeBlock title="Habilitando módulos do Apache" code={`# Ver módulos disponíveis:
sudo a2enmod -l

# Habilitar módulos:
sudo a2enmod rewrite      # mod_rewrite (URLs limpas, .htaccess)
sudo a2enmod ssl          # HTTPS
sudo a2enmod headers      # Headers HTTP
sudo a2enmod deflate      # Compressão gzip
sudo a2enmod expires      # Cache de navegador

# Desabilitar módulo:
sudo a2dismod modulo

# Após habilitar/desabilitar módulos:
sudo systemctl restart apache2

# SSL com Let's Encrypt:
sudo apt install certbot python3-certbot-apache
sudo certbot --apache -d meusite.com -d www.meusite.com`} />

      <h2>4. .htaccess</h2>
      <CodeBlock title="Configurações com .htaccess" code={`# .htaccess permite configuração por diretório
# (Requer: AllowOverride All no VirtualHost)

# Criar .htaccess:
nano /var/www/meusite.com/html/.htaccess

# Redirecionar www para sem-www:
RewriteEngine On
RewriteCond %{HTTP_HOST} ^www\.(.*)$ [NC]
RewriteRule ^(.*)$ http://%1/$1 [R=301,L]

# Redirecionar HTTP para HTTPS:
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# Negar acesso a arquivos específicos:
<Files "*.env">
    Require all denied
</Files>

# Proteger com senha:
AuthType Basic
AuthName "Área Restrita"
AuthUserFile /etc/apache2/.htpasswd
Require valid-user

# Criar arquivo de senha:
sudo htpasswd -c /etc/apache2/.htpasswd usuario`} />
    </PageContainer>
  );
}

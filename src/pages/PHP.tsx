import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function PHP() {
  return (
    <PageContainer
      title="PHP no Ubuntu"
      subtitle="Instale e configure PHP no Ubuntu com Apache e Nginx — LAMP e LEMP stack completos."
      difficulty="intermediario"
      timeToRead="18 min"
    >
      <h2>1. Instalando PHP</h2>
      <CodeBlock title="PHP com Apache (LAMP Stack)" code={`# LAMP = Linux + Apache + MySQL + PHP

# Instalar PHP e módulos comuns:
sudo apt update
sudo apt install php php-mysql php-common php-cli php-curl \
    php-gd php-xml php-mbstring php-zip php-json

# Para PHP com Apache (mod_php):
sudo apt install libapache2-mod-php

# Verificar versão:
php --version
php -m | grep mysql     # Verificar módulo MySQL

# Arquivo de info do PHP:
echo "<?php phpinfo(); ?>" | sudo tee /var/www/html/info.php
# Acesse: http://localhost/info.php
# IMPORTANTE: Remover após testar!
sudo rm /var/www/html/info.php`} />

      <h2>2. PHP com Nginx (LEMP Stack)</h2>
      <CodeBlock title="PHP-FPM com Nginx" code={`# LEMP = Linux + Nginx + MySQL + PHP

# Instalar PHP-FPM:
sudo apt install php-fpm

# Verificar versão do PHP-FPM:
ls /etc/php/

# Configurar Nginx para usar PHP-FPM:
sudo nano /etc/nginx/sites-available/meusite.com

server {
    listen 80;
    server_name meusite.com;
    root /var/www/meusite.com;
    index index.php index.html;

    location / {
        try_files \$uri \$uri/ /index.php?\$query_string;
    }

    location ~ \\.php\$ {
        include snippets/fastcgi-php.conf;
        fastcgi_pass unix:/var/run/php/php8.1-fpm.sock;
    }

    location ~ /\\.ht {
        deny all;
    }
}

sudo systemctl restart php8.1-fpm nginx`} />

      <h2>3. Gerenciando Versões com phpenv</h2>
      <CodeBlock title="Múltiplas versões de PHP" code={`# Via repositório ondrej/php (mais flexível):
sudo add-apt-repository ppa:ondrej/php
sudo apt update

# Instalar versões específicas:
sudo apt install php8.1 php8.1-fpm php8.1-mysql
sudo apt install php8.2 php8.2-fpm php8.2-mysql

# Alterar versão padrão do CLI:
sudo update-alternatives --config php

# Habilitar PHP específico no Apache:
sudo a2dismod php8.1
sudo a2enmod php8.2
sudo systemctl restart apache2

# Mudar PHP-FPM no Nginx: editar fastcgi_pass para nova versão

# Instalar Composer (gerenciador de dependências PHP):
curl -sS https://getcomposer.org/installer | php
sudo mv composer.phar /usr/local/bin/composer

# Usar Composer:
composer create-project laravel/laravel meu-projeto
composer install
composer require vendor/pacote`} />
    </PageContainer>
  );
}

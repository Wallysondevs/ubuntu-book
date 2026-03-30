import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function Nginx() {
  return (
    <PageContainer
      title="Nginx — Servidor Web"
      subtitle="Configure o Nginx no Ubuntu: servidor web, proxy reverso, SSL e virtual hosts."
      difficulty="intermediario"
      timeToRead="25 min"
    >
      <p>
        O <strong>Nginx</strong> é um dos servidores web mais populares do mundo,
        conhecido por sua performance, baixo consumo de memória e capacidade como
        proxy reverso. É a escolha preferida para hospedar sites modernos.
      </p>

      <h2>1. Instalação e Comandos Básicos</h2>
      <CodeBlock title="Instalando e controlando o Nginx" code={`# Instalar Nginx:
sudo apt update && sudo apt install nginx

# Controlar o serviço:
sudo systemctl status nginx
sudo systemctl start nginx
sudo systemctl stop nginx
sudo systemctl restart nginx          # Reinicia completamente
sudo systemctl reload nginx           # Recarrega config SEM interromper conexões
sudo systemctl enable nginx           # Iniciar automaticamente no boot

# Testar configuração (IMPORTANTE antes de reload):
sudo nginx -t
# "syntax is ok" e "test is successful" = tudo certo

# Ver versão e opções compiladas:
nginx -v
nginx -V

# Abrir firewall:
sudo ufw allow 'Nginx Full'    # HTTP e HTTPS
sudo ufw allow 'Nginx HTTP'    # Apenas HTTP
sudo ufw allow 'Nginx HTTPS'   # Apenas HTTPS`} />

      <h2>2. Estrutura de Arquivos do Nginx</h2>
      <CodeBlock title="Arquivos de configuração do Nginx" code={`# Arquivo principal:
/etc/nginx/nginx.conf

# Configurações de sites disponíveis:
/etc/nginx/sites-available/    # Sites configurados (ativos ou não)
/etc/nginx/sites-enabled/      # Symlinks dos sites ativos

# Fragmentos de configuração:
/etc/nginx/snippets/           # Trechos reutilizáveis

# Logs:
/var/log/nginx/access.log      # Log de acessos
/var/log/nginx/error.log       # Log de erros

# Raiz padrão dos sites:
/var/www/html/                 # Página padrão do Nginx

# Fluxo de configuração:
# 1. Criar arquivo em sites-available/
# 2. Criar symlink em sites-enabled/
# 3. Testar: sudo nginx -t
# 4. Recarregar: sudo systemctl reload nginx`} />

      <h2>3. Configurando um Virtual Host (Site)</h2>
      <CodeBlock title="Hosting de um site estático" code={`# Criar diretório do site:
sudo mkdir -p /var/www/meusite.com.br/html
sudo chown -R \$USER:\$USER /var/www/meusite.com.br/html
echo "<h1>Meu Site Funcionando!</h1>" > /var/www/meusite.com.br/html/index.html

# Criar configuração do virtual host:
sudo nano /etc/nginx/sites-available/meusite.com.br

# Conteúdo do arquivo:
server {
    listen 80;
    listen [::]:80;
    server_name meusite.com.br www.meusite.com.br;
    root /var/www/meusite.com.br/html;
    index index.html index.htm;

    location / {
        try_files \$uri \$uri/ =404;
    }

    # Logs separados por site:
    access_log /var/log/nginx/meusite-access.log;
    error_log /var/log/nginx/meusite-error.log;
}

# Ativar o site:
sudo ln -s /etc/nginx/sites-available/meusite.com.br /etc/nginx/sites-enabled/

# Desativar o site padrão (opcional):
sudo rm /etc/nginx/sites-enabled/default

# Testar e recarregar:
sudo nginx -t && sudo systemctl reload nginx`} />

      <h2>4. Proxy Reverso com Nginx</h2>
      <CodeBlock title="Nginx como proxy reverso para Node.js/Python" code={`# Configuração de proxy reverso:
sudo nano /etc/nginx/sites-available/meuapp

server {
    listen 80;
    server_name meuapp.com;

    location / {
        proxy_pass http://localhost:3000;     # Sua aplicação na porta 3000
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
        proxy_cache_bypass \$http_upgrade;
    }

    # Servir arquivos estáticos diretamente:
    location /static/ {
        root /var/www/meuapp;
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}`} />

      <h2>5. HTTPS com Let's Encrypt</h2>
      <CodeBlock title="SSL gratuito com Certbot" code={`# Instalar Certbot:
sudo apt install certbot python3-certbot-nginx

# Obter certificado SSL e configurar automaticamente:
sudo certbot --nginx -d meusite.com.br -d www.meusite.com.br

# Apenas obter o certificado (sem configurar nginx):
sudo certbot certonly --nginx -d meusite.com.br

# Renovação automática (já configurada pelo certbot):
sudo systemctl status certbot.timer    # Verificar timer de renovação

# Testar renovação:
sudo certbot renew --dry-run

# Ver certificados:
sudo certbot certificates`} />
    </PageContainer>
  );
}

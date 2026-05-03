import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";

  export default function Nginx() {
    return (
      <PageContainer
        title="Nginx — Servidor Web e Proxy Reverso"
        subtitle="Guia completo do Nginx no Ubuntu: instalar, configurar virtual hosts, SSL/TLS, proxy reverso, load balancing, cache e otimização."
        difficulty="intermediario"
        timeToRead="35 min"
      >
        <AlertBox type="info" title="Pré-requisitos">
          Ubuntu Server/Desktop, <code>sudo</code>, portas 80/443 livres. Apache parado se já
          rodando na 80 (<code>sudo systemctl stop apache2</code>).
        </AlertBox>

        <h2>Glossário rápido</h2>
        <p>
          <strong>Nginx</strong> — servidor web event-driven, criado para resolver o "C10K problem"
          (10 mil conexões simultâneas). Hoje serve mais de 33% dos sites top-1M.
        </p>
        <p>
          <strong>Server block</strong> — equivalente Nginx do "virtual host" do Apache.
          Ficam em <code>/etc/nginx/sites-available/</code>.
        </p>
        <p>
          <strong>Upstream</strong> — grupo de servidores backend para load balancing.
        </p>
        <p>
          <strong>Proxy reverso</strong> — Nginx recebe a requisição e repassa para um app server
          (Node, PHP-FPM, Python WSGI). Padrão moderno de produção.
        </p>

        <p>
          O <strong>Nginx</strong> (pronuncia-se "engine-x") é o servidor web mais popular
          do mundo, usado por sites como Netflix, Airbnb e WordPress.com. Além de servir
          arquivos estáticos, funciona como proxy reverso, load balancer e terminador SSL.
        </p>

        <h2>1. Instalação e Estrutura</h2>
        <CodeBlock
          title="Instalar e entender a estrutura do Nginx"
          code={`# Instalar Nginx
  sudo apt install -y nginx

  # Verificar e iniciar
  sudo systemctl start nginx
  sudo systemctl enable nginx
  sudo systemctl status nginx
  nginx -v    # Versão

  # Testar
  curl http://localhost
  # Deve mostrar a página padrão "Welcome to nginx!"

  # Estrutura de diretórios:
  # /etc/nginx/nginx.conf            → Configuração principal
  # /etc/nginx/sites-available/      → Configs de sites disponíveis
  # /etc/nginx/sites-enabled/        → Links para sites ativos
  # /etc/nginx/conf.d/               → Configs adicionais
  # /var/www/html/                   → DocumentRoot padrão
  # /var/log/nginx/access.log        → Log de acessos
  # /var/log/nginx/error.log         → Log de erros

  # Testar configuração (SEMPRE antes de reiniciar!)
  sudo nginx -t

  # Recarregar sem downtime
  sudo nginx -s reload
  # Ou: sudo systemctl reload nginx`}
        />

        <h2>2. Virtual Hosts (Server Blocks)</h2>
        <CodeBlock
          title="Configurar múltiplos sites"
          code={`# Criar diretório do site
  sudo mkdir -p /var/www/meusite.com/html
  sudo chown -R $USER:$USER /var/www/meusite.com
  echo "<h1>Meu Site</h1>" > /var/www/meusite.com/html/index.html

  # Criar configuração do site
  sudo tee /etc/nginx/sites-available/meusite.com > /dev/null << 'EOF'
  server {
      listen 80;
      listen [::]:80;
      server_name meusite.com www.meusite.com;
      root /var/www/meusite.com/html;
      index index.html index.htm;

      # Logs separados por site
      access_log /var/log/nginx/meusite.com.access.log;
      error_log /var/log/nginx/meusite.com.error.log;

      location / {
          try_files $uri $uri/ =404;
      }

      # Páginas de erro customizadas
      error_page 404 /404.html;
      error_page 500 502 503 504 /50x.html;
  }
  EOF

  # Ativar o site (criar link simbólico)
  sudo ln -s /etc/nginx/sites-available/meusite.com /etc/nginx/sites-enabled/

  # Remover site padrão (opcional)
  sudo rm /etc/nginx/sites-enabled/default

  # Testar e recarregar
  sudo nginx -t && sudo nginx -s reload`}
        />

        <h2>3. SSL/TLS com Let's Encrypt</h2>
        <CodeBlock
          title="Configurar HTTPS gratuito"
          code={`# Instalar Certbot (Let's Encrypt)
  sudo apt install -y certbot python3-certbot-nginx

  # Obter certificado automaticamente
  sudo certbot --nginx -d meusite.com -d www.meusite.com
  # Certbot modifica o Nginx automaticamente para HTTPS!

  # Renovar certificados (automático via timer)
  sudo certbot renew --dry-run    # Testar renovação

  # Verificar timer de renovação
  sudo systemctl list-timers | grep certbot

  # Configuração HTTPS manual (se não usar Certbot):
  server {
      listen 443 ssl http2;
      server_name meusite.com;

      ssl_certificate /etc/letsencrypt/live/meusite.com/fullchain.pem;
      ssl_certificate_key /etc/letsencrypt/live/meusite.com/privkey.pem;

      # Configurações SSL recomendadas
      ssl_protocols TLSv1.2 TLSv1.3;
      ssl_ciphers HIGH:!aNULL:!MD5;
      ssl_prefer_server_ciphers on;

      # HSTS
      add_header Strict-Transport-Security "max-age=63072000" always;
  }

  # Redirecionar HTTP para HTTPS
  server {
      listen 80;
      server_name meusite.com www.meusite.com;
      return 301 https://$host$request_uri;
  }`}
        />

        <h2>4. Proxy Reverso</h2>
        <CodeBlock
          title="Configurar Nginx como proxy reverso"
          code={`# Proxy reverso para aplicação Node.js/Python/etc.
  server {
      listen 80;
      server_name app.meusite.com;

      location / {
          proxy_pass http://127.0.0.1:3000;
          proxy_http_version 1.1;
          proxy_set_header Upgrade $http_upgrade;
          proxy_set_header Connection 'upgrade';
          proxy_set_header Host $host;
          proxy_set_header X-Real-IP $remote_addr;
          proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
          proxy_set_header X-Forwarded-Proto $scheme;
          proxy_cache_bypass $http_upgrade;
      }

      # Servir arquivos estáticos diretamente (mais rápido)
      location /static/ {
          alias /var/www/app/static/;
          expires 30d;
          add_header Cache-Control "public, immutable";
      }
  }

  # Load Balancing (distribuir entre múltiplos servidores)
  upstream backend {
      least_conn;    # Estratégia: menos conexões
      server 127.0.0.1:3001;
      server 127.0.0.1:3002;
      server 127.0.0.1:3003;
  }

  server {
      listen 80;
      server_name app.meusite.com;

      location / {
          proxy_pass http://backend;
      }
  }`}
        />

        <h2>5. Otimização e Cache</h2>
        <CodeBlock
          title="Otimizar performance do Nginx"
          code={`# Editar /etc/nginx/nginx.conf

  # Compressão Gzip
  gzip on;
  gzip_vary on;
  gzip_min_length 1000;
  gzip_proxied any;
  gzip_types text/plain text/css application/json application/javascript
             text/xml application/xml image/svg+xml;
  gzip_comp_level 6;

  # Cache de arquivos estáticos
  location ~* \.(jpg|jpeg|png|gif|ico|css|js|woff2)$ {
      expires 30d;
      add_header Cache-Control "public, immutable";
  }

  # Rate limiting (proteção contra DDoS/brute force)
  limit_req_zone $binary_remote_addr zone=api:10m rate=10r/s;
  server {
      location /api/ {
          limit_req zone=api burst=20 nodelay;
          proxy_pass http://backend;
      }
  }

  # Timeouts
  client_body_timeout 12;
  client_header_timeout 12;
  keepalive_timeout 15;
  send_timeout 10;

  # Upload máximo
  client_max_body_size 50M;`}
        />

        <h2>Troubleshooting</h2>
        <CodeBlock
          title="Problemas comuns com Nginx"
          code={`# Testar configuração antes de reiniciar
  sudo nginx -t
  # Se OK: "syntax is ok" + "test is successful"

  # Ver erros
  sudo tail -f /var/log/nginx/error.log
  sudo tail -f /var/log/nginx/access.log

  # "502 Bad Gateway"
  # A aplicação backend não está rodando
  # Verificar se a app está rodando na porta correta:
  sudo ss -tlnp | grep 3000
  # Reiniciar a aplicação

  # "403 Forbidden"
  # Verificar permissões:
  ls -la /var/www/meusite.com/
  sudo chown -R www-data:www-data /var/www/meusite.com/

  # "Address already in use"
  # Outra coisa usando a porta 80:
  sudo ss -tlnp | grep :80
  sudo fuser -k 80/tcp

  # Configuração não aplica após reload
  # Usar restart ao invés de reload:
  sudo systemctl restart nginx

  # Nginx não inicia após atualização
  sudo nginx -t    # Ver erro de sintaxe
  sudo journalctl -u nginx --no-pager`}
        />

        <AlertBox type="info" title="Nginx vs Apache">
          <strong>Nginx</strong>: melhor performance com arquivos estáticos e proxy reverso,
          usa menos memória, configuração declarativa. <strong>Apache</strong>: mais módulos
          disponíveis, .htaccess (configuração por diretório), mais fácil para hospedagem
          compartilhada. Para novos projetos, Nginx é geralmente a melhor escolha.
        </AlertBox>
      </PageContainer>
    );
  }
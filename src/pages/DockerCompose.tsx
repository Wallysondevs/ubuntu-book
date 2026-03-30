import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function DockerCompose() {
  return (
    <PageContainer
      title="Docker Compose — Multi-Container"
      subtitle="Orquestre múltiplos containers com Docker Compose: defina toda a stack em um arquivo YAML."
      difficulty="intermediario"
      timeToRead="20 min"
    >
      <p>
        O <strong>Docker Compose</strong> permite definir e gerenciar aplicações com
        múltiplos containers em um único arquivo <code>docker-compose.yml</code>.
        É perfeito para desenvolvimento local e ambientes de staging.
      </p>

      <h2>1. Instalação e Primeiro Compose</h2>
      <CodeBlock title="Docker Compose V2 (plugin integrado)" code={`# Docker Compose V2 já vem com o Docker Engine moderno:
docker compose version    # V2 usa "docker compose" (sem hífen)

# Instalar versão standalone (legado):
sudo apt install docker-compose    # V1 — "docker-compose" com hífen

# Criar o arquivo docker-compose.yml:
mkdir meu-projeto && cd meu-projeto
nano docker-compose.yml`} />

      <h2>2. Exemplos Completos de docker-compose.yml</h2>
      <CodeBlock title="Stack Web: Nginx + Node.js + PostgreSQL" code={`# docker-compose.yml — Stack completa:
services:
  db:
    image: postgres:15
    container_name: postgres-db
    environment:
      POSTGRES_DB: meuapp
      POSTGRES_USER: admin
      POSTGRES_PASSWORD: \${DB_PASSWORD}   # Vem do .env
    volumes:
      - postgres-data:/var/lib/postgresql/data
    networks:
      - backend

  api:
    build: ./api                         # Constrói Dockerfile em ./api/
    container_name: node-api
    ports:
      - "3000:3000"
    environment:
      DATABASE_URL: postgres://admin:\${DB_PASSWORD}@db:5432/meuapp
      NODE_ENV: production
    depends_on:
      - db                               # Inicia após o db
    networks:
      - backend
      - frontend
    restart: unless-stopped

  nginx:
    image: nginx:latest
    container_name: nginx-proxy
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx/nginx.conf:/etc/nginx/nginx.conf:ro
      - ./certbot/conf:/etc/letsencrypt:ro
    depends_on:
      - api
    networks:
      - frontend
    restart: unless-stopped

networks:
  frontend:
  backend:

volumes:
  postgres-data:`} />

      <CodeBlock title="Arquivo .env para variáveis sensíveis" code={`# Criar .env no mesmo diretório do docker-compose.yml:
cat > .env << 'EOF'
DB_PASSWORD=minha-senha-super-segura
SECRET_KEY=abc123xyz
NODE_ENV=production
EOF

# NUNCA commite o .env! Adicione ao .gitignore:
echo ".env" >> .gitignore`} />

      <h2>3. Comandos Docker Compose</h2>
      <CodeBlock title="Gerenciando serviços com Docker Compose" code={`# Iniciar todos os serviços (em background):
docker compose up -d

# Ver status dos serviços:
docker compose ps

# Ver logs de todos:
docker compose logs
docker compose logs -f          # Seguir em tempo real
docker compose logs api         # Logs de um serviço específico

# Parar e remover containers:
docker compose down
docker compose down -v          # Remove volumes também (CUIDADO!)
docker compose down --rmi all   # Remove imagens também

# Reconstruir imagens e subir:
docker compose up -d --build

# Executar comando em serviço específico:
docker compose exec api bash
docker compose exec db psql -U admin meuapp

# Escalar um serviço:
docker compose up -d --scale api=3   # 3 instâncias da API

# Reiniciar um serviço específico:
docker compose restart api`} />

      <h2>4. WordPress com Docker Compose</h2>
      <CodeBlock title="Stack WordPress completa" code={`services:
  wordpress:
    image: wordpress:latest
    ports:
      - "8080:80"
    environment:
      WORDPRESS_DB_HOST: mysql
      WORDPRESS_DB_USER: wp_user
      WORDPRESS_DB_PASSWORD: wp_password
      WORDPRESS_DB_NAME: wordpress
    volumes:
      - wordpress-data:/var/www/html
    depends_on:
      - mysql

  mysql:
    image: mysql:8.0
    environment:
      MYSQL_DATABASE: wordpress
      MYSQL_USER: wp_user
      MYSQL_PASSWORD: wp_password
      MYSQL_ROOT_PASSWORD: root_password
    volumes:
      - mysql-data:/var/lib/mysql

volumes:
  wordpress-data:
  mysql-data:

# Iniciar: docker compose up -d
# Acesso: http://localhost:8080`} />
    </PageContainer>
  );
}

import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";

  export default function DockerCompose() {
    return (
      <PageContainer
        title="Docker Compose — Orquestração de Containers"
        subtitle="Guia completo do Docker Compose no Ubuntu: definir serviços, redes, volumes, variáveis de ambiente, exemplos práticos e deploy."
        difficulty="intermediario"
        timeToRead="30 min"
      >
        <AlertBox type="info" title="Pré-requisitos">
          Ubuntu com Docker Engine instalado (<a href="#/docker">Docker</a>). Plugin compose: <code>sudo apt install docker-compose-plugin</code>.
        </AlertBox>

        <h2>Glossário rápido</h2>
        <p>
          <strong>Docker Compose</strong> — ferramenta para definir e rodar aplicações multi-container via YAML.
        </p>
        <p>
          <strong>docker-compose.yml</strong> — arquivo declarativo com services, networks, volumes.
        </p>
        <p>
          <strong>Service</strong> — definição de um container (imagem, env, portas, volumes, dependências).
        </p>
        <p>
          <strong>compose vs swarm</strong> — Compose é desenvolvimento local; Swarm/Kubernetes são produção em cluster.
        </p>

        <p>
          O <strong>Docker Compose</strong> permite definir e executar aplicações
          multi-container com um único arquivo YAML. Em vez de rodar vários comandos
          <code>docker run</code>, você descreve toda a infraestrutura (app, banco,
          cache, proxy) em um <code>docker-compose.yml</code> e sobe tudo com um comando.
        </p>

        <h2>1. Instalação</h2>
        <CodeBlock
          title="Instalar Docker Compose"
          code={`# Docker Compose V2 (plugin do Docker — recomendado)
  # Se o Docker já está instalado:
  sudo apt install -y docker-compose-plugin

  # Verificar
  docker compose version
  # Saída: Docker Compose version v2.27.0

  # Nota: V2 usa "docker compose" (sem hífen)
  # V1 antigo usava "docker-compose" (com hífen)
  # Criar alias para compatibilidade:
  echo 'alias docker-compose="docker compose"' >> ~/.bashrc`}
        />

        <h2>2. Primeiro docker-compose.yml</h2>
        <CodeBlock
          title="Criar aplicação multi-container"
          code={`# Exemplo: App Node.js + PostgreSQL + Redis
  cat > docker-compose.yml << 'EOF'
  services:
    app:
      build: .
      ports:
        - "3000:3000"
      environment:
        - DATABASE_URL=postgres://user:pass@db:5432/meuapp
        - REDIS_URL=redis://cache:6379
      depends_on:
        db:
          condition: service_healthy
        cache:
          condition: service_started
      volumes:
        - ./src:/app/src
      restart: unless-stopped

    db:
      image: postgres:16
      environment:
        POSTGRES_USER: user
        POSTGRES_PASSWORD: pass
        POSTGRES_DB: meuapp
      volumes:
        - postgres_data:/var/lib/postgresql/data
      healthcheck:
        test: ["CMD-SHELL", "pg_isready -U user -d meuapp"]
        interval: 5s
        timeout: 5s
        retries: 5

    cache:
      image: redis:7-alpine
      volumes:
        - redis_data:/data

  volumes:
    postgres_data:
    redis_data:
  EOF

  # Subir todos os serviços
  docker compose up -d
  # -d = detached (background)

  # Ver logs
  docker compose logs -f
  docker compose logs app     # Logs de um serviço

  # Parar tudo
  docker compose down

  # Parar e remover volumes (APAGA dados!)
  docker compose down -v`}
        />

        <h2>3. Comandos Essenciais</h2>
        <CodeBlock
          title="Gerenciar serviços com Docker Compose"
          code={`# Subir serviços
  docker compose up -d              # Todos em background
  docker compose up -d app          # Apenas o app
  docker compose up --build         # Rebuild antes de subir

  # Parar e iniciar
  docker compose stop               # Parar sem remover
  docker compose start              # Iniciar containers parados
  docker compose restart             # Reiniciar
  docker compose restart app         # Reiniciar apenas o app

  # Status
  docker compose ps                  # Listar containers
  docker compose top                 # Processos rodando

  # Logs
  docker compose logs                # Todos os logs
  docker compose logs -f app         # Seguir logs do app
  docker compose logs --tail=50 db   # Últimas 50 linhas

  # Executar comando em um container
  docker compose exec app bash       # Abrir shell no app
  docker compose exec db psql -U user -d meuapp  # Acessar PostgreSQL
  docker compose exec app npm test   # Rodar testes

  # Escalar serviços (múltiplas instâncias)
  docker compose up -d --scale app=3

  # Rebuild
  docker compose build               # Rebuild todos
  docker compose build app           # Rebuild apenas o app
  docker compose build --no-cache    # Rebuild sem cache

  # Remover
  docker compose down                # Parar e remover containers
  docker compose down -v             # + remover volumes
  docker compose down --rmi all      # + remover imagens
  docker compose rm -f               # Remover containers parados`}
        />

        <h2>4. Exemplos Práticos</h2>
        <CodeBlock
          title="Stacks comuns com Docker Compose"
          code={`# === WordPress + MySQL ===
  # docker-compose.yml
  services:
    wordpress:
      image: wordpress:latest
      ports:
        - "8080:80"
      environment:
        WORDPRESS_DB_HOST: db
        WORDPRESS_DB_USER: wp_user
        WORDPRESS_DB_PASSWORD: wp_pass
        WORDPRESS_DB_NAME: wordpress
      volumes:
        - wp_data:/var/www/html
      depends_on:
        - db

    db:
      image: mysql:8
      environment:
        MYSQL_DATABASE: wordpress
        MYSQL_USER: wp_user
        MYSQL_PASSWORD: wp_pass
        MYSQL_ROOT_PASSWORD: root_pass
      volumes:
        - db_data:/var/lib/mysql

  volumes:
    wp_data:
    db_data:

  # === Nginx + App + PostgreSQL ===
  services:
    nginx:
      image: nginx:alpine
      ports:
        - "80:80"
        - "443:443"
      volumes:
        - ./nginx.conf:/etc/nginx/conf.d/default.conf
      depends_on:
        - app

    app:
      build: .
      expose:
        - "3000"
      environment:
        DATABASE_URL: postgres://user:pass@db:5432/app
      depends_on:
        - db

    db:
      image: postgres:16-alpine
      environment:
        POSTGRES_USER: user
        POSTGRES_PASSWORD: pass
        POSTGRES_DB: app
      volumes:
        - pgdata:/var/lib/postgresql/data

  volumes:
    pgdata:`}
        />

        <h2>5. Variáveis de Ambiente e .env</h2>
        <CodeBlock
          title="Gerenciar configurações"
          code={`# Criar arquivo .env (lido automaticamente pelo Compose)
  cat > .env << 'EOF'
  POSTGRES_USER=meuusuario
  POSTGRES_PASSWORD=senha_segura
  POSTGRES_DB=meuapp
  APP_PORT=3000
  EOF

  # Usar no docker-compose.yml:
  services:
    db:
      image: postgres:16
      environment:
        POSTGRES_USER: \${POSTGRES_USER}
        POSTGRES_PASSWORD: \${POSTGRES_PASSWORD}
        POSTGRES_DB: \${POSTGRES_DB}
    app:
      ports:
        - "\${APP_PORT}:3000"

  # Usar arquivo .env específico
  docker compose --env-file .env.production up -d

  # Verificar variáveis resolvidas
  docker compose config   # Mostra o YAML com variáveis expandidas

  # IMPORTANTE: Adicionar .env ao .gitignore!
  echo ".env" >> .gitignore

  # Usar env_file no serviço (carrega todas as variáveis)
  services:
    app:
      env_file:
        - .env
        - .env.local`}
        />

        <h2>6. Redes e Volumes</h2>
        <CodeBlock
          title="Configurar redes e persistência"
          code={`# Redes customizadas
  services:
    app:
      networks:
        - frontend
        - backend
    db:
      networks:
        - backend

  networks:
    frontend:
      driver: bridge
    backend:
      driver: bridge
      internal: true    # Sem acesso à internet

  # Volumes nomeados vs bind mounts
  volumes:
    pgdata:           # Volume nomeado (gerenciado pelo Docker)

  services:
    app:
      volumes:
        - pgdata:/var/lib/postgresql/data    # Volume nomeado
        - ./src:/app/src                      # Bind mount (código local)
        - ./config.json:/app/config.json:ro   # Bind mount read-only

  # Listar volumes
  docker volume ls
  docker volume inspect pgdata

  # Limpar volumes não usados
  docker volume prune`}
        />

        <h2>Troubleshooting</h2>
        <CodeBlock
          title="Problemas comuns com Docker Compose"
          code={`# Container reinicia em loop
  docker compose logs app   # Ver erro

  # "port is already allocated"
  # Outra coisa está usando a porta
  sudo ss -tlnp | grep :3000
  # Mudar a porta no compose ou parar o outro serviço

  # "depends_on" não espera o banco ficar pronto
  # Usar healthcheck:
  db:
    healthcheck:
      test: ["CMD-SHELL", "pg_isready"]
      interval: 5s
      retries: 5
  app:
    depends_on:
      db:
        condition: service_healthy

  # Volume com permissão errada
  # Verificar UID/GID dentro do container:
  docker compose exec app id
  # Ajustar no Dockerfile: RUN chown -R node:node /app

  # Rebuild não pega mudanças
  docker compose build --no-cache app
  docker compose up -d --force-recreate app

  # Limpar tudo (nuclear option)
  docker compose down -v --rmi all
  docker system prune -af --volumes`}
        />

        <AlertBox type="info" title="Docker Compose vs Kubernetes">
          O Docker Compose é ideal para: desenvolvimento local, projetos pequenos/médios,
          servidores únicos. Para múltiplos servidores, auto-scaling e alta disponibilidade,
          use <strong>Kubernetes</strong> ou <strong>Docker Swarm</strong>.
        </AlertBox>
      </PageContainer>
    );
  }
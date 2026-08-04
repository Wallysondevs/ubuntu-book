import{j as e,T as a}from"./index-_kFPLDpE.js";import{P as n}from"./PageContainer-eafNNqkI.js";import{C as o}from"./CodeBlock-ByIkwE54.js";import{A as r}from"./AlertBox-NzOB7YP7.js";function c(){return e.jsxs(n,{title:"Docker — Containers no Ubuntu",subtitle:"Guia completo do Docker: instalar, imagens, containers, volumes, networking, Dockerfile, registry e boas práticas.",difficulty:"intermediario",timeToRead:"35 min",children:[e.jsxs(r,{type:"info",title:"Pré-requisitos",children:["Ubuntu 20.04+, kernel 4.x+ (qualquer versão moderna), 4 GB RAM mínimo. Acesso ",e.jsx("code",{children:"sudo"}),". Conhecer terminal e conceitos básicos de processos."]}),e.jsx("h2",{children:"Glossário rápido"}),e.jsxs("p",{children:[e.jsx("strong",{children:"Container"})," — processo isolado com seu próprio sistema de arquivos, rede e PID, mas compartilhando o kernel do host. Mais leve que VM."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Imagem"})," — template imutável a partir do qual containers são criados. Construída em camadas (cada instrução do Dockerfile = 1 camada)."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Dockerfile"})," — receita de texto que descreve como montar uma imagem."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Volume"})," — área de armazenamento gerenciada pelo Docker, persiste mesmo após o container ser removido."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Registry"})," — servidor de imagens. Docker Hub é o público padrão."]}),e.jsxs("p",{children:["O ",e.jsx("strong",{children:"Docker"})," permite empacotar aplicações com todas as suas dependências em ",e.jsx("strong",{children:"containers"})," — ambientes isolados, leves e portáveis. Um container Docker roda igual em qualquer lugar: no seu laptop, no servidor, na nuvem."]}),e.jsx("h2",{children:"1. Instalação"}),e.jsx(o,{title:"Instalar Docker no Ubuntu",code:`# Remover versões antigas
  sudo apt remove -y docker docker-engine docker.io containerd runc

  # Instalar dependências
  sudo apt update
  sudo apt install -y ca-certificates curl gnupg

  # Adicionar repositório oficial do Docker
  sudo install -m 0755 -d /etc/apt/keyrings
  curl -fsSL https://download.docker.com/linux/ubuntu/gpg |     sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
  sudo chmod a+r /etc/apt/keyrings/docker.gpg

  echo "deb [arch=$(dpkg --print-architecture)     signed-by=/etc/apt/keyrings/docker.gpg]     https://download.docker.com/linux/ubuntu     $(. /etc/os-release && echo $VERSION_CODENAME) stable" |     sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

  # Instalar Docker
  sudo apt update
  sudo apt install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin

  # Adicionar seu usuário ao grupo docker (evitar sudo)
  sudo usermod -aG docker $USER
  newgrp docker    # Aplicar sem logout

  # Verificar
  docker --version
  docker run hello-world`}),e.jsx("p",{children:"Primeiro container — e o erro nº 1 de todo iniciante no Docker:"}),e.jsx(a,{title:"wallyson@ubuntu: ~",lines:[{type:"cmd",text:"docker run hello-world"},{type:"err",text:"docker: permission denied while trying to connect to the Docker daemon socket"},{type:"err",text:"at unix:///var/run/docker.sock ... connect: permission denied"},{type:"warn",text:"-> seu usuario nao esta no grupo docker. Resolva com:"},{type:"cmd",text:"sudo usermod -aG docker $USER  &&  newgrp docker"},{type:"comment",text:"# agora funciona:"},{type:"cmd",text:"docker run hello-world"},{type:"out",text:"Unable to find image 'hello-world:latest' locally"},{type:"out",text:"latest: Pulling from library/hello-world"},{type:"ok",text:"Hello from Docker! Esta instalacao esta funcionando corretamente."}]}),e.jsx("h2",{children:"2. Imagens e Containers"}),e.jsx(o,{title:"Gerenciar imagens e containers",code:`# === IMAGENS ===
  # Baixar imagem
  docker pull ubuntu:24.04
  docker pull nginx:alpine
  docker pull postgres:16

  # Listar imagens
  docker images

  # Remover imagem
  docker rmi nginx:alpine
  docker image prune    # Remover imagens não usadas

  # === CONTAINERS ===
  # Rodar container
  docker run ubuntu:24.04 echo "Olá!"
  docker run -it ubuntu:24.04 bash    # Interativo com terminal
  docker run -d nginx:alpine          # Background (detached)
  docker run -d -p 8080:80 nginx:alpine  # Mapear porta

  # Opções importantes:
  # -d          = detached (background)
  # -it         = interativo + terminal
  # -p 8080:80  = porta host:container
  # --name web  = nome do container
  # --rm        = remover ao parar
  # -e VAR=val  = variável de ambiente
  # -v /host:/cont = montar volume
  # --restart unless-stopped = reiniciar automaticamente

  # Exemplo completo
  docker run -d     --name meu-nginx     -p 80:80     -v ./site:/usr/share/nginx/html:ro     --restart unless-stopped     nginx:alpine

  # Listar containers
  docker ps          # Rodando
  docker ps -a       # Todos (incluindo parados)

  # Gerenciar containers
  docker stop meu-nginx      # Parar
  docker start meu-nginx     # Iniciar
  docker restart meu-nginx   # Reiniciar
  docker rm meu-nginx        # Remover (precisa estar parado)
  docker rm -f meu-nginx     # Forçar remoção

  # Executar comando em container rodando
  docker exec -it meu-nginx bash
  docker exec meu-nginx cat /etc/nginx/nginx.conf

  # Logs
  docker logs meu-nginx
  docker logs -f meu-nginx    # Follow (tempo real)`}),e.jsx("h2",{children:"3. Dockerfile"}),e.jsx(o,{title:"Criar imagens customizadas",code:`# Dockerfile — receita para criar imagem

  # Exemplo: App Node.js
  cat > Dockerfile << 'EOF'
  FROM node:20-alpine

  WORKDIR /app

  COPY package*.json ./
  RUN npm ci --only=production

  COPY . .

  EXPOSE 3000

  USER node

  CMD ["node", "server.js"]
  EOF

  # Build da imagem
  docker build -t meu-app:1.0 .
  docker build -t meu-app:latest .

  # Multi-stage build (imagem menor)
  cat > Dockerfile << 'EOF'
  # Stage 1: Build
  FROM node:20-alpine AS builder
  WORKDIR /app
  COPY package*.json ./
  RUN npm ci
  COPY . .
  RUN npm run build

  # Stage 2: Produção
  FROM node:20-alpine
  WORKDIR /app
  COPY --from=builder /app/dist ./dist
  COPY --from=builder /app/node_modules ./node_modules
  EXPOSE 3000
  USER node
  CMD ["node", "dist/server.js"]
  EOF

  docker build -t meu-app:prod .

  # .dockerignore (não copiar para o container)
  cat > .dockerignore << 'EOF'
  node_modules
  .git
  .env
  *.md
  Dockerfile
  docker-compose.yml
  EOF`}),e.jsx("h2",{children:"4. Volumes e Persistência"}),e.jsx(o,{title:"Persistir dados com volumes",code:`# Containers são efêmeros — dados são perdidos ao remover!
  # Use volumes para persistir:

  # Volume nomeado (gerenciado pelo Docker)
  docker volume create meus-dados
  docker run -d -v meus-dados:/var/lib/postgresql/data postgres:16

  # Bind mount (diretório do host)
  docker run -d -v /home/user/site:/usr/share/nginx/html nginx

  # Listar volumes
  docker volume ls

  # Inspecionar volume
  docker volume inspect meus-dados

  # Remover volume
  docker volume rm meus-dados
  docker volume prune    # Remover volumes não usados

  # Backup de volume
  docker run --rm -v meus-dados:/data -v $(pwd):/backup     ubuntu tar czf /backup/dados-backup.tar.gz /data`}),e.jsx("h2",{children:"5. Networking"}),e.jsx(o,{title:"Redes Docker",code:`# Listar redes
  docker network ls

  # Criar rede
  docker network create minha-rede

  # Conectar containers à mesma rede
  docker run -d --name app --network minha-rede meu-app
  docker run -d --name db --network minha-rede postgres:16
  # Dentro da rede, containers se comunicam pelo nome:
  # app pode acessar db via: postgres://db:5432

  # Inspecionar rede
  docker network inspect minha-rede

  # Remover rede
  docker network rm minha-rede`}),e.jsx("h2",{children:"6. Limpeza e Manutenção"}),e.jsx(o,{title:"Liberar espaço e manter o Docker limpo",code:`# Ver uso de disco
  docker system df

  # Limpeza geral (containers parados, imagens não usadas, etc.)
  docker system prune
  docker system prune -a    # Incluindo imagens não usadas
  docker system prune -a --volumes  # TUDO (cuidado!)

  # Limpar individualmente
  docker container prune    # Containers parados
  docker image prune -a     # Imagens não usadas
  docker volume prune       # Volumes não usados
  docker network prune      # Redes não usadas`}),e.jsx("h2",{children:"Troubleshooting"}),e.jsx(o,{title:"Problemas comuns com Docker",code:`# "permission denied" ao usar docker
  # Adicionar ao grupo docker:
  sudo usermod -aG docker $USER
  # Fazer logout/login ou:
  newgrp docker

  # Container reinicia em loop
  docker logs nome-container    # Ver erro

  # Porta já em uso
  sudo ss -tlnp | grep :80
  # Mudar a porta: -p 8080:80

  # Disco cheio
  docker system df              # Ver uso
  docker system prune -a        # Limpar

  # Container não consegue acessar a internet
  # Verificar DNS:
  docker run --rm alpine ping -c 1 google.com
  # Se falhar, configurar DNS:
  echo '{"dns": ["8.8.8.8", "1.1.1.1"]}' | sudo tee /etc/docker/daemon.json
  sudo systemctl restart docker

  # Imagem não encontrada
  docker pull nome-da-imagem:tag
  # Verificar no Docker Hub: hub.docker.com`}),e.jsx(r,{type:"info",title:"Docker vs Máquina Virtual",children:"Containers Docker são mais leves e rápidos que VMs — compartilham o kernel do host e iniciam em segundos. Use Docker para aplicações. Use VMs quando precisar de um sistema operacional completamente diferente ou isolamento total de hardware."})]})}export{c as default};

import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function Docker() {
  return (
    <PageContainer
      title="Docker — Containers no Ubuntu"
      subtitle="Guia completo do Docker: instalação, imagens, containers, volumes, redes e boas práticas."
      difficulty="intermediario"
      timeToRead="30 min"
    >
      <p>
        <strong>Docker</strong> permite empacotar aplicações e suas dependências em
        containers isolados, garantindo que o app funcione da mesma forma em qualquer
        ambiente — desenvolvimento, staging ou produção.
      </p>

      <h2>1. Instalação do Docker no Ubuntu</h2>
      <CodeBlock title="Instalação oficial do Docker Engine" code={`# Remover versões antigas:
sudo apt remove docker docker-engine docker.io containerd runc

# Instalar dependências:
sudo apt update
sudo apt install ca-certificates curl gnupg

# Adicionar chave GPG oficial do Docker:
sudo install -m 0755 -d /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | \
    sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
sudo chmod a+r /etc/apt/keyrings/docker.gpg

# Adicionar repositório:
echo "deb [arch=\$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] \
    https://download.docker.com/linux/ubuntu \
    \$(. /etc/os-release && echo "\$VERSION_CODENAME") stable" | \
    sudo tee /etc/apt/sources.list.d/docker.list

# Instalar Docker:
sudo apt update
sudo apt install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin

# Adicionar seu usuário ao grupo docker (sem sudo):
sudo usermod -aG docker \$USER
newgrp docker            # Aplicar sem logout

# Verificar instalação:
docker --version
docker run hello-world`} />

      <h2>2. Comandos Essenciais — Containers</h2>
      <CodeBlock title="Gerenciando containers Docker" code={`# Ver containers em execução:
docker ps
docker ps -a              # Todos (incluindo parados)
docker ps -q              # Apenas IDs

# Executar um container:
docker run nginx                    # Executa e mostra output
docker run -d nginx                 # Detached (background)
docker run -d -p 8080:80 nginx      # Mapear porta host:container
docker run -d -p 8080:80 --name meu-nginx nginx   # Com nome

# Acessar terminal de um container em execução:
docker exec -it nome-container bash
docker exec -it nome-container sh   # Se não tiver bash

# Parar e remover containers:
docker stop meu-nginx
docker start meu-nginx
docker restart meu-nginx
docker rm meu-nginx                 # Remover container parado
docker rm -f meu-nginx              # Forçar remoção (mesmo rodando)

# Ver logs do container:
docker logs meu-nginx
docker logs -f meu-nginx            # Seguir logs em tempo real
docker logs --tail 50 meu-nginx     # Últimas 50 linhas

# Inspecionar um container:
docker inspect meu-nginx
docker stats                        # Uso de recursos em tempo real
docker top meu-nginx                # Processos dentro do container`} />

      <h2>3. Imagens Docker</h2>
      <CodeBlock title="Gerenciando imagens" code={`# Buscar imagens no Docker Hub:
docker search nginx
docker search ubuntu

# Baixar imagem:
docker pull nginx
docker pull nginx:1.25              # Versão específica
docker pull ubuntu:22.04

# Listar imagens locais:
docker images
docker image ls

# Remover imagem:
docker rmi nginx
docker rmi nginx:1.25

# Limpeza geral (containers parados, imagens não usadas):
docker system prune                 # Remove tudo não usado
docker system prune -a              # Remove TUDO incluindo imagens não usadas
docker image prune                  # Apenas imagens dangling

# Ver uso de disco:
docker system df`} />

      <h2>4. Volumes — Dados Persistentes</h2>
      <AlertBox type="info">
        Dados dentro de containers são perdidos ao removê-lo. Use volumes para persistência.
      </AlertBox>
      <CodeBlock title="Volumes para dados persistentes" code={`# Bind mount — pasta do host no container:
docker run -d -v /host/pasta:/container/pasta nginx
docker run -d -v /home/user/dados:/app/dados myapp

# Volume gerenciado pelo Docker (recomendado):
docker volume create meu-volume
docker run -d -v meu-volume:/app/dados myapp

# Listar volumes:
docker volume ls

# Inspecionar volume:
docker volume inspect meu-volume

# Remover volume:
docker volume rm meu-volume
docker volume prune               # Remover todos os volumes não usados

# Backup de volume:
docker run --rm -v meu-volume:/dados -v \$(pwd):/backup ubuntu \
    tar czf /backup/backup-\$(date +%Y%m%d).tar.gz -C /dados .`} />

      <h2>5. Criando Imagens com Dockerfile</h2>
      <CodeBlock title="Criando sua própria imagem Docker" code={`# Criar Dockerfile:
cat > Dockerfile << 'EOF'
# Imagem base
FROM ubuntu:22.04

# Metadados
LABEL maintainer="voce@email.com"

# Evitar prompts interativos durante o build
ENV DEBIAN_FRONTEND=noninteractive

# Atualizar e instalar dependências
RUN apt-get update && apt-get install -y \
    nginx \
    curl \
    && rm -rf /var/lib/apt/lists/*

# Copiar arquivos
COPY ./site /var/www/html
COPY ./nginx.conf /etc/nginx/nginx.conf

# Expor porta
EXPOSE 80

# Comando padrão ao iniciar o container
CMD ["nginx", "-g", "daemon off;"]
EOF

# Construir imagem:
docker build -t minha-imagem:1.0 .
docker build -t minha-imagem:latest -f Dockerfile.prod .

# Ver histórico de layers:
docker history minha-imagem:1.0

# Publicar no Docker Hub:
docker login
docker tag minha-imagem:1.0 usuario/minha-imagem:1.0
docker push usuario/minha-imagem:1.0`} />

      <h2>6. Redes Docker</h2>
      <CodeBlock title="Redes e comunicação entre containers" code={`# Listar redes:
docker network ls
# bridge  — padrão, containers isolados com NAT
# host    — container usa rede do host diretamente
# none    — sem rede

# Criar rede personalizada:
docker network create minha-rede

# Conectar containers à mesma rede:
docker run -d --name app --network minha-rede minha-imagem
docker run -d --name db --network minha-rede postgres

# Containers na mesma rede podem se comunicar pelo nome:
# Dentro do container 'app': ping db, curl http://db:5432

# Inspecionar rede:
docker network inspect minha-rede`} />
    </PageContainer>
  );
}

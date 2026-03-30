import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function PostgreSQL() {
  return (
    <PageContainer
      title="PostgreSQL no Ubuntu"
      subtitle="Instale e configure PostgreSQL no Ubuntu — o banco de dados relacional mais avançado do mundo open source."
      difficulty="intermediario"
      timeToRead="20 min"
    >
      <h2>1. Instalação</h2>
      <CodeBlock title="Instalando PostgreSQL no Ubuntu" code={`# Versão do repositório Ubuntu (pode ser mais antiga):
sudo apt update
sudo apt install postgresql postgresql-contrib

# Versão mais recente (repositório oficial PostgreSQL):
sudo apt install -y gnupg2
curl -fsSL https://www.postgresql.org/media/keys/ACCC4CF8.asc | \
    sudo gpg --dearmor -o /usr/share/keyrings/postgresql.gpg

echo "deb [signed-by=/usr/share/keyrings/postgresql.gpg] \
    https://apt.postgresql.org/pub/repos/apt \$(lsb_release -cs)-pgdg main" | \
    sudo tee /etc/apt/sources.list.d/pgdg.list

sudo apt update && sudo apt install postgresql-16

# Verificar:
sudo systemctl status postgresql
psql --version`} />

      <h2>2. Configuração Básica</h2>
      <CodeBlock title="Configurando usuários e bancos" code={`# O PostgreSQL cria um superusuário chamado 'postgres':
sudo -u postgres psql           # Entrar como superusuário

# Dentro do psql:
-- Criar banco de dados:
CREATE DATABASE meuapp;

-- Criar usuário:
CREATE USER meuusuario WITH ENCRYPTED PASSWORD 'senha-segura';

-- Dar permissões:
GRANT ALL PRIVILEGES ON DATABASE meuapp TO meuusuario;

-- Listar bancos:
\l

-- Listar usuários:
\du

-- Conectar a um banco:
\c meuapp

-- Listar tabelas:
\dt

-- Sair:
\q

# Conectar externamente:
psql -h localhost -U meuusuario -d meuapp`} />

      <h2>3. Configurando Acesso Remoto</h2>
      <AlertBox type="warning">
        Por padrão, PostgreSQL aceita apenas conexões locais. Configure com cuidado.
      </AlertBox>
      <CodeBlock title="Liberando acesso remoto ao PostgreSQL" code={`# 1. Editar postgresql.conf:
sudo nano /etc/postgresql/16/main/postgresql.conf
# Mudar: listen_addresses = 'localhost'
# Para:  listen_addresses = '*'

# 2. Editar pg_hba.conf (controle de acesso):
sudo nano /etc/postgresql/16/main/pg_hba.conf

# Adicionar (ao final):
# Acesso de qualquer IP com senha:
host    all    all    0.0.0.0/0    scram-sha-256

# Acesso apenas da rede local:
host    meuapp    meuusuario    192.168.1.0/24    scram-sha-256

# 3. Reiniciar e abrir firewall:
sudo systemctl restart postgresql
sudo ufw allow 5432/tcp`} />

      <h2>4. Backup e Manutenção</h2>
      <CodeBlock title="Backup e otimização do PostgreSQL" code={`# Backup com pg_dump:
sudo -u postgres pg_dump meuapp > backup_meuapp.sql
sudo -u postgres pg_dump -Fc meuapp > backup_meuapp.dump   # Formato custom

# Backup de todos os bancos:
sudo -u postgres pg_dumpall > backup_completo.sql

# Restaurar:
sudo -u postgres psql meuapp < backup_meuapp.sql
sudo -u postgres pg_restore -d meuapp backup_meuapp.dump

# Vacuum (limpar espaço e otimizar):
sudo -u postgres vacuumdb --all --analyze

# Ver tamanho dos bancos:
sudo -u postgres psql -c "SELECT pg_database.datname, pg_size_pretty(pg_database_size(pg_database.datname)) AS size FROM pg_database;"

# Monitorar conexões ativas:
sudo -u postgres psql -c "SELECT * FROM pg_stat_activity;"`} />
    </PageContainer>
  );
}

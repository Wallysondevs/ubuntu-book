import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function MySQL() {
  return (
    <PageContainer
      title="MySQL e MariaDB no Ubuntu"
      subtitle="Instale, configure e administre bancos de dados MySQL/MariaDB no Ubuntu com segurança."
      difficulty="intermediario"
      timeToRead="22 min"
    >
      <p>
        <strong>MySQL</strong> é o banco de dados relacional open source mais popular do mundo.
        <strong>MariaDB</strong> é um fork 100% compatível, mais rápido e totalmente open source.
        Ambos funcionam da mesma forma no Ubuntu.
      </p>

      <h2>1. Instalação e Configuração Inicial</h2>
      <CodeBlock title="Instalando MySQL no Ubuntu" code={`# Instalar MySQL:
sudo apt update
sudo apt install mysql-server

# Ou MariaDB (recomendado para novo setup):
sudo apt install mariadb-server

# Verificar status:
sudo systemctl status mysql
sudo systemctl start mysql
sudo systemctl enable mysql

# Configuração de segurança inicial (EXECUTE ESTE!):
sudo mysql_secure_installation
# Perguntas:
# - Set root password? YES
# - Remove anonymous users? YES
# - Disallow root login remotely? YES (para servidor)
# - Remove test database? YES
# - Reload privilege tables? YES`} />

      <h2>2. Conectando e Comandos Básicos SQL</h2>
      <CodeBlock title="Conectando ao MySQL e SQL essencial" code={`# Conectar como root:
sudo mysql
sudo mysql -u root -p         # Com senha

# Criar banco de dados:
CREATE DATABASE meuapp;
CREATE DATABASE meuapp CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

# Criar usuário e dar permissões:
CREATE USER 'meuusuario'@'localhost' IDENTIFIED BY 'senha-segura';
GRANT ALL PRIVILEGES ON meuapp.* TO 'meuusuario'@'localhost';
FLUSH PRIVILEGES;

# Para acesso remoto (cuidado!):
CREATE USER 'usuario'@'%' IDENTIFIED BY 'senha';
GRANT ALL PRIVILEGES ON meuapp.* TO 'usuario'@'%';

# Comandos essenciais:
SHOW DATABASES;
USE meuapp;
SHOW TABLES;
DESCRIBE nome_tabela;

# Importar/exportar:
mysqldump -u root -p meuapp > backup.sql
mysql -u root -p meuapp < backup.sql

# Sair do MySQL:
EXIT;`} />

      <h2>3. Configuração do MySQL para Servidor</h2>
      <AlertBox type="warning">
        Configure o MySQL corretamente antes de expor à internet.
        O padrão não é seguro para produção.
      </AlertBox>
      <CodeBlock title="Otimização e configuração de produção" code={`# Arquivo de configuração:
sudo nano /etc/mysql/mysql.conf.d/mysqld.cnf

# Configurações importantes:
[mysqld]
# Segurança — não escutar em todas as interfaces:
bind-address = 127.0.0.1    # Apenas local (padrão)
# bind-address = 0.0.0.0   # Acesso remoto (cuidado!)

# Performance:
innodb_buffer_pool_size = 1G    # 70% da RAM disponível
max_connections = 150
query_cache_size = 64M
slow_query_log = 1
slow_query_log_file = /var/log/mysql/mysql-slow.log
long_query_time = 2             # Logar queries acima de 2 segundos

# Reiniciar após mudanças:
sudo systemctl restart mysql

# Verificar variáveis:
mysql -u root -p -e "SHOW VARIABLES LIKE 'innodb_buffer%';"`} />

      <h2>4. Backup e Restauração</h2>
      <CodeBlock title="Estratégias de backup MySQL" code={`# Backup de um banco:
mysqldump -u root -p meuapp > backup_meuapp_\$(date +%Y%m%d).sql

# Backup de TODOS os bancos:
mysqldump -u root -p --all-databases > backup_completo_\$(date +%Y%m%d).sql

# Backup comprimido:
mysqldump -u root -p meuapp | gzip > backup_meuapp_\$(date +%Y%m%d).sql.gz

# Restaurar:
mysql -u root -p meuapp < backup_meuapp.sql
zcat backup_meuapp.sql.gz | mysql -u root -p meuapp

# Backup automático via cron:
crontab -e
# Adicionar: 0 2 * * * mysqldump -u root -pSENHA meuapp > /backup/db-\$(date +\%Y\%m\%d).sql

# phpMyAdmin (interface web):
sudo apt install phpmyadmin
# Acesso: http://localhost/phpmyadmin`} />
    </PageContainer>
  );
}

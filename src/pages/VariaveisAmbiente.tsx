import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function VariaveisAmbiente() {
  return (
    <PageContainer
      title="Variáveis de Ambiente"
      subtitle="Como configurar, exportar e usar variáveis de ambiente no Ubuntu — PATH, HOME, e variáveis personalizadas."
      difficulty="intermediario"
      timeToRead="15 min"
    >
      <p>
        Variáveis de ambiente são pares chave=valor disponíveis para processos no Linux.
        Elas configuram o comportamento do sistema, do shell e dos programas — desde o idioma
        exibido até onde o sistema procura programas executáveis.
      </p>

      <h2>1. Variáveis de Ambiente Essenciais</h2>
      <CodeBlock title="As variáveis mais importantes do Ubuntu" code={`# Ver TODAS as variáveis de ambiente da sessão atual
env
printenv

# Ver uma variável específica
echo \$HOME      # /home/seuusuario — diretório pessoal
echo \$USER      # nome do usuário atual
echo \$SHELL     # /bin/bash — shell em uso
echo \$PATH      # caminhos onde o shell procura executáveis
echo \$PWD       # diretório atual (Print Working Directory)
echo \$LANG      # idioma do sistema (ex: pt_BR.UTF-8)
echo \$EDITOR    # editor padrão (nano, vim, etc)
echo \$TERM      # tipo de terminal (xterm-256color, etc)
echo \$DISPLAY   # display gráfico (ex: :0)
echo \$LOGNAME   # usuário que fez login (pode diferir de USER com sudo)`} />

      <h2>2. Criando e Exportando Variáveis</h2>
      <CodeBlock title="Definindo variáveis temporárias e permanentes" code={`# Variável LOCAL (só existe neste shell, não em subprocessos):
MINHA_VAR="hello"
echo \$MINHA_VAR

# EXPORTAR (torna disponível para processos filhos):
export MINHA_VAR="hello"

# Criar e exportar em uma linha:
export PROJETO="meu-app"
export API_URL="https://api.exemplo.com"

# Variável temporária apenas para um comando:
EDITOR=vim git commit  # usa vim só neste comando
NODE_ENV=production node app.js

# Ver se uma variável foi exportada:
export | grep MINHA_VAR`} />

      <h2>3. Tornando Variáveis Permanentes</h2>
      <AlertBox type="info">
        Variáveis definidas no terminal são temporárias — somem ao fechar o terminal.
        Para torná-las permanentes, adicione-as aos arquivos de configuração do shell.
      </AlertBox>
      <CodeBlock title="Arquivos de configuração do Bash" code={`# ~/.bashrc — executado em todo novo terminal interativo
# ~/.bash_profile ou ~/.profile — executado no login

# Adicionar variável permanente ao ~/.bashrc:
echo 'export MINHA_VAR="valor_permanente"' >> ~/.bashrc
echo 'export JAVA_HOME="/usr/lib/jvm/java-21-openjdk-amd64"' >> ~/.bashrc

# Aplicar as mudanças na sessão atual (sem fechar o terminal):
source ~/.bashrc
# ou: . ~/.bashrc  (equivalente)

# Para variáveis do SISTEMA (todos os usuários):
sudo nano /etc/environment
# Formato: VARIAVEL="valor" (sem export, sem \$)
# Exemplo:
# JAVA_HOME="/usr/lib/jvm/java-21-openjdk-amd64"
# EDITOR="nano"

# Para scripts de login do sistema:
sudo nano /etc/profile.d/minhas-vars.sh
# Crie arquivos .sh neste diretório — são executados automaticamente`} />

      <h2>4. O PATH — Onde o Shell Encontra Programas</h2>
      <CodeBlock title="Entendendo e modificando o PATH" code={`# Ver o PATH atual
echo \$PATH
# /usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games

# O PATH é uma lista de diretórios separados por ":"
# Quando você digita "ls", o shell procura /usr/local/bin/ls, /usr/bin/ls, etc.

# Adicionar diretório ao PATH temporariamente:
export PATH="\$PATH:/caminho/novo"

# Adicionar ao início do PATH (prioridade máxima):
export PATH="/caminho/prioritario:\$PATH"

# Adicionar ao PATH permanentemente:
echo 'export PATH="\$HOME/.local/bin:\$PATH"' >> ~/.bashrc
source ~/.bashrc

# Casos comuns:
# Adicionar scripts pessoais ao PATH:
mkdir -p ~/.local/bin
echo 'export PATH="\$HOME/.local/bin:\$PATH"' >> ~/.bashrc

# Adicionar Go ao PATH:
echo 'export PATH="\$PATH:/usr/local/go/bin"' >> ~/.bashrc

# Verificar onde um comando está sendo encontrado:
which python3
which node
type ls    # Mais detalhado que which`} />

      <h2>5. Variáveis de Ambiente para Desenvolvimento</h2>
      <CodeBlock title="Configurações essenciais para desenvolvedores" code={`# Node.js — configurar ambiente
export NODE_ENV="development"
export PORT=3000
export DATABASE_URL="postgres://user:pass@localhost/db"

# Python
export PYTHONPATH="/home/user/meus-modulos:\$PYTHONPATH"
export VIRTUAL_ENV="/home/user/meu-projeto/.venv"

# Java
export JAVA_HOME="/usr/lib/jvm/java-21-openjdk-amd64"
export PATH="\$JAVA_HOME/bin:\$PATH"

# Go
export GOPATH="\$HOME/go"
export PATH="\$PATH:\$GOPATH/bin:/usr/local/go/bin"

# Arquivo .env para projetos (NÃO versionar senhas!)
# Crie um arquivo .env no projeto:
cat > .env << 'EOF'
DATABASE_URL=postgres://localhost/mydb
SECRET_KEY=minha-chave-secreta
API_TOKEN=abc123
EOF

# Carregar .env no shell:
export \$(grep -v '^#' .env | xargs)

# Com dotenv em Node.js: require('dotenv').config()`} />
    </PageContainer>
  );
}

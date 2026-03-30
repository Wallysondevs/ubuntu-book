import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function NodeJS() {
  return (
    <PageContainer
      title="Node.js no Ubuntu"
      subtitle="Instale e gerencie Node.js no Ubuntu com nvm, configure npm e crie aplicações web no servidor."
      difficulty="intermediario"
      timeToRead="20 min"
    >
      <h2>1. Instalação via nvm (Recomendado)</h2>
      <AlertBox type="success">
        Use o <strong>nvm</strong> (Node Version Manager) para instalar o Node.js.
        Isso permite ter múltiplas versões e instalar sem sudo.
      </AlertBox>
      <CodeBlock title="Instalando Node.js com nvm" code={`# Instalar nvm:
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.0/install.sh | bash

# Recarregar o shell:
source ~/.bashrc
# ou fechar e abrir o terminal

# Verificar instalação:
nvm --version

# Listar versões disponíveis:
nvm list-remote | grep LTS

# Instalar versão LTS atual:
nvm install --lts
nvm install 20           # Versão específica
nvm install 18           # Versão LTS anterior

# Usar versão específica:
nvm use 20
nvm use --lts

# Definir versão padrão:
nvm alias default 20

# Ver versões instaladas:
nvm list

# Verificar:
node --version
npm --version`} />

      <h2>2. npm — Gerenciador de Pacotes</h2>
      <CodeBlock title="Comandos essenciais do npm" code={`# Criar projeto novo:
mkdir meu-projeto && cd meu-projeto
npm init -y               # -y para aceitar tudo automaticamente

# Instalar pacotes:
npm install express       # Instalar e salvar em dependencies
npm install -D jest       # Instalar em devDependencies
npm install -g pm2        # Instalar globalmente

# Ver pacotes instalados:
npm list
npm list -g --depth=0     # Globais

# Executar scripts do package.json:
npm start
npm test
npm run build
npm run dev

# Atualizar pacotes:
npm update                # Atualizar tudo
npm update express        # Atualizar específico

# Remover pacote:
npm uninstall express

# Auditoria de segurança:
npm audit
npm audit fix             # Tentar corrigir automaticamente`} />

      <h2>3. Node.js como Servidor em Produção</h2>
      <CodeBlock title="PM2 — Process Manager para Node.js" code={`# Instalar PM2 globalmente:
npm install -g pm2

# Iniciar aplicação:
pm2 start app.js
pm2 start app.js --name "meu-app"
pm2 start npm --name "next-app" -- start   # Para Next.js

# Ver processos rodando:
pm2 list
pm2 status

# Logs em tempo real:
pm2 logs meu-app
pm2 logs meu-app --lines 100

# Reiniciar/parar:
pm2 restart meu-app
pm2 stop meu-app
pm2 delete meu-app

# Salvar configuração e iniciar no boot:
pm2 startup          # Gera comando, execute como sudo
pm2 save             # Salva lista de processos

# Configuração via ecosystem file:
cat > ecosystem.config.js << 'EOF'
module.exports = {
  apps: [{
    name: 'meu-app',
    script: './app.js',
    instances: 'max',    // Cluster mode
    exec_mode: 'cluster',
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    }
  }]
}
EOF
pm2 start ecosystem.config.js`} />
    </PageContainer>
  );
}

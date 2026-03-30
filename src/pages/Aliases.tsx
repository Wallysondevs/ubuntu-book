import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function Aliases() {
  return (
    <PageContainer
      title="Aliases e Funções no Bash"
      subtitle="Crie atalhos poderosos para comandos frequentes e funções personalizadas para automatizar seu trabalho."
      difficulty="intermediario"
      timeToRead="15 min"
    >
      <p>
        <strong>Aliases</strong> são atalhos para comandos longos ou complexos.
        <strong>Funções</strong> são mini-scripts com lógica mais avançada.
        Ambos podem transformar sua produtividade no terminal.
      </p>

      <h2>1. Criando Aliases Básicos</h2>
      <CodeBlock title="Aliases temporários e permanentes" code={`# Alias temporário (só dura a sessão atual):
alias ll='ls -lah'
alias la='ls -A'
alias l='ls -CF'

# Ver todos os aliases definidos:
alias

# Remover um alias:
unalias ll

# Alias permanente (adicionar ao ~/.bashrc):
nano ~/.bashrc

# Adicione no final do arquivo:
alias ll='ls -lah --color=auto'
alias la='ls -A'
alias grep='grep --color=auto'
alias update='sudo apt update && sudo apt upgrade -y'
alias install='sudo apt install'
alias remove='sudo apt remove'
alias search='apt search'
alias cls='clear'
alias ..='cd ..'
alias ...='cd ../..'
alias ....='cd ../../..'
alias h='history'
alias j='jobs -l'
alias df='df -h'
alias du='du -sh'
alias free='free -h'
alias ports='ss -tulpn'
alias myip='curl ifconfig.me'

# Aplicar:
source ~/.bashrc`} />

      <h2>2. Aliases Mais Úteis para o Dia a Dia</h2>
      <CodeBlock title="Coleção de aliases produtivos" code={`# === NAVEGAÇÃO ===
alias home='cd \$HOME'
alias downloads='cd ~/Downloads'
alias desktop='cd ~/Desktop'

# === GIT ===
alias gs='git status'
alias ga='git add'
alias gc='git commit -m'
alias gp='git push'
alias gl='git log --oneline --graph --decorate'
alias gd='git diff'
alias gco='git checkout'

# === SISTEMA ===
alias reload='source ~/.bashrc'
alias path='echo \$PATH | tr ":" "\n"'
alias now='date +"%Y-%m-%d %H:%M:%S"'
alias biggest='du -sh * | sort -rh | head -20'
alias meminfo='cat /proc/meminfo | grep -E "(MemTotal|MemFree|MemAvailable|Cached)"'
alias cpuinfo='lscpu | grep -E "(Model name|CPU\(s\)|Thread)"'

# === SEGURANÇA ===
alias chmod-files='find . -type f -exec chmod 644 {} \;'
alias chmod-dirs='find . -type d -exec chmod 755 {} \;'

# === REDE ===
alias pingg='ping -c 4 google.com'
alias localip='hostname -I | awk "{print \$1}"'
alias connections='ss -s'`} />

      <h2>3. Funções no Bash</h2>
      <p>
        Quando um alias não é suficiente (ex: precisa de argumentos, lógica condicional),
        use <strong>funções</strong>.
      </p>
      <CodeBlock title="Criando funções poderosas" code={`# No ~/.bashrc, adicione funções assim:

# Criar diretório e entrar nele:
mkcd() {
    mkdir -p "\$1" && cd "\$1"
}

# Extrair qualquer arquivo comprimido:
extract() {
    if [ -f "\$1" ]; then
        case "\$1" in
            *.tar.bz2)  tar xjf "\$1"   ;;
            *.tar.gz)   tar xzf "\$1"   ;;
            *.tar.xz)   tar xJf "\$1"   ;;
            *.bz2)      bunzip2 "\$1"   ;;
            *.gz)       gunzip "\$1"    ;;
            *.tar)      tar xf "\$1"    ;;
            *.zip)      unzip "\$1"     ;;
            *.7z)       7z x "\$1"      ;;
            *)          echo "Formato desconhecido: '\$1'" ;;
        esac
    else
        echo "Arquivo não encontrado: '\$1'"
    fi
}

# Backup rápido de um arquivo:
bkp() {
    cp "\$1" "\$1.bak.\$(date +%Y%m%d_%H%M%S)"
    echo "Backup criado: \$1.bak.\$(date +%Y%m%d_%H%M%S)"
}

# Buscar processo pelo nome e matar:
killnamed() {
    pkill -f "\$1" && echo "Processo(s) '\$1' encerrado(s)"
}

# Ver as últimas N linhas de um arquivo de log:
logs() {
    sudo tail -n \${2:-50} -f \$1
}

# Instalar e verificar:
ainstall() {
    sudo apt install "\$@" && echo "\nInstalado com sucesso!"
}`} />

      <h2>4. Arquivos de Configuração do Bash</h2>
      <AlertBox type="info">
        Entender quando cada arquivo é carregado evita confusões com aliases que "somem".
      </AlertBox>
      <CodeBlock title="Hierarquia de configuração do Bash" code={`# ~/.bashrc
# - Executado em todo NOVO TERMINAL INTERATIVO
# - Aliases, funções e configurações do shell

# ~/.bash_profile ou ~/.profile  
# - Executado apenas no LOGIN (login shell)
# - Variáveis de ambiente do sistema

# ~/.bash_logout
# - Executado ao sair de uma sessão de login

# /etc/bash.bashrc
# - Configurações globais do Bash (todos usuários)
# - Não edite diretamente — prefira /etc/profile.d/

# Forçar ~/.bashrc no ~/.bash_profile (boa prática):
# Adicione ao ~/.bash_profile:
if [ -f ~/.bashrc ]; then
    source ~/.bashrc
fi

# Verificar a ordem de carregamento:
# Login shell: /etc/profile → ~/.bash_profile → ~/.bashrc
# Interactive shell: /etc/bash.bashrc → ~/.bashrc`} />
    </PageContainer>
  );
}

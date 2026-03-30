import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function Zsh() {
  return (
    <PageContainer
      title="Zsh e Oh My Zsh"
      subtitle="Configure o Zsh com Oh My Zsh, Powerlevel10k e plugins para o terminal mais produtivo do Linux."
      difficulty="intermediario"
      timeToRead="18 min"
    >
      <p>
        O <strong>Zsh</strong> é um shell poderoso, compatível com Bash mas com recursos
        avançados. Com <strong>Oh My Zsh</strong> e bons plugins, vira a ferramenta
        de terminal mais produtiva disponível.
      </p>

      <h2>1. Instalando Zsh e Oh My Zsh</h2>
      <CodeBlock title="Setup completo do Zsh" code={`# Instalar Zsh:
sudo apt install zsh

# Verificar versão:
zsh --version

# Definir Zsh como shell padrão:
chsh -s \$(which zsh)
# Precisa fazer logout/login para efeito

# Instalar Oh My Zsh:
sh -c "\$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"

# Isso cria: ~/.oh-my-zsh/ e ~/.zshrc
# Faz backup do ~/.bashrc existente para ~/.bashrc.pre-oh-my-zsh`} />

      <h2>2. Configurando o ~/.zshrc</h2>
      <CodeBlock title="Configuração do Zsh" code={`# Editar configuração:
nano ~/.zshrc

# Tema (mudar de "robbyrussell" para outro):
ZSH_THEME="agnoster"

# Plugins (adicionar plugins na lista):
plugins=(
    git
    docker
    docker-compose
    python
    pip
    node
    npm
    kubectl
    z                   # Jump rápido para diretórios frequentes
    zsh-autosuggestions # Sugestões baseadas no histórico
    zsh-syntax-highlighting  # Destaque de syntax
)

# Aliases personalizados:
alias ll='ls -lah --color=auto'
alias update='sudo apt update && sudo apt upgrade -y'
alias gs='git status'
alias gl='git log --oneline --graph'

# Aplicar mudanças:
source ~/.zshrc`} />

      <h2>3. Plugins Essenciais</h2>
      <CodeBlock title="Instalando plugins poderosos" code={`# zsh-autosuggestions (sugestões do histórico):
git clone https://github.com/zsh-users/zsh-autosuggestions \
    \${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions

# zsh-syntax-highlighting (colorir comandos):
git clone https://github.com/zsh-users/zsh-syntax-highlighting \
    \${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting

# fzf — busca fuzzy no histórico (CTRL+R poderoso):
sudo apt install fzf
echo 'source /usr/share/doc/fzf/examples/key-bindings.zsh' >> ~/.zshrc
echo 'source /usr/share/doc/fzf/examples/completion.zsh' >> ~/.zshrc

# z — jump para diretórios frequentes:
# Plugin já incluído no Oh My Zsh (adicione 'z' nos plugins)
# Uso: z projetos    → vai para ~/dev/projetos/meu-projeto

# Adicionar os plugins ao .zshrc:
plugins=(git docker z zsh-autosuggestions zsh-syntax-highlighting)
source ~/.zshrc`} />

      <h2>4. Tema Powerlevel10k</h2>
      <CodeBlock title="Instalando o tema mais bonito" code={`# Instalar fontes Nerd Fonts (necessário para Powerlevel10k):
# Baixe a fonte "MesloLGS NF" de:
# https://github.com/romkatv/powerlevel10k#fonts

# No Ubuntu, instalar via apt:
sudo apt install fonts-powerline

# Instalar Powerlevel10k:
git clone --depth=1 https://github.com/romkatv/powerlevel10k.git \
    \${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/themes/powerlevel10k

# Ativar o tema no ~/.zshrc:
ZSH_THEME="powerlevel10k/powerlevel10k"
source ~/.zshrc

# Configurar (assistente interativo):
p10k configure
# Responda as perguntas de estilo

# Atualizar configuração:
p10k configure    # Rodar novamente a qualquer hora`} />
    </PageContainer>
  );
}

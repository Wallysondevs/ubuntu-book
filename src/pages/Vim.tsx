import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function Vim() {
  return (
    <PageContainer
      title="Vim e Neovim"
      subtitle="Aprenda Vim do básico ao avançado: modos, atalhos, plugins e configuração do editor mais poderoso do Linux."
      difficulty="avancado"
      timeToRead="25 min"
    >
      <AlertBox type="info">
        Vim tem uma curva de aprendizado íngreme, mas é o editor mais disponível
        em servidores Linux. Saber o básico é essencial para qualquer administrador.
      </AlertBox>

      <h2>1. Instalação e Conceito de Modos</h2>
      <CodeBlock title="Instalando Vim e entendendo os modos" code={`# Instalar:
sudo apt install vim neovim

# MODOS DO VIM:
# NORMAL  — modo padrão, para navegar e comandos
# INSERT  — para digitar texto (como um editor normal)
# VISUAL  — para selecionar texto
# COMMAND — para executar comandos (:q, :w, etc.)

# Entrar nos modos:
# i     — entrar no modo INSERT (antes do cursor)
# a     — entrar no INSERT (após o cursor)
# v     — entrar no modo VISUAL (caractere)
# V     — VISUAL LINE
# Esc   — voltar ao modo NORMAL (de qualquer modo)
# :     — entrar no modo COMMAND`} />

      <h2>2. Comandos Essenciais</h2>
      <CodeBlock title="Atalhos fundamentais do Vim" code={`# SALVAR E SAIR:
:w          — salvar
:q          — sair (se não tiver mudanças)
:wq ou :x  — salvar e sair
:q!         — sair SEM salvar (forçar)
:wqa        — salvar e sair TODOS os buffers

# NAVEGAÇÃO no modo NORMAL:
h j k l    — ← ↓ ↑ → (esquerda, baixo, cima, direita)
w          — próxima palavra
b          — palavra anterior
0          — início da linha
\$          — fim da linha
gg         — início do arquivo
G          — fim do arquivo
5G         — ir para linha 5
Ctrl+f     — página abaixo
Ctrl+b     — página acima

# EDIÇÃO no modo NORMAL:
dd         — deletar linha
yy         — copiar linha (yank)
p          — colar abaixo
P          — colar acima
u          — desfazer (undo)
Ctrl+r     — refazer (redo)
x          — deletar caractere
r          — substituir caractere
.          — repetir último comando

# BUSCA:
/palavra   — buscar para frente
?palavra   — buscar para trás
n          — próxima ocorrência
N          — ocorrência anterior
:%s/velho/novo/g  — substituir em todo o arquivo`} />

      <h2>3. Configurando o ~/.vimrc</h2>
      <CodeBlock title="Configuração básica do Vim" code={`# Criar/editar ~/.vimrc:
nano ~/.vimrc

" .vimrc básico comentado:
set number              " Mostrar números de linha
set relativenumber      " Números relativos (útil para navegação)
set tabstop=4           " Tab = 4 espaços
set shiftwidth=4        " Indentação = 4 espaços
set expandtab           " Usar espaços em vez de tabs
set autoindent          " Indentação automática
set smartindent         " Indentação inteligente
set hlsearch            " Destacar resultados de busca
set incsearch           " Busca incremental
set ignorecase          " Busca sem diferenciar maiúsculas
set smartcase           " Mas diferencia se usar maiúscula na busca
set noswapfile          " Sem arquivo .swp
set clipboard=unnamedplus  " Usar clipboard do sistema
syntax on               " Destaque de syntax`} />

      <h2>4. Neovim — Vim Moderno</h2>
      <CodeBlock title="Configurando Neovim com plugins" code={`# Instalar Neovim:
sudo apt install neovim
# ou versão mais recente via snap:
sudo snap install nvim --classic

# Configuração do Neovim: ~/.config/nvim/init.vim
mkdir -p ~/.config/nvim

# Instalar gerenciador de plugins (vim-plug):
sh -c 'curl -fLo "\${XDG_DATA_HOME:-\$HOME/.local/share}"/nvim/site/autoload/plug.vim \
    --create-dirs https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim'

# ~/.config/nvim/init.vim básico:
call plug#begin()
Plug 'nvim-tree/nvim-tree.lua'          " Explorador de arquivos
Plug 'nvim-lualine/lualine.nvim'        " Status bar
Plug 'nvim-telescope/telescope.nvim'    " Busca fuzzy
Plug 'neoclide/coc.nvim', {'branch': 'release'}  " Autocompletar
Plug 'tpope/vim-fugitive'               " Git integração
call plug#end()

" Dentro do Neovim, instalar plugins:
" :PlugInstall`} />
    </PageContainer>
  );
}

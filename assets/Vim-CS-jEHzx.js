import{j as a}from"./index-_kFPLDpE.js";import{P as i}from"./PageContainer-eafNNqkI.js";import{C as r}from"./CodeBlock-ByIkwE54.js";import{A as o}from"./AlertBox-NzOB7YP7.js";function l(){return a.jsxs(i,{title:"Vim — Editor de Texto no Terminal",subtitle:"Guia completo do Vim no Ubuntu: modos, navegação, edição, busca, substituição, configuração, plugins e atalhos essenciais.",difficulty:"intermediario",timeToRead:"30 min",children:[a.jsxs(o,{type:"info",title:"Pré-requisitos",children:["Ubuntu com terminal aberto. Vim já vem instalado por padrão (versão tiny); para a versão completa: ",a.jsx("code",{children:"sudo apt install vim"}),"."]}),a.jsx("h2",{children:"Glossário rápido"}),a.jsxs("p",{children:[a.jsx("strong",{children:"Modo"})," — Vim é modal. Os 4 principais: Normal (navegação), Insert (digitação), Visual (seleção), Command-line (",a.jsx("code",{children:":"})," comandos)."]}),a.jsxs("p",{children:[a.jsx("strong",{children:"Buffer"})," — arquivo aberto em memória. Você pode ter vários simultaneamente."]}),a.jsxs("p",{children:[a.jsx("strong",{children:"~/.vimrc"})," — arquivo de configuração pessoal do Vim."]}),a.jsxs("p",{children:[a.jsx("strong",{children:"Registrador"}),' — "área de transferência" nomeada do Vim. ',a.jsx("code",{children:'"ay'}),"copia para o registrador ",a.jsx("code",{children:"a"}),"."]}),a.jsxs("p",{children:["O ",a.jsx("strong",{children:"Vim"})," (Vi IMproved) é o editor de texto mais poderoso do terminal. Está disponível em praticamente todo servidor Linux, tornando-o essencial para administradores de sistema. Sua curva de aprendizado é íngreme, mas uma vez dominado, é incrivelmente rápido e eficiente."]}),a.jsx("h2",{children:"1. Modos do Vim"}),a.jsx(r,{title:"Entender os modos do Vim",code:`# O Vim tem 3 modos principais:

  # MODO NORMAL (padrão ao abrir)
  # - Navegação e comandos
  # - Voltar para Normal: pressione ESC (de qualquer modo)

  # MODO INSERT (edição de texto)
  # - Digitar texto normalmente
  # - Entrar: i, I, a, A, o, O
  # - i = inserir antes do cursor
  # - I = inserir no início da linha
  # - a = inserir após o cursor
  # - A = inserir no final da linha
  # - o = nova linha abaixo
  # - O = nova linha acima
  # - Sair: ESC

  # MODO VISUAL (seleção)
  # - Selecionar texto
  # - v = seleção por caractere
  # - V = seleção por linha
  # - Ctrl+V = seleção em bloco (coluna)
  # - Sair: ESC

  # MODO COMMAND (comandos :)
  # - Entrar: : (dois pontos)
  # - :w     = salvar
  # - :q     = sair
  # - :wq    = salvar e sair
  # - :q!    = sair SEM salvar
  # - :wq!   = salvar e sair (forçar)
  # - ZZ     = salvar e sair (atalho no modo Normal)

  # Abrir arquivos
  vim arquivo.txt          # Abrir arquivo
  vim +42 arquivo.txt      # Abrir na linha 42
  vim +/palavra arquivo.txt  # Abrir na primeira ocorrência de "palavra"
  vim arquivo1 arquivo2    # Abrir múltiplos arquivos`}),a.jsx("h2",{children:"2. Navegação"}),a.jsx(r,{title:"Mover o cursor eficientemente",code:`# === MOVIMENTO BÁSICO (modo Normal) ===
  # h = esquerda    j = baixo    k = cima    l = direita
  # (ou use as setas)

  # === MOVIMENTO POR PALAVRAS ===
  # w = início da próxima palavra
  # e = final da palavra atual
  # b = início da palavra anterior
  # W, E, B = mesmo, mas ignora pontuação

  # === MOVIMENTO POR LINHA ===
  # 0     = início da linha
  # ^     = primeiro caractere não-espaço
  # $     = final da linha
  # gg    = primeira linha do arquivo
  # G     = última linha
  # 42G   = ir para linha 42
  # :42   = ir para linha 42

  # === MOVIMENTO POR TELA ===
  # Ctrl+f  = página para baixo (forward)
  # Ctrl+b  = página para cima (backward)
  # Ctrl+d  = meia página para baixo
  # Ctrl+u  = meia página para cima
  # H       = topo da tela (High)
  # M       = meio da tela (Middle)
  # L       = final da tela (Low)
  # zz      = centralizar cursor na tela

  # === MOVIMENTO POR BUSCA ===
  # f{char} = ir para o próximo {char} na linha
  # F{char} = ir para o {char} anterior na linha
  # %       = ir para o parêntese/chave correspondente
  # *       = buscar a palavra sob o cursor (próxima)
  # #       = buscar a palavra sob o cursor (anterior)`}),a.jsx("h2",{children:"3. Edição"}),a.jsx(r,{title:"Comandos de edição essenciais",code:`# === DELETAR ===
  # x     = deletar caractere sob o cursor
  # dd    = deletar linha inteira
  # dw    = deletar palavra
  # d$    = deletar até o final da linha
  # d0    = deletar até o início da linha
  # 3dd   = deletar 3 linhas
  # dG    = deletar até o final do arquivo

  # === COPIAR E COLAR ===
  # yy    = copiar (yank) linha inteira
  # yw    = copiar palavra
  # y$    = copiar até o final da linha
  # 3yy   = copiar 3 linhas
  # p     = colar após o cursor
  # P     = colar antes do cursor

  # === DESFAZER E REFAZER ===
  # u     = desfazer (undo)
  # Ctrl+r = refazer (redo)
  # .     = repetir último comando

  # === SUBSTITUIR ===
  # r{char} = substituir caractere sob o cursor
  # R       = modo Replace (sobrescrever)
  # cw      = mudar palavra (deleta e entra em Insert)
  # cc      = mudar linha inteira
  # c$      = mudar até o final da linha
  # C       = mesmo que c$

  # === INDENTAR ===
  # >>    = indentar linha para direita
  # <<    = indentar para esquerda
  # 3>>   = indentar 3 linhas
  # ==    = auto-indentar linha

  # === OUTROS ===
  # J     = juntar linha atual com a próxima
  # ~     = trocar maiúscula/minúscula
  # gUU   = toda a linha em MAIÚSCULA
  # guu   = toda a linha em minúscula`}),a.jsx("h2",{children:"4. Busca e Substituição"}),a.jsx(r,{title:"Buscar e substituir texto",code:`# Buscar
  # /texto   = buscar para frente
  # ?texto   = buscar para trás
  # n        = próxima ocorrência
  # N        = ocorrência anterior
  # /cTexto = busca case-insensitive

  # Substituir (modo Command)
  # :s/antigo/novo/           = substituir primeiro na linha
  # :s/antigo/novo/g          = substituir todos na linha
  # :%s/antigo/novo/g         = substituir em todo o arquivo
  # :%s/antigo/novo/gc        = substituir com confirmação
  # :5,10s/antigo/novo/g      = substituir nas linhas 5-10

  # Exemplos práticos:
  # :%s/http/https/g          = trocar http por https
  # :%s/	/  /g               = trocar tabs por 2 espaços
  # :%s/s+$//g              = remover espaços no final das linhas
  # :%s/^/#/g                 = comentar todas as linhas (adicionar # no início)

  # Regex no Vim
  # :%s/d+/NUMERO/g        = trocar todos os números
  # :%s/^s*
//g             = remover linhas em branco`}),a.jsx("h2",{children:"5. Configuração (.vimrc)"}),a.jsx(r,{title:"Configurar o Vim",code:`# Criar/editar ~/.vimrc
  vim ~/.vimrc

  # Configuração recomendada:
  " Ativar syntax highlighting
  syntax on

  " Mostrar números de linha
  set number
  set relativenumber

  " Tabs e indentação
  set tabstop=4
  set shiftwidth=4
  set expandtab
  set autoindent
  set smartindent

  " Busca
  set hlsearch       " Destacar resultados
  set incsearch      " Busca incremental
  set ignorecase     " Ignorar maiúsculas
  set smartcase      " Exceto se digitar maiúscula

  " Visual
  set cursorline     " Destacar linha do cursor
  set showmatch      " Mostrar parêntese correspondente
  set wildmenu       " Menu de autocompletar para comandos
  set laststatus=2   " Sempre mostrar barra de status
  set scrolloff=8    " Manter 8 linhas de contexto

  " Comportamento
  set mouse=a        " Habilitar mouse
  set clipboard=unnamedplus  " Usar clipboard do sistema
  set encoding=utf-8
  set noswapfile     " Não criar arquivos .swp
  set nobackup

  " Atalhos personalizados
  let mapleader = " "           " Leader = espaço
  nnoremap <leader>w :w<CR>     " Espaço+w = salvar
  nnoremap <leader>q :q<CR>     " Espaço+q = sair
  nnoremap <leader>e :Ex<CR>    " Espaço+e = explorador de arquivos`}),a.jsx("h2",{children:"6. Splits e Tabs"}),a.jsx(r,{title:"Trabalhar com múltiplos arquivos",code:`# Dividir a tela (splits)
  :split arquivo.txt    " Divisão horizontal
  :vsplit arquivo.txt   " Divisão vertical
  # Atalhos:
  # Ctrl+w s   = split horizontal
  # Ctrl+w v   = split vertical
  # Ctrl+w w   = alternar entre splits
  # Ctrl+w h/j/k/l = mover para split esquerda/baixo/cima/direita
  # Ctrl+w q   = fechar split
  # Ctrl+w =   = igualar tamanho dos splits

  # Tabs
  :tabnew arquivo.txt   " Abrir em nova tab
  :tabnext              " Próxima tab (gt)
  :tabprev              " Tab anterior (gT)
  :tabclose             " Fechar tab

  # Explorador de arquivos embutido
  :Ex                   " Abrir explorador no diretório atual
  :Sex                  " Split + explorador
  :Vex                  " Vsplit + explorador`}),a.jsx("h2",{children:"Troubleshooting"}),a.jsx(r,{title:"Problemas comuns com Vim",code:`# "Estou preso no Vim! Como sair?"
  # Pressione ESC (várias vezes se necessário)
  # Depois: :q!    (sair sem salvar)
  # Ou:     :wq    (salvar e sair)
  # Ou:     ZZ     (salvar e sair)

  # Colei texto e ficou todo indentado errado
  # Ativar modo paste antes de colar:
  :set paste
  # Colar o texto
  # Desativar:
  :set nopaste

  # Vim não tem cores/syntax highlighting
  :syntax on
  # Instalar Vim completo:
  sudo apt install -y vim     # Ao invés de vim-tiny

  # Clipboard não funciona (Ctrl+C/V)
  sudo apt install -y vim-gtk3   # Vim com suporte a clipboard
  # No .vimrc: set clipboard=unnamedplus

  # Neovim — alternativa moderna ao Vim
  sudo apt install -y neovim
  nvim arquivo.txt
  # Mesmos comandos, mas com melhor padrão e plugins modernos`}),a.jsxs(o,{type:"info",title:"Vim vs Neovim vs Nano",children:[a.jsx("strong",{children:"Nano"})," é o mais fácil (ideal para edições rápidas).",a.jsx("strong",{children:"Vim"})," é o mais poderoso e universal (disponível em todo servidor).",a.jsx("strong",{children:"Neovim"})," é o Vim modernizado (melhor para desenvolvimento). Para administração de servidores, saber o básico do Vim é essencial."]})]})}export{l as default};

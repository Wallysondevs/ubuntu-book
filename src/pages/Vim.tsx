import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";

  export default function Vim() {
    return (
      <PageContainer
        title="Vim — Editor de Texto no Terminal"
        subtitle="Guia completo do Vim no Ubuntu: modos, navegação, edição, busca, substituição, configuração, plugins e atalhos essenciais."
        difficulty="intermediario"
        timeToRead="30 min"
      >
        <AlertBox type="info" title="Pré-requisitos">
          Ubuntu com terminal aberto. Vim já vem instalado por padrão (versão tiny);
          para a versão completa: <code>sudo apt install vim</code>.
        </AlertBox>

        <h2>Glossário rápido</h2>
        <p>
          <strong>Modo</strong> — Vim é modal. Os 4 principais: Normal (navegação), Insert (digitação),
          Visual (seleção), Command-line (<code>:</code> comandos).
        </p>
        <p>
          <strong>Buffer</strong> — arquivo aberto em memória. Você pode ter vários simultaneamente.
        </p>
        <p>
          <strong>~/.vimrc</strong> — arquivo de configuração pessoal do Vim.
        </p>
        <p>
          <strong>Registrador</strong> — "área de transferência" nomeada do Vim. <code>"ay</code>
          copia para o registrador <code>a</code>.
        </p>

        <p>
          O <strong>Vim</strong> (Vi IMproved) é o editor de texto mais poderoso do terminal.
          Está disponível em praticamente todo servidor Linux, tornando-o essencial para
          administradores de sistema. Sua curva de aprendizado é íngreme, mas uma vez
          dominado, é incrivelmente rápido e eficiente.
        </p>

        <h2>1. Modos do Vim</h2>
        <CodeBlock
          title="Entender os modos do Vim"
          code={`# O Vim tem 3 modos principais:

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
  vim arquivo1 arquivo2    # Abrir múltiplos arquivos`}
        />

        <h2>2. Navegação</h2>
        <CodeBlock
          title="Mover o cursor eficientemente"
          code={`# === MOVIMENTO BÁSICO (modo Normal) ===
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
  # #       = buscar a palavra sob o cursor (anterior)`}
        />

        <h2>3. Edição</h2>
        <CodeBlock
          title="Comandos de edição essenciais"
          code={`# === DELETAR ===
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
  # guu   = toda a linha em minúscula`}
        />

        <h2>4. Busca e Substituição</h2>
        <CodeBlock
          title="Buscar e substituir texto"
          code={`# Buscar
  # /texto   = buscar para frente
  # ?texto   = buscar para trás
  # n        = próxima ocorrência
  # N        = ocorrência anterior
  # /\cTexto = busca case-insensitive

  # Substituir (modo Command)
  # :s/antigo/novo/           = substituir primeiro na linha
  # :s/antigo/novo/g          = substituir todos na linha
  # :%s/antigo/novo/g         = substituir em todo o arquivo
  # :%s/antigo/novo/gc        = substituir com confirmação
  # :5,10s/antigo/novo/g      = substituir nas linhas 5-10

  # Exemplos práticos:
  # :%s/http/https/g          = trocar http por https
  # :%s/\t/  /g               = trocar tabs por 2 espaços
  # :%s/\s\+$//g              = remover espaços no final das linhas
  # :%s/^/#/g                 = comentar todas as linhas (adicionar # no início)

  # Regex no Vim
  # :%s/\d\+/NUMERO/g        = trocar todos os números
  # :%s/^\s*\n//g             = remover linhas em branco`}
        />

        <h2>5. Configuração (.vimrc)</h2>
        <CodeBlock
          title="Configurar o Vim"
          code={`# Criar/editar ~/.vimrc
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
  nnoremap <leader>e :Ex<CR>    " Espaço+e = explorador de arquivos`}
        />

        <h2>6. Splits e Tabs</h2>
        <CodeBlock
          title="Trabalhar com múltiplos arquivos"
          code={`# Dividir a tela (splits)
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
  :Vex                  " Vsplit + explorador`}
        />

        <h2>Troubleshooting</h2>
        <CodeBlock
          title="Problemas comuns com Vim"
          code={`# "Estou preso no Vim! Como sair?"
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
  # Mesmos comandos, mas com melhor padrão e plugins modernos`}
        />

        <AlertBox type="info" title="Vim vs Neovim vs Nano">
          <strong>Nano</strong> é o mais fácil (ideal para edições rápidas).
          <strong>Vim</strong> é o mais poderoso e universal (disponível em todo servidor).
          <strong>Neovim</strong> é o Vim modernizado (melhor para desenvolvimento).
          Para administração de servidores, saber o básico do Vim é essencial.
        </AlertBox>
      </PageContainer>
    );
  }
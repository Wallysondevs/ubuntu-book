import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";

  export default function VSCode() {
    return (
      <PageContainer
        title="Visual Studio Code no Ubuntu"
        subtitle="Instalação, configuração, extensões essenciais, atalhos de teclado, terminal integrado, debug, Git integrado e dicas de produtividade."
        difficulty="iniciante"
        timeToRead="30 min"
      >
        <AlertBox type="info" title="Pré-requisitos">
          Ubuntu Desktop, <code>sudo</code>. Recomendado instalar via repo oficial Microsoft (assim o <code>apt</code> atualiza junto).
        </AlertBox>

        <h2>Glossário rápido</h2>
        <p>
          <strong>VS Code</strong> — editor de código gratuito da Microsoft, baseado em Electron. Open source (MIT).
        </p>
        <p>
          <strong>VSCodium</strong> — rebuild de código aberto sem telemetria Microsoft.
        </p>
        <p>
          <strong>Extensions</strong> — plugins para linguagens, temas e ferramentas. Marketplace integrado.
        </p>
        <p>
          <strong>Remote SSH</strong> — editar arquivos em servidor remoto como se fossem locais.
        </p>
        <p>
          <strong>settings.json</strong> — config em JSON — sincroniza com sua conta.
        </p>

        <p>
          O <strong>Visual Studio Code</strong> (VS Code) é o editor de código mais popular do
          mundo — gratuito, open source (pela Microsoft) e extremamente extensível. Suporta
          praticamente todas as linguagens de programação, tem terminal integrado, debug visual,
          controle Git nativo e milhares de extensões.
        </p>

        <h2>1. Instalação</h2>
        <CodeBlock
          title="Instalar o VS Code no Ubuntu"
          code={`# Método 1: Via repositório oficial da Microsoft (recomendado)
  # Adicionar a chave GPG e o repositório
  wget -qO- https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor > packages.microsoft.gpg
  sudo install -D -o root -g root -m 644 packages.microsoft.gpg /etc/apt/keyrings/packages.microsoft.gpg
  echo "deb [arch=amd64 signed-by=/etc/apt/keyrings/packages.microsoft.gpg] https://packages.microsoft.com/repos/code stable main" | sudo tee /etc/apt/sources.list.d/vscode.list
  sudo apt update
  sudo apt install -y code

  # Método 2: Via Snap (mais simples)
  sudo snap install code --classic

  # Método 3: Via .deb direto
  wget -O vscode.deb "https://code.visualstudio.com/sha/download?build=stable&os=linux-deb-x64"
  sudo dpkg -i vscode.deb
  sudo apt install -f   # Instalar dependências faltantes

  # Abrir o VS Code
  code                    # Abrir vazio
  code .                  # Abrir a pasta atual
  code arquivo.py         # Abrir um arquivo
  code --diff a.txt b.txt # Comparar dois arquivos

  # Verificar a versão
  code --version`}
        />

        <h2>2. Extensões Essenciais</h2>
        <CodeBlock
          title="Instalar extensões populares"
          code={`# Instalar extensões via terminal
  code --install-extension ms-python.python           # Python
  code --install-extension ms-vscode.cpptools         # C/C++
  code --install-extension dbaeumer.vscode-eslint      # ESLint
  code --install-extension esbenp.prettier-vscode      # Prettier
  code --install-extension eamodio.gitlens             # Git avançado
  code --install-extension ms-azuretools.vscode-docker # Docker
  code --install-extension ms-vscode-remote.remote-ssh # SSH remoto
  code --install-extension bradlc.vscode-tailwindcss   # Tailwind CSS
  code --install-extension formulahendry.auto-rename-tag # Auto rename tags
  code --install-extension christian-kohler.path-intellisense # Path autocomplete

  # Extensões para aparência
  code --install-extension dracula-theme.theme-dracula # Tema Dracula
  code --install-extension pkief.material-icon-theme   # Ícones Material
  code --install-extension zhuangtongfa.material-theme  # One Dark Pro

  # Extensões para produtividade
  code --install-extension usernamehw.errorlens        # Erros inline
  code --install-extension streetsidesoftware.code-spell-checker # Corretor ortográfico
  code --install-extension wayou.vscode-todo-highlight # Destacar TODO/FIXME

  # Listar extensões instaladas
  code --list-extensions

  # Desinstalar extensão
  code --uninstall-extension nome-da-extensao`}
        />

        <h2>3. Atalhos de Teclado Essenciais</h2>
        <CodeBlock
          title="Atalhos mais úteis do VS Code"
          code={`# === GERAL ===
  # Ctrl+Shift+P    → Paleta de Comandos (o mais importante!)
  # Ctrl+P          → Abrir arquivo por nome (Quick Open)
  # Ctrl+Shift+N    → Nova janela
  # Ctrl+,          → Configurações
  # Ctrl+\`          → Toggle terminal integrado

  # === EDIÇÃO ===
  # Ctrl+D          → Selecionar próxima ocorrência
  # Ctrl+Shift+L    → Selecionar TODAS as ocorrências
  # Alt+↑/↓         → Mover linha para cima/baixo
  # Shift+Alt+↑/↓   → Duplicar linha para cima/baixo
  # Ctrl+Shift+K    → Deletar linha inteira
  # Ctrl+/          → Comentar/descomentar linha
  # Ctrl+Shift+A    → Comentar bloco
  # Ctrl+L          → Selecionar linha inteira
  # Ctrl+Shift+Enter → Inserir linha acima

  # === MULTI-CURSOR ===
  # Alt+Click       → Adicionar cursor onde clicar
  # Ctrl+Alt+↑/↓    → Adicionar cursor acima/abaixo
  # Ctrl+D          → Selecionar próxima ocorrência (multi-cursor)

  # === NAVEGAÇÃO ===
  # Ctrl+G          → Ir para linha
  # Ctrl+Shift+O    → Ir para símbolo no arquivo
  # F12             → Ir para definição
  # Alt+F12         → Peek definição (popup)
  # Shift+F12       → Encontrar todas as referências
  # Ctrl+Tab        → Alternar entre arquivos abertos
  # Ctrl+B          → Toggle sidebar

  # === BUSCA ===
  # Ctrl+F          → Buscar no arquivo
  # Ctrl+H          → Buscar e substituir
  # Ctrl+Shift+F    → Buscar em todos os arquivos
  # Ctrl+Shift+H    → Substituir em todos os arquivos`}
        />

        <h2>4. Configurações Recomendadas</h2>
        <CodeBlock
          title="settings.json — configurações do VS Code"
          code={`# Abrir settings.json: Ctrl+Shift+P → "Open User Settings (JSON)"

  # Configurações recomendadas:
  {
    "editor.fontSize": 14,
    "editor.fontFamily": "'JetBrains Mono', 'Fira Code', monospace",
    "editor.fontLigatures": true,
    "editor.tabSize": 2,
    "editor.wordWrap": "on",
    "editor.minimap.enabled": false,
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.bracketPairColorization.enabled": true,
    "editor.guides.bracketPairs": true,
    "editor.stickyScroll.enabled": true,
    "editor.linkedEditing": true,

    "files.autoSave": "onFocusChange",
    "files.trimTrailingWhitespace": true,
    "files.insertFinalNewline": true,

    "terminal.integrated.fontSize": 13,
    "terminal.integrated.defaultProfile.linux": "bash",

    "workbench.colorTheme": "One Dark Pro",
    "workbench.iconTheme": "material-icon-theme",
    "workbench.startupEditor": "none",

    "explorer.confirmDelete": false,
    "explorer.confirmDragAndDrop": false,

    "git.autofetch": true,
    "git.confirmSync": false,

    "emmet.includeLanguages": {
      "javascript": "javascriptreact"
    }
  }

  # Instalar fontes com ligatures (bonito para código)
  sudo apt install -y fonts-firacode
  # Ou baixar JetBrains Mono: jetbrains.com/mono`}
        />

        <h2>5. Terminal Integrado e Remote SSH</h2>
        <CodeBlock
          title="Usar o terminal e acesso remoto"
          code={`# Abrir terminal: Ctrl+\` ou Ctrl+Shift+\`
  # Criar novo terminal: Ctrl+Shift+\`
  # Dividir terminal: Ctrl+Shift+5
  # Alternar entre terminais: Ctrl+PageUp/PageDown

  # Mudar shell padrão do terminal
  # Ctrl+Shift+P → "Terminal: Select Default Profile"
  # Escolha: bash, zsh, fish, etc.

  # === REMOTE SSH (editar código em servidor remoto) ===
  # 1. Instalar extensão Remote SSH
  code --install-extension ms-vscode-remote.remote-ssh

  # 2. Ctrl+Shift+P → "Remote-SSH: Connect to Host"
  # 3. Digite: usuario@servidor
  # 4. O VS Code instala um servidor remoto e abre normalmente

  # Configurar hosts SSH no VS Code:
  # Ctrl+Shift+P → "Remote-SSH: Open SSH Configuration File"
  # Adicione:
  # Host meu-servidor
  #   HostName 192.168.1.100
  #   User usuario
  #   IdentityFile ~/.ssh/id_rsa

  # === DEV CONTAINERS ===
  # Desenvolvimento dentro de containers Docker
  code --install-extension ms-vscode-remote.remote-containers
  # O VS Code roda dentro do container com todas as deps

  # === WSL (Windows Subsystem for Linux) ===
  # Se usa Windows + WSL:
  code --install-extension ms-vscode-remote.remote-wsl`}
        />

        <h2>6. Debug Visual</h2>
        <CodeBlock
          title="Configurar debug no VS Code"
          code={`# O VS Code tem debug integrado para muitas linguagens
  # F5           → Iniciar debug
  # F9           → Toggle breakpoint
  # F10          → Step Over (próxima linha)
  # F11          → Step Into (entrar na função)
  # Shift+F11    → Step Out (sair da função)
  # Shift+F5     → Parar debug

  # Para Python: instale a extensão Python
  # Para Node.js: funciona out of the box
  # Para C/C++: instale a extensão C/C++

  # Configurar debug: criar .vscode/launch.json
  # Ctrl+Shift+P → "Debug: Open launch.json"

  # Exemplo para Node.js:
  {
    "version": "0.2.0",
    "configurations": [
      {
        "type": "node",
        "request": "launch",
        "name": "Debug App",
        "program": "app.js",
        "console": "integratedTerminal"
      }
    ]
  }

  # Exemplo para Python:
  {
    "version": "0.2.0",
    "configurations": [
      {
        "name": "Python: Current File",
        "type": "debugpy",
        "request": "launch",
        "program": "main.py",
        "console": "integratedTerminal"
      }
    ]
  }`}
        />

        <h2>Troubleshooting</h2>
        <CodeBlock
          title="Problemas comuns com VS Code"
          code={`# VS Code lento ou travando
  # Desabilitar extensões desnecessárias
  # Ctrl+Shift+P → "Extensions: Show Running Extensions"
  # Veja quais consomem mais tempo de ativação

  # Erro "ENOSPC: System limit for file watchers reached"
  echo "fs.inotify.max_user_watches=524288" | sudo tee -a /etc/sysctl.conf
  sudo sysctl -p

  # VS Code não abre (tela preta)
  # Desabilitar GPU:
  code --disable-gpu
  # Ou: adicione "--disable-gpu" ao atalho

  # Extensões não funcionam
  # Limpar cache:
  rm -rf ~/.vscode/extensions/.cache
  # Recarregar: Ctrl+Shift+P → "Developer: Reload Window"

  # Resetar todas as configurações
  rm -rf ~/.config/Code/User/settings.json
  # Ou: Ctrl+Shift+P → "Preferences: Open User Settings (JSON)" → apagar tudo

  # Instalar a versão open source (sem telemetria da Microsoft)
  sudo snap install codium --classic
  # VSCodium: mesma interface, sem rastreamento`}
        />

        <AlertBox type="info" title="VS Code vs outros editores">
          Alternativas populares no Linux: <strong>Neovim</strong> (para quem gosta do Vim),
          <strong>Sublime Text</strong> (rápido e leve), <strong>JetBrains IDEs</strong>
          (PyCharm, WebStorm — mais pesados mas com mais features built-in). O VS Code
          é o equilíbrio entre leveza e funcionalidades.
        </AlertBox>
      </PageContainer>
    );
  }
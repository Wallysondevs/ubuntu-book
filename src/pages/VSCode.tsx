import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function VSCode() {
  return (
    <PageContainer
      title="VS Code no Ubuntu"
      subtitle="Instale e configure o Visual Studio Code no Ubuntu com extensões essenciais e produtividade máxima."
      difficulty="iniciante"
      timeToRead="15 min"
    >
      <h2>1. Instalação</h2>
      <CodeBlock title="Instalando VS Code no Ubuntu" code={`# Método 1 — Via repositório Microsoft (recomendado):
wget -qO- https://packages.microsoft.com/keys/microsoft.asc | \
    gpg --dearmor | \
    sudo tee /usr/share/keyrings/packages.microsoft.gpg

echo "deb [arch=amd64,arm64 signed-by=/usr/share/keyrings/packages.microsoft.gpg] \
    https://packages.microsoft.com/repos/code stable main" | \
    sudo tee /etc/apt/sources.list.d/vscode.list

sudo apt update && sudo apt install code

# Método 2 — Via Snap:
sudo snap install code --classic

# Abrir VS Code:
code .               # Abrir no diretório atual
code arquivo.txt     # Abrir arquivo específico`} />

      <h2>2. Extensões Essenciais</h2>
      <CodeBlock title="Instalando extensões via linha de comando" code={`# Instalar extensões pela linha de comando:
code --install-extension ms-python.python               # Python
code --install-extension ms-vscode.cpptools            # C/C++
code --install-extension redhat.java                   # Java
code --install-extension bradlc.vscode-tailwindcss     # Tailwind CSS
code --install-extension dbaeumer.vscode-eslint        # ESLint
code --install-extension esbenp.prettier-vscode        # Prettier
code --install-extension eamodio.gitlens               # GitLens
code --install-extension ms-vscode-remote.remote-ssh   # Remote SSH
code --install-extension ms-vscode.remote-containers   # Dev Containers
code --install-extension github.copilot                # GitHub Copilot

# Ver extensões instaladas:
code --list-extensions

# Desinstalar:
code --uninstall-extension nome.extensao`} />

      <h2>3. Configurações e Atalhos</h2>
      <CodeBlock title="Produtividade no VS Code" code={`# Atalhos essenciais (Linux):
# Ctrl+P          — Abrir arquivo (fuzzy search)
# Ctrl+Shift+P    — Command palette
# Ctrl+BACKTICK  — Abrir terminal integrado
# Ctrl+B          — Toggle sidebar
# Ctrl+D          — Selecionar próxima ocorrência
# Alt+↑/↓         — Mover linha
# Ctrl+/          — Comentar linha
# F2              — Renomear variável
# F12             — Ir para definição
# Ctrl+.          — Quick fix
# Ctrl+Shift+L    — Selecionar todas as ocorrências

# Settings.json essenciais:
# Ctrl+Shift+P → Open User Settings (JSON)
{
    "editor.fontSize": 14,
    "editor.tabSize": 2,
    "editor.formatOnSave": true,
    "editor.wordWrap": "on",
    "editor.minimap.enabled": false,
    "terminal.integrated.defaultProfile.linux": "zsh",
    "files.autoSave": "afterDelay",
    "files.autoSaveDelay": 1000
}`} />

      <h2>4. VS Code para SSH Remoto</h2>
      <CodeBlock title="Desenvolvimento em servidor remoto" code={`# Instalar extensão Remote-SSH:
code --install-extension ms-vscode-remote.remote-ssh

# Configurar SSH em ~/.ssh/config:
Host meu-servidor
    HostName 192.168.1.100
    User ubuntu
    IdentityFile ~/.ssh/id_rsa

# Conectar no VS Code:
# Ctrl+Shift+P → Remote-SSH: Connect to Host
# Selecionar meu-servidor

# Uma vez conectado, todas as extensões funcionam remotamente!
# Você edita arquivos do servidor como se fossem locais.`} />
    </PageContainer>
  );
}

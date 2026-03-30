import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function Wine() {
  return (
    <PageContainer
      title="Wine — Rodar Programas Windows"
      subtitle="Use Wine para executar aplicativos Windows no Ubuntu sem virtualização."
      difficulty="intermediario"
      timeToRead="15 min"
    >
      <p>
        O <strong>Wine</strong> (Wine Is Not an Emulator) implementa a API do Windows
        no Linux, permitindo rodar muitos programas Windows sem precisar de Windows
        instalado ou de uma máquina virtual.
      </p>

      <h2>1. Instalação do Wine</h2>
      <CodeBlock title="Instalando Wine no Ubuntu" code={`# Habilitar repositório de 32 bits (necessário):
sudo dpkg --add-architecture i386

# Repositório oficial do Wine (versão mais recente):
sudo mkdir -pm755 /etc/apt/keyrings
sudo wget -O /etc/apt/keyrings/winehq-archive.key \
    https://dl.winehq.org/wine-builds/winehq.key

sudo wget -NP /etc/apt/sources.list.d/ \
    https://dl.winehq.org/wine-builds/ubuntu/dists/\$(lsb_release -cs)/winehq-\$(lsb_release -cs).sources

sudo apt update

# Instalar Wine (stable):
sudo apt install --install-recommends winehq-stable

# Verificar:
wine --version`} />

      <h2>2. Configuração e Uso</h2>
      <CodeBlock title="Configurando e usando o Wine" code={`# Configuração inicial (cria ~/.wine):
winecfg
# Configure versão do Windows, drives, etc.

# Executar um .exe:
wine programa.exe
wine "C:\\Caminho\\programa.exe"

# Ver programas instalados no Wine:
wine uninstaller

# Instalar winetricks (utilitário para componentes do Windows):
sudo apt install winetricks

# Instalar bibliotecas necessárias:
winetricks d3dx9             # DirectX 9
winetricks vcrun2019         # Visual C++ Redistributable 2019
winetricks dotnet48          # .NET Framework 4.8
winetricks corefonts         # Fontes Microsoft

# Instalação interativa:
winetricks --gui`} />

      <h2>3. PlayOnLinux — Interface Gráfica para Wine</h2>
      <CodeBlock title="PlayOnLinux facilita o uso do Wine" code={`# Instalar PlayOnLinux:
sudo apt install playonlinux

# Abrir:
playonlinux

# Funcionalidades:
# - Instalar programas Windows com um clique
# - Cada programa tem seu próprio ambiente Wine isolado
# - Programas pré-configurados: MS Office, Photoshop, etc.

# Compatibilidade de programas:
# https://appdb.winehq.org — banco de dados de compatibilidade
# Categorias: Platinum, Gold, Silver, Bronze, Garbage

# Alternativas modernas:
# Bottles — https://usebottles.com (mais moderno que PlayOnLinux)
sudo apt install bottles  # ou via Flatpak

# Para jogos, prefira Proton/Lutris!`} />
    </PageContainer>
  );
}

import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function Gaming() {
  return (
    <PageContainer
      title="Gaming no Ubuntu"
      subtitle="Jogue no Ubuntu: Steam, Proton, Wine, Lutris e drivers de GPU para a melhor experiência de jogos."
      difficulty="intermediario"
      timeToRead="20 min"
    >
      <p>
        O Ubuntu é uma plataforma cada vez mais capaz para jogos graças ao
        <strong>Proton</strong> (Valve), que permite rodar jogos Windows nativamente.
        Com as configurações certas, a experiência é excelente.
      </p>

      <h2>1. Drivers de GPU — O Mais Importante</h2>
      <AlertBox type="warning">
        Instale os drivers corretos ANTES de tudo. Drivers ruins causam crashes, baixo
        desempenho e incompatibilidade com jogos.
      </AlertBox>
      <CodeBlock title="Instalando drivers de GPU" code={`# NVIDIA — Drivers proprietários (melhor desempenho):
# Método 1 — Utilitário de drivers adicionais do Ubuntu:
sudo ubuntu-drivers devices    # Ver drivers disponíveis
sudo ubuntu-drivers autoinstall  # Instalar recomendado

# Método 2 — Instalar versão específica:
sudo apt install nvidia-driver-535    # Ver versão atual em nvidia.com

# Reiniciar após instalar!

# Verificar instalação NVIDIA:
nvidia-smi
nvidia-settings    # Interface gráfica

# AMD — Drivers AMDGPU (já incluídos no kernel):
# Apenas instalar vulkan:
sudo apt install mesa-vulkan-drivers vulkan-tools

# Verificar:
vulkaninfo | head -30
glxinfo | grep "OpenGL renderer"`} />

      <h2>2. Steam com Proton</h2>
      <CodeBlock title="Instalando Steam e configurando Proton" code={`# Habilitar repositório multiverse:
sudo add-apt-repository multiverse
sudo apt update

# Instalar Steam:
sudo apt install steam

# Configurar Proton no Steam:
# 1. Abra Steam → Configurações
# 2. Steam Play → Habilitar Steam Play para todos os títulos
# 3. Selecione "Proton Experimental" ou versão mais recente

# Instalar ProtonDB para ver compatibilidade:
# https://www.protondb.com — consultar antes de comprar

# ProtonGE (versão com mais correções):
# https://github.com/GloriousEggroll/proton-ge-custom/releases
# Extrair em: ~/.steam/root/compatibilitytools.d/

# Ver jogos compatíveis com Linux:
# Steam → Loja → Filtrar por: Linux

# Variáveis para melhorar desempenho:
# PROTON_NO_ESYNC=1       — desabilitar esync (para alguns jogos)
# DXVK_ASYNC=1            — renderização assíncrona
# MANGOHUD=1              — overlay de performance`} />

      <h2>3. Lutris — Plataforma de Jogos Universal</h2>
      <CodeBlock title="Instalando e usando o Lutris" code={`# Instalar Lutris:
sudo add-apt-repository ppa:lutris-team/lutris
sudo apt update && sudo apt install lutris

# Instalar dependências:
sudo apt install wine wine64 winetricks
sudo apt install libvulkan1 mesa-vulkan-drivers

# No Lutris você pode instalar:
# - Jogos do GOG (DRM-free)
# - Battle.net (Blizzard)
# - Epic Games Store
# - Jogos do itch.io
# - Emuladores (Nintendo, PlayStation, etc.)
# - Jogos antigos do CD/DVD

# Configurar runner específico:
# Lutris → Preferências → Runners → Wine → Instalar versão`} />

      <h2>4. MangoHud — Overlay de Performance</h2>
      <CodeBlock title="Monitorar FPS e performance durante jogos" code={`# Instalar MangoHud:
sudo apt install mangohud

# Usar com qualquer jogo:
mangohud jogo

# Com Steam (via Launch Options):
# MANGOHUD=1 %command%

# Com Lutris — em Preferências do jogo:
# Marcar: Show FPS / MangoHud

# Configurar o que mostrar:
mkdir -p ~/.config/MangoHud
cat > ~/.config/MangoHud/MangoHud.conf << 'EOF'
legacy_layout=false
position=top-left
fps
frame_timing
cpu_stats
gpu_stats
ram
vram
EOF`} />
    </PageContainer>
  );
}

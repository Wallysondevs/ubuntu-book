import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function AppImage() {
  return (
    <PageContainer
      title="AppImage — Apps Portáteis"
      subtitle="Como usar AppImages no Ubuntu: arquivos de aplicativo autocontidos que funcionam em qualquer distribuição Linux."
      difficulty="iniciante"
      timeToRead="10 min"
    >
      <p>
        <strong>AppImage</strong> é um formato de distribuição de software para Linux onde
        o aplicativo e todas as suas dependências estão em um único arquivo. Você baixa,
        torna executável e roda — sem instalar nada no sistema.
      </p>

      <h2>1. Usando AppImages</h2>
      <CodeBlock title="Executar um AppImage no Ubuntu" code={`# 1. Baixar o arquivo AppImage (extensão .AppImage)
wget https://exemplo.com/MeuApp-1.0.x86_64.AppImage

# 2. Tornar executável:
chmod +x MeuApp-1.0.x86_64.AppImage

# 3. Executar:
./MeuApp-1.0.x86_64.AppImage

# Dica: Se não abrir, você pode precisar instalar FUSE:
sudo apt install fuse libfuse2
# Em Ubuntu 22.04+:
sudo apt install libfuse2

# Apps populares disponíveis como AppImage:
# - Balena Etcher (gravar ISOs)
# - Appflowy (notas)
# - Obsidian (notas Markdown)
# - FreeTube (YouTube sem anúncios)
# Site: https://appimage.github.io/`} />

      <h2>2. Integração ao Sistema</h2>
      <CodeBlock title="Integrar AppImages ao menu do Ubuntu" code={`# Instalar AppImageLauncher (integra ao menu, atualizações, etc):
sudo add-apt-repository ppa:appimagelauncher-team/stable
sudo apt update
sudo apt install appimagelauncher

# Após instalar, ao abrir um AppImage pela primeira vez,
# ele pergunta se deseja integrar ao sistema.

# Sem AppImageLauncher — criar .desktop manualmente:
cat > ~/.local/share/applications/meuapp.desktop << 'EOF'
[Desktop Entry]
Name=Meu App
Exec=/home/usuario/Apps/MeuApp.AppImage
Icon=/home/usuario/Apps/meuapp.png
Type=Application
Categories=Utility;
EOF

# Copiar para pasta padrão de apps:
mkdir -p ~/Apps
mv MeuApp.AppImage ~/Apps/

# Atualizar menu:
update-desktop-database ~/.local/share/applications/`} />

      <h2>3. Comparação: APT vs Snap vs Flatpak vs AppImage</h2>
      <AlertBox type="info">
        Cada método tem suas vantagens. Use o que faz mais sentido para cada situação.
      </AlertBox>
      <CodeBlock title="Quando usar cada formato" code={`# APT (.deb):
# ✓ Integrado ao sistema, atualizações automáticas
# ✓ Mais leve (compartilha bibliotecas do sistema)
# ✗ Versões podem ser antigas nos repos oficiais

# Snap:
# ✓ Sandboxado, atualizações automáticas
# ✓ Versões recentes via Snapcraft
# ✗ Mais pesado, inicialização mais lenta

# Flatpak:
# ✓ Sandboxado, funciona em qualquer distro
# ✓ Flathub tem muitos apps
# ✗ Ocupa mais espaço (runtimes)

# AppImage:
# ✓ Portátil — um arquivo só
# ✓ Sem instalação, sem root
# ✓ Funciona em qualquer distro
# ✗ Sem atualizações automáticas
# ✗ Não compartilha libs com o sistema`} />
    </PageContainer>
  );
}

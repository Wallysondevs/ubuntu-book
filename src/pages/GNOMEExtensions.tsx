import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function GNOMEExtensions() {
  return (
    <PageContainer
      title="GNOME — Customização e Extensões"
      subtitle="Personalize o GNOME com extensões, temas, ícones e tweaks para o desktop Ubuntu perfeito."
      difficulty="iniciante"
      timeToRead="15 min"
    >
      <h2>1. GNOME Tweaks e Extensions</h2>
      <CodeBlock title="Instalando ferramentas de customização" code={`# GNOME Tweaks — ajustes avançados do GNOME:
sudo apt install gnome-tweaks
gnome-tweaks    # Abrir

# GNOME Extensions Manager — gerenciar extensões:
sudo apt install gnome-shell-extension-manager
# ou via Flatpak:
flatpak install flathub com.mattjakeman.ExtensionManager

# Habilitar suporte a extensões no navegador:
# Instale a extensão "GNOME Shell Integration" no Firefox/Chrome
# Então visite: https://extensions.gnome.org

# Via linha de comando:
sudo apt install gnome-shell-extensions
gnome-extensions list           # Ver extensões instaladas
gnome-extensions enable uuid    # Habilitar extensão
gnome-extensions disable uuid   # Desabilitar`} />

      <h2>2. Extensões Mais Populares</h2>
      <CodeBlock title="Extensões recomendadas para GNOME" code={`# Instalar via GNOME Extensions Manager ou extensions.gnome.org:

# Dash to Dock / Dash to Panel
# → Transforma o dash em dock ou painel sempre visível

# Blur my Shell
# → Efeito blur no painel e dock

# GSConnect
# → Integração com dispositivos Android (KDE Connect para GNOME)

# Clipboard Indicator
# → Histórico do clipboard

# Just Perfection
# → Customização avançada do GNOME Shell

# AppIndicator Support
# → Ícones da bandeja do sistema

# Caffeine
# → Evitar suspensão automática

# ArcMenu
# → Menu de aplicativos estilo Windows/macOS

# Extension instalar pelo terminal (se disponível no apt):
sudo apt install gnome-shell-extension-dashtodock
sudo apt install gnome-shell-extension-gsconnect`} />

      <h2>3. Temas e Ícones</h2>
      <CodeBlock title="Aplicando temas e ícones no GNOME" code={`# Instalar temas disponíveis no apt:
sudo apt install gnome-themes-extra    # Adwaita Dark e outros
sudo apt install papirus-icon-theme    # Ícones Papirus (populares)
sudo apt install numix-icon-theme      # Ícones Numix

# Temas populares (instalar manualmente):
# Dracula: https://draculatheme.com/gtk
# Nordic: https://github.com/EliverLara/Nordic
# WhiteSur (macOS style): https://github.com/vinceliuice/WhiteSur-gtk-theme

# Instalar tema manualmente:
# Coloque em: ~/.local/share/themes/     (usuário)
# ou: /usr/share/themes/                 (sistema)

# Coloque ícones em:
# ~/.local/share/icons/                  (usuário)
# ou: /usr/share/icons/                  (sistema)

# Aplicar tema via GNOME Tweaks:
# Tweaks → Appearance → Tema do shell, Aplicativos, Ícones

# Via linha de comando:
gsettings set org.gnome.desktop.interface gtk-theme "Dracula"
gsettings set org.gnome.desktop.interface icon-theme "Papirus"
gsettings set org.gnome.desktop.interface cursor-theme "Bibata-Modern-Classic"
gsettings set org.gnome.desktop.interface color-scheme "prefer-dark"    # Modo escuro`} />
    </PageContainer>
  );
}

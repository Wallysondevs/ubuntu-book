import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function AmbientesAlternativos() {
  return (
    <PageContainer
      title="Ambientes Gráficos Alternativos"
      subtitle="Instale e configure KDE, XFCE, MATE, Cinnamon e outros desktops no Ubuntu."
      difficulty="iniciante"
      timeToRead="15 min"
    >
      <p>
        O Ubuntu usa <strong>GNOME</strong> como desktop padrão, mas você pode instalar
        outros ambientes. Cada um tem características diferentes de visual, consumo de
        recursos e funcionalidades.
      </p>

      <h2>1. KDE Plasma</h2>
      <AlertBox type="info">
        Kubuntu = Ubuntu + KDE. É o desktop mais customizável e rico em recursos.
      </AlertBox>
      <CodeBlock title="Instalando KDE Plasma" code={`# Instalar KDE Plasma completo:
sudo apt install kde-plasma-desktop

# Instalar aplicativos KDE também:
sudo apt install kubuntu-desktop    # KDE completo como no Kubuntu

# Escolher entre GDM (GNOME) e SDDM (KDE) ao instalar
# Para voltar ao SDDM depois:
sudo dpkg-reconfigure sddm

# Para alternar entre GNOME e KDE:
# Faça logout → na tela de login, clique no ícone de engrenagem
# Selecione a sessão desejada antes de entrar`} />

      <h2>2. XFCE — Leve e Rápido</h2>
      <CodeBlock title="Instalando XFCE" code={`# Ideal para computadores antigos ou com pouca RAM
# Xubuntu = Ubuntu + XFCE

# Instalar XFCE:
sudo apt install xfce4 xfce4-goodies

# Conjunto completo como Xubuntu:
sudo apt install xubuntu-desktop

# XFCE consome ~300-400MB de RAM vs GNOME ~1.5GB
# Muito mais rápido em máquinas antigas`} />

      <h2>3. MATE — GNOME 2 Modernizado</h2>
      <CodeBlock title="Instalando MATE" code={`# Ubuntu MATE = Ubuntu + MATE
# Interface tradicional, estável e leve

sudo apt install mate-desktop-environment
sudo apt install ubuntu-mate-desktop    # Conjunto completo`} />

      <h2>4. Cinnamon — Moderno e Familiar</h2>
      <CodeBlock title="Instalando Cinnamon" code={`# Desenvolvido pelo Linux Mint
# Interface familiar para usuários de Windows

sudo add-apt-repository ppa:linuxmint-daily-build-team/daily-builds
sudo apt update
sudo apt install cinnamon-desktop-environment

# Ubuntu Cinnamon (oficial a partir do Ubuntu 22.10):
sudo apt install ubuntucinnamon-desktop`} />

      <h2>5. Gerenciando Múltiplos Desktops</h2>
      <CodeBlock title="Gerenciar e remover ambientes gráficos" code={`# Ver qual display manager está ativo:
cat /etc/X11/default-display-manager
sudo systemctl status gdm3    # GNOME Display Manager
sudo systemctl status sddm    # KDE Display Manager
sudo systemctl status lightdm # LightDM

# Alterar display manager padrão:
sudo dpkg-reconfigure gdm3
# Escolha entre gdm3, sddm, lightdm

# Remover desktop alternativo (CUIDADO):
sudo apt remove xfce4
sudo apt autoremove

# Instalar versão mínima de um DE (sem apps extras):
sudo apt install --no-install-recommends kde-plasma-desktop`} />
    </PageContainer>
  );
}

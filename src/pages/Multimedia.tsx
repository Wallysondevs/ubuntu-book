import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function Multimedia() {
  return (
    <PageContainer
      title="Multimídia e Codecs"
      subtitle="Configure reprodução de vídeo, áudio, codecs proprietários e aplicativos multimídia no Ubuntu."
      difficulty="iniciante"
      timeToRead="12 min"
    >
      <h2>1. Codecs Proprietários</h2>
      <AlertBox type="info">
        Por padrão, o Ubuntu não inclui codecs proprietários (MP3, H.264, etc.)
        por questões de licença. Instale-os manualmente.
      </AlertBox>
      <CodeBlock title="Instalando codecs no Ubuntu" code={`# Instalar todos os codecs de uma vez:
sudo apt install ubuntu-restricted-extras

# Isso instala:
# - Codecs de vídeo: H.264, MPEG-4, etc.
# - Codecs de áudio: MP3, AAC, WMA
# - Fontes Microsoft (Arial, Times New Roman, etc.)
# - Flash (legado)
# - unrar (descompactar .rar)

# Para servidor/mínimo (apenas codecs de mídia):
sudo apt install gstreamer1.0-plugins-good \
    gstreamer1.0-plugins-bad \
    gstreamer1.0-plugins-ugly \
    gstreamer1.0-libav`} />

      <h2>2. Reprodutores de Mídia</h2>
      <CodeBlock title="Instalando players de vídeo e áudio" code={`# VLC — o mais completo:
sudo apt install vlc
# ou
sudo snap install vlc

# mpv — minimalista e poderoso:
sudo apt install mpv

# Reprodução de DVD:
sudo apt install libdvd-pkg
sudo dpkg-reconfigure libdvd-pkg

# Spotify:
sudo snap install spotify

# Rhythmbox (já instalado no Ubuntu):
# Para adicionar suporte a mais formatos:
sudo apt install rhythmbox-plugins

# Audacity (edição de áudio):
sudo apt install audacity`} />

      <h2>3. Áudio — PipeWire e PulseAudio</h2>
      <CodeBlock title="Gerenciando áudio no Ubuntu" code={`# Ubuntu 22.04+ usa PipeWire por padrão
# Ver sistema de áudio ativo:
pactl info | grep "Server Name"

# Controle de volume via linha de comando:
pactl list sinks short          # Ver dispositivos de saída
pactl set-sink-volume 0 75%     # Ajustar volume para 75%
pactl set-sink-mute 0 toggle    # Mudo/desmudo

# Instalar PavuControl (controle gráfico):
sudo apt install pavucontrol
pavucontrol

# Diagnóstico de áudio:
aplay -l                        # Listar placas de som
arecord -l                      # Listar microfones
speaker-test -c 2               # Testar saída de áudio`} />

      <h2>4. Streaming e Download</h2>
      <CodeBlock title="Baixar e fazer streaming de mídia" code={`# yt-dlp — baixar vídeos do YouTube e mais:
sudo apt install yt-dlp
# ou pip:
pip3 install yt-dlp

# Baixar vídeo:
yt-dlp "URL-do-youtube"

# Baixar apenas áudio (MP3):
yt-dlp -x --audio-format mp3 "URL"

# Melhor qualidade disponível:
yt-dlp -f "bestvideo+bestaudio" "URL"

# Atualizar yt-dlp:
yt-dlp -U

# OBS Studio (streaming/gravação de tela):
sudo apt install obs-studio

# Kdenlive (edição de vídeo):
sudo apt install kdenlive

# Handbrake (converter vídeos):
sudo apt install handbrake`} />
    </PageContainer>
  );
}

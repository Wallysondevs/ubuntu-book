import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function Hardware() {
  return (
    <PageContainer
      title="Informações de Hardware"
      subtitle="lshw, lscpu, lspci, lsusb, inxi — diagnosticando e monitorando o hardware do seu Ubuntu."
      difficulty="intermediario"
      timeToRead="18 min"
    >
      <p>
        O Ubuntu oferece diversas ferramentas para inspecionar hardware. Saber como
        identificar CPU, memória, placas de vídeo, discos e dispositivos USB é
        fundamental para diagnóstico, compra de drivers e otimização do sistema.
      </p>

      <h2>1. Visão Geral Completa — lshw e inxi</h2>
      <CodeBlock title="Relatório completo de hardware" code={`# lshw — lista TUDO com detalhes
sudo lshw                     # Saída completa (muito longa)
sudo lshw -short              # Resumo em tabela
sudo lshw -class disk         # Apenas discos
sudo lshw -class network      # Apenas rede
sudo lshw -class display      # Apenas GPU/vídeo

# Gerar relatório HTML do hardware:
sudo lshw -html > hardware-report.html

# inxi — visão amigável e compacta (instalar se necessário)
sudo apt install inxi

inxi -F                       # Relatório completo
inxi -C                       # CPU
inxi -G                       # GPU/vídeo
inxi -M                       # Motherboard
inxi -N                       # Rede
inxi -D                       # Discos
inxi -Fxz                     # Completo com extras, oculta dados pessoais`} />

      <h2>2. CPU — Processador</h2>
      <CodeBlock title="Informações detalhadas da CPU" code={`# Informações básicas:
lscpu
# Mostra: arquitetura, núcleos, threads, frequência, cache, flags

# Frequência atual de cada núcleo:
cat /proc/cpuinfo | grep "cpu MHz"

# Temperatura da CPU (instalar sensors):
sudo apt install lm-sensors
sudo sensors-detect          # Configurar na primeira vez (responda YES)
sensors                      # Ver temperaturas

# Ver governors de frequência (política de energia da CPU):
cat /sys/devices/system/cpu/cpu*/cpufreq/scaling_governor
# performance = máxima frequência sempre
# powersave   = economia de energia
# ondemand    = ajusta conforme demanda

# Alterar para performance:
echo "performance" | sudo tee /sys/devices/system/cpu/cpu*/cpufreq/scaling_governor`} />

      <h2>3. Memória RAM</h2>
      <CodeBlock title="Inspecionando a memória" code={`# Uso de memória:
free -h                       # Resumo de RAM e swap

# Informações detalhadas:
sudo dmidecode -t memory      # Tipo, velocidade e slots da RAM
cat /proc/meminfo             # Dados brutos do kernel

# Ver pentes instalados:
sudo dmidecode -t memory | grep -E "(Size|Type|Speed|Manufacturer)"

# Analisar uso por processo:
smem -r -k | head -20         # Instalar: sudo apt install smem
ps aux --sort=-%mem | head -15 # Ver mais consumidores de RAM`} />

      <h2>4. GPU e Vídeo</h2>
      <CodeBlock title="Informações sobre placa de vídeo" code={`# Ver GPU instalada:
lspci | grep -i vga
lspci | grep -i display

# Para NVIDIA:
nvidia-smi                    # Detalhes GPU, temperatura, uso
nvidia-settings               # Interface gráfica de configuração

# Para AMD:
sudo apt install radeontop
radeontop

# Para Intel:
sudo apt install intel-gpu-tools
sudo intel_gpu_top

# Driver em uso:
lspci -k | grep -A 2 -E "(VGA|3D|Display)"

# Resolução e telas conectadas:
xrandr                        # Via X11
wlr-randr                     # Via Wayland`} />

      <h2>5. Discos e Armazenamento</h2>
      <CodeBlock title="Diagnóstico de discos" code={`# Listar discos e partições:
lsblk                         # Árvore de discos
lsblk -o NAME,SIZE,TYPE,FSTYPE,MOUNTPOINT

# Informações SMART do disco (saúde):
sudo apt install smartmontools
sudo smartctl -a /dev/sda     # Relatório completo
sudo smartctl -H /dev/sda     # Apenas status de saúde
sudo smartctl -t short /dev/sda  # Executar teste rápido

# Temperatura do SSD:
sudo smartctl -A /dev/nvme0 | grep -i temp

# Informações do disco:
sudo hdparm -I /dev/sda       # Modelo, serial, capacidades
sudo fdisk -l                  # Partições de todos os discos`} />

      <h2>6. Dispositivos USB e PCI</h2>
      <CodeBlock title="USB e dispositivos PCI" code={`# Listar dispositivos USB:
lsusb                         # Lista simples
lsusb -v                      # Detalhado (verboso)
lsusb -t                      # Em formato de árvore

# Listar dispositivos PCI:
lspci                         # Lista simples
lspci -v                      # Detalhado
lspci -k                      # Com drivers do kernel em uso

# Monitorar conexão/desconexão de USB em tempo real:
sudo udevadm monitor

# Ver eventos recentes de hardware:
dmesg | grep -i usb | tail -20
journalctl -k | grep -i usb`} />
    </PageContainer>
  );
}

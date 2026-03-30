import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function Kernel() {
  return (
    <PageContainer
      title="O Kernel Linux"
      subtitle="Entenda o núcleo do sistema: módulos, versões, parâmetros e como interagir com o kernel no Ubuntu."
      difficulty="avancado"
      timeToRead="25 min"
    >
      <p>
        O <strong>kernel</strong> é o núcleo do sistema operacional — o programa que fica entre o hardware e
        os aplicativos, gerenciando memória, processos, dispositivos e chamadas de sistema.
        O Ubuntu usa o <strong>Linux kernel</strong>, desenvolvido por Linus Torvalds desde 1991.
      </p>

      <h2>1. Verificando a Versão do Kernel</h2>
      <CodeBlock title="Informações sobre o kernel instalado" code={`# Ver a versão do kernel em uso
uname -r
# Exemplo: 6.8.0-51-generic

# Informações completas do sistema
uname -a
# Linux hostname 6.8.0-51-generic #52-Ubuntu SMP PREEMPT_DYNAMIC...

# Versão do kernel (formato limpo)
cat /proc/version

# Ver todos os kernels instalados no Ubuntu
dpkg --list | grep linux-image
# ou
ls /boot/vmlinuz-*

# Ver qual kernel está sendo usado no boot (GRUB)
grep GRUB_DEFAULT /etc/default/grub`} />

      <h2>2. Módulos do Kernel</h2>
      <p>
        Módulos são partes do kernel que podem ser carregadas e descarregadas dinamicamente,
        sem reiniciar o sistema. Drivers de hardware, sistemas de arquivos e protocolos de
        rede são exemplos de módulos.
      </p>
      <CodeBlock title="Gerenciando módulos do kernel" code={`# Listar todos os módulos carregados
lsmod

# Ver informações sobre um módulo específico
modinfo bluetooth
modinfo nvidia

# Carregar um módulo manualmente
sudo modprobe bluetooth
sudo modprobe nf_conntrack

# Remover um módulo
sudo modprobe -r bluetooth
sudo rmmod bluetooth

# Adicionar módulo para carregar na inicialização
echo "bluetooth" | sudo tee -a /etc/modules

# Bloquear um módulo (evitar carregamento automático)
echo "blacklist nouveau" | sudo tee -a /etc/modprobe.d/blacklist.conf
sudo update-initramfs -u

# Ver parâmetros de um módulo carregado
cat /sys/module/bluetooth/parameters/`} />

      <h2>3. O Sistema /proc e /sys</h2>
      <CodeBlock title="Interagindo com o kernel via /proc e /sys" code={`# /proc — informações dinâmicas do kernel em tempo real
cat /proc/cpuinfo          # Informações detalhadas da CPU
cat /proc/meminfo          # Uso de memória
cat /proc/mounts           # Sistemas de arquivos montados
cat /proc/net/dev          # Estatísticas de rede por interface
cat /proc/loadavg          # Média de carga do sistema (1, 5, 15 min)
cat /proc/uptime           # Tempo ligado em segundos
ls /proc/1/                # Informações do processo PID 1

# /sys — interface com dispositivos e drivers
ls /sys/class/net/         # Interfaces de rede disponíveis
cat /sys/class/net/eth0/speed  # Velocidade da interface
ls /sys/block/             # Dispositivos de bloco (discos)
cat /sys/block/sda/size    # Tamanho do disco em setores

# sysctl — parâmetros do kernel em tempo de execução
sysctl -a                  # Listar TODOS os parâmetros
sysctl net.ipv4.ip_forward # Ver se roteamento IPv4 está ativo
sudo sysctl -w net.ipv4.ip_forward=1  # Ativar roteamento (temporário)

# Tornar persistente (sobrevive ao reboot):
echo "net.ipv4.ip_forward = 1" | sudo tee -a /etc/sysctl.d/99-custom.conf
sudo sysctl -p /etc/sysctl.d/99-custom.conf`} />

      <h2>4. Atualização do Kernel no Ubuntu</h2>
      <AlertBox type="info">
        O Ubuntu gerencia atualizações do kernel automaticamente via APT. Normalmente você
        não precisa instalar o kernel manualmente — apenas mantenha o sistema atualizado.
      </AlertBox>
      <CodeBlock title="Atualizando e gerenciando kernels" code={`# Atualizar todos os pacotes (inclui kernel se disponível)
sudo apt update && sudo apt upgrade

# Instalar kernel específico (ex.: kernel HWE — Hardware Enablement)
# O kernel HWE traz suporte a hardware mais novo para Ubuntu LTS
sudo apt install linux-generic-hwe-22.04

# Ver qual kernel está agendado para boot padrão
cat /etc/default/grub | grep GRUB_DEFAULT

# Remover kernels antigos (deixar pelo menos 2!)
sudo apt autoremove --purge
# Isso remove kernels antigos que o Ubuntu não usa mais

# NUNCA remova o kernel em uso!
uname -r  # Ver o que está rodando agora — não remova este!`} />

      <h2>5. Parâmetros de Boot do Kernel</h2>
      <CodeBlock title="Passando parâmetros para o kernel" code={`# Ver parâmetros com que o kernel atual foi iniciado
cat /proc/cmdline
# Exemplo: BOOT_IMAGE=/boot/vmlinuz-6.8.0-51-generic root=/dev/sda2 ro quiet splash

# Parâmetros comuns:
# quiet       — oculta mensagens de boot (modo silencioso)
# splash      — mostra tela de splash
# nomodeset   — desativa kernel mode setting (útil para problemas de GPU)
# acpi=off    — desativa ACPI (soluciona alguns problemas de hardware)
# ro          — monta a raiz como somente leitura inicialmente
# single      — boot em modo de recuperação (single user)

# Editar parâmetros permanentemente:
sudo nano /etc/default/grub
# Linha: GRUB_CMDLINE_LINUX_DEFAULT="quiet splash"
# Adicione parâmetros nessa string, ex: "quiet splash acpi=off"

# Depois de editar, atualizar o GRUB:
sudo update-grub`} />

      <h2>6. Mensagens do Kernel — dmesg</h2>
      <CodeBlock title="Lendo mensagens do kernel com dmesg" code={`# Ver mensagens do kernel (buffer circular)
dmesg

# Seguir mensagens em tempo real
sudo dmesg -w
sudo dmesg --follow

# Filtrar por nível de severidade
dmesg --level=err          # Apenas erros
dmesg --level=warn,err     # Avisos e erros

# Buscar por dispositivo ou módulo
dmesg | grep -i usb        # Mensagens sobre USB
dmesg | grep -i eth        # Mensagens de rede
dmesg | grep -i nvme       # Mensagens sobre NVMe

# Ver mensagens desde o último boot
dmesg -T   # Com timestamps legíveis (data/hora)

# Limpar o buffer do dmesg
sudo dmesg -C`} />
    </PageContainer>
  );
}

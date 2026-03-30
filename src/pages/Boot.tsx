import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function Boot() {
  return (
    <PageContainer
      title="Processo de Boot e GRUB2"
      subtitle="Como o Ubuntu inicializa: UEFI/BIOS → GRUB2 → initramfs → systemd. Configuração e recuperação do bootloader."
      difficulty="avancado"
      timeToRead="20 min"
    >
      <p>
        Entender o processo de boot ajuda a solucionar problemas de inicialização e a
        personalizar como o sistema arranca. O Ubuntu moderno usa GRUB2 como bootloader
        e systemd como sistema de init.
      </p>

      <h2>1. Sequência de Boot Completa</h2>
      <CodeBlock title="Etapas do boot no Ubuntu" code={`# SEQUÊNCIA COMPLETA:
# 1. POWER ON
#    └─ CPU executa firmware (BIOS ou UEFI) da memória ROM

# 2. BIOS/UEFI
#    └─ POST (Power-On Self-Test) — verifica hardware
#    └─ Localiza dispositivo de boot (SSD, HD, USB)
#    └─ BIOS: carrega MBR (512 bytes) do disco
#       UEFI: lê partição ESP (EFI System Partition) — arquivo .efi

# 3. GRUB2 (Grand Unified Bootloader version 2)
#    └─ Mostra menu de boot (se configurado)
#    └─ Carrega o kernel (/boot/vmlinuz-X.X.X)
#    └─ Carrega o initramfs (/boot/initrd.img-X.X.X)

# 4. INITRAMFS (Initial RAM FileSystem)
#    └─ Sistema de arquivos temporário em RAM
#    └─ Carrega drivers necessários para montar o disco real
#    └─ Monta o sistema de arquivos raiz (/)

# 5. KERNEL LINUX
#    └─ Inicializa hardware (CPU, memória, dispositivos)
#    └─ Monta o filesystem raiz como read-only
#    └─ Executa /sbin/init (que é systemd no Ubuntu)

# 6. SYSTEMD
#    └─ PID 1 — mãe de todos os processos
#    └─ Monta filesystems restantes
#    └─ Inicia serviços em paralelo (SSH, rede, login, etc.)
#    └─ Inicia o display manager (GDM/LightDM) — tela de login`} />

      <h2>2. Configurando o GRUB2</h2>
      <AlertBox type="warning">
        Sempre execute <code>sudo update-grub</code> após editar <code>/etc/default/grub</code>.
        Nunca edite os arquivos em <code>/boot/grub/</code> diretamente — eles são gerados automaticamente.
      </AlertBox>
      <CodeBlock title="Opções do GRUB2 em /etc/default/grub" code={`# Abrir o arquivo de configuração principal
sudo nano /etc/default/grub

# PRINCIPAIS CONFIGURAÇÕES:

GRUB_DEFAULT=0
# 0 = primeiro item do menu (Ubuntu padrão)
# "1>2" = submenu 1, item 2
# "Ubuntu, with Linux 6.8.0-51-generic" = por nome

GRUB_TIMEOUT=5
# Segundos aguardando antes de boot automático
# 0 = boot imediato (sem mostrar menu)
# -1 = aguarda indefinidamente

GRUB_CMDLINE_LINUX_DEFAULT="quiet splash"
# Parâmetros passados para o kernel no boot normal
# quiet = sem mensagens verbosas
# splash = mostrar tela de splash animada

GRUB_CMDLINE_LINUX=""
# Parâmetros passados para TODOS os modos de boot (incluindo recovery)

# Depois de editar, SEMPRE regenere o grub.cfg:
sudo update-grub`} />

      <CodeBlock title="Exemplos práticos de configuração do GRUB" code={`# 1. Mostrar o menu do GRUB por 10 segundos:
sudo sed -i 's/GRUB_TIMEOUT=.*/GRUB_TIMEOUT=10/' /etc/default/grub
sudo update-grub

# 2. Boot silencioso (sem splash, ideal para servidores):
# Edite: GRUB_CMDLINE_LINUX_DEFAULT=""
# (remova quiet e splash)

# 3. Habilitar resolução do menu GRUB:
echo 'GRUB_GFXMODE=1920x1080' | sudo tee -a /etc/default/grub
echo 'GRUB_GFXPAYLOAD_LINUX=keep' | sudo tee -a /etc/default/grub
sudo update-grub

# 4. Ver o grub.cfg gerado (NÃO edite diretamente!)
cat /boot/grub/grub.cfg | head -50`} />

      <h2>3. Recuperação do GRUB2</h2>
      <AlertBox type="danger">
        Se o GRUB não iniciar, você pode restaurá-lo com um Live USB do Ubuntu.
        Siga os passos abaixo com cuidado.
      </AlertBox>
      <CodeBlock title="Reinstalar o GRUB2 a partir de Live USB" code={`# SITUAÇÃO: Sistema não boota, GRUB corrompido
# SOLUÇÃO: Boot por Live USB → chroot → reinstalar GRUB

# 1. Boot pelo Live USB do Ubuntu
# 2. Abra um terminal e descubra sua partição raiz:
lsblk
# Procure a partição com seu Ubuntu (ex: /dev/sda2)

# 3. Monte a partição raiz:
sudo mount /dev/sda2 /mnt

# Se tiver /boot separado:
sudo mount /dev/sda1 /mnt/boot

# Se UEFI (verificar se existe /boot/efi):
sudo mount /dev/sda1 /mnt/boot/efi

# 4. Monte os sistemas virtuais:
sudo mount --bind /dev /mnt/dev
sudo mount --bind /proc /mnt/proc
sudo mount --bind /sys /mnt/sys

# 5. Entre no ambiente chroot:
sudo chroot /mnt

# 6. Reinstale o GRUB:
# Para sistemas BIOS (MBR):
grub-install /dev/sda

# Para sistemas UEFI:
grub-install --target=x86_64-efi --efi-directory=/boot/efi

# 7. Regenere o grub.cfg:
update-grub

# 8. Saia e desmonte:
exit
sudo umount -R /mnt
sudo reboot`} />

      <h2>4. Analisando o Tempo de Boot</h2>
      <CodeBlock title="Otimizando e analisando o boot" code={`# Ver tempo total de boot
systemd-analyze

# Ver quanto cada serviço demorou
systemd-analyze blame

# Gráfico visual do boot (SVG)
systemd-analyze plot > boot-graph.svg

# Ver dependências críticas do boot
systemd-analyze critical-chain

# Desabilitar serviços lentos desnecessários:
sudo systemctl disable snapd.seeded.service
sudo systemctl disable apt-daily.service`} />
    </PageContainer>
  );
}

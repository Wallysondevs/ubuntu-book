import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function Fstab() {
  return (
    <PageContainer
      title="/etc/fstab — Montagem Automática"
      subtitle="Configure o /etc/fstab para montar partições, discos externos e sistemas de arquivos automaticamente no boot."
      difficulty="intermediario"
      timeToRead="18 min"
    >
      <p>
        O arquivo <strong>/etc/fstab</strong> (Filesystem Table) define os sistemas de
        arquivos que são montados automaticamente durante o boot. Ele é fundamental para
        adicionar novos discos, compartilhamentos de rede e partições ao sistema.
      </p>

      <h2>1. Estrutura do /etc/fstab</h2>
      <CodeBlock title="Formato do arquivo fstab" code={`# Ver o fstab atual:
cat /etc/fstab

# FORMATO DE CADA LINHA:
# <dispositivo>  <ponto-de-montagem>  <tipo-fs>  <opções>  <dump>  <pass>

# Exemplo de um fstab típico:
# UUID=1234-5678  /           ext4    errors=remount-ro  0  1
# UUID=ABCD-EF01  /boot/efi   vfat    umask=0077         0  1
# UUID=9999-0000  /home       ext4    defaults           0  2
# UUID=swap-uuid  none        swap    sw                 0  0

# CAMPOS:
# 1. Dispositivo: /dev/sda1, UUID=xxx, LABEL=xxx, ou //servidor/share
# 2. Mount point: /home, /mnt/dados, none (para swap)
# 3. Tipo: ext4, xfs, btrfs, vfat, ntfs, swap, nfs, cifs, tmpfs
# 4. Opções: defaults, ro, rw, noauto, user, noexec...
# 5. dump: 0=não fazer backup com dump, 1=fazer (raro, use 0)
# 6. pass: 0=não verificar, 1=verificar primeiro (/), 2=verificar depois`} />

      <h2>2. Descobrindo o UUID dos Discos</h2>
      <AlertBox type="info">
        Use UUID em vez de /dev/sdX — o UUID não muda, mas o nome /dev/sdX pode
        mudar se você adicionar ou remover discos.
      </AlertBox>
      <CodeBlock title="Como encontrar o UUID de uma partição" code={`# Ver UUID de todas as partições:
sudo blkid

# Forma mais limpa:
lsblk -f

# Ver UUID de uma partição específica:
sudo blkid /dev/sdb1

# Exemplo de saída:
# /dev/sdb1: UUID="a1b2c3d4-e5f6-7890-abcd-ef1234567890" TYPE="ext4" PARTUUID="xxx"

# Copiar o UUID para o fstab:
sudo blkid /dev/sdb1 | grep -o 'UUID="[^"]*"'`} />

      <h2>3. Exemplos Práticos de Entradas no fstab</h2>
      <CodeBlock title="Montando diferentes tipos de sistemas de arquivos" code={`# 1. Partição ext4 adicional:
UUID=a1b2c3d4-e5f6-7890-abcd-ef1234567890  /mnt/dados  ext4  defaults  0  2

# 2. Partição NTFS (disco Windows) — somente leitura:
UUID=AABB1122CCDD3344  /mnt/windows  ntfs-3g  ro,defaults,nofail  0  0

# 3. Partição NTFS com escrita e permissões para usuário:
UUID=AABB1122CCDD3344  /mnt/windows  ntfs-3g  defaults,uid=1000,gid=1000  0  0

# 4. tmpfs (sistema de arquivos em RAM — muito rápido):
tmpfs  /tmp  tmpfs  defaults,noatime,size=4G  0  0

# 5. Compartilhamento NFS (rede):
192.168.1.100:/exports/dados  /mnt/servidor  nfs  defaults,_netdev  0  0

# 6. Compartilhamento Samba/CIFS (Windows):
//192.168.1.100/compartilhamento  /mnt/windows  cifs  credentials=/etc/samba/creds,_netdev  0  0

# nofail = sistema boota mesmo se o disco não estiver presente
# _netdev = aguardar a rede antes de montar`} />

      <h2>4. Testando e Aplicando o fstab</h2>
      <AlertBox type="danger">
        Um fstab incorreto pode impedir o boot! Sempre teste antes de reiniciar.
      </AlertBox>
      <CodeBlock title="Verificando o fstab sem reiniciar" code={`# TESTE OBRIGATÓRIO: montar tudo do fstab sem reiniciar:
sudo mount -a
# Se der erro, corrija antes de reiniciar!

# Verificar se a montagem foi bem-sucedida:
df -h
mount | grep /mnt/dados

# Testar apenas uma entrada:
sudo mount /mnt/dados

# Desmontar:
sudo umount /mnt/dados

# Verificar syntax do fstab:
sudo findmnt --verify`} />
    </PageContainer>
  );
}

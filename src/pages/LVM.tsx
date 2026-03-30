import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function LVM() {
  return (
    <PageContainer
      title="LVM — Logical Volume Manager"
      subtitle="Gerencie discos de forma flexível com LVM: redimensione volumes sem reiniciar, adicione discos e muito mais."
      difficulty="avancado"
      timeToRead="25 min"
    >
      <p>
        O <strong>LVM</strong> (Logical Volume Manager) cria uma camada de abstração entre
        os discos físicos e o sistema de arquivos, permitindo redimensionar, criar snapshots
        e combinar múltiplos discos de forma dinâmica.
      </p>

      <h2>1. Conceitos LVM</h2>
      <CodeBlock title="PV, VG e LV — os três níveis do LVM" code={`# PV = Physical Volume (Volume Físico)
# Disco ou partição inicializado para uso pelo LVM
# Exemplos: /dev/sdb, /dev/sdc1

# VG = Volume Group (Grupo de Volumes)
# Pool de armazenamento que combina um ou mais PVs
# Funciona como um "disco virtual grande"

# LV = Logical Volume (Volume Lógico)
# "Partição virtual" criada dentro de um VG
# É onde você formata e monta o filesystem

# Hierarquia:
# PV (/dev/sdb) + PV (/dev/sdc)
#         └──→ VG (ubuntu-vg)
#                   ├──→ LV (ubuntu-lv) → / (raiz)
#                   ├──→ LV (dados-lv) → /dados
#                   └──→ LV (swap-lv) → swap

# Ver LVM existente no Ubuntu:
sudo pvs          # Listar Physical Volumes
sudo vgs          # Listar Volume Groups
sudo lvs          # Listar Logical Volumes
sudo pvdisplay    # Detalhes dos PVs
sudo vgdisplay    # Detalhes dos VGs
sudo lvdisplay    # Detalhes dos LVs`} />

      <h2>2. Criando um Ambiente LVM</h2>
      <AlertBox type="warning">
        Os comandos abaixo modificam partições. Faça backup antes e tenha certeza
        do dispositivo correto (verifique com lsblk e fdisk -l).
      </AlertBox>
      <CodeBlock title="Configurando LVM do zero" code={`# PASSO 1: Verificar discos disponíveis
lsblk
fdisk -l | grep "Disk /dev"

# PASSO 2: Criar Physical Volume no disco /dev/sdb
sudo pvcreate /dev/sdb
sudo pvcreate /dev/sdb /dev/sdc    # Múltiplos PVs de uma vez

# PASSO 3: Criar Volume Group
sudo vgcreate meu-vg /dev/sdb
sudo vgcreate meu-vg /dev/sdb /dev/sdc    # VG em múltiplos discos

# PASSO 4: Criar Logical Volumes
# -L = tamanho fixo, -l = em extents (%)
sudo lvcreate -L 20G -n dados-lv meu-vg       # 20GB para dados
sudo lvcreate -L 8G -n swap-lv meu-vg         # 8GB para swap
sudo lvcreate -l 100%FREE -n extra-lv meu-vg  # Todo o espaço restante

# PASSO 5: Formatar e montar
sudo mkfs.ext4 /dev/meu-vg/dados-lv
sudo mkdir /mnt/dados
sudo mount /dev/meu-vg/dados-lv /mnt/dados

# Adicionar ao /etc/fstab para montar automaticamente:
echo "/dev/meu-vg/dados-lv /mnt/dados ext4 defaults 0 2" | sudo tee -a /etc/fstab`} />

      <h2>3. Expandindo e Reduzindo Volumes</h2>
      <CodeBlock title="Redimensionamento de volumes LVM" code={`# EXPANDIR um Logical Volume (SEGURO — sem perda de dados):
# Expandir o LV em 10GB adicionais:
sudo lvextend -L +10G /dev/meu-vg/dados-lv

# Expandir para usar TODO o espaço livre do VG:
sudo lvextend -l +100%FREE /dev/meu-vg/dados-lv

# Depois de expandir o LV, expandir o filesystem:
sudo resize2fs /dev/meu-vg/dados-lv       # Para ext4
sudo xfs_growfs /mnt/dados                 # Para xfs (disco montado!)

# EXPANDIR e REDIMENSIONAR filesystem em um comando:
sudo lvresize -L +10G --resizefs /dev/meu-vg/dados-lv

# REDUZIR um LV (CUIDADO! Pode perder dados se não fizer certo!):
# 1. Desmontar:
sudo umount /mnt/dados
# 2. Verificar filesystem:
sudo e2fsck -f /dev/meu-vg/dados-lv
# 3. Reduzir filesystem PRIMEIRO:
sudo resize2fs /dev/meu-vg/dados-lv 15G
# 4. Depois reduzir o LV:
sudo lvreduce -L 15G /dev/meu-vg/dados-lv
# 5. Remontar:
sudo mount /dev/meu-vg/dados-lv /mnt/dados`} />

      <h2>4. Snapshots LVM</h2>
      <CodeBlock title="Criando e restaurando snapshots" code={`# Criar snapshot (ponto de restauração) de um LV:
sudo lvcreate -s -L 5G -n dados-snap /dev/meu-vg/dados-lv
# -s = snapshot
# -L 5G = tamanho do COW (Copy-On-Write) storage
# O snapshot cresce à medida que os dados originais mudam

# Ver snapshots:
sudo lvs
# A coluna "Attr" mostra "s" para snapshots, "o" para original

# Montar o snapshot para verificar:
sudo mount /dev/meu-vg/dados-snap /mnt/snapshot -o ro

# Restaurar a partir do snapshot (MERGE):
sudo umount /mnt/dados
sudo lvconvert --merge /dev/meu-vg/dados-snap
# Após o merge, o sistema original volta ao estado do snapshot

# Remover snapshot sem usar:
sudo lvremove /dev/meu-vg/dados-snap`} />
    </PageContainer>
  );
}

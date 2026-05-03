import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function ZFSZsys() {
  return (
    <PageContainer
      title="ZFS no Ubuntu"
      subtitle="O Ubuntu é a única distro mainstream com ZFS oficialmente integrado: instalação root-on-ZFS no instalador, snapshots transparentes, compressão LZ4 e pools com paridade. Aqui está o caminho completo."
      difficulty="avancado"
      timeToRead="12 min"
    >
      <h2>Por que ZFS?</h2>
      <p>
        ZFS combina <strong>filesystem</strong>, <strong>volume manager</strong> e
        <strong> RAID</strong> num único stack. Recursos: copy-on-write
        (snapshots instantâneos sem custo), checksums end-to-end (detecta
        bitrot), compressão transparente, deduplicação, replicação
        incremental via <code>zfs send</code>, e pools que crescem
        adicionando vdevs.
      </p>

      <AlertBox type="info" title="Status do ZSys (ex-ferramenta de snapshots automáticos)">
        Até o Ubuntu 23.04, a Canonical mantinha o <code>zsys</code>
        para snapshots automáticos do root. <strong>O zsys foi
        descontinuado no 23.10+.</strong> Agora você gerencia
        snapshots manualmente via <code>zfs snapshot</code> ou via
        ferramentas como <code>zrepl</code> e <code>sanoid</code>.
      </AlertBox>

      <h2>Instalação dos utilitários (sistema já instalado)</h2>
      <CodeBlock
        language="bash"
        code={`sudo apt install zfsutils-linux

# Carregar módulo (geralmente já carregado)
sudo modprobe zfs
lsmod | grep zfs

# Versão
zfs version`}
      />

      <h2>Criar um pool do zero</h2>
      <CodeBlock
        language="bash"
        code={`# Identificar discos (use /dev/disk/by-id, NUNCA /dev/sdX)
ls -l /dev/disk/by-id/ | grep -v part

# Pool simples (1 disco) — sem redundância
sudo zpool create tank /dev/disk/by-id/ata-WDC_WD40EFRX_xxx

# Mirror (RAID1)
sudo zpool create tank mirror \\
  /dev/disk/by-id/ata-DISK1 \\
  /dev/disk/by-id/ata-DISK2

# RAIDZ1 (≈RAID5, 1 disco de paridade, mín 3 discos)
sudo zpool create tank raidz1 \\
  /dev/disk/by-id/ata-DISK1 \\
  /dev/disk/by-id/ata-DISK2 \\
  /dev/disk/by-id/ata-DISK3

# RAIDZ2 (≈RAID6, 2 paridade, mín 4 discos)
sudo zpool create tank raidz2 DISK1 DISK2 DISK3 DISK4

# Status
zpool status
zpool list`}
      />

      <h2>Datasets (filesystems lógicos dentro do pool)</h2>
      <CodeBlock
        language="bash"
        code={`# Criar dataset
sudo zfs create tank/dados
sudo zfs create tank/dados/projetos
sudo zfs create tank/dados/midia

# Listar
zfs list

# Propriedades úteis
sudo zfs set compression=lz4 tank/dados        # compressão
sudo zfs set atime=off tank/dados              # mais perf
sudo zfs set quota=100G tank/dados/projetos    # limite
sudo zfs set reservation=10G tank/dados/midia  # garantia mínima
sudo zfs set mountpoint=/mnt/midia tank/dados/midia

# Ver propriedades
zfs get all tank/dados/projetos | head
zfs get compression,compressratio,used,available tank/dados`}
      />

      <h2>Snapshots e clones</h2>
      <CodeBlock
        language="bash"
        code={`# Snapshot (instantâneo, custo zero)
sudo zfs snapshot tank/dados/projetos@2026-05-03-pre-deploy

# Listar snapshots
zfs list -t snapshot

# Acessar arquivos do snapshot (read-only)
ls /tank/dados/projetos/.zfs/snapshot/2026-05-03-pre-deploy/

# Restaurar um arquivo
cp /tank/dados/projetos/.zfs/snapshot/2026-05-03-pre-deploy/config.yml \\
   /tank/dados/projetos/

# Rollback completo do dataset (perde tudo após o snapshot!)
sudo zfs rollback tank/dados/projetos@2026-05-03-pre-deploy

# Clone (snapshot writable, custa só o delta)
sudo zfs clone tank/dados/projetos@2026-05-03-pre-deploy \\
              tank/dados/projetos-test

# Promover clone (vira o "principal")
sudo zfs promote tank/dados/projetos-test

# Apagar snapshot
sudo zfs destroy tank/dados/projetos@2026-05-03-pre-deploy

# Apagar TODOS os snapshots de um dataset
sudo zfs destroy tank/dados/projetos@%`}
      />

      <h2>Replicação remota com zfs send/receive</h2>
      <CodeBlock
        language="bash"
        code={`# Snapshot inicial
sudo zfs snapshot tank/dados@base

# Enviar para outro host via SSH
sudo zfs send tank/dados@base | \\
  ssh backup@host2 "sudo zfs receive tank/dados-backup"

# Snapshot incremental
sudo zfs snapshot tank/dados@diario-2026-05-03
sudo zfs send -i tank/dados@base tank/dados@diario-2026-05-03 | \\
  ssh backup@host2 "sudo zfs receive tank/dados-backup"

# Stream comprimido
sudo zfs send -c tank/dados@base   # ZFS-native compression`}
      />

      <h2>Casos práticos</h2>
      <CodeBlock
        language="bash"
        code={`# Snapshots automáticos diários (cron)
sudo crontab -e
# Adicione:
# 0 2 * * * zfs snapshot tank/dados@auto-$(date +\\%F)
# 0 3 * * 0 zfs list -H -t snapshot -o name | grep auto- | \\
#   sort | head -n -7 | xargs -n1 zfs destroy

# Verificar integridade do pool (scrub)
sudo zpool scrub tank
zpool status tank   # acompanhe o progresso

# Adicionar disco hot-spare
sudo zpool add tank spare /dev/disk/by-id/ata-DISK5

# Substituir disco defeituoso
sudo zpool replace tank /dev/disk/by-id/ata-DISK1 /dev/disk/by-id/ata-DISK1NEW

# Estatísticas em tempo real
zpool iostat -v 2`}
      />

      <h2>Armadilhas comuns</h2>
      <AlertBox type="danger" title="NUNCA use /dev/sdX em produção">
        Os nomes <code>sdX</code> mudam entre boots. Se um pool foi
        criado com <code>/dev/sdb</code> e ele vira
        <code> /dev/sdc</code> depois, o pool ainda monta, mas você
        está jogando com fogo. Sempre <code>/dev/disk/by-id/</code>
        ou <code>/dev/disk/by-uuid/</code>.
      </AlertBox>

      <AlertBox type="warning" title="Deduplicação consome RAM absurda">
        <code>zfs set dedup=on</code> exige <strong>~5 GB de RAM por
        TB</strong> de dados. Em servidor com 16 GB de RAM e pool de
        10 TB, dedup = travamento garantido. Use compressão LZ4 (quase
        sempre vence dedup).
      </AlertBox>

      <AlertBox type="warning" title="ZFS não cresce vdevs (até 2024)">
        Antes do OpenZFS 2.3, você não conseguia adicionar disco a um
        RAIDZ existente — só adicionar um vdev novo (que vira stripe).
        Planeje a topologia antes. RAIDZ expansion finalmente saiu no
        2.3, ainda não no kernel padrão do Ubuntu 24.04.
      </AlertBox>

      <AlertBox type="danger" title="zfs destroy é IMEDIATO e irreversível">
        Sem confirmação, sem lixeira. <code>zfs destroy tank/dados</code>
        apaga o dataset e todos os snapshots filhos. Sempre teste com
        <code> -n </code> (dry-run) primeiro:
        <code> sudo zfs destroy -nv tank/dados</code>.
      </AlertBox>

      <h2>Cheat sheet</h2>
      <CodeBlock
        language="bash"
        code={`# Pool
zpool create tank mirror DISK1 DISK2
zpool status / zpool list / zpool iostat -v 2
zpool scrub tank

# Datasets
zfs create tank/X
zfs set compression=lz4 tank/X
zfs list / zfs get all tank/X

# Snapshots
zfs snapshot tank/X@TAG
zfs rollback tank/X@TAG
zfs clone tank/X@TAG tank/Y
zfs destroy tank/X@TAG

# Replicação
zfs send -i @base @new | ssh host "zfs receive Y"

# Sempre /dev/disk/by-id/ — NUNCA /dev/sdX`}
      />
    </PageContainer>
  );
}

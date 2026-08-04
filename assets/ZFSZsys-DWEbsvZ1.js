import{j as s}from"./index-_kFPLDpE.js";import{P as a}from"./PageContainer-eafNNqkI.js";import{C as o}from"./CodeBlock-ByIkwE54.js";import{A as e}from"./AlertBox-NzOB7YP7.js";function r(){return s.jsxs(a,{title:"ZFS no Ubuntu",subtitle:"O Ubuntu é a única distro mainstream com ZFS oficialmente integrado: instalação root-on-ZFS no instalador, snapshots transparentes, compressão LZ4 e pools com paridade. Aqui está o caminho completo.",difficulty:"avancado",timeToRead:"12 min",children:[s.jsx("h2",{children:"Por que ZFS?"}),s.jsxs("p",{children:["ZFS combina ",s.jsx("strong",{children:"filesystem"}),", ",s.jsx("strong",{children:"volume manager"})," e",s.jsx("strong",{children:" RAID"})," num único stack. Recursos: copy-on-write (snapshots instantâneos sem custo), checksums end-to-end (detecta bitrot), compressão transparente, deduplicação, replicação incremental via ",s.jsx("code",{children:"zfs send"}),", e pools que crescem adicionando vdevs."]}),s.jsxs(e,{type:"info",title:"Status do ZSys (ex-ferramenta de snapshots automáticos)",children:["Até o Ubuntu 23.04, a Canonical mantinha o ",s.jsx("code",{children:"zsys"}),"para snapshots automáticos do root. ",s.jsx("strong",{children:"O zsys foi descontinuado no 23.10+."})," Agora você gerencia snapshots manualmente via ",s.jsx("code",{children:"zfs snapshot"})," ou via ferramentas como ",s.jsx("code",{children:"zrepl"})," e ",s.jsx("code",{children:"sanoid"}),"."]}),s.jsx("h2",{children:"Instalação dos utilitários (sistema já instalado)"}),s.jsx(o,{language:"bash",code:`sudo apt install zfsutils-linux

# Carregar módulo (geralmente já carregado)
sudo modprobe zfs
lsmod | grep zfs

# Versão
zfs version`}),s.jsx("h2",{children:"Criar um pool do zero"}),s.jsx(o,{language:"bash",code:`# Identificar discos (use /dev/disk/by-id, NUNCA /dev/sdX)
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
zpool list`}),s.jsx("h2",{children:"Datasets (filesystems lógicos dentro do pool)"}),s.jsx(o,{language:"bash",code:`# Criar dataset
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
zfs get compression,compressratio,used,available tank/dados`}),s.jsx("h2",{children:"Snapshots e clones"}),s.jsx(o,{language:"bash",code:`# Snapshot (instantâneo, custo zero)
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
sudo zfs destroy tank/dados/projetos@%`}),s.jsx("h2",{children:"Replicação remota com zfs send/receive"}),s.jsx(o,{language:"bash",code:`# Snapshot inicial
sudo zfs snapshot tank/dados@base

# Enviar para outro host via SSH
sudo zfs send tank/dados@base | \\
  ssh backup@host2 "sudo zfs receive tank/dados-backup"

# Snapshot incremental
sudo zfs snapshot tank/dados@diario-2026-05-03
sudo zfs send -i tank/dados@base tank/dados@diario-2026-05-03 | \\
  ssh backup@host2 "sudo zfs receive tank/dados-backup"

# Stream comprimido
sudo zfs send -c tank/dados@base   # ZFS-native compression`}),s.jsx("h2",{children:"Casos práticos"}),s.jsx(o,{language:"bash",code:`# Snapshots automáticos diários (cron)
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
zpool iostat -v 2`}),s.jsx("h2",{children:"Armadilhas comuns"}),s.jsxs(e,{type:"danger",title:"NUNCA use /dev/sdX em produção",children:["Os nomes ",s.jsx("code",{children:"sdX"})," mudam entre boots. Se um pool foi criado com ",s.jsx("code",{children:"/dev/sdb"})," e ele vira",s.jsx("code",{children:" /dev/sdc"})," depois, o pool ainda monta, mas você está jogando com fogo. Sempre ",s.jsx("code",{children:"/dev/disk/by-id/"}),"ou ",s.jsx("code",{children:"/dev/disk/by-uuid/"}),"."]}),s.jsxs(e,{type:"warning",title:"Deduplicação consome RAM absurda",children:[s.jsx("code",{children:"zfs set dedup=on"})," exige ",s.jsx("strong",{children:"~5 GB de RAM por TB"})," de dados. Em servidor com 16 GB de RAM e pool de 10 TB, dedup = travamento garantido. Use compressão LZ4 (quase sempre vence dedup)."]}),s.jsx(e,{type:"warning",title:"ZFS não cresce vdevs (até 2024)",children:"Antes do OpenZFS 2.3, você não conseguia adicionar disco a um RAIDZ existente — só adicionar um vdev novo (que vira stripe). Planeje a topologia antes. RAIDZ expansion finalmente saiu no 2.3, ainda não no kernel padrão do Ubuntu 24.04."}),s.jsxs(e,{type:"danger",title:"zfs destroy é IMEDIATO e irreversível",children:["Sem confirmação, sem lixeira. ",s.jsx("code",{children:"zfs destroy tank/dados"}),"apaga o dataset e todos os snapshots filhos. Sempre teste com",s.jsx("code",{children:" -n "})," (dry-run) primeiro:",s.jsx("code",{children:" sudo zfs destroy -nv tank/dados"}),"."]}),s.jsx("h2",{children:"Cheat sheet"}),s.jsx(o,{language:"bash",code:`# Pool
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

# Sempre /dev/disk/by-id/ — NUNCA /dev/sdX`})]})}export{r as default};

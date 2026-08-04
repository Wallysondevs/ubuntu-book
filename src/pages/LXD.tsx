import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function LXD() {
  return (
    <PageContainer
      title="LXD & Incus — Containers de sistema"
      subtitle="A alternativa Canonical ao Docker quando você precisa de uma 'VM leve': container com init completo, systemd, múltiplos processos e ciclo de vida idêntico ao de uma máquina."
      difficulty="avancado"
      timeToRead="12 min"
    >
      <h2>O que são LXD e Incus?</h2>
      <p>
        LXD é o gerenciador de containers de sistema da Canonical,
        construído sobre LXC. Em 2023, parte da comunidade forkou
        o projeto criando o <strong>Incus</strong>, mantido pela
        Linux Containers. As APIs são quase idênticas — escolha
        LXD para integração com snap/Ubuntu Pro, ou Incus se você
        prefere governance comunitária.
      </p>

      <AlertBox type="info" title="Container de sistema vs container de app">
        <ul>
          <li><strong>Docker</strong> — 1 container = 1 processo. <code>PID 1</code> é seu app.</li>
          <li><strong>LXD/Incus</strong> — 1 container = 1 SO inteiro. <code>PID 1</code> é o systemd.</li>
        </ul>
        Use LXD/Incus para hospedar serviços tradicionais (Apache + MySQL +
        cron na mesma máquina lógica) sem o overhead de uma VM completa.
      </AlertBox>

      <h2>Instalação (LXD)</h2>
      <CodeBlock
        language="bash"
        code={`sudo snap install lxd
sudo usermod -aG lxd $USER
newgrp lxd

# Inicialização interativa (storage, bridge, network)
sudo lxd init

# Resposta padrão funciona para 95% dos casos:
# storage: dir (ou zfs em produção)
# network: lxdbr0 com NAT
# IPv6: yes
# trust password: deixe vazio (use cliente local)`}
      />

      <h2>Instalação (Incus)</h2>
      <CodeBlock
        language="bash"
        code={`# Repo oficial em Ubuntu 24.04+
sudo apt install incus

sudo incus admin init       # mesmo wizard
sudo usermod -aG incus-admin $USER
newgrp incus-admin`}
      />

      <h2>Ciclo de vida do container</h2>
      <CodeBlock
        language="bash"
        code={`# Listar imagens
lxc image list ubuntu:    | head

# Criar e iniciar
lxc launch ubuntu:24.04 web

# Listar
lxc list

# Shell
lxc exec web -- bash

# Comando único
lxc exec web -- apt update

# Parar/iniciar
lxc stop web
lxc start web
lxc restart web

# Snapshot
lxc snapshot web antes-do-deploy
lxc restore web antes-do-deploy

# Apagar
lxc delete -f web`}
      />

      <h2>Rede e exposição de portas</h2>
      <CodeBlock
        language="bash"
        code={`# Ver IP do container (vem do bridge lxdbr0, geralmente 10.X.Y.Z)
lxc list

# Encaminhar porta 8080 do host → 80 do container
lxc config device add web http proxy \\
  listen=tcp:0.0.0.0:8080 \\
  connect=tcp:127.0.0.1:80

# Listar devices
lxc config device list web

# Remover
lxc config device remove web http`}
      />

      <h2>Compartilhar diretório do host</h2>
      <CodeBlock
        language="bash"
        code={`# Bind mount com mapeamento de UID
lxc config device add web codigo disk \\
  source=/home/$USER/projeto \\
  path=/srv/projeto

# Para o usuário do container conseguir escrever:
lxc config set web raw.idmap "both $(id -u) 1000"
lxc restart web`}
      />

      <h2>Profiles e cloud-init</h2>
      <CodeBlock
        language="yaml"
        code={`# Profile com cloud-init para web servers
lxc profile create web
lxc profile edit web << 'EOF'
config:
  user.user-data: |
    #cloud-config
    package_update: true
    packages: [nginx, certbot]
    runcmd:
      - systemctl enable --now nginx
description: Web server com nginx
devices:
  http:
    listen: tcp:0.0.0.0:80
    connect: tcp:127.0.0.1:80
    type: proxy
EOF

# Lançar usando o profile
lxc launch ubuntu:24.04 web1 --profile default --profile web`}
      />

      <h2>Cluster (multi-host)</h2>
      <CodeBlock
        language="bash"
        code={`# No primeiro nó:
sudo lxd init    # responda yes para clustering, defina nome 'node1'

# Anote o token gerado:
lxc cluster add node2

# No segundo nó:
sudo lxd init    # cole o token quando perguntar

# Listar membros
lxc cluster list

# Lançar container em nó específico
lxc launch ubuntu:24.04 db --target node2`}
      />

      <h2>Casos práticos</h2>
      <CodeBlock
        language="bash"
        code={`# Container privilegiado (cuidado!) para nested Docker
lxc launch ubuntu:24.04 docker-host -c security.nesting=true

# Limites de CPU e RAM
lxc config set web limits.cpu 2
lxc config set web limits.memory 1GB

# Auto-start no boot do host
lxc config set web boot.autostart true
lxc config set web boot.autostart.priority 10

# Backup completo (export para tarball)
lxc export web web-backup-$(date +%F).tar.gz

# Restore
lxc import web-backup-2026-05-03.tar.gz`}
      />

      <h2>Storage pools e volumes</h2>
      <p>
        O pool é onde os discos dos containers moram; o volume é um pedaço
        desse pool que você pode montar onde quiser, inclusive em mais de um
        container.
      </p>
      <CodeBlock
        language="bash"
        code={`lxc storage list
lxc storage info default

# Pool novo em ZFS, com tamanho fixo
lxc storage create rapido zfs size=50GB

# Container usando o pool novo
lxc launch ubuntu:24.04 db -s rapido

# Volume dedicado para os dados do banco
lxc storage volume create rapido dados-mysql
lxc config device add db dados disk \\
  pool=rapido source=dados-mysql path=/var/lib/mysql

# Snapshot do volume, independente do container
lxc storage volume snapshot rapido dados-mysql antes-migracao
lxc storage volume list rapido`}
      />

      <h2>Transformar um container em imagem propria</h2>
      <p>
        Ajuste um container uma vez, publique como imagem e todos os próximos
        nascem prontos. É o equivalênte do <code>docker commit</code>, mas para
        máquinas inteiras.
      </p>
      <CodeBlock
        language="bash"
        code={`# Preparar e publicar (o container precisa estar parado)
lxc launch ubuntu:24.04 base
lxc exec base -- apt-get update
lxc exec base -- apt-get install -y nginx certbot
lxc stop base
lxc publish base --alias ubuntu-nginx

# Usar
lxc image list
lxc launch ubuntu-nginx web2

# Levar a imagem para outro host
lxc image export ubuntu-nginx .
lxc image import ubuntu-nginx.tar.gz --alias ubuntu-nginx

# Limpar imagens antigas
lxc image delete ubuntu-nginx`}
      />

      <h2>LXD tambem roda VMs</h2>
      <p>
        Com <code>--vm</code> o mesmo comando cria uma máquina virtual com
        kernel próprio, via QEMU. Útil quando o container não serve: kernel
        diferente, módulo específico, teste de boot.
      </p>
      <CodeBlock
        language="bash"
        code={`lxc launch ubuntu:24.04 vm1 --vm \\
  -c limits.cpu=2 -c limits.memory=4GiB

# Ver o tipo na listagem
lxc list -c nst4

# Console grafico e console serial
lxc console vm1 --type=vga
lxc console vm1

# O shell exige o agente do LXD dentro da VM (imagens ubuntu: ja trazem)
lxc exec vm1 -- bash`}
      />

      <h2>Copiar e migrar entre hosts</h2>
      <CodeBlock
        language="bash"
        code={`# Clonar localmente
lxc copy web web-teste
lxc move web web-antigo          # renomear

# Registrar o host remoto (precisa do listener habilitado la)
lxc config set core.https_address :8443
lxc config trust add --name meu-laptop
lxc remote add outro https://10.0.0.20:8443
lxc remote list

# Copiar e mover pela rede
lxc copy web outro:web
lxc move web outro:web

# Backup em tarball, que nao depende de host remoto
lxc export web web-$(date +%F).tar.gz --optimized-storage
lxc import web-2026-08-04.tar.gz`}
      />

      <h2>Limites e observabilidade</h2>
      <CodeBlock
        language="bash"
        code={`# Uso atual e log do container
lxc info web
lxc info web --show-log

# Acompanhar eventos em tempo real (util para entender restart)
lxc monitor --type=lifecycle

# Limites finos: fatia de CPU, prioridade de disco e rede
lxc config set web limits.cpu 2
lxc config set web limits.cpu.allowance 50%
lxc config set web limits.memory 1GB
lxc config set web limits.memory.enforce soft
lxc config set web limits.disk.priority 5

# Ver tudo que foi configurado, incluindo o que veio do profile
lxc config show web --expanded`}
      />

      <h2>Armadilhas comuns</h2>
      <AlertBox type="warning" title="ZFS vs dir storage backend">
        Em desenvolvimento <code>dir</code> serve. Em produção use
        <code> zfs </code> ou <code>btrfs</code> — só eles permitem
        snapshots instantâneos e copy-on-write. Trocar depois de
        criar containers exige re-criação do storage pool.
      </AlertBox>

      <AlertBox type="danger" title="Conflito com Docker no mesmo host">
        Docker mexe em <code>iptables</code> de forma agressiva e
        pode quebrar a bridge <code>lxdbr0</code>. Sintoma: containers
        LXD perdem internet. Solução:
        <code> sudo iptables -I DOCKER-USER -i lxdbr0 -j ACCEPT</code>
        ou rode Docker dentro de um container LXD com
        <code> security.nesting=true</code>.
      </AlertBox>

      <AlertBox type="warning" title="Container privilegiado é setuid no host">
        <code>security.privileged=true</code> remove o user namespace —
        o root do container vira root do host. Use só para casos
        específicos (algumas cargas K8s, FUSE).
      </AlertBox>

      <h2>Cheat sheet</h2>
      <CodeBlock
        language="bash"
        code={`lxc launch ubuntu:24.04 NOME       # criar
lxc list                            # listar
lxc exec NOME -- bash               # shell
lxc snapshot NOME TAG               # snapshot
lxc restore NOME TAG                # restaurar
lxc config device add ... proxy     # expor porta
lxc config device add ... disk      # montar dir
lxc profile create NOME             # template reutilizável
lxc cluster list                    # ver cluster
lxc export / lxc import             # backup/restore`}
      />
    </PageContainer>
  );
}

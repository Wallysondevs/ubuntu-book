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

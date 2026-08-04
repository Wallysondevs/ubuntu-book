import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function Multipass() {
  return (
    <PageContainer
      title="Multipass — VMs Ubuntu instantâneas"
      subtitle="Ferramenta oficial da Canonical para criar máquinas virtuais Ubuntu em segundos. Pensada para devs: API simples, integração com cloud-init e suporte nativo no Linux, macOS e Windows."
      difficulty="intermediario"
      timeToRead="10 min"
    >
      <h2>O que é Multipass?</h2>
      <p>
        Multipass é um wrapper amigável sobre KVM (Linux), HyperKit (macOS)
        e Hyper-V (Windows) que entrega VMs Ubuntu prontas em segundos.
        Sem ISO, sem instalador, sem particionamento manual: você roda
        <code> multipass launch </code> e tem um shell em ~30s. É o
        equivalente Canonical do <code>vagrant up</code>, mas mais leve
        e específico para Ubuntu.
      </p>

      <AlertBox type="info" title="Multipass vs LXD vs Docker">
        <ul>
          <li><strong>Docker</strong> — container de aplicação (1 processo, sem kernel próprio).</li>
          <li><strong>LXD/Incus</strong> — container de sistema (init completo, mas compartilha kernel).</li>
          <li><strong>Multipass</strong> — VM completa (kernel próprio, isolamento total).</li>
        </ul>
        Use Multipass quando precisar do kernel Ubuntu específico,
        testar systemd ou simular um servidor inteiro.
      </AlertBox>

      <h2>Instalação</h2>
      <CodeBlock
        language="bash"
        code={`# Ubuntu / Debian (recomendado via snap)
sudo snap install multipass

# Verificar
multipass version

# Backend driver (Linux usa libvirt/KVM por padrão)
multipass get local.driver
# qemu  ← padrão no Ubuntu`}
      />

      <h2>Comandos essenciais</h2>
      <CodeBlock
        language="bash"
        code={`# Listar imagens disponíveis
multipass find

# Subir uma VM com nome, 2 CPUs, 4G RAM, 20G disco
multipass launch 24.04 \\
  --name dev \\
  --cpus 2 \\
  --memory 4G \\
  --disk 20G

# Listar VMs
multipass list

# Abrir shell
multipass shell dev

# Executar comando único
multipass exec dev -- lsb_release -d

# Parar / iniciar / reiniciar
multipass stop dev
multipass start dev
multipass restart dev

# Apagar (move para "purge queue")
multipass delete dev
multipass purge`}
      />

      <h2>Compartilhar arquivos com o host</h2>
      <CodeBlock
        language="bash"
        code={`# Mount bidirecional
multipass mount ~/projeto dev:/home/ubuntu/projeto

# Listar mounts ativos
multipass info dev | grep Mounts

# Desmontar
multipass umount dev:/home/ubuntu/projeto`}
      />

      <h2>Provisionamento com cloud-init</h2>
      <p>
        O grande diferencial: Multipass aceita um arquivo cloud-init na
        criação da VM, igual à AWS EC2.
      </p>
      <CodeBlock
        language="yaml"
        code={`# arquivo: web.yaml
#cloud-config
package_update: true
packages:
  - nginx
  - htop
runcmd:
  - systemctl enable --now nginx
  - echo "<h1>Hello from Multipass</h1>" > /var/www/html/index.html
users:
  - name: deploy
    sudo: ALL=(ALL) NOPASSWD:ALL
    shell: /bin/bash
    ssh_authorized_keys:
      - ssh-ed25519 AAAA... user@host`}
      />

      <CodeBlock
        language="bash"
        code={`# Subir já provisionado
multipass launch 24.04 --name web --cloud-init web.yaml

# IP da VM
multipass info web | grep IPv4

# Acessar via curl (do host)
curl http://$(multipass info web | awk '/IPv4/ {print $2}')`}
      />

      <h2>Casos práticos</h2>
      <CodeBlock
        language="bash"
        code={`# Cluster de 3 nós para testar Kubernetes/MicroK8s
for i in 1 2 3; do
  multipass launch 24.04 --name k8s-$i --cpus 2 --memory 4G
done

multipass exec k8s-1 -- sudo snap install microk8s --classic
multipass exec k8s-1 -- sudo microk8s add-node

# Snapshot da VM (Multipass 1.13+)
multipass snapshot dev --name antes-do-upgrade
multipass restore dev.antes-do-upgrade

# Transferir arquivo
multipass transfer relatorio.pdf dev:/tmp/`}
      />

      <h2>Rede, IP e acesso por SSH</h2>
      <p>
        Por padrão a VM fica atrás de NAT em uma rede interna: ela alcança a
        internet e o host, mas ninguém da sua rede local alcança ela. Para
        expor a VM como se fosse outra máquina física, use o modo bridge.
      </p>
      <CodeBlock
        language="bash"
        code={`# IP da VM, só o endereço
multipass info dev | awk '/IPv4/ {print $2}'

# O Multipass mantem a propria chave SSH; da para usar direto
sudo ssh -i /var/snap/multipass/common/data/multipassd/ssh-keys/id_rsa \\
  ubuntu@$(multipass info dev | awk '/IPv4/ {print $2}')

# Descobrir a interface fisica do host
ip -brief link

# Definir a interface da bridge e subir uma VM na rede local
multipass set local.bridged-network=enp3s0
multipass launch 24.04 --name lan --bridged

# Agora a VM tem IP da sua LAN e o roteador a enxerga
multipass info lan | grep IPv4`}
      />

      <h2>Mudar CPU, RAM e disco depois de criada</h2>
      <p>
        Nem tudo é ajustável a quente: a VM precisa estar parada. E disco só
        cresce.
      </p>
      <CodeBlock
        language="bash"
        code={`multipass stop dev

multipass set local.dev.cpus=4
multipass set local.dev.memory=8G
multipass set local.dev.disk=40G

multipass start dev
multipass info dev

# Dentro da VM, confirmar que o disco cresceu
multipass exec dev -- df -h /`}
      />

      <AlertBox type="warning" title="Disco não encolhe">
        <code>local.NOME.disk</code> aceita apenas valores maiores que o atual.
        Se você exagerou, o caminho é recriar a VM — mais um motivo para
        descrever a máquina em um cloud-init versionado em vez de ajustar tudo
        à mão.
      </AlertBox>

      <h2>Aliases: usar o binario da VM como se fosse local</h2>
      <p>
        Um alias transforma um comando de dentro da VM em comando do host. É o
        jeito mais limpo de testar outra versão de linguagem sem sujar sua
        máquina.
      </p>
      <CodeBlock
        language="bash"
        code={`# Criar o alias: comando python3 da VM "dev" vira py no host
multipass alias dev:python3 py

# Garantir que /snap/bin esta no PATH e usar
py --version

# Listar e remover
multipass aliases
multipass unalias py

# Aliases combinam bem com mount: mesmo arquivo, outro interpretador
multipass mount ~/projeto dev:/home/ubuntu/projeto
cd ~/projeto && py app.py`}
      />

      <h2>Onde os dados moram e como recuperar espaco</h2>
      <CodeBlock
        language="bash"
        code={`# Espaco ocupado por imagens e discos das VMs
sudo du -sh /var/snap/multipass/common/data/multipassd/

# VMs deletadas continuam no disco ate o purge
multipass list
multipass purge

# Zerar tudo
multipass delete --all
multipass purge

# O cache de imagens baixadas tambem pesa
sudo du -sh /var/snap/multipass/common/cache/`}
      />

      <h2>Erros que voce vai encontrar</h2>
      <CodeBlock
        language="bash"
        code={`# "timed out waiting for initialization to complete"
# host lento ou cloud-init grande: aumente o timeout
multipass launch 24.04 --name dev --timeout 600

# "unable to determine a suitable network" no modo --bridged
multipass get local.bridged-network
multipass set local.bridged-network=enp3s0

# VM sem rede depois de suspender o notebook
multipass restart dev
sudo snap restart multipass

# Ver o log do daemon quando nada faz sentido
snap logs multipass -n 50
journalctl -u snap.multipass.multipassd -n 50 --no-pager

# Conferir se o cloud-init terminou (e por que falhou)
multipass exec dev -- cloud-init status --long
multipass exec dev -- sudo cat /var/log/cloud-init-output.log`}
      />

      <h2>Armadilhas comuns</h2>
      <AlertBox type="warning" title="Driver qemu vs libvirt">
        Em hosts com libvirt já configurado, mude o driver:
        <code> sudo snap set multipass local.driver=libvirt</code>.
        Isso evita conflitos de bridge e permite ver as VMs em
        <code> virt-manager</code>.
      </AlertBox>

      <AlertBox type="danger" title="Mounts param após reboot do host">
        Mounts <code>multipass mount</code> NÃO são persistentes.
        Após <code>reboot</code> do host (ou da VM), você precisa
        re-executar o comando. Para automação, coloque no
        <code> /etc/rc.local </code> do host.
      </AlertBox>

      <AlertBox type="warning" title="Snap connection do home">
        Se <code>multipass mount ~/algo</code> falha com
        <code> source path does not exist</code>, conecte a interface:
        <code> sudo snap connect multipass:home :home</code>.
      </AlertBox>

      <h2>Cheat sheet</h2>
      <CodeBlock
        language="bash"
        code={`multipass launch 24.04 --name X     # criar VM Ubuntu 24.04
multipass list                       # listar
multipass shell X                    # abrir shell
multipass exec X -- comando          # rodar comando único
multipass mount ~/dir X:/home/ubuntu/dir   # montar
multipass stop X / start X / restart X
multipass delete X && multipass purge      # remover de fato
multipass info X                     # detalhes (IP, CPU, mem)
multipass --help`}
      />
    </PageContainer>
  );
}

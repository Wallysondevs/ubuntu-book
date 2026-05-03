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

import{j as e}from"./index-_kFPLDpE.js";import{P as a}from"./PageContainer-eafNNqkI.js";import{C as r}from"./CodeBlock-ByIkwE54.js";import{A as s}from"./AlertBox-NzOB7YP7.js";function u(){return e.jsxs(a,{title:"KVM — Virtualização no Ubuntu",subtitle:"Guia completo de KVM/QEMU no Ubuntu: criar e gerenciar VMs, virt-manager, virsh, snapshots, redes virtuais e GPU passthrough.",difficulty:"avancado",timeToRead:"35 min",children:[e.jsxs(s,{type:"info",title:"Pré-requisitos",children:["Ubuntu com CPU que suporte virtualização (VT-x/AMD-V) — verifique com ",e.jsx("code",{children:'egrep -c "(vmx|svm)" /proc/cpuinfo'}),". Acesso ",e.jsx("code",{children:"sudo"}),"."]}),e.jsx("h2",{children:"Glossário rápido"}),e.jsxs("p",{children:[e.jsx("strong",{children:"KVM"})," — Kernel-based Virtual Machine — hypervisor tipo 1 embutido no kernel Linux."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"QEMU"})," — emulador que combina com o KVM para fornecer hardware virtual à VM."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"libvirt"})," — API de alto nível para gerenciar VMs (KVM, Xen, LXC)."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"virt-manager"})," — GUI para libvirt — equivalente livre ao VMware Workstation."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"virsh"})," — CLI do libvirt — para automação e servidores."]}),e.jsxs("p",{children:["O ",e.jsx("strong",{children:"KVM"})," (Kernel-based Virtual Machine) é o hipervisor nativo do Linux, integrado diretamente ao kernel. Combinado com o ",e.jsx("strong",{children:"QEMU"}),", permite criar máquinas virtuais com performance próxima ao hardware nativo. É a tecnologia usada por provedores de nuvem como Google Cloud, DigitalOcean e muitos outros."]}),e.jsx("h2",{children:"1. Verificar Suporte e Instalar"}),e.jsx(r,{title:"Instalar KVM/QEMU no Ubuntu",code:`# Verificar se o processador suporta virtualização
  egrep -c '(vmx|svm)' /proc/cpuinfo
  # Se retornar > 0, suporta (vmx = Intel VT-x, svm = AMD-V)

  # Verificar se o KVM é utilizável
  kvm-ok
  # Saída esperada: INFO: /dev/kvm exists - KVM acceleration can be used

  # Instalar KVM, QEMU e ferramentas de gerenciamento
  sudo apt install -y qemu-kvm libvirt-daemon-system libvirt-clients     bridge-utils virt-manager virtinst

  # qemu-kvm        → emulador e acelerador
  # libvirt          → API de gerenciamento de VMs
  # virt-manager     → interface gráfica
  # virtinst         → ferramentas de linha de comando (virt-install)
  # bridge-utils     → redes bridge

  # Adicionar seu usuário aos grupos necessários
  sudo usermod -aG libvirt $USER
  sudo usermod -aG kvm $USER
  # Faça logout e login para aplicar

  # Verificar se o serviço está rodando
  sudo systemctl status libvirtd
  sudo systemctl enable libvirtd

  # Verificar a instalação
  virsh list --all
  # Deve mostrar uma lista vazia (sem VMs ainda)`}),e.jsx("h2",{children:"2. Criar Máquinas Virtuais"}),e.jsx(r,{title:"Criar VMs via terminal e interface gráfica",code:`# === VIA INTERFACE GRÁFICA (virt-manager) ===
  virt-manager
  # 1. Clique em "Criar nova VM"
  # 2. Escolha a ISO
  # 3. Defina CPU e memória
  # 4. Defina tamanho do disco
  # 5. Dê um nome e clique em Finalizar

  # === VIA TERMINAL (virt-install) ===

  # Criar VM Ubuntu Server
  virt-install     --name ubuntu-server     --ram 2048     --vcpus 2     --disk path=/var/lib/libvirt/images/ubuntu-server.qcow2,size=20     --os-variant ubuntu24.04     --cdrom /home/user/Downloads/ubuntu-24.04-server.iso     --network bridge=virbr0     --graphics vnc,listen=0.0.0.0     --console pty,target_type=serial

  # Criar VM com boot pela rede (PXE)
  virt-install     --name pxe-vm     --ram 4096     --vcpus 4     --disk size=30     --pxe     --network bridge=virbr0     --os-variant ubuntu24.04

  # Criar VM sem interface gráfica (headless)
  virt-install     --name servidor-web     --ram 2048     --vcpus 2     --disk size=20     --location http://archive.ubuntu.com/ubuntu/dists/noble/main/installer-amd64/     --os-variant ubuntu24.04     --network bridge=virbr0     --graphics none     --console pty,target_type=serial     --extra-args 'console=ttyS0,115200n8'

  # Listar variantes de SO disponíveis
  osinfo-query os | grep ubuntu`}),e.jsx("h2",{children:"3. Gerenciar VMs com virsh"}),e.jsx(r,{title:"Comandos virsh para gerenciar máquinas virtuais",code:`# Listar VMs
  virsh list              # VMs rodando
  virsh list --all        # Todas (incluindo paradas)

  # Controlar VMs
  virsh start ubuntu-server       # Iniciar
  virsh shutdown ubuntu-server    # Desligar (graceful)
  virsh destroy ubuntu-server     # Forçar desligamento (como puxar o cabo)
  virsh reboot ubuntu-server      # Reiniciar
  virsh suspend ubuntu-server     # Pausar (suspender na RAM)
  virsh resume ubuntu-server      # Retomar após suspender

  # Iniciar VM automaticamente no boot do host
  virsh autostart ubuntu-server
  virsh autostart --disable ubuntu-server

  # Ver informações da VM
  virsh dominfo ubuntu-server
  virsh domblklist ubuntu-server  # Discos
  virsh domiflist ubuntu-server   # Interfaces de rede

  # Acessar console da VM
  virsh console ubuntu-server
  # Ctrl+] para sair

  # Editar configuração XML da VM
  virsh edit ubuntu-server

  # Alterar recursos da VM (desligada)
  virsh setmaxmem ubuntu-server 4G
  virsh setmem ubuntu-server 4G
  virsh setvcpus ubuntu-server 4 --config

  # Deletar uma VM
  virsh destroy ubuntu-server      # Parar se estiver rodando
  virsh undefine ubuntu-server     # Remover definição
  virsh undefine ubuntu-server --remove-all-storage  # Remover VM + disco`}),e.jsx("h2",{children:"4. Snapshots"}),e.jsx(r,{title:"Gerenciar snapshots de VMs",code:`# Criar snapshot
  virsh snapshot-create-as ubuntu-server --name "antes-upgrade" --description "Antes do apt upgrade"

  # Listar snapshots
  virsh snapshot-list ubuntu-server

  # Ver detalhes de um snapshot
  virsh snapshot-info ubuntu-server --snapshotname "antes-upgrade"

  # Restaurar snapshot
  virsh snapshot-revert ubuntu-server --snapshotname "antes-upgrade"

  # Deletar snapshot
  virsh snapshot-delete ubuntu-server --snapshotname "antes-upgrade"

  # Snapshot com disco externo (para VMs grandes)
  virsh snapshot-create-as ubuntu-server     --name "snapshot-externo"     --disk-only     --diskspec vda,snapshot=external

  # Snapshot consistente (com fsfreeze)
  virsh snapshot-create-as ubuntu-server     --name "consistente"     --quiesce   # Requer qemu-guest-agent na VM`}),e.jsx("h2",{children:"5. Redes Virtuais"}),e.jsx(r,{title:"Configurar redes para VMs",code:`# Listar redes virtuais
  virsh net-list --all

  # A rede padrão "default" usa NAT (192.168.122.0/24)
  virsh net-info default

  # Criar rede bridge (VMs na mesma rede do host)
  sudo tee /etc/netplan/01-bridge.yaml > /dev/null << 'EOF'
  network:
    version: 2
    ethernets:
      enp0s3:
        dhcp4: false
    bridges:
      br0:
        interfaces: [enp0s3]
        dhcp4: true
  EOF
  sudo netplan apply

  # Criar rede isolada (VMs se comunicam entre si, sem internet)
  cat > /tmp/rede-isolada.xml << 'EOF'
  <network>
    <name>isolada</name>
    <bridge name="virbr1"/>
    <ip address="10.0.0.1" netmask="255.255.255.0">
      <dhcp>
        <range start="10.0.0.100" end="10.0.0.200"/>
      </dhcp>
    </ip>
  </network>
  EOF
  virsh net-define /tmp/rede-isolada.xml
  virsh net-start isolada
  virsh net-autostart isolada

  # Conectar VM a uma rede
  virsh attach-interface ubuntu-server --type network --source isolada --model virtio --config`}),e.jsx("h2",{children:"6. Gerenciamento de Discos"}),e.jsx(r,{title:"Gerenciar discos virtuais",code:`# Listar pools de armazenamento
  virsh pool-list --all

  # Ver imagens de disco
  ls -lh /var/lib/libvirt/images/

  # Criar disco virtual
  qemu-img create -f qcow2 /var/lib/libvirt/images/dados.qcow2 50G
  # -f qcow2 = formato (suporta snapshots, compressão, thin provisioning)

  # Ver informações do disco
  qemu-img info /var/lib/libvirt/images/ubuntu-server.qcow2

  # Redimensionar disco
  qemu-img resize /var/lib/libvirt/images/ubuntu-server.qcow2 +10G

  # Converter formato
  qemu-img convert -f raw -O qcow2 disco.raw disco.qcow2

  # Adicionar disco a uma VM
  virsh attach-disk ubuntu-server     /var/lib/libvirt/images/dados.qcow2 vdb     --driver qemu --subdriver qcow2 --config

  # Compactar disco qcow2 (recuperar espaço)
  qemu-img convert -O qcow2 disco-antigo.qcow2 disco-compactado.qcow2`}),e.jsx("h2",{children:"Troubleshooting"}),e.jsx(r,{title:"Problemas comuns com KVM",code:`# Erro: "KVM acceleration not available"
  # Verificar virtualização na BIOS/UEFI:
  egrep -c '(vmx|svm)' /proc/cpuinfo
  # Se 0: Habilite VT-x/AMD-V na BIOS

  # Erro: "Permission denied" ao criar VM
  # Adicionar ao grupo libvirt:
  sudo usermod -aG libvirt $USER
  # Logout e login

  # VM sem rede
  # Verificar se a rede default está ativa:
  virsh net-list --all
  virsh net-start default
  virsh net-autostart default

  # Performance ruim da VM
  # 1. Usar virtio para disco e rede (mais rápido)
  # 2. Habilitar KVM (não apenas QEMU)
  # 3. Não alocar mais vCPUs que CPUs físicas

  # Descobrir IP de uma VM
  virsh domifaddr ubuntu-server
  # Ou via arp:
  arp -n | grep virbr0

  # Migrar VM para outro host
  virsh migrate --live ubuntu-server qemu+ssh://outro-host/system`}),e.jsxs(s,{type:"info",title:"KVM vs VirtualBox vs Docker",children:[e.jsx("strong",{children:"KVM"})," é para virtualização completa (VMs com kernel próprio, qualquer SO).",e.jsx("strong",{children:"VirtualBox"})," é mais fácil de usar mas com performance inferior.",e.jsx("strong",{children:"Docker"})," não é virtualização — são containers que compartilham o kernel do host. Para servidores em produção, KVM é a escolha profissional."]})]})}export{u as default};

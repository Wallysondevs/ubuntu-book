import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function KVM() {
  return (
    <PageContainer
      title="KVM — Virtualização no Ubuntu"
      subtitle="Configure máquinas virtuais com KVM/QEMU e libvirt no Ubuntu. Alternativa nativa ao VirtualBox."
      difficulty="avancado"
      timeToRead="22 min"
    >
      <p>
        O <strong>KVM</strong> (Kernel-based Virtual Machine) é o hypervisor integrado
        ao kernel Linux. Com <strong>libvirt</strong> e <strong>virt-manager</strong>,
        você gerencia VMs com interface gráfica ou linha de comando.
      </p>

      <h2>1. Verificando Suporte à Virtualização</h2>
      <CodeBlock title="Verificar se o hardware suporta KVM" code={`# Verificar extensões de virtualização da CPU:
egrep -c '(vmx|svm)' /proc/cpuinfo
# > 0 = suporte a virtualização ativado
# vmx = Intel VT-x
# svm = AMD-V

# Verificar KVM disponível:
sudo apt install cpu-checker
sudo kvm-ok
# Saída ideal: "KVM acceleration can be used"

# Se não funcionar: ative na BIOS/UEFI:
# Intel: Intel Virtualization Technology (VT-x)
# AMD: AMD-V / SVM Mode`} />

      <h2>2. Instalação do KVM e libvirt</h2>
      <CodeBlock title="Instalando o ambiente de virtualização" code={`# Instalar KVM, QEMU, libvirt e ferramentas:
sudo apt install qemu-kvm libvirt-daemon-system libvirt-clients \
    bridge-utils virt-manager ovmf

# Adicionar usuário ao grupo libvirt:
sudo usermod -aG libvirt \$USER
sudo usermod -aG kvm \$USER
newgrp libvirt

# Iniciar e habilitar o serviço:
sudo systemctl enable --now libvirtd

# Verificar instalação:
virsh list --all          # Listar VMs (deve retornar vazio)
virt-manager              # Abrir interface gráfica`} />

      <h2>3. Criando VMs com virt-manager (GUI)</h2>
      <CodeBlock title="Passos para criar VM no virt-manager" code={`# Abrir virt-manager:
virt-manager

# Passos na interface gráfica:
# 1. Clique em "Nova máquina virtual"
# 2. Selecione "Mídia de instalação local (ISO)"
# 3. Browse: selecione o arquivo .ISO
# 4. Configure RAM (ex: 4096 MB) e CPUs
# 5. Configure disco (ex: 40 GB)
# 6. Nome da VM e rede
# 7. Finalizar e iniciar

# ISOs recomendadas para VMs:
# Ubuntu Server: https://ubuntu.com/download/server
# Debian: https://www.debian.org/distrib/
# Windows: via sua licença Microsoft`} />

      <h2>4. Gerenciando VMs com virsh</h2>
      <CodeBlock title="Comandos virsh para gerenciar VMs" code={`# Listar VMs:
virsh list                    # VMs rodando
virsh list --all              # Todas (incluindo paradas)

# Controles básicos:
virsh start nome-vm           # Iniciar VM
virsh shutdown nome-vm        # Desligar graciosamente
virsh destroy nome-vm         # Forçar desligamento (kill)
virsh reboot nome-vm          # Reiniciar
virsh suspend nome-vm         # Pausar (salva estado em RAM)
virsh resume nome-vm          # Retomar

# Informações:
virsh dominfo nome-vm         # Informações da VM
virsh vcpuinfo nome-vm        # Informações de CPU
virsh dommemstat nome-vm      # Estatísticas de memória

# Snapshots:
virsh snapshot-create-as nome-vm snap1 "Antes da atualização"
virsh snapshot-list nome-vm
virsh snapshot-revert nome-vm snap1
virsh snapshot-delete nome-vm snap1

# Criar VM pela linha de comando (método alternativo):
virt-install \
    --name ubuntu-test \
    --ram 4096 \
    --vcpus 2 \
    --disk path=/var/lib/libvirt/images/ubuntu-test.qcow2,size=40 \
    --cdrom /home/user/ubuntu-22.04.iso \
    --os-variant ubuntu22.04 \
    --network network=default \
    --graphics vnc`} />
    </PageContainer>
  );
}

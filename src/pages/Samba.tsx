import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function Samba() {
  return (
    <PageContainer
      title="Samba e NFS — Compartilhamento de Arquivos"
      subtitle="Compartilhe arquivos entre Linux e Windows com Samba, e entre sistemas Linux com NFS."
      difficulty="intermediario"
      timeToRead="20 min"
    >
      <p>
        <strong>Samba</strong> implementa o protocolo SMB/CIFS, permitindo compartilhar
        arquivos com Windows. <strong>NFS</strong> (Network File System) é o padrão
        nativo para compartilhamento entre sistemas Linux/Unix.
      </p>

      <h2>1. Samba — Servidor de Compartilhamento</h2>
      <CodeBlock title="Instalando e configurando o Samba" code={`# Instalar Samba:
sudo apt install samba samba-common

# Criar a pasta a compartilhar:
mkdir -p /srv/samba/compartilhado
sudo chmod 777 /srv/samba/compartilhado

# Editar a configuração do Samba:
sudo nano /etc/samba/smb.conf

# Adicione ao final do arquivo smb.conf:
[compartilhado]
    path = /srv/samba/compartilhado
    browseable = yes
    read only = no
    guest ok = yes           # Sem senha
    create mask = 0777
    directory mask = 0777

# Para compartilhamento com senha:
[privado]
    path = /srv/samba/privado
    browseable = yes
    valid users = usuario1 usuario2
    read only = no
    create mask = 0660
    directory mask = 0770

# Criar usuário Samba (deve existir no sistema também):
sudo useradd -M -s /sbin/nologin sambauser
sudo smbpasswd -a sambauser        # Definir senha Samba
sudo smbpasswd -e sambauser        # Habilitar usuário

# Verificar configuração:
testparm

# Iniciar/reiniciar Samba:
sudo systemctl restart smbd nmbd
sudo systemctl enable smbd nmbd

# Abrir firewall:
sudo ufw allow samba`} />

      <h2>2. Samba — Cliente (Acessar compartilhamento)</h2>
      <CodeBlock title="Acessar compartilhamentos Samba" code={`# Instalar cliente Samba:
sudo apt install smbclient cifs-utils

# Listar compartilhamentos disponíveis em um servidor:
smbclient -L //192.168.1.100 -U usuario
smbclient -L //servidor.local -N      # Sem usuário (guest)

# Conectar ao compartilhamento (modo interativo):
smbclient //192.168.1.100/compartilhado -U usuario

# Montar permanentemente no /etc/fstab:
sudo mkdir /mnt/samba
# Criar arquivo de credenciais (mais seguro que colocar senha no fstab):
sudo nano /etc/samba/credenciais
# Conteúdo:
# username=usuario
# password=senha
# domain=WORKGROUP
sudo chmod 600 /etc/samba/credenciais

# Adicionar ao /etc/fstab:
//192.168.1.100/compartilhado /mnt/samba cifs credentials=/etc/samba/credenciais,_netdev,uid=1000 0 0

# Montar agora:
sudo mount /mnt/samba`} />

      <h2>3. NFS — Compartilhamento entre Linux</h2>
      <CodeBlock title="Servidor e cliente NFS" code={`# SERVIDOR NFS:
sudo apt install nfs-kernel-server

# Criar pasta:
sudo mkdir -p /srv/nfs/dados
sudo chown nobody:nogroup /srv/nfs/dados

# Configurar exports:
sudo nano /etc/exports
# Formato: /pasta  rede/máscara(opções)
/srv/nfs/dados  192.168.1.0/24(rw,sync,no_subtree_check)
/srv/nfs/dados  192.168.1.50(rw,sync,no_root_squash)    # Para host específico

# Opções importantes:
# rw = leitura e escrita
# ro = somente leitura
# sync = escrita síncrona (mais seguro)
# no_root_squash = root do cliente age como root no servidor
# all_squash = mapear todos para nobody

# Aplicar e iniciar:
sudo exportfs -a
sudo systemctl restart nfs-kernel-server
sudo ufw allow nfs

# CLIENTE NFS:
sudo apt install nfs-common

# Montar:
sudo mount -t nfs 192.168.1.100:/srv/nfs/dados /mnt/nfs

# /etc/fstab para montar automaticamente:
192.168.1.100:/srv/nfs/dados /mnt/nfs nfs defaults,_netdev 0 0`} />
    </PageContainer>
  );
}

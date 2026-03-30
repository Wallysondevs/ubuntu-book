import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function LUKS() {
  return (
    <PageContainer
      title="LUKS — Criptografia de Disco"
      subtitle="Proteja seus dados com criptografia de disco completa usando LUKS no Ubuntu."
      difficulty="avancado"
      timeToRead="22 min"
    >
      <AlertBox type="danger">
        Criptografia de disco é irreversível sem a senha. Guarde a senha e o cabeçalho
        LUKS em local seguro. Dados perdidos sem a senha são irrecuperáveis.
      </AlertBox>

      <h2>1. Criptografar um Disco/Partição</h2>
      <CodeBlock title="Configurando LUKS em uma partição" code={`# Instalar cryptsetup:
sudo apt install cryptsetup

# ATENÇÃO: Este comando APAGA todos os dados da partição!
# Verificar o dispositivo correto com: lsblk

# Inicializar LUKS na partição /dev/sdb1:
sudo cryptsetup luksFormat /dev/sdb1
# Digite YES (maiúsculo) para confirmar
# Defina e confirme a senha

# Abrir o volume criptografado:
sudo cryptsetup luksOpen /dev/sdb1 dados-cripto
# Cria: /dev/mapper/dados-cripto

# Formatar o volume aberto:
sudo mkfs.ext4 /dev/mapper/dados-cripto

# Montar:
sudo mkdir /mnt/dados-cripto
sudo mount /dev/mapper/dados-cripto /mnt/dados-cripto

# Usar... depois de usar, fechar:
sudo umount /mnt/dados-cripto
sudo cryptsetup luksClose dados-cripto`} />

      <h2>2. Montagem Automática com /etc/crypttab</h2>
      <CodeBlock title="Configurar abertura automática no boot" code={`# Obter UUID do volume LUKS:
sudo cryptsetup luksDump /dev/sdb1 | grep UUID
# ou:
sudo blkid /dev/sdb1

# Criar arquivo de chave (evitar digitar senha no boot):
sudo dd if=/dev/urandom of=/etc/luks-chave.bin bs=4096 count=1
sudo chmod 400 /etc/luks-chave.bin
sudo cryptsetup luksAddKey /dev/sdb1 /etc/luks-chave.bin

# Configurar /etc/crypttab:
sudo nano /etc/crypttab
# Formato: nome  dispositivo  arquivo-chave  opções
dados-cripto  UUID=a1b2c3d4-...  /etc/luks-chave.bin  luks

# Configurar /etc/fstab:
sudo nano /etc/fstab
# /dev/mapper/dados-cripto  /mnt/dados-cripto  ext4  defaults  0  2

# Atualizar initramfs:
sudo update-initramfs -u`} />

      <h2>3. Backup do Cabeçalho LUKS</h2>
      <AlertBox type="warning">
        Se o cabeçalho LUKS for corrompido, você perde acesso aos dados mesmo com a senha.
        Faça backup SEMPRE.
      </AlertBox>
      <CodeBlock title="Backup e gerenciamento do LUKS" code={`# Fazer backup do cabeçalho LUKS (crítico!):
sudo cryptsetup luksHeaderBackup /dev/sdb1 --header-backup-file /backup/luks-header.bin
# Guarde esse arquivo em local seguro (pen drive, cofre, etc.)

# Restaurar cabeçalho LUKS:
sudo cryptsetup luksHeaderRestore /dev/sdb1 --header-backup-file /backup/luks-header.bin

# Adicionar senha alternativa (até 8 senhas/chaves):
sudo cryptsetup luksAddKey /dev/sdb1

# Remover uma senha:
sudo cryptsetup luksRemoveKey /dev/sdb1

# Ver informações do LUKS:
sudo cryptsetup luksDump /dev/sdb1

# Ver se está aberto:
sudo cryptsetup status dados-cripto

# Criar arquivo criptografado (alternativa para arquivos individuais):
# Usando GPG:
gpg --symmetric arquivo.txt     # Criptografar
gpg arquivo.txt.gpg             # Descriptografar`} />
    </PageContainer>
  );
}

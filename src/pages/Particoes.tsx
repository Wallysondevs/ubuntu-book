import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function Particoes() {
  return (
    <PageContainer
      title="Particionamento Avançado"
      subtitle="fdisk, parted, GParted — criar, redimensionar e gerenciar partições no Ubuntu com segurança."
      difficulty="avancado"
      timeToRead="22 min"
    >
      <AlertBox type="danger">
        Particionamento é uma operação de alto risco. SEMPRE faça backup antes.
        Um erro pode causar perda total de dados.
      </AlertBox>

      <h2>1. Visão Geral do Disco</h2>
      <CodeBlock title="Inspecionando discos e partições" code={`# Listar todos os discos e partições:
lsblk
lsblk -o NAME,SIZE,TYPE,FSTYPE,MOUNTPOINT,UUID

# Informações detalhadas:
sudo fdisk -l                 # Todos os discos
sudo fdisk -l /dev/sda        # Um disco específico
sudo parted -l                # Formato diferente

# Ver tabela de partições:
sudo sfdisk --list /dev/sda

# Tipo de tabela de partição:
# MBR (msdos) — máximo 4 partições primárias, discos até 2TB
# GPT         — ilimitado, suporte a discos grandes, UEFI`} />

      <h2>2. fdisk — Particionamento MBR e GPT</h2>
      <CodeBlock title="Usando fdisk para criar partições" code={`# ATENÇÃO: Os comandos abaixo SÃO INTERATIVOS
# Nada é escrito no disco até você pressionar 'w'

sudo fdisk /dev/sdb     # Substitua /dev/sdb pelo seu disco vazio

# Comandos dentro do fdisk:
# m  — ajuda (menu)
# p  — print (mostrar tabela atual)
# n  — nova partição
# d  — deletar partição
# t  — mudar tipo da partição
# g  — criar tabela GPT
# o  — criar tabela MBR
# w  — SALVAR e sair (escreve no disco!)
# q  — sair SEM salvar

# Sequência típica para criar partição:
# 1. sudo fdisk /dev/sdb
# 2. g  (criar tabela GPT — recomendado)
# 3. n  (nova partição)
# 4. Enter (número padrão = 1)
# 5. Enter (primeiro setor = padrão = início)
# 6. +20G (tamanho = 20GB, ou Enter para usar todo o disco)
# 7. p  (verificar como ficou)
# 8. w  (salvar e sair)

# Após criar, formatar a partição:
sudo mkfs.ext4 /dev/sdb1`} />

      <h2>3. parted — Particionamento por Linha de Comando</h2>
      <CodeBlock title="Criando partições com parted (não interativo)" code={`# parted permite comandos diretos (sem modo interativo)

# Criar tabela GPT:
sudo parted /dev/sdb mklabel gpt

# Criar partição de 20GB:
sudo parted /dev/sdb mkpart primary ext4 0% 20GB

# Criar partição usando o restante:
sudo parted /dev/sdb mkpart primary ext4 20GB 100%

# Ver resultado:
sudo parted /dev/sdb print

# Alinhar automaticamente (importante para SSDs!):
sudo parted -a optimal /dev/sdb mkpart primary ext4 0% 100%

# MODO INTERATIVO do parted:
sudo parted /dev/sdb
# (parted) print              — mostrar partições
# (parted) mklabel gpt        — criar tabela GPT
# (parted) mkpart primary ext4 0% 100%  — criar partição
# (parted) quit`} />

      <h2>4. Tipos de Partição e Casos de Uso</h2>
      <CodeBlock title="Estrutura de particionamento recomendada" code={`# ESQUEMA RECOMENDADO para Ubuntu Desktop (UEFI):
# /dev/sda1 — EFI System Partition: 512MB, tipo EFI (vfat)
# /dev/sda2 — /boot: 1GB, ext4 (opcional, mas recomendado)
# /dev/sda3 — / (raiz): 30-50GB, ext4 ou btrfs
# /dev/sda4 — /home: resto do disco, ext4

# ESQUEMA SIMPLES para Ubuntu Desktop:
# /dev/sda1 — EFI: 512MB, vfat
# /dev/sda2 — /: tudo, ext4
# Swap via arquivo (moderno, flexível):
sudo fallocate -l 8G /swapfile
sudo chmod 600 /swapfile
sudo mkswap /swapfile
sudo swapon /swapfile
# Adicionar ao fstab: /swapfile none swap sw 0 0

# SWAP como partição (modo tradicional):
sudo mkswap /dev/sda3
sudo swapon /dev/sda3
# Adicionar ao fstab: UUID=xxx none swap sw 0 0

# Atualizar o kernel sobre novas partições:
sudo partprobe /dev/sdb     # Inform kernel of partition table changes`} />
    </PageContainer>
  );
}

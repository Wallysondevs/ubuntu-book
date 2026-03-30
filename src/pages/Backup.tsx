import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function Backup() {
  return (
    <PageContainer
      title="Backup e Recuperação de Dados"
      subtitle="Estratégias de backup no Ubuntu: rsync, tar, Déjà Dup, duplicati e boas práticas para não perder dados."
      difficulty="intermediario"
      timeToRead="20 min"
    >
      <AlertBox type="danger">
        A regra 3-2-1: 3 cópias dos dados, em 2 mídias diferentes, com 1 offsite.
        Um backup não testado é apenas uma esperança.
      </AlertBox>

      <h2>1. rsync — Backup Incremental</h2>
      <CodeBlock title="rsync para backup eficiente" code={`# rsync só copia o que mudou — muito eficiente!

# Backup local simples:
rsync -av /home/user/documentos/ /backup/documentos/
# -a = archive (preservar tudo: permissões, timestamps, symlinks)
# -v = verbose (mostrar o que está sendo copiado)

# Sincronizar bidirecional (cuidado!):
rsync -av --delete /origem/ /destino/
# --delete = remove do destino o que não existe mais na origem

# Backup para servidor remoto via SSH:
rsync -avz -e ssh /home/user/ usuario@servidor:/backup/
# -z = compressão durante transferência

# Excluir arquivos desnecessários:
rsync -av --exclude='.cache' \
          --exclude='node_modules' \
          --exclude='*.tmp' \
          /home/user/ /backup/

# Backup com log:
rsync -av /home/user/ /backup/ 2>&1 | tee /var/log/backup.log

# Simular sem fazer (dry run):
rsync -avn /origem/ /destino/

# Script de backup automático com cron:
cat > ~/scripts/backup-diario.sh << 'EOF'
#!/bin/bash
DATE=\$(date +%Y%m%d)
ORIGEM="/home/user"
DESTINO="/backup/\$DATE"

mkdir -p "\$DESTINO"
rsync -av --exclude='.cache' \
    "\$ORIGEM/" "\$DESTINO/"

echo "Backup de \$DATE concluído!" >> /var/log/backup.log
EOF

crontab -e
# Adicionar: 0 2 * * * /home/user/scripts/backup-diario.sh`} />

      <h2>2. tar — Arquivamento</h2>
      <CodeBlock title="tar para criar arquivos de backup" code={`# Criar backup comprimido:
tar -czvf backup-documentos-\$(date +%Y%m%d).tar.gz ~/Documentos/
# -c = criar
# -z = comprimir com gzip
# -v = verbose
# -f = especificar arquivo de saída

# Com bzip2 (melhor compressão, mais lento):
tar -cjvf backup.tar.bz2 ~/Documentos/

# Com xz (máxima compressão):
tar -cJvf backup.tar.xz ~/Documentos/

# Ver conteúdo sem extrair:
tar -tvf backup.tar.gz

# Extrair:
tar -xzvf backup.tar.gz                    # No diretório atual
tar -xzvf backup.tar.gz -C /tmp/          # Em diretório específico
tar -xzvf backup.tar.gz arquivo-especifico # Extrair só um arquivo`} />

      <h2>3. Déjà Dup — Backup Gráfico</h2>
      <CodeBlock title="Backup automático com Déjà Dup" code={`# Déjà Dup (Backups) já vem no Ubuntu:
# Atividades → Backups

# Via apt se não estiver instalado:
sudo apt install deja-dup

# Configurações recomendadas:
# - Pasta para salvar: Google Drive, NextCloud, disco externo
# - Pastas para salvar: /home/usuario
# - Pastas a ignorar: Lixeira, Downloads
# - Frequência: Diária
# - Manter por: Pelo menos 6 meses

# Via linha de comando:
deja-dup --backup    # Fazer backup agora
deja-dup --restore   # Restaurar`} />
    </PageContainer>
  );
}

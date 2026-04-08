import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";

  export default function Backup() {
    return (
      <PageContainer
        title="Backup com rsync e Estratégias de Backup"
        subtitle="Guia completo de backup no Ubuntu: rsync, cron, backup incremental, rotativo, remoto via SSH, estratégia 3-2-1 e restauração."
        difficulty="intermediario"
        timeToRead="30 min"
      >
        <p>
          <strong>Backup</strong> é a prática mais importante de qualquer administrador de sistema.
          Sem backup, um disco queimado, um ransomware ou um <code>rm -rf</code> acidental pode
          significar perda total de dados. O <strong>rsync</strong> é a ferramenta padrão do Linux
          para backup — eficiente, flexível e confiável.
        </p>

        <h2>Estratégia 3-2-1 de Backup</h2>
        <ul>
          <li><strong>3 cópias</strong> dos seus dados (original + 2 backups)</li>
          <li><strong>2 tipos diferentes</strong> de mídia (disco local + nuvem, ou disco + HD externo)</li>
          <li><strong>1 cópia offsite</strong> (em outro local físico — nuvem ou servidor remoto)</li>
        </ul>

        <AlertBox type="danger" title="Regra de ouro">
          Um backup que nunca foi testado <strong>não é um backup</strong>. Sempre teste
          a restauração regularmente. Muitas empresas descobrem que seus backups estão
          corrompidos ou incompletos apenas quando precisam deles.
        </AlertBox>

        <h2>1. rsync — Fundamentos</h2>
        <CodeBlock
          title="Backup básico com rsync"
          code={`# Sintaxe básica do rsync
  # rsync [opções] origem destino

  # Copiar uma pasta para outro local (backup simples)
  rsync -av /home/usuario/documentos/ /backup/documentos/
  # -a = archive (preserva permissões, datas, links simbólicos, etc.)
  # -v = verbose (mostra o que está sendo copiado)

  # ATENÇÃO à barra final no rsync:
  rsync -av /home/usuario/documentos/ /backup/
  # documentos/  → copia o CONTEÚDO de documentos para /backup/
  rsync -av /home/usuario/documentos /backup/
  # documentos   → copia a PASTA documentos para /backup/documentos/

  # Flags essenciais do rsync
  rsync -avh --progress /origem/ /destino/
  # -a  = archive mode (recursivo + preserva tudo)
  # -v  = verbose
  # -h  = human-readable (mostra tamanhos em MB, GB)
  # --progress = mostra progresso de cada arquivo

  # Backup com compressão (útil para transferências remotas)
  rsync -avz /origem/ /destino/
  # -z = comprime dados durante a transferência

  # Deletar arquivos no destino que não existem mais na origem (ESPELHO)
  rsync -av --delete /origem/ /destino/
  # CUIDADO: --delete remove arquivos do destino!

  # Simulação (dry-run) — mostra o que faria sem executar
  rsync -avn --delete /origem/ /destino/
  # -n = dry-run (simulação)

  # Excluir arquivos/pastas do backup
  rsync -av --exclude='*.tmp' --exclude='.cache' --exclude='node_modules' \
    /home/usuario/ /backup/usuario/

  # Usar arquivo de exclusões
  cat > /etc/rsync-excludes.txt << 'EOF'
  .cache
  .local/share/Trash
  *.tmp
  *.log
  node_modules
  .npm
  .yarn
  __pycache__
  .venv
  EOF

  rsync -av --exclude-from=/etc/rsync-excludes.txt /home/usuario/ /backup/`}
        />

        <h2>2. Backup Remoto via SSH</h2>
        <CodeBlock
          title="Backup para servidor remoto com rsync + SSH"
          code={`# Backup local → servidor remoto
  rsync -avz -e ssh /home/usuario/documentos/ usuario@servidor:/backup/documentos/

  # Backup servidor remoto → local
  rsync -avz -e ssh usuario@servidor:/dados/ /backup/dados-servidor/

  # Usar porta SSH não padrão
  rsync -avz -e "ssh -p 2222" /home/usuario/ usuario@servidor:/backup/

  # Usar chave SSH específica (sem pedir senha)
  rsync -avz -e "ssh -i ~/.ssh/backup_key" /dados/ usuario@servidor:/backup/

  # Limitar a banda (útil para não sobrecarregar a rede)
  rsync -avz --bwlimit=5000 /dados/ usuario@servidor:/backup/
  # 5000 = 5000 KB/s (~5 MB/s)

  # Backup com progresso geral (não por arquivo)
  rsync -ah --info=progress2 /dados/ usuario@servidor:/backup/

  # Backup incremental com hard links (economiza espaço)
  # Cada backup é um "snapshot" completo, mas arquivos iguais usam hard links
  rsync -avh --link-dest=/backup/anterior/ /dados/ /backup/novo/
  # --link-dest aponta para o backup anterior
  # Arquivos que não mudaram são hard links (ocupam ~0 espaço extra)
  # Arquivos que mudaram são copiados normalmente`}
        />

        <h2>3. Backup Incremental Rotativo</h2>
        <CodeBlock
          title="Script de backup rotativo com snapshots"
          code={`# Script de backup com rotação (mantém últimos 7 backups diários)
  cat > /usr/local/bin/backup-rotativo.sh << 'SCRIPT'
  #!/bin/bash
  set -euo pipefail

  # Configurações
  ORIGEM="/home"
  DESTINO="/backup"
  EXCLUDES="/etc/rsync-excludes.txt"
  MAX_BACKUPS=7

  # Criar diretório de destino se não existir
  mkdir -p "$DESTINO"

  # Nome do backup com timestamp
  TIMESTAMP=$(date +%Y-%m-%d_%H-%M)
  BACKUP_DIR="$DESTINO/$TIMESTAMP"

  # Encontrar o backup mais recente para usar como referência
  LATEST=$(ls -1d "$DESTINO"/2* 2>/dev/null | tail -1 || echo "")

  # Fazer backup incremental com hard links
  if [ -n "$LATEST" ]; then
      echo "Backup incremental baseado em: $LATEST"
      rsync -ah --delete --link-dest="$LATEST" \
          --exclude-from="$EXCLUDES" \
          "$ORIGEM/" "$BACKUP_DIR/"
  else
      echo "Primeiro backup (completo)"
      rsync -ah --delete \
          --exclude-from="$EXCLUDES" \
          "$ORIGEM/" "$BACKUP_DIR/"
  fi

  # Criar link simbólico para o backup mais recente
  ln -sfn "$BACKUP_DIR" "$DESTINO/latest"

  # Rotação: remover backups antigos (manter últimos N)
  cd "$DESTINO"
  BACKUPS_COUNT=$(ls -1d 2* 2>/dev/null | wc -l)
  if [ "$BACKUPS_COUNT" -gt "$MAX_BACKUPS" ]; then
      REMOVE_COUNT=$((BACKUPS_COUNT - MAX_BACKUPS))
      ls -1d 2* | head -n "$REMOVE_COUNT" | while read dir; do
          echo "Removendo backup antigo: $dir"
          rm -rf "$dir"
      done
  fi

  echo "Backup concluído: $BACKUP_DIR"
  echo "Espaço usado: $(du -sh "$BACKUP_DIR" | awk '{print $1}')"
  SCRIPT

  chmod +x /usr/local/bin/backup-rotativo.sh

  # Testar o script
  sudo /usr/local/bin/backup-rotativo.sh`}
        />

        <h2>4. Agendar Backups com Cron</h2>
        <CodeBlock
          title="Automatizar backups com crontab"
          code={`# Editar o crontab do root
  sudo crontab -e

  # Backup diário às 2:00 da manhã
  0 2 * * * /usr/local/bin/backup-rotativo.sh >> /var/log/backup.log 2>&1

  # Backup a cada 6 horas
  0 */6 * * * /usr/local/bin/backup-rotativo.sh >> /var/log/backup.log 2>&1

  # Backup semanal (domingo às 3:00)
  0 3 * * 0 /usr/local/bin/backup-semanal.sh >> /var/log/backup.log 2>&1

  # Backup mensal (dia 1 às 4:00)
  0 4 1 * * /usr/local/bin/backup-mensal.sh >> /var/log/backup.log 2>&1

  # Configurar rotação do log de backup
  sudo tee /etc/logrotate.d/backup > /dev/null << 'EOF'
  /var/log/backup.log {
      weekly
      rotate 4
      compress
      missingok
      notifempty
  }
  EOF

  # Usar systemd timer ao invés de cron (alternativa moderna)
  sudo tee /etc/systemd/system/backup.service > /dev/null << 'EOF'
  [Unit]
  Description=Backup diário

  [Service]
  Type=oneshot
  ExecStart=/usr/local/bin/backup-rotativo.sh
  EOF

  sudo tee /etc/systemd/system/backup.timer > /dev/null << 'EOF'
  [Unit]
  Description=Executar backup diário

  [Timer]
  OnCalendar=*-*-* 02:00:00
  Persistent=true

  [Install]
  WantedBy=timers.target
  EOF

  sudo systemctl enable backup.timer
  sudo systemctl start backup.timer`}
        />

        <h2>5. Backup de Bancos de Dados</h2>
        <CodeBlock
          title="Backup de MySQL/PostgreSQL"
          code={`# === MySQL / MariaDB ===
  # Backup de todos os bancos
  mysqldump --all-databases -u root -p > backup-mysql-$(date +%Y%m%d).sql

  # Backup de um banco específico
  mysqldump -u root -p nome_do_banco > banco-$(date +%Y%m%d).sql

  # Backup comprimido
  mysqldump -u root -p nome_do_banco | gzip > banco-$(date +%Y%m%d).sql.gz

  # Restaurar
  mysql -u root -p nome_do_banco < backup.sql
  # Ou comprimido:
  gunzip < banco.sql.gz | mysql -u root -p nome_do_banco

  # === PostgreSQL ===
  # Backup de todos os bancos
  sudo -u postgres pg_dumpall > backup-pg-$(date +%Y%m%d).sql

  # Backup de um banco específico
  sudo -u postgres pg_dump nome_do_banco > banco-$(date +%Y%m%d).sql

  # Backup em formato custom (mais eficiente, permite restauração parcial)
  sudo -u postgres pg_dump -Fc nome_do_banco > banco-$(date +%Y%m%d).dump

  # Restaurar
  sudo -u postgres psql nome_do_banco < backup.sql
  # Ou formato custom:
  sudo -u postgres pg_restore -d nome_do_banco banco.dump`}
        />

        <h2>6. Ferramentas Alternativas de Backup</h2>
        <CodeBlock
          title="Outras ferramentas de backup"
          code={`# === BorgBackup (backup deduplicado e criptografado) ===
  sudo apt install -y borgbackup

  # Inicializar repositório
  borg init --encryption=repokey /backup/borg-repo

  # Criar um backup
  borg create /backup/borg-repo::backup-{now} /home /etc

  # Listar backups
  borg list /backup/borg-repo

  # Restaurar
  borg extract /backup/borg-repo::backup-2024-07-15

  # Limpar backups antigos (manter últimos 7 diários, 4 semanais, 6 mensais)
  borg prune --keep-daily=7 --keep-weekly=4 --keep-monthly=6 /backup/borg-repo

  # === Duplicity (backup criptografado para nuvem) ===
  sudo apt install -y duplicity

  # Backup para S3
  duplicity /home/usuario s3://meu-bucket/backup

  # Backup para Google Drive
  duplicity /home/usuario gdocs://usuario@gmail.com/backup

  # === rclone (sincronizar com nuvem) ===
  sudo apt install -y rclone

  # Configurar (interativo)
  rclone config
  # Suporta: Google Drive, Dropbox, S3, Azure, OneDrive, etc.

  # Sincronizar pasta com nuvem
  rclone sync /backup/ remote:backup/
  rclone copy /dados/ remote:dados/`}
        />

        <h2>Troubleshooting</h2>
        <CodeBlock
          title="Problemas comuns com backup"
          code={`# rsync: "Permission denied"
  # Solução: Executar como root ou usar --no-perms
  sudo rsync -av /dados/ /backup/
  # Ou sem preservar permissões:
  rsync -av --no-perms --no-owner --no-group /dados/ /backup/

  # rsync: "No space left on device"
  # Verificar espaço:
  df -h /backup
  # Limpar backups antigos ou usar outro destino

  # rsync muito lento
  # Usar compressão para transferências remotas:
  rsync -avz --compress-level=9 /dados/ servidor:/backup/
  # Verificar a rede:
  iperf3 -c servidor

  # Backup corrompido — como verificar integridade
  # Verificar checksums:
  rsync -avc --checksum /dados/ /backup/
  # O -c força verificação por checksum ao invés de tamanho+data

  # Restaurar de um backup
  # Simplesmente faça o rsync inverso:
  rsync -avh /backup/documentos/ /home/usuario/documentos/
  # Use --dry-run primeiro para verificar:
  rsync -avhn /backup/documentos/ /home/usuario/documentos/`}
        />

        <AlertBox type="info" title="Backup na nuvem">
          Para backup offsite (fora do local), considere serviços como AWS S3,
          Backblaze B2, Google Cloud Storage ou Wasabi. O <code>rclone</code> 
          suporta todos eles e pode ser combinado com criptografia via 
          <code>borg</code> ou <code>duplicity</code> para segurança máxima.
        </AlertBox>
      </PageContainer>
    );
  }
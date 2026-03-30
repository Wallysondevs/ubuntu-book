import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function Cron() {
  return (
    <PageContainer
      title="Cron — Agendamento de Tarefas"
      subtitle="Agende tarefas automáticas com cron e systemd timers: backups, scripts e manutenção do sistema."
      difficulty="intermediario"
      timeToRead="18 min"
    >
      <p>
        O <strong>cron</strong> é o agendador de tarefas clássico do Linux.
        Com ele você pode executar scripts automaticamente em horários programados:
        backups diários, relatórios semanais, limpeza de logs e muito mais.
      </p>

      <h2>1. Formato Crontab</h2>
      <CodeBlock title="Entendendo a sintaxe do cron" code={`# Abrir o editor de cron do usuário atual:
crontab -e

# VER crontab atual:
crontab -l

# FORMATO:
# minuto  hora  dia-do-mês  mês  dia-da-semana  comando
#   0-59  0-23     1-31    1-12      0-7
#   (0 e 7 são domingo)

# EXEMPLOS:
# Executar todo dia às 2h30:
30 2 * * * /home/user/scripts/backup.sh

# Todo domingo às 00:00:
0 0 * * 0 /home/user/scripts/limpeza-semanal.sh

# A cada 5 minutos:
*/5 * * * * /home/user/scripts/verificar.sh

# A cada hora:
0 * * * * /home/user/scripts/relatorio.sh

# Todo dia 1 do mês às 3h:
0 3 1 * * /home/user/scripts/backup-mensal.sh

# De segunda a sexta, às 9h:
0 9 * * 1-5 /home/user/scripts/diario.sh

# A cada 15 minutos durante horário comercial:
*/15 8-18 * * 1-5 /home/user/scripts/monitorar.sh`} />

      <h2>2. Atalhos de Agendamento</h2>
      <CodeBlock title="Strings especiais do cron" code={`# Strings especiais disponíveis:
@reboot    — executar uma vez ao iniciar o sistema
@hourly    — a cada hora (equivalente a: 0 * * * *)
@daily     — todo dia à meia-noite (0 0 * * *)
@weekly    — todo domingo à meia-noite (0 0 * * 0)
@monthly   — todo dia 1 à meia-noite (0 0 1 * *)
@yearly    — todo 1 de janeiro (0 0 1 1 *)

# Exemplos:
@reboot /home/user/scripts/startup.sh
@daily /home/user/scripts/backup.sh
@weekly /home/user/scripts/limpeza.sh

# Ferramenta visual para ajudar com sintaxe cron:
# https://crontab.guru`} />

      <h2>3. Cron do Sistema</h2>
      <CodeBlock title="Cron de sistema vs usuário" code={`# Cron do SISTEMA (root, /etc/crontab):
sudo crontab -e    # Para o usuário root

# Ou nos diretórios pré-configurados:
ls /etc/cron.d/        # Crons de pacotes instalados
ls /etc/cron.daily/    # Scripts executados DIARIAMENTE
ls /etc/cron.weekly/   # Scripts executados SEMANALMENTE
ls /etc/cron.monthly/  # Scripts executados MENSALMENTE

# Adicionar script de backup diário:
sudo cp meu-backup.sh /etc/cron.daily/
sudo chmod +x /etc/cron.daily/meu-backup.sh

# Ver logs do cron:
grep cron /var/log/syslog
journalctl -u cron | tail -20`} />

      <h2>4. Boas Práticas para Scripts Cron</h2>
      <CodeBlock title="Criando um script de backup com cron" code={`#!/bin/bash
# /home/user/scripts/backup.sh
# Script de backup diário

# Configurações:
BACKUP_DIR="/backup/diario"
SOURCE_DIR="/home/user/documentos"
DATE=\$(date +%Y%m%d_%H%M%S)
LOG="/var/log/backup.log"

# Criar diretório se não existir:
mkdir -p "\$BACKUP_DIR"

# Fazer backup:
tar -czf "\$BACKUP_DIR/backup_\${DATE}.tar.gz" "\$SOURCE_DIR" 2>&1

# Verificar se funcionou:
if [ \$? -eq 0 ]; then
    echo "\$(date): Backup concluído com sucesso" >> "\$LOG"
else
    echo "\$(date): ERRO no backup!" >> "\$LOG"
fi

# Manter apenas os últimos 7 backups:
ls -t "\$BACKUP_DIR"/*.tar.gz | tail -n +8 | xargs -r rm

# Tornar executável e adicionar ao cron:
# chmod +x backup.sh
# crontab -e
# 0 2 * * * /home/user/scripts/backup.sh`} />
    </PageContainer>
  );
}

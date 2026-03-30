import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function JournalCtl() {
  return (
    <PageContainer
      title="journalctl — Logs do Sistema"
      subtitle="Domine o journalctl para consultar, filtrar e analisar logs do systemd no Ubuntu."
      difficulty="intermediario"
      timeToRead="15 min"
    >
      <p>
        O <strong>journalctl</strong> é a ferramenta para consultar o journal do systemd,
        que centraliza todos os logs do sistema, kernel e serviços em um único lugar.
      </p>

      <h2>1. Consultas Básicas</h2>
      <CodeBlock title="Comandos essenciais do journalctl" code={`# Ver todos os logs (do mais antigo ao mais recente):
journalctl

# Seguir logs em tempo real (como tail -f):
journalctl -f

# Ver últimas N linhas:
journalctl -n 50
journalctl -n 100

# Logs do boot atual:
journalctl -b
journalctl -b 0    # Boot atual (mesmo que -b)
journalctl -b -1   # Boot anterior
journalctl -b -2   # Dois boots atrás

# Logs de boots anteriores (listar todos):
journalctl --list-boots`} />

      <h2>2. Filtrando por Serviço e Prioridade</h2>
      <CodeBlock title="Filtros avançados do journalctl" code={`# Logs de um serviço específico:
journalctl -u nginx
journalctl -u mysql
journalctl -u ssh
journalctl -u docker.service

# Seguir logs de um serviço em tempo real:
journalctl -f -u nginx

# Logs de MÚLTIPLOS serviços:
journalctl -u nginx -u mysql

# Filtrar por prioridade (nível de log):
# 0=emerg, 1=alert, 2=crit, 3=err, 4=warning, 5=notice, 6=info, 7=debug
journalctl -p err          # Apenas erros e acima
journalctl -p warning      # Avisos e acima
journalctl -p 0..3         # Emergência até erros críticos

# Logs do kernel:
journalctl -k              # Apenas mensagens do kernel (como dmesg)`} />

      <h2>3. Filtros por Tempo</h2>
      <CodeBlock title="Consultando logs por período" code={`# Logs desde X horas atrás:
journalctl --since "1 hour ago"
journalctl --since "2 hours ago"
journalctl --since "1 day ago"

# Logs de um período específico:
journalctl --since "2024-01-15 08:00" --until "2024-01-15 10:00"
journalctl --since "2024-01-15" --until "2024-01-16"
journalctl --since "yesterday"
journalctl --since "today"

# Últimos 30 minutos:
journalctl --since "\$(date -d '30 minutes ago' '+%Y-%m-%d %H:%M:%S')"`} />

      <h2>4. Gerenciando o Journal</h2>
      <AlertBox type="info">
        O journal pode crescer muito em servidores com muito tráfego. Configure um limite
        de tamanho para evitar uso excessivo de disco.
      </AlertBox>
      <CodeBlock title="Configuração e limpeza do journal" code={`# Ver tamanho atual do journal:
journalctl --disk-usage

# Limpar logs antigos:
sudo journalctl --vacuum-time=30d    # Manter apenas últimos 30 dias
sudo journalctl --vacuum-size=1G     # Manter apenas 1GB de logs

# Configurar limite permanente:
sudo nano /etc/systemd/journald.conf
# [Journal]
# SystemMaxUse=500M      # Máximo 500MB de logs
# MaxRetentionSec=30d    # Manter no máximo 30 dias
sudo systemctl restart systemd-journald

# Exportar logs para arquivo:
journalctl -u nginx > /tmp/nginx-logs.txt
journalctl --since "1 week ago" | gzip > /backup/logs-semana.txt

# Buscar texto específico nos logs:
journalctl | grep -i "error"
journalctl -u nginx | grep "404"
journalctl --grep="Failed password"`} />
    </PageContainer>
  );
}

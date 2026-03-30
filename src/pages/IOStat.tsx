import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function IOStat() {
  return (
    <PageContainer
      title="Monitoramento de Performance"
      subtitle="iostat, vmstat, sar, free e netstat — analise gargalos de CPU, memória, disco e rede no Ubuntu."
      difficulty="avancado"
      timeToRead="20 min"
    >
      <h2>1. CPU e Carga do Sistema</h2>
      <CodeBlock title="Analisando CPU e carga" code={`# Ver carga atual (load average):
uptime
# 15:00  up 2 days,  3:00,  2 users,  load average: 0.50, 0.75, 0.80
# Os três números são: 1 min, 5 min, 15 min
# Load average igual ao número de núcleos = 100% de uso

# Número de núcleos:
nproc
grep -c processor /proc/cpuinfo

# mpstat — CPU por núcleo:
sudo apt install sysstat
mpstat -P ALL 2 5    # Ver todos os núcleos, a cada 2s, 5 amostras

# sar — relatório histórico de CPU:
sar -u 5 10         # CPU a cada 5s, 10 vezes
sar -u -f /var/log/sysstat/saXX  # Histórico do dia XX`} />

      <h2>2. Memória e Swap</h2>
      <CodeBlock title="Analisando uso de memória" code={`# Resumo de memória:
free -h               # Human readable
free -h -s 2          # Atualizar a cada 2 segundos

# Saída do free explicada:
#              total        used        free      shared  buff/cache   available
# Mem:          16Gi        5.2Gi      2.1Gi      500Mi      8.7Gi      10Gi
# Swap:          8Gi          0Gi      8Gi
# available = memória REALMENTE disponível para novos processos

# vmstat — memória + I/O + CPU:
vmstat 2 10         # A cada 2s, 10 amostras

# Colunas do vmstat:
# r  = processos aguardando CPU
# b  = processos em sleep
# si = swap in (dado saindo do disco para RAM)
# so = swap out (dado saindo da RAM para disco)
# bi = blocos lidos do disco
# bo = blocos escritos no disco

# Verificar swap em uso:
swapon --show
cat /proc/swaps`} />

      <h2>3. Disco e I/O</h2>
      <CodeBlock title="Analisando I/O de disco" code={`# iostat — estatísticas de I/O:
iostat                      # Snapshot atual
iostat -x 2 5               # Detalhado, a cada 2s, 5 amostras

# Colunas importantes do iostat -x:
# %util    = % do tempo em que o disco estava ocupado (>80% = gargalo)
# r/s, w/s = operações de leitura/escrita por segundo
# rkB/s, wkB/s = KB lidos/escritos por segundo
# await    = tempo médio de espera por operação (ms)
# svctm    = tempo médio de serviço (ms)

# iotop — monitoramento de I/O por processo:
sudo apt install iotop
sudo iotop                  # Interativo
sudo iotop -o               # Apenas processos com I/O ativo

# df e du:
df -h                       # Espaço em disco
du -sh /var/log             # Tamanho de diretório
du -sh * | sort -rh | head  # Maiores diretórios`} />

      <h2>4. Rede — Monitoramento</h2>
      <CodeBlock title="Monitoramento de tráfego de rede" code={`# ifstat — tráfego por interface:
sudo apt install ifstat
ifstat                      # Tráfego em KB/s

# nethogs — tráfego por processo:
sudo apt install nethogs
sudo nethogs

# nload — gráfico de tráfego:
sudo apt install nload
nload

# ss — conexões ativas (moderno, substitui netstat):
ss -tulpn               # Portas em escuta
ss -ant                 # Conexões TCP
ss -s                   # Resumo estatísticas

# iftop — tráfego por conexão (interativo):
sudo apt install iftop
sudo iftop -i ens33

# Histórico de tráfego com sar:
sar -n DEV 5 10         # Tráfego por interface`} />
    </PageContainer>
  );
}

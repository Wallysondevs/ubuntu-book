import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function Timeshift() {
  return (
    <PageContainer
      title="Timeshift — Snapshots do Sistema"
      subtitle="Use Timeshift para criar e restaurar pontos de restauração do Ubuntu, como o Ponto de Restauração do Windows."
      difficulty="iniciante"
      timeToRead="12 min"
    >
      <p>
        O <strong>Timeshift</strong> cria snapshots do sistema Ubuntu, permitindo
        restaurar o estado completo do sistema após uma atualização problemática,
        instalação que deu errado ou configuração incorreta.
      </p>

      <h2>1. Instalação e Configuração</h2>
      <CodeBlock title="Instalando e configurando o Timeshift" code={`# Instalar Timeshift:
sudo apt install timeshift

# Abrir interface gráfica:
sudo timeshift-gtk

# Via linha de comando:
sudo timeshift --help`} />

      <h2>2. Criando Snapshots</h2>
      <AlertBox type="info">
        Crie um snapshot ANTES de qualquer mudança importante: atualização do sistema,
        instalação de drivers, mudança de configurações críticas.
      </AlertBox>
      <CodeBlock title="Criando e gerenciando snapshots" code={`# Criar snapshot agora:
sudo timeshift --create --comments "Antes da atualização do sistema"
sudo timeshift --create --comments "Sistema limpo recém-instalado"

# Listar snapshots existentes:
sudo timeshift --list

# Saída exemplo:
# Num  Name                 Tags  Comments
# 0    2024-01-15_10-00-00  O     Antes da atualização

# Agendar snapshots automáticos (configurar no GUI ou):
sudo nano /etc/timeshift/timeshift.json
# "schedule_monthly": true,
# "schedule_weekly": false,
# "schedule_daily": true,
# "schedule_hourly": false,
# "keep_monthly": "2",
# "keep_weekly": "3",
# "keep_daily": "5"`} />

      <h2>3. Restaurando o Sistema</h2>
      <AlertBox type="warning">
        A restauração REVERTE o sistema ao estado do snapshot. Arquivos pessoais em /home
        podem ser excluídos da restauração dependendo da configuração.
      </AlertBox>
      <CodeBlock title="Restaurando a partir de um snapshot" code={`# Restaurar o snapshot mais recente:
sudo timeshift --restore

# Restaurar snapshot específico:
sudo timeshift --restore --snapshot "2024-01-15_10-00-00"

# Restaurar sem confirmações (não recomendado para iniciantes):
sudo timeshift --restore --snapshot "2024-01-15_10-00-00" --skip-grub

# Se o sistema não boota — restaurar pelo Live USB:
# 1. Boot pelo Live USB do Ubuntu
# 2. Instalar timeshift: sudo apt install timeshift
# 3. sudo timeshift --restore
# 4. Selecionar o snapshot desejado

# Excluir snapshot antigo:
sudo timeshift --delete --snapshot "2024-01-10_10-00-00"`} />

      <h2>4. Dicas de Uso</h2>
      <CodeBlock title="Melhores práticas com Timeshift" code={`# Configuração recomendada para desktop:
# - Tipo: rsync (para qualquer filesystem)
# - Ou: btrfs (se usando filesystem btrfs)
# - Frequência: Diário + Antes de atualizações

# O Timeshift NÃO é substituto de backup de arquivos pessoais!
# Ele salva apenas o sistema (/).
# Para backup do /home, use rsync ou duplicati:
sudo apt install deja-dup    # Interface gráfica para backup pessoal
deja-dup                     # Abrir o aplicativo de backup

# Verificar espaço usado pelos snapshots:
sudo timeshift --list
du -sh /run/timeshift/backup/   # Ver onde os snapshots estão`} />
    </PageContainer>
  );
}

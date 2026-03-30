import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function Dpkg() {
  return (
    <PageContainer
      title="dpkg — Gerenciador de Pacotes Baixo Nível"
      subtitle="O dpkg é a base do sistema de pacotes do Ubuntu/Debian. Entenda como instalar, remover e inspecionar pacotes .deb."
      difficulty="avancado"
      timeToRead="18 min"
    >
      <p>
        O <strong>dpkg</strong> (Debian Package) é a ferramenta de baixo nível que
        instala e gerencia pacotes <code>.deb</code>. O APT usa o dpkg por baixo dos panos,
        mas há situações em que você precisará usá-lo diretamente.
      </p>

      <h2>1. Instalando Pacotes .deb Manualmente</h2>
      <CodeBlock title="Instalação de arquivos .deb" code={`# Baixar um pacote .deb (exemplo: Google Chrome)
wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb

# Instalar o .deb:
sudo dpkg -i google-chrome-stable_current_amd64.deb

# Se der erro de dependências:
sudo apt install -f
# -f = --fix-broken: instala dependências faltando e finaliza a instalação

# Instalar e resolver deps automaticamente (recomendado):
sudo apt install ./google-chrome-stable_current_amd64.deb
# O ./ no início faz o apt tratar como arquivo local, não nome de pacote`} />

      <h2>2. Inspecionando Pacotes</h2>
      <CodeBlock title="Consultas essenciais do dpkg" code={`# Listar TODOS os pacotes instalados:
dpkg -l
dpkg --list

# Filtrar por status:
# ii = instalado corretamente
# rc = removido mas configs restantes
# un = desconhecido / não instalado
dpkg -l | grep "^rc"    # Pacotes removidos com configs sobrando
dpkg -l | grep "^ii"    # Pacotes instalados

# Buscar pacote pelo nome:
dpkg -l | grep firefox
dpkg -l "*chrome*"       # Com wildcard

# Ver arquivos instalados por um pacote:
dpkg -L nginx
dpkg -L bash | head -20

# Ver informações (status) de um pacote:
dpkg -s nginx
dpkg --status firefox

# Descobrir qual pacote instalou um arquivo:
dpkg -S /usr/bin/ls
dpkg -S /etc/nginx/nginx.conf

# Ver conteúdo de um .deb SEM instalar:
dpkg -c pacote.deb     # listar arquivos dentro do .deb
dpkg -I pacote.deb     # informações do pacote .deb`} />

      <h2>3. Removendo Pacotes</h2>
      <AlertBox type="warning">
        Use <code>dpkg --purge</code> com cuidado. Remove configurações que podem
        ser difíceis de recriar.
      </AlertBox>
      <CodeBlock title="Remoção com dpkg" code={`# Remover pacote (mantém arquivos de configuração):
sudo dpkg -r nome-do-pacote
# Equivalente ao: sudo apt remove

# Remover pacote E suas configurações (purge):
sudo dpkg -P nome-do-pacote
sudo dpkg --purge nome-do-pacote
# Equivalente ao: sudo apt purge

# Limpar todos os pacotes removidos (status "rc"):
dpkg -l | grep "^rc" | awk '{print $2}' | xargs sudo dpkg --purge
# Isso limpa o banco de dados de pacotes antigos removidos`} />

      <h2>4. Reconfiguração e Reparo</h2>
      <CodeBlock title="Reconfigurando e reparando pacotes" code={`# Reconfigurar um pacote (refaz a configuração interativa):
sudo dpkg-reconfigure tzdata            # Fuso horário
sudo dpkg-reconfigure locales           # Idiomas
sudo dpkg-reconfigure keyboard-configuration  # Teclado
sudo dpkg-reconfigure grub-pc           # GRUB

# Verificar integridade de arquivos instalados:
sudo dpkg -V                  # Verifica TODOS os pacotes
sudo dpkg -V nginx            # Verifica apenas nginx
# Saída vazia = tudo OK
# Letras antes do nome = o que foi alterado

# Reparar banco de dados dpkg corrompido:
sudo dpkg --configure -a      # Configurar pacotes pendentes
sudo apt install -f           # Corrigir dependências quebradas

# Forçar instalação (ignorar erros — USE COM CUIDADO!):
sudo dpkg -i --force-overwrite pacote.deb
sudo dpkg -i --force-all pacote.deb`} />

      <h2>5. Repositórios e Fontes de Pacotes</h2>
      <CodeBlock title="Estrutura de repositórios Debian/Ubuntu" code={`# Ver repositórios configurados:
cat /etc/apt/sources.list
ls /etc/apt/sources.list.d/

# Formato de uma linha de repositório:
# deb [opções] url distribuição componentes
# deb https://archive.ubuntu.com/ubuntu noble main restricted universe multiverse

# Componentes:
# main        — software livre suportado pela Canonical
# restricted  — drivers proprietários (nvidia, etc)
# universe    — software livre mantido pela comunidade
# multiverse  — software proprietário ou de licença restrita

# Atualizar lista de repositórios:
sudo apt update

# Adicionar repositório manualmente:
sudo add-apt-repository "deb http://repo.exemplo.com/ubuntu focal main"

# Importar chave GPG de um repositório:
curl -fsSL https://chave-repo.gpg | sudo gpg --dearmor -o /usr/share/keyrings/chave-repo.gpg`} />
    </PageContainer>
  );
}

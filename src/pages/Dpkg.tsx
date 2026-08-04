import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";

  export default function Dpkg() {
    return (
      <PageContainer
        title="dpkg — Gerenciador de Pacotes de Baixo Nível"
        subtitle="Guia completo do dpkg no Ubuntu: instalar .deb, listar pacotes, verificar arquivos, reconfigurar e resolver problemas de pacotes."
        difficulty="intermediario"
        timeToRead="20 min"
      >
        <AlertBox type="info" title="Pré-requisitos">
          Ubuntu com terminal e <code>sudo</code>. Útil ter visto <a href="#/apt">APT</a>
          (o apt usa o dpkg por baixo).
        </AlertBox>

        <h2>Glossário rápido</h2>
        <p>
          <strong>dpkg</strong> — gerenciador de pacotes <em>baixo nível</em> do Debian/Ubuntu.
          Instala arquivos <code>.deb</code> sem resolver dependências.
        </p>
        <p>
          <strong>.deb</strong> — formato de pacote binário do Debian.
        </p>
        <p>
          <strong>apt</strong> — gerenciador <em>alto nível</em>: baixa dos repositórios e resolve
          dependências chamando o dpkg.
        </p>
        <p>
          <strong>dpkg-reconfigure</strong> — refaz as perguntas de pós-instalação de um pacote
          (timezone, teclado, locale).
        </p>

        <p>
          O <strong>dpkg</strong> é o gerenciador de pacotes de baixo nível do Debian/Ubuntu.
          Enquanto o <code>apt</code> resolve dependências automaticamente, o dpkg trabalha
          diretamente com arquivos <code>.deb</code>. É útil para instalar pacotes baixados
          manualmente, diagnosticar problemas e inspecionar o sistema de pacotes.
        </p>

        <h2>1. Instalar e Remover Pacotes</h2>
        <CodeBlock
          title="Gerenciar pacotes .deb com dpkg"
          code={`# Instalar um pacote .deb
  sudo dpkg -i pacote.deb
  # Se faltar dependências:
  sudo apt install -f   # Instalar dependências faltantes

  # Instalar múltiplos .deb de uma vez
  sudo dpkg -i *.deb
  sudo apt install -f

  # Remover pacote (mantém configurações)
  sudo dpkg -r nome-do-pacote

  # Remover pacote completamente (incluindo configurações)
  sudo dpkg -P nome-do-pacote
  # P = purge

  # Reconfiguar um pacote
  sudo dpkg-reconfigure nome-do-pacote
  # Exemplos úteis:
  sudo dpkg-reconfigure locales       # Configurar idiomas
  sudo dpkg-reconfigure tzdata        # Configurar fuso horário
  sudo dpkg-reconfigure keyboard-configuration  # Teclado`}
        />

        <h2>2. Listar e Buscar Pacotes</h2>
        <CodeBlock
          title="Consultar o banco de dados de pacotes"
          code={`# Listar todos os pacotes instalados
  dpkg -l
  # Saída: ii = instalado, rc = removido com configs mantidas

  # Filtrar por nome
  dpkg -l | grep nginx
  dpkg -l "python3*"

  # Verificar se um pacote está instalado
  dpkg -s nginx
  # Mostra: versão, descrição, dependências, etc.

  # Listar arquivos de um pacote instalado
  dpkg -L nginx
  # Mostra todos os arquivos instalados pelo pacote

  # Descobrir qual pacote instalou um arquivo
  dpkg -S /usr/bin/git
  # Saída: git: /usr/bin/git

  # Buscar qual pacote fornece um arquivo
  dpkg -S /etc/nginx/nginx.conf
  # Saída: nginx-common: /etc/nginx/nginx.conf

  # Listar pacotes por tamanho
  dpkg-query -W --showformat='\${Installed-Size}\t\${Package}\n' | sort -rn | head -20

  # Ver informações de um .deb (sem instalar)
  dpkg -I pacote.deb
  dpkg -c pacote.deb   # Listar conteúdo do .deb`}
        />

        <h2>3. Resolver Problemas</h2>
        <CodeBlock
          title="Corrigir problemas com dpkg"
          code={`# Erro: "dpkg was interrupted"
  sudo dpkg --configure -a

  # Erro: "Sub-process /usr/bin/dpkg returned an error"
  sudo apt install -f     # Tentar corrigir dependências
  sudo dpkg --configure -a

  # Forçar instalação (ignorar dependências — use com cuidado!)
  sudo dpkg -i --force-depends pacote.deb

  # Forçar remoção de pacote travado
  sudo dpkg --remove --force-remove-reinstreq pacote-travado

  # Verificar integridade de todos os pacotes
  sudo dpkg --audit

  # Verificar se arquivos de um pacote estão intactos
  sudo dpkg --verify nginx
  # Se não mostrar nada, tudo OK

  # Reinstalar pacote (substituir arquivos corrompidos)
  sudo apt install --reinstall nginx

  # Extrair .deb sem instalar
  dpkg-deb -x pacote.deb /tmp/extraido/
  # Útil para inspecionar o conteúdo

  # Criar .deb a partir de diretório
  dpkg-deb --build diretorio pacote.deb`}
        />

        <h2>4. Anatomia de um .deb</h2>
        <p>
          Um <code>.deb</code> não tem mágica: é um arquivo <code>ar</code> com
          três membros. Saber abrir cada um resolve a maioria das dúvidas sobre
          o que um pacote vai fazer com o seu sistema.
        </p>
        <CodeBlock
          title="Abrindo um pacote por dentro"
          code={`# Os tres membros do arquivo
ar t pacote.deb
# debian-binary   control.tar.zst   data.tar.zst

# Metadados: Package, Version, Depends, Installed-Size, Maintainer
dpkg-deb -I pacote.deb

# Scripts de instalacao: preinst, postinst, prerm, postrm
dpkg-deb --ctrl-tarfile pacote.deb | tar t

# Ler o postinst antes de instalar um .deb de origem duvidosa
dpkg-deb --ctrl-tarfile pacote.deb | tar xO ./postinst

# Arvore de arquivos que vai para o sistema
dpkg-deb -c pacote.deb | head -20

# Extrair sem instalar nada
dpkg-deb -x pacote.deb /tmp/conteudo/
dpkg-deb -e pacote.deb /tmp/conteudo/DEBIAN/`}
        />

        <AlertBox type="warning" title="O postinst é onde as instalações quebram">
          Quase todo erro <em>Sub-process /usr/bin/dpkg returned an error code (1)</em>
          vem de um script <code>postinst</code> que falhou, não de arquivos
          faltando. A mensagem logo acima do erro diz qual pacote e qual script:
          leia essa linha antes de sair rodando <code>--force</code>.
        </AlertBox>

        <h2>5. Decifrando a coluna de estado do dpkg -l</h2>
        <p>
          Aquele <code>ii</code> no início de cada linha é a informação mais
          útil e a mais ignorada do dpkg. A primeira letra é o que você pediu, a
          segunda é o que o sistema conseguiu fazer.
        </p>
        <CodeBlock
          title="Estados de pacote e o que fazer com cada um"
          code={`dpkg -l | head -6

# Primeira letra (Desired):  i=install  r=remove  p=purge  h=hold  u=unknown
# Segunda letra (Status):    i=instalado  c=so config  U=desempacotado
#                            F=meio configurado  H=meio instalado  n=ausente

# ii  normal, instalado e configurado
# rc  removido, arquivos de configuracao ainda no disco
# iU  desempacotado e nao configurado  -> sudo dpkg --configure -a
# iF  configuracao interrompida        -> sudo dpkg --configure -a
# iH  instalacao interrompida          -> sudo apt install -f
# hi  em hold, nao sera atualizado     -> sudo apt-mark unhold PACOTE

# Listar tudo que nao esta em ii
dpkg -l | awk '$1 != "ii" && NR > 5 {print $1, $2}'

# Limpar os rc (config orfa de pacote removido)
dpkg -l | awk '/^rc/ {print $2}' | xargs -r sudo dpkg -P`}
        />

        <h2>6. Clonar a lista de pacotes para outra maquina</h2>
        <p>
          Reinstalar o sistema e recuperar exatamente os mesmos programas é
          trabalho de dois comandos. A versão com <code>apt-mark</code> é mais
          limpa, porque ignora as dependências que virão de graça.
        </p>
        <CodeBlock
          title="Migrar a selecao de pacotes"
          code={`# --- na maquina antiga ---
dpkg --get-selections > pacotes.txt        # tudo, inclusive dependencias
apt-mark showmanual > manuais.txt          # so o que voce pediu

# guarde tambem as fontes do apt, senao metade nao existe na nova
sudo tar czf fontes-apt.tar.gz /etc/apt/sources.list.d/ /etc/apt/trusted.gpg.d/

# --- na maquina nova, jeito limpo ---
sudo apt update
xargs -a manuais.txt sudo apt install -y

# --- na maquina nova, jeito literal ---
sudo apt install dselect
sudo dpkg --set-selections < pacotes.txt
sudo apt-get dselect-upgrade`}
        />

        <h2>7. Hold, divert e conflitos de arquivo</h2>
        <CodeBlock
          title="Congelar versao e substituir arquivos de pacote"
          code={`# Congelar um pacote (kernel, banco, driver)
sudo apt-mark hold linux-generic
apt-mark showhold
sudo apt-mark unhold linux-generic

# Equivalente em dpkg puro
echo "linux-generic hold" | sudo dpkg --set-selections

# dpkg-divert: por seu proprio arquivo no lugar do que o pacote instala,
# sem que o proximo upgrade sobrescreva
sudo dpkg-divert --add --rename \\
  --divert /usr/bin/foo.original /usr/bin/foo
dpkg-divert --list | head
sudo dpkg-divert --remove /usr/bin/foo

# Dois pacotes disputando o mesmo arquivo
# "trying to overwrite '/usr/bin/x', which is also in package y"
sudo dpkg -i --force-overwrite pacote.deb
# depois confirme quem ficou dono do arquivo
dpkg -S /usr/bin/x`}
        />

        <h2>Troubleshooting</h2>
        <CodeBlock
          title="Problemas comuns com dpkg"
          code={`# Lock file travado
  # "Could not get lock /var/lib/dpkg/lock"
  # Esperar outro processo terminar ou:
  sudo rm /var/lib/dpkg/lock-frontend
  sudo rm /var/lib/dpkg/lock
  sudo dpkg --configure -a

  # Pacote em estado inconsistente
  sudo dpkg --remove --force-remove-reinstreq nome-pacote
  sudo apt update
  sudo apt install -f

  # Listar pacotes quebrados
  dpkg -l | grep -E "^(iU|iF|iH)"

  # Banco de dados dpkg corrompido
  # Restaurar backup:
  sudo cp /var/backups/dpkg.status.0 /var/lib/dpkg/status
  sudo apt update`}
        />

        <AlertBox type="info" title="dpkg vs apt">
          Use <code>apt</code> para o dia a dia — ele chama o dpkg internamente e resolve
          dependências. Use <code>dpkg</code> quando precisar instalar <code>.deb</code>
          baixados manualmente, diagnosticar problemas de pacotes ou quando o apt falhar.
        </AlertBox>
      </PageContainer>
    );
  }
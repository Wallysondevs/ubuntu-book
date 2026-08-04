import{j as e}from"./index-_kFPLDpE.js";import{P as r}from"./PageContainer-eafNNqkI.js";import{C as o}from"./CodeBlock-ByIkwE54.js";import{A as a}from"./AlertBox-NzOB7YP7.js";function n(){return e.jsxs(r,{title:"dpkg — Gerenciador de Pacotes de Baixo Nível",subtitle:"Guia completo do dpkg no Ubuntu: instalar .deb, listar pacotes, verificar arquivos, reconfigurar e resolver problemas de pacotes.",difficulty:"intermediario",timeToRead:"20 min",children:[e.jsxs(a,{type:"info",title:"Pré-requisitos",children:["Ubuntu com terminal e ",e.jsx("code",{children:"sudo"}),". Útil ter visto ",e.jsx("a",{href:"#/apt",children:"APT"}),"(o apt usa o dpkg por baixo)."]}),e.jsx("h2",{children:"Glossário rápido"}),e.jsxs("p",{children:[e.jsx("strong",{children:"dpkg"})," — gerenciador de pacotes ",e.jsx("em",{children:"baixo nível"})," do Debian/Ubuntu. Instala arquivos ",e.jsx("code",{children:".deb"})," sem resolver dependências."]}),e.jsxs("p",{children:[e.jsx("strong",{children:".deb"})," — formato de pacote binário do Debian."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"apt"})," — gerenciador ",e.jsx("em",{children:"alto nível"}),": baixa dos repositórios e resolve dependências chamando o dpkg."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"dpkg-reconfigure"})," — refaz as perguntas de pós-instalação de um pacote (timezone, teclado, locale)."]}),e.jsxs("p",{children:["O ",e.jsx("strong",{children:"dpkg"})," é o gerenciador de pacotes de baixo nível do Debian/Ubuntu. Enquanto o ",e.jsx("code",{children:"apt"})," resolve dependências automaticamente, o dpkg trabalha diretamente com arquivos ",e.jsx("code",{children:".deb"}),". É útil para instalar pacotes baixados manualmente, diagnosticar problemas e inspecionar o sistema de pacotes."]}),e.jsx("h2",{children:"1. Instalar e Remover Pacotes"}),e.jsx(o,{title:"Gerenciar pacotes .deb com dpkg",code:`# Instalar um pacote .deb
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
  sudo dpkg-reconfigure keyboard-configuration  # Teclado`}),e.jsx("h2",{children:"2. Listar e Buscar Pacotes"}),e.jsx(o,{title:"Consultar o banco de dados de pacotes",code:`# Listar todos os pacotes instalados
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
  dpkg-query -W --showformat='\${Installed-Size}	\${Package}
' | sort -rn | head -20

  # Ver informações de um .deb (sem instalar)
  dpkg -I pacote.deb
  dpkg -c pacote.deb   # Listar conteúdo do .deb`}),e.jsx("h2",{children:"3. Resolver Problemas"}),e.jsx(o,{title:"Corrigir problemas com dpkg",code:`# Erro: "dpkg was interrupted"
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
  dpkg-deb --build diretorio pacote.deb`}),e.jsx("h2",{children:"4. Anatomia de um .deb"}),e.jsxs("p",{children:["Um ",e.jsx("code",{children:".deb"})," não tem mágica: é um arquivo ",e.jsx("code",{children:"ar"})," com três membros. Saber abrir cada um resolve a maioria das dúvidas sobre o que um pacote vai fazer com o seu sistema."]}),e.jsx(o,{title:"Abrindo um pacote por dentro",code:`# Os tres membros do arquivo
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
dpkg-deb -e pacote.deb /tmp/conteudo/DEBIAN/`}),e.jsxs(a,{type:"warning",title:"O postinst é onde as instalações quebram",children:["Quase todo erro ",e.jsx("em",{children:"Sub-process /usr/bin/dpkg returned an error code (1)"}),"vem de um script ",e.jsx("code",{children:"postinst"})," que falhou, não de arquivos faltando. A mensagem logo acima do erro diz qual pacote e qual script: leia essa linha antes de sair rodando ",e.jsx("code",{children:"--force"}),"."]}),e.jsx("h2",{children:"5. Decifrando a coluna de estado do dpkg -l"}),e.jsxs("p",{children:["Aquele ",e.jsx("code",{children:"ii"})," no início de cada linha é a informação mais útil e a mais ignorada do dpkg. A primeira letra é o que você pediu, a segunda é o que o sistema conseguiu fazer."]}),e.jsx(o,{title:"Estados de pacote e o que fazer com cada um",code:`dpkg -l | head -6

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
dpkg -l | awk '/^rc/ {print $2}' | xargs -r sudo dpkg -P`}),e.jsx("h2",{children:"6. Clonar a lista de pacotes para outra maquina"}),e.jsxs("p",{children:["Reinstalar o sistema e recuperar exatamente os mesmos programas é trabalho de dois comandos. A versão com ",e.jsx("code",{children:"apt-mark"})," é mais limpa, porque ignora as dependências que virão de graça."]}),e.jsx(o,{title:"Migrar a selecao de pacotes",code:`# --- na maquina antiga ---
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
sudo apt-get dselect-upgrade`}),e.jsx("h2",{children:"7. Hold, divert e conflitos de arquivo"}),e.jsx(o,{title:"Congelar versao e substituir arquivos de pacote",code:`# Congelar um pacote (kernel, banco, driver)
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
dpkg -S /usr/bin/x`}),e.jsx("h2",{children:"Troubleshooting"}),e.jsx(o,{title:"Problemas comuns com dpkg",code:`# Lock file travado
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
  sudo apt update`}),e.jsxs(a,{type:"info",title:"dpkg vs apt",children:["Use ",e.jsx("code",{children:"apt"})," para o dia a dia — ele chama o dpkg internamente e resolve dependências. Use ",e.jsx("code",{children:"dpkg"})," quando precisar instalar ",e.jsx("code",{children:".deb"}),"baixados manualmente, diagnosticar problemas de pacotes ou quando o apt falhar."]})]})}export{n as default};

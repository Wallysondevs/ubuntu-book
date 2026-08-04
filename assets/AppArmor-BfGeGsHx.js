import{j as e}from"./index-_kFPLDpE.js";import{P as o}from"./PageContainer-eafNNqkI.js";import{C as r}from"./CodeBlock-ByIkwE54.js";import{A as a}from"./AlertBox-NzOB7YP7.js";function d(){return e.jsxs(o,{title:"AppArmor — Controle de Acesso Mandatório",subtitle:"Guia completo do AppArmor no Ubuntu: perfis de segurança, modos enforce e complain, criar perfis customizados e proteger aplicações.",difficulty:"avancado",timeToRead:"30 min",children:[e.jsxs(a,{type:"info",title:"Pré-requisitos",children:["Ubuntu (vem habilitado por padrão), ",e.jsx("code",{children:"sudo"}),". AppArmor pode quebrar apps customizados — sempre teste em modo ",e.jsx("em",{children:"complain"})," antes do ",e.jsx("em",{children:"enforce"}),"."]}),e.jsx("h2",{children:"Glossário rápido"}),e.jsxs("p",{children:[e.jsx("strong",{children:"AppArmor"})," — MAC (Mandatory Access Control) baseado em caminhos de arquivo. Padrão do Ubuntu desde a 7.04."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Profile"})," — política que define o que um binário pode acessar. Fica em ",e.jsx("code",{children:"/etc/apparmor.d/"}),"."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"enforce / complain"})," — modos: ",e.jsx("em",{children:"enforce"})," bloqueia, ",e.jsx("em",{children:"complain"})," apenas registra no log."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"aa-status"})," — mostra perfis carregados e seus modos."]}),e.jsxs("p",{children:["O ",e.jsx("strong",{children:"AppArmor"})," (Application Armor) é o sistema de segurança mandatória (MAC) padrão do Ubuntu. Ele restringe o que cada programa pode fazer no sistema — quais arquivos pode ler/escrever, quais portas de rede pode usar, quais programas pode executar — mesmo que o programa seja executado como root."]}),e.jsx("h2",{children:"Como o AppArmor Funciona"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Perfis"})," — Cada programa tem um perfil que define exatamente o que pode e não pode fazer"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Modo Enforce"})," — Bloqueia ações não permitidas pelo perfil"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Modo Complain"})," — Apenas registra violações no log (para debug)"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Modo Unconfined"})," — Sem restrições (sem perfil ativo)"]})]}),e.jsx("h2",{children:"1. Verificar o Status do AppArmor"}),e.jsx(r,{title:"Gerenciar o AppArmor",code:`# Verificar se o AppArmor está ativo
  sudo aa-status
  # Saída:
  # apparmor module is loaded.
  # 42 profiles are loaded.
  # 32 profiles are in enforce mode.
  # 10 profiles are in complain mode.
  # 3 processes have profiles defined.
  # 3 processes are in enforce mode.

  # Ver a versão
  sudo apparmor_parser --version

  # Verificar o status do serviço
  sudo systemctl status apparmor

  # Verificar se um programa específico tem perfil
  sudo aa-status | grep nginx

  # Listar perfis por modo
  # Enforce:
  sudo aa-status | grep enforce
  # Complain:
  sudo aa-status | grep complain

  # Recarregar todos os perfis
  sudo systemctl reload apparmor

  # Instalar utilitários extras (essencial para gerenciar perfis)
  sudo apt install -y apparmor-utils apparmor-profiles apparmor-profiles-extra`}),e.jsx("h2",{children:"2. Gerenciar Perfis Existentes"}),e.jsx(r,{title:"Alternar modos e gerenciar perfis",code:`# Os perfis ficam em /etc/apparmor.d/
  ls /etc/apparmor.d/
  # Saída: usr.sbin.nginx, usr.sbin.mysqld, usr.bin.firefox, etc.

  # Colocar um perfil em modo Enforce (bloqueia violações)
  sudo aa-enforce /etc/apparmor.d/usr.sbin.nginx
  # Ou pelo nome do executável:
  sudo aa-enforce /usr/sbin/nginx

  # Colocar em modo Complain (apenas registra violações)
  sudo aa-complain /etc/apparmor.d/usr.sbin.nginx
  sudo aa-complain /usr/sbin/nginx

  # Desabilitar um perfil (remove restrições)
  sudo aa-disable /etc/apparmor.d/usr.sbin.nginx
  # Cria link em /etc/apparmor.d/disable/

  # Reabilitar um perfil desabilitado
  sudo rm /etc/apparmor.d/disable/usr.sbin.nginx
  sudo apparmor_parser -r /etc/apparmor.d/usr.sbin.nginx

  # Recarregar um perfil específico
  sudo apparmor_parser -r /etc/apparmor.d/usr.sbin.nginx

  # Ver o perfil de um programa
  cat /etc/apparmor.d/usr.sbin.nginx`}),e.jsx("h2",{children:"3. Criar Perfis Customizados"}),e.jsx(r,{title:"Criar perfil AppArmor para uma aplicação",code:`# Método 1: Gerar perfil automaticamente com aa-genprof
  # 1. Inicie o gerador (ele fica monitorando):
  sudo aa-genprof /usr/local/bin/minha-app
  # 2. Em OUTRO terminal, execute o programa normalmente:
  /usr/local/bin/minha-app
  # Use o programa fazendo tudo que ele precisa fazer
  # 3. Volte ao terminal do aa-genprof e pressione S (Scan)
  # 4. Para cada ação detectada, escolha:
  #    (A)llow — permitir esta ação
  #    (D)eny — negar esta ação
  #    (I)nherit — herdar o perfil do processo pai
  #    (G)lob — permitir padrão mais amplo
  # 5. Pressione S para salvar e F para finalizar

  # Método 2: Criar perfil manualmente
  sudo tee /etc/apparmor.d/usr.local.bin.minha-app > /dev/null << 'EOF'
  #include <tunables/global>

  /usr/local/bin/minha-app {
    #include <abstractions/base>
    #include <abstractions/nameservice>

    # Executável
    /usr/local/bin/minha-app mr,

    # Arquivos que pode ler
    /etc/minha-app/** r,
    /etc/ssl/certs/** r,

    # Arquivos que pode escrever
    /var/log/minha-app/** w,
    /var/lib/minha-app/** rw,
    /tmp/minha-app-* rw,

    # Rede
    network inet stream,      # TCP IPv4
    network inet6 stream,     # TCP IPv6
    network inet dgram,       # UDP IPv4

    # Portas (precisa de abstractions/apache2-common ou similar)
    # Capacidades de sistema
    capability net_bind_service,   # Bind em portas < 1024
    capability setuid,
    capability setgid,

    # Negar explicitamente
    deny /etc/shadow r,
    deny /etc/passwd w,
    deny /home/** rw,
  }
  EOF

  # Carregar o novo perfil
  sudo apparmor_parser -r /etc/apparmor.d/usr.local.bin.minha-app

  # Verificar se foi carregado
  sudo aa-status | grep minha-app`}),e.jsxs(a,{type:"info",title:"Permissões nos perfis",children:["As letras de permissão no AppArmor são: ",e.jsx("code",{children:"r"})," (ler), ",e.jsx("code",{children:"w"})," (escrever),",e.jsx("code",{children:"a"})," (append), ",e.jsx("code",{children:"m"})," (mmap executável), ",e.jsx("code",{children:"k"})," (lock),",e.jsx("code",{children:"l"})," (link), ",e.jsx("code",{children:"x"})," (executar). Use ",e.jsx("code",{children:"**"})," para incluir subdiretórios recursivamente."]}),e.jsx("h2",{children:"4. Debug e Logs"}),e.jsx(r,{title:"Depurar violações do AppArmor",code:`# Ver violações no log do sistema
  sudo journalctl -k | grep "apparmor"
  # Ou:
  sudo dmesg | grep "apparmor"

  # Formato das mensagens de violação:
  # apparmor="DENIED" operation="open" profile="/usr/sbin/nginx"
  #   name="/etc/segredo.conf" pid=1234 comm="nginx"
  #   requested_mask="r" denied_mask="r"

  # Ver violações em tempo real
  sudo journalctl -k -f | grep "apparmor"

  # Usar aa-logprof para atualizar perfil baseado em violações
  sudo aa-logprof
  # Analisa os logs e sugere adições ao perfil
  # Para cada violação, escolha Allow ou Deny

  # Colocar em modo complain para debug (não bloqueia, apenas registra)
  sudo aa-complain /usr/sbin/nginx
  # Testar o programa
  # Verificar os logs
  # Corrigir o perfil
  # Voltar para enforce:
  sudo aa-enforce /usr/sbin/nginx

  # Ver quais processos estão confinados
  ps auxZ | grep -v unconfined
  # Saída mostra o perfil AppArmor de cada processo`}),e.jsx("h2",{children:"5. AppArmor e Docker/Snap"}),e.jsx(r,{title:"AppArmor com containers e snaps",code:`# Docker usa AppArmor automaticamente
  # Ver o perfil de um container Docker:
  docker inspect --format='{{.AppArmorProfile}}' container_name
  # Saída: docker-default

  # Executar container sem AppArmor (não recomendado)
  docker run --security-opt apparmor=unconfined nginx

  # Snap usa AppArmor extensivamente
  # Ver perfis de snaps instalados:
  sudo aa-status | grep snap

  # Cada snap tem seu próprio perfil restritivo
  # Se um snap não funciona corretamente:
  snap connections nome-do-snap    # Ver interfaces conectadas
  snap connect nome-do-snap:camera  # Conectar interface

  # Desabilitar AppArmor completamente (NÃO RECOMENDADO)
  # sudo systemctl stop apparmor
  # sudo systemctl disable apparmor
  # No GRUB: adicione apparmor=0 aos parâmetros do kernel`}),e.jsx("h2",{children:"Troubleshooting"}),e.jsx(r,{title:"Problemas comuns com AppArmor",code:`# Aplicação não funciona após ativar perfil
  # 1. Colocar em modo complain:
  sudo aa-complain /caminho/do/perfil
  # 2. Testar a aplicação
  # 3. Ver violações:
  sudo journalctl -k | grep "apparmor.*DENIED"
  # 4. Corrigir o perfil
  # 5. Voltar para enforce:
  sudo aa-enforce /caminho/do/perfil

  # Nginx retorna 403 após AppArmor
  # Verificar se o perfil permite ler os arquivos do site:
  sudo dmesg | grep "apparmor.*nginx"
  # Adicionar ao perfil:
  # /var/www/** r,

  # MySQL não inicia com AppArmor
  # Verificar violações:
  sudo journalctl -k | grep "apparmor.*mysql"
  # Solução comum: adicionar diretório de dados ao perfil
  # /var/lib/mysql/** rwk,

  # Recarregar todos os perfis após edição
  sudo systemctl reload apparmor

  # Verificar se todos os perfis estão sem erro
  sudo apparmor_parser -T /etc/apparmor.d/`})]})}export{d as default};

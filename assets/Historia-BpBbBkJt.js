import{j as e}from"./index-_kFPLDpE.js";import{P as r}from"./PageContainer-eafNNqkI.js";import{C as s}from"./CodeBlock-ByIkwE54.js";import{A as a}from"./AlertBox-NzOB7YP7.js";function u(){return e.jsxs(r,{title:"História do Ubuntu e do Linux",subtitle:"A história completa do Ubuntu, do Linux e do software livre: de Unix a Linus Torvalds, de Debian a Mark Shuttleworth.",difficulty:"iniciante",timeToRead:"15 min",children:[e.jsx("p",{children:"Entender a história do Ubuntu ajuda a compreender suas decisões de design, sua filosofia e por que ele funciona como funciona. A história do Ubuntu é inseparável da história do Linux, do GNU e do movimento de software livre."}),e.jsx("h2",{children:"1. De Unix ao Linux (1969-1991)"}),e.jsxs("p",{children:["Em ",e.jsx("strong",{children:"1969"}),", Ken Thompson e Dennis Ritchie criaram o ",e.jsx("strong",{children:"Unix"}),"nos Bell Labs da AT&T. O Unix introduziu conceitos revolucionários: tudo é arquivo, permissões de usuário, pipes, shell e uma arquitetura modular que influencia sistemas operacionais até hoje."]}),e.jsxs("p",{children:["Em ",e.jsx("strong",{children:"1983"}),", Richard Stallman lançou o projeto ",e.jsx("strong",{children:"GNU"}),"(GNU's Not Unix) para criar um sistema operacional completamente livre. O GNU criou ferramentas essenciais — GCC (compilador), Bash (shell), coreutils (ls, cp, mv) — mas faltava o kernel."]}),e.jsxs("p",{children:["Em ",e.jsx("strong",{children:"1991"}),", ",e.jsx("strong",{children:"Linus Torvalds"}),", um estudante finlandês de 21 anos, publicou o ",e.jsx("strong",{children:"kernel Linux"})," como projeto pessoal. A combinação das ferramentas GNU + kernel Linux criou o primeiro sistema operacional completamente livre: ",e.jsx("strong",{children:"GNU/Linux"}),"."]}),e.jsx("h2",{children:"2. O Nascimento do Ubuntu (2004)"}),e.jsxs("p",{children:["Em ",e.jsx("strong",{children:"2004"}),", ",e.jsx("strong",{children:"Mark Shuttleworth"}),", um empresário sul-africano que havia vendido sua empresa de segurança Thawte para a VeriSign, fundou a ",e.jsx("strong",{children:"Canonical"})," e lançou o ",e.jsx("strong",{children:"Ubuntu 4.10"}),'(codinome "Warty Warthog").']}),e.jsxs("p",{children:["O Ubuntu foi baseado no ",e.jsx("strong",{children:"Debian"}),', uma das distribuições mais respeitadas mas também mais difícil de usar. A missão era clara: criar um Linux que qualquer pessoa pudesse usar, com instalação fácil, hardware funcionando "out of the box" e CDs gratuitos enviados pelo correio (programa ShipIt).']}),e.jsxs("p",{children:["A palavra ",e.jsx("strong",{children:'"Ubuntu"'})," vem da filosofia sul-africana Zulu/Xhosa e significa ",e.jsx("em",{children:'"eu sou porque nós somos"'})," — humanidade para os outros."]}),e.jsx("h2",{children:"3. Versões e Evolução"}),e.jsx(s,{title:"Linha do tempo das versões",code:`# Sistema de versão: ANO.MÊS
  # Lançamentos a cada 6 meses (abril e outubro)
  # LTS (Long Term Support) a cada 2 anos (abril dos anos pares)

  # Marcos importantes:
  # 4.10 (2004) — Primeiro lançamento (Warty Warthog)
  # 6.06 LTS    — Primeiro LTS (Dapper Drake)
  # 8.04 LTS    — Ubuntu se torna mainstream (Hardy Heron)
  # 10.04 LTS   — Ubuntu Light, Social from the Start (Lucid Lynx)
  # 11.04       — Unity substitui GNOME 2 (Natty Narwhal)
  # 12.04 LTS   — LTS com Unity maduro (Precise Pangolin)
  # 16.04 LTS   — Snap packages, systemd (Xenial Xerus)
  # 17.10       — GNOME volta como desktop padrão (Artful Aardvark)
  # 18.04 LTS   — Snap + Flatpak, Netplan (Bionic Beaver)
  # 20.04 LTS   — WireGuard no kernel (Focal Fossa)
  # 22.04 LTS   — GNOME 42, Wayland (Jammy Jellyfish)
  # 24.04 LTS   — GNOME 46, kernel 6.8 (Noble Numbat)

  # Verificar sua versão
  lsb_release -a
  cat /etc/os-release

  # Codinomes usam: Adjetivo + Animal (mesmo letra)
  # Exemplos: Focal Fossa, Jammy Jellyfish, Noble Numbat`}),e.jsx("h2",{children:"4. Família Ubuntu"}),e.jsxs("p",{children:["O Ubuntu tem ",e.jsx("strong",{children:"sabores oficiais"})," (flavors) que usam o mesmo sistema base com diferentes ambientes desktop:"]}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Ubuntu"})," — GNOME (padrão, mais polido)"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Kubuntu"})," — KDE Plasma (mais customizável)"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Xubuntu"})," — Xfce (leve, para PCs antigos)"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Lubuntu"})," — LXQt (o mais leve de todos)"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Ubuntu MATE"})," — MATE (GNOME 2 modernizado)"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Ubuntu Budgie"})," — Budgie (moderno e elegante)"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Ubuntu Studio"})," — Para produção multimídia"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Ubuntu Server"})," — Sem interface gráfica (servidores)"]})]}),e.jsx("h2",{children:"5. LTS vs Versões Regulares"}),e.jsx(s,{title:"Entender as versões do Ubuntu",code:`# LTS (Long Term Support)
  # - Suporte de 5 anos (12 anos com Ubuntu Pro)
  # - Lançamento: abril de anos pares (24.04, 26.04, etc.)
  # - Recomendado para: servidores, produção, empresas
  # - Prioridade: estabilidade sobre novidades

  # Versões regulares (interim)
  # - Suporte de 9 meses
  # - Lançamento: a cada 6 meses
  # - Recomendado para: entusiastas, desenvolvedores
  # - Prioridade: software mais recente

  # Quando atualizar?
  # Servidor: LTS para LTS (24.04 → 26.04)
  # Desktop: LTS é suficiente para a maioria
  # Desenvolvedor: pode usar versões regulares

  # Verificar suporte
  ubuntu-security-status
  # Ou: ubuntu-support-status (pacotes fora de suporte)`}),e.jsx("h2",{children:"6. Filosofia e Comunidade"}),e.jsxs("p",{children:["O Ubuntu é guiado por princípios claros: software deve ser ",e.jsx("strong",{children:"gratuito"}),", disponível no ",e.jsx("strong",{children:"idioma do usuário"}),", e as pessoas devem ter",e.jsx("strong",{children:"liberdade para customizá-lo"}),". O projeto é mantido pela Canonical (empresa) mas tem uma enorme comunidade voluntária global."]}),e.jsxs("p",{children:["Formas de participar da comunidade: ",e.jsx("strong",{children:"Ubuntu Forums"}),",",e.jsx("strong",{children:"Ask Ubuntu"})," (perguntas e respostas), ",e.jsx("strong",{children:"Launchpad"}),"(bugs e traduções), ",e.jsx("strong",{children:"Ubuntu Wiki"}),", e os eventos",e.jsx("strong",{children:"Ubuntu Summit"}),"."]}),e.jsxs(a,{type:"info",title:"Ubuntu no mundo",children:["O Ubuntu é usado em: ",e.jsx("strong",{children:"supercomputadores"})," (maioria dos Top 500),",e.jsx("strong",{children:"nuvem"})," (líder em clouds públicas como AWS e Azure),",e.jsx("strong",{children:"IoT"})," (Ubuntu Core), ",e.jsx("strong",{children:"estação espacial"})," (ISS),",e.jsx("strong",{children:"carros autônomos"}),", e milhões de desktops e servidores mundo afora."]})]})}export{u as default};

import{j as e}from"./index-_kFPLDpE.js";import{P as i}from"./PageContainer-eafNNqkI.js";import{C as s}from"./CodeBlock-ByIkwE54.js";import{A as r}from"./AlertBox-NzOB7YP7.js";function l(){return e.jsxs(i,{title:"Referências e Recursos",subtitle:"Links, livros, comunidades, canais e recursos essenciais para continuar aprendendo Ubuntu e Linux.",difficulty:"iniciante",timeToRead:"10 min",children:[e.jsx("p",{children:"Aprender Linux é uma jornada contínua. Esta página reúne os melhores recursos para continuar aprofundando seus conhecimentos em Ubuntu, administração de sistemas e desenvolvimento no Linux."}),e.jsx("h2",{children:"1. Documentação Oficial"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Ubuntu Documentation"})," — help.ubuntu.com"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Ubuntu Server Guide"})," — ubuntu.com/server/docs"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Ubuntu Wiki"})," — wiki.ubuntu.com"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Man pages online"})," — manpages.ubuntu.com"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Debian Wiki"})," — wiki.debian.org (aplicável ao Ubuntu)"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Arch Wiki"})," — wiki.archlinux.org (excelente para qualquer distro)"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Linux Kernel Documentation"})," — kernel.org/doc"]})]}),e.jsx("h2",{children:"2. Comunidades e Fóruns"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Ask Ubuntu"})," — askubuntu.com (perguntas e respostas)"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Ubuntu Forums"})," — ubuntuforums.org"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Reddit r/Ubuntu"})," — reddit.com/r/ubuntu"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Reddit r/linux"})," — reddit.com/r/linux"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Stack Overflow"})," — stackoverflow.com (para programação)"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Linux Questions"})," — linuxquestions.org"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Ubuntu BR"})," — ubuntubr.org (comunidade brasileira)"]})]}),e.jsx("h2",{children:"3. Ferramentas de Aprendizado"}),e.jsx(s,{title:"Recursos no terminal",code:`# Man pages — documentação de qualquer comando
  man ls
  man bash

  # tldr — exemplos práticos rápidos
  sudo apt install -y tldr
  tldr tar
  tldr rsync

  # cheat.sh — referência rápida online
  curl cheat.sh/awk
  curl cheat.sh/sed

  # explainshell.com — explica cada parte de um comando

  # Praticar no terminal:
  # overthewire.org/wargames/bandit/ — desafios de terminal
  # linuxsurvival.com — tutorial interativo
  # cmdchallenge.com — desafios de linha de comando`}),e.jsx("h2",{children:"4. Livros Recomendados"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"The Linux Command Line"})," — William Shotts (gratuito online: linuxcommand.org)"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"How Linux Works"})," — Brian Ward"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"UNIX and Linux System Administration Handbook"})," — Evi Nemeth et al."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Linux Bible"})," — Christopher Negus"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Linux Pocket Guide"})," — Daniel Barrett (referência rápida)"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Certificação Linux LPIC-1"})," — Luciano Siqueira (em português)"]})]}),e.jsx("h2",{children:"5. Certificações"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Linux Essentials"})," — Nível introdutório (LPI)"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"LPIC-1"})," — Administrador Linux Junior (LPI)"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"LPIC-2"})," — Administrador Linux Avançado (LPI)"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Ubuntu Certified Professional"})," — Canonical"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Red Hat RHCSA/RHCE"})," — Aplicável a qualquer distro"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"CompTIA Linux+"})," — Vendor-neutral"]})]}),e.jsx("h2",{children:"6. Canais e Podcasts"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Diolinux"})," — YouTube (PT-BR, excelente para Ubuntu)"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Dio"})," — YouTube (PT-BR, Linux e tech)"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"NetworkChuck"})," — YouTube (EN, networking e Linux)"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"LearnLinuxTV"})," — YouTube (EN, tutoriais detalhados)"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Linux Unplugged"})," — Podcast (EN, Jupiter Broadcasting)"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Ubuntu Podcast"})," — Podcast oficial da comunidade"]})]}),e.jsx("h2",{children:"7. Onde procurar quando algo quebra"}),e.jsx("p",{children:"A ordem importa. Buscar no Google antes de olhar o log local costuma custar meia hora e terminar em uma resposta de outra distribuicao."}),e.jsx(s,{title:"Roteiro de diagnostico, do mais barato ao mais caro",code:`# 1. O que o servico diz de si mesmo
systemctl status nome-do-servico
journalctl -u nome-do-servico -n 50 --no-pager

# 2. O que o kernel viu (hardware, disco, USB, rede)
sudo dmesg -T | tail -40

# 3. O que mudou recentemente no sistema
grep -i " install | upgrade " /var/log/apt/history.log | tail -20

# 4. Espaco e memoria, causa de metade dos casos misteriosos
df -h; df -i; free -h

# 5. Bug conhecido nesta versao exata
lsb_release -a
apt policy pacote
# https://bugs.launchpad.net/ubuntu/+source/PACOTE

# 6. So agora vale procurar fora, com a mensagem literal entre aspas`}),e.jsx("h2",{children:"8. Fontes para acompanhar releases e seguranca"}),e.jsx("p",{children:"Ubuntu tem calendario previsivel: release em abril e outubro, LTS em abril de ano par. Acompanhar duas ou tres fontes evita surpresa."}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Ubuntu Security Notices"})," — ubuntu.com/security/notices: uma entrada por vulnerabilidade corrigida, com a versao exata do pacote que resolve."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Release notes e schedule"})," — discourse.ubuntu.com e wiki.ubuntu.com/Releases: datas de fim de suporte de cada versao."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Launchpad"})," — bugs.launchpad.net: o rastreador oficial. Antes de abrir bug, procure o seu sintoma; quase sempre ja existe."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Ubuntu Weekly Newsletter"})," — resumo semanal do que mudou, bom para nao precisar seguir mailing list nenhuma."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Changelog do pacote"})," — mais confiavel que qualquer blog, porque descreve exatamente o que entrou na sua versao."]})]}),e.jsx(s,{title:"Acompanhar sem sair do terminal",code:`# Datas de suporte de todas as releases
sudo apt install distro-info
ubuntu-distro-info --all --fullname
ubuntu-distro-info --lts
ubuntu-distro-info --days=eol

# Changelog da versao que voce tem instalada
apt changelog nginx | head -30

# Notas da release em que voce esta
cat /etc/os-release
zless /usr/share/doc/base-files/changelog.Debian.gz`}),e.jsx("h2",{children:"9. Como pesquisar erro do jeito certo"}),e.jsx("p",{children:"Pesquisa boa e pesquisa especifica. Tres ajustes resolvem a maioria das buscas frustradas."}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Cole a mensagem ",e.jsx("strong",{children:"entre aspas"}),", e remova o que e só seu: caminho de home, PID, UUID, nome de host e horario."]}),e.jsxs("li",{children:["Acrescente a versao: ",e.jsx("code",{children:"ubuntu 24.04"})," muda completamente o resultado em relacao a uma resposta escrita para o 18.04."]}),e.jsxs("li",{children:["Prefira ",e.jsx("code",{children:"site:askubuntu.com"}),", ",e.jsx("code",{children:"site:discourse.ubuntu.com"}),"e ",e.jsx("code",{children:"site:bugs.launchpad.net"})," a blogs genericos com comandos copiados de outra distribuicao."]})]}),e.jsxs(r,{type:"warning",title:"Cuidado com receita de outra distro",children:["Comando com ",e.jsx("code",{children:"yum"}),", ",e.jsx("code",{children:"dnf"}),", ",e.jsx("code",{children:"pacman"})," ou caminho ",e.jsx("code",{children:"/etc/sysconfig/"})," nao e para Ubuntu. Dica que manda desabilitar AppArmor, editar ",e.jsx("code",{children:"/etc/resolv.conf"})," a mao ou rodar tudo como root costuma trocar o problema por um pior."]}),e.jsxs(r,{type:"info",title:"Dica de aprendizado",children:["A melhor forma de aprender Linux é ",e.jsx("strong",{children:"usando no dia a dia"}),". Instale o Ubuntu como seu sistema principal (ou dual boot), quebre coisas, conserte, automatize tarefas com scripts. A prática constante é o que transforma conhecimento teórico em habilidade real."]})]})}export{l as default};

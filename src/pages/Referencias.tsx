import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";

  export default function Referencias() {
    return (
      <PageContainer
        title="Referências e Recursos"
        subtitle="Links, livros, comunidades, canais e recursos essenciais para continuar aprendendo Ubuntu e Linux."
        difficulty="iniciante"
        timeToRead="10 min"
      >
        <p>
          Aprender Linux é uma jornada contínua. Esta página reúne os melhores recursos
          para continuar aprofundando seus conhecimentos em Ubuntu, administração de
          sistemas e desenvolvimento no Linux.
        </p>

        <h2>1. Documentação Oficial</h2>
        <ul>
          <li><strong>Ubuntu Documentation</strong> — help.ubuntu.com</li>
          <li><strong>Ubuntu Server Guide</strong> — ubuntu.com/server/docs</li>
          <li><strong>Ubuntu Wiki</strong> — wiki.ubuntu.com</li>
          <li><strong>Man pages online</strong> — manpages.ubuntu.com</li>
          <li><strong>Debian Wiki</strong> — wiki.debian.org (aplicável ao Ubuntu)</li>
          <li><strong>Arch Wiki</strong> — wiki.archlinux.org (excelente para qualquer distro)</li>
          <li><strong>Linux Kernel Documentation</strong> — kernel.org/doc</li>
        </ul>

        <h2>2. Comunidades e Fóruns</h2>
        <ul>
          <li><strong>Ask Ubuntu</strong> — askubuntu.com (perguntas e respostas)</li>
          <li><strong>Ubuntu Forums</strong> — ubuntuforums.org</li>
          <li><strong>Reddit r/Ubuntu</strong> — reddit.com/r/ubuntu</li>
          <li><strong>Reddit r/linux</strong> — reddit.com/r/linux</li>
          <li><strong>Stack Overflow</strong> — stackoverflow.com (para programação)</li>
          <li><strong>Linux Questions</strong> — linuxquestions.org</li>
          <li><strong>Ubuntu BR</strong> — ubuntubr.org (comunidade brasileira)</li>
        </ul>

        <h2>3. Ferramentas de Aprendizado</h2>
        <CodeBlock
          title="Recursos no terminal"
          code={`# Man pages — documentação de qualquer comando
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
  # cmdchallenge.com — desafios de linha de comando`}
        />

        <h2>4. Livros Recomendados</h2>
        <ul>
          <li><strong>The Linux Command Line</strong> — William Shotts (gratuito online: linuxcommand.org)</li>
          <li><strong>How Linux Works</strong> — Brian Ward</li>
          <li><strong>UNIX and Linux System Administration Handbook</strong> — Evi Nemeth et al.</li>
          <li><strong>Linux Bible</strong> — Christopher Negus</li>
          <li><strong>Linux Pocket Guide</strong> — Daniel Barrett (referência rápida)</li>
          <li><strong>Certificação Linux LPIC-1</strong> — Luciano Siqueira (em português)</li>
        </ul>

        <h2>5. Certificações</h2>
        <ul>
          <li><strong>Linux Essentials</strong> — Nível introdutório (LPI)</li>
          <li><strong>LPIC-1</strong> — Administrador Linux Junior (LPI)</li>
          <li><strong>LPIC-2</strong> — Administrador Linux Avançado (LPI)</li>
          <li><strong>Ubuntu Certified Professional</strong> — Canonical</li>
          <li><strong>Red Hat RHCSA/RHCE</strong> — Aplicável a qualquer distro</li>
          <li><strong>CompTIA Linux+</strong> — Vendor-neutral</li>
        </ul>

        <h2>6. Canais e Podcasts</h2>
        <ul>
          <li><strong>Diolinux</strong> — YouTube (PT-BR, excelente para Ubuntu)</li>
          <li><strong>Dio</strong> — YouTube (PT-BR, Linux e tech)</li>
          <li><strong>NetworkChuck</strong> — YouTube (EN, networking e Linux)</li>
          <li><strong>LearnLinuxTV</strong> — YouTube (EN, tutoriais detalhados)</li>
          <li><strong>Linux Unplugged</strong> — Podcast (EN, Jupiter Broadcasting)</li>
          <li><strong>Ubuntu Podcast</strong> — Podcast oficial da comunidade</li>
        </ul>

        <h2>7. Onde procurar quando algo quebra</h2>
        <p>
          A ordem importa. Buscar no Google antes de olhar o log local costuma
          custar meia hora e terminar em uma resposta de outra distribuicao.
        </p>
        <CodeBlock
          title="Roteiro de diagnostico, do mais barato ao mais caro"
          code={`# 1. O que o servico diz de si mesmo
systemctl status nome-do-servico
journalctl -u nome-do-servico -n 50 --no-pager

# 2. O que o kernel viu (hardware, disco, USB, rede)
sudo dmesg -T | tail -40

# 3. O que mudou recentemente no sistema
grep -i " install \| upgrade " /var/log/apt/history.log | tail -20

# 4. Espaco e memoria, causa de metade dos casos misteriosos
df -h; df -i; free -h

# 5. Bug conhecido nesta versao exata
lsb_release -a
apt policy pacote
# https://bugs.launchpad.net/ubuntu/+source/PACOTE

# 6. So agora vale procurar fora, com a mensagem literal entre aspas`}
        />

        <h2>8. Fontes para acompanhar releases e seguranca</h2>
        <p>
          Ubuntu tem calendario previsivel: release em abril e outubro, LTS em
          abril de ano par. Acompanhar duas ou tres fontes evita surpresa.
        </p>
        <ul>
          <li>
            <strong>Ubuntu Security Notices</strong> — ubuntu.com/security/notices:
            uma entrada por vulnerabilidade corrigida, com a versao exata do
            pacote que resolve.
          </li>
          <li>
            <strong>Release notes e schedule</strong> — discourse.ubuntu.com e
            wiki.ubuntu.com/Releases: datas de fim de suporte de cada versao.
          </li>
          <li>
            <strong>Launchpad</strong> — bugs.launchpad.net: o rastreador oficial.
            Antes de abrir bug, procure o seu sintoma; quase sempre ja existe.
          </li>
          <li>
            <strong>Ubuntu Weekly Newsletter</strong> — resumo semanal do que
            mudou, bom para nao precisar seguir mailing list nenhuma.
          </li>
          <li>
            <strong>Changelog do pacote</strong> — mais confiavel que qualquer
            blog, porque descreve exatamente o que entrou na sua versao.
          </li>
        </ul>
        <CodeBlock
          title="Acompanhar sem sair do terminal"
          code={`# Datas de suporte de todas as releases
sudo apt install distro-info
ubuntu-distro-info --all --fullname
ubuntu-distro-info --lts
ubuntu-distro-info --days=eol

# Changelog da versao que voce tem instalada
apt changelog nginx | head -30

# Notas da release em que voce esta
cat /etc/os-release
zless /usr/share/doc/base-files/changelog.Debian.gz`}
        />

        <h2>9. Como pesquisar erro do jeito certo</h2>
        <p>
          Pesquisa boa e pesquisa especifica. Tres ajustes resolvem a maioria
          das buscas frustradas.
        </p>
        <ul>
          <li>
            Cole a mensagem <strong>entre aspas</strong>, e remova o que e só seu:
            caminho de home, PID, UUID, nome de host e horario.
          </li>
          <li>
            Acrescente a versao: <code>ubuntu 24.04</code> muda completamente o
            resultado em relacao a uma resposta escrita para o 18.04.
          </li>
          <li>
            Prefira <code>site:askubuntu.com</code>, <code>site:discourse.ubuntu.com</code>
            e <code>site:bugs.launchpad.net</code> a blogs genericos com comandos
            copiados de outra distribuicao.
          </li>
        </ul>
        <AlertBox type="warning" title="Cuidado com receita de outra distro">
          Comando com <code>yum</code>, <code>dnf</code>, <code>pacman</code> ou
          caminho <code>/etc/sysconfig/</code> nao e para Ubuntu. Dica que manda
          desabilitar AppArmor, editar <code>/etc/resolv.conf</code> a mao ou
          rodar tudo como root costuma trocar o problema por um pior.
        </AlertBox>

        <AlertBox type="info" title="Dica de aprendizado">
          A melhor forma de aprender Linux é <strong>usando no dia a dia</strong>. Instale
          o Ubuntu como seu sistema principal (ou dual boot), quebre coisas, conserte,
          automatize tarefas com scripts. A prática constante é o que transforma
          conhecimento teórico em habilidade real.
        </AlertBox>
      </PageContainer>
    );
  }
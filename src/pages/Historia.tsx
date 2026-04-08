import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";

  export default function Historia() {
    return (
      <PageContainer
        title="História do Ubuntu e do Linux"
        subtitle="A história completa do Ubuntu, do Linux e do software livre: de Unix a Linus Torvalds, de Debian a Mark Shuttleworth."
        difficulty="iniciante"
        timeToRead="15 min"
      >
        <p>
          Entender a história do Ubuntu ajuda a compreender suas decisões de design,
          sua filosofia e por que ele funciona como funciona. A história do Ubuntu é
          inseparável da história do Linux, do GNU e do movimento de software livre.
        </p>

        <h2>1. De Unix ao Linux (1969-1991)</h2>
        <p>
          Em <strong>1969</strong>, Ken Thompson e Dennis Ritchie criaram o <strong>Unix</strong>
          nos Bell Labs da AT&T. O Unix introduziu conceitos revolucionários: tudo é arquivo,
          permissões de usuário, pipes, shell e uma arquitetura modular que influencia
          sistemas operacionais até hoje.
        </p>
        <p>
          Em <strong>1983</strong>, Richard Stallman lançou o projeto <strong>GNU</strong>
          (GNU's Not Unix) para criar um sistema operacional completamente livre. O GNU
          criou ferramentas essenciais — GCC (compilador), Bash (shell), coreutils (ls, cp,
          mv) — mas faltava o kernel.
        </p>
        <p>
          Em <strong>1991</strong>, <strong>Linus Torvalds</strong>, um estudante finlandês
          de 21 anos, publicou o <strong>kernel Linux</strong> como projeto pessoal. A
          combinação das ferramentas GNU + kernel Linux criou o primeiro sistema operacional
          completamente livre: <strong>GNU/Linux</strong>.
        </p>

        <h2>2. O Nascimento do Ubuntu (2004)</h2>
        <p>
          Em <strong>2004</strong>, <strong>Mark Shuttleworth</strong>, um empresário
          sul-africano que havia vendido sua empresa de segurança Thawte para a VeriSign,
          fundou a <strong>Canonical</strong> e lançou o <strong>Ubuntu 4.10</strong>
          (codinome "Warty Warthog").
        </p>
        <p>
          O Ubuntu foi baseado no <strong>Debian</strong>, uma das distribuições mais
          respeitadas mas também mais difícil de usar. A missão era clara: criar um Linux
          que qualquer pessoa pudesse usar, com instalação fácil, hardware funcionando
          "out of the box" e CDs gratuitos enviados pelo correio (programa ShipIt).
        </p>
        <p>
          A palavra <strong>"Ubuntu"</strong> vem da filosofia sul-africana Zulu/Xhosa e
          significa <em>"eu sou porque nós somos"</em> — humanidade para os outros.
        </p>

        <h2>3. Versões e Evolução</h2>
        <CodeBlock
          title="Linha do tempo das versões"
          code={`# Sistema de versão: ANO.MÊS
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
  # Exemplos: Focal Fossa, Jammy Jellyfish, Noble Numbat`}
        />

        <h2>4. Família Ubuntu</h2>
        <p>
          O Ubuntu tem <strong>sabores oficiais</strong> (flavors) que usam o mesmo
          sistema base com diferentes ambientes desktop:
        </p>
        <ul>
          <li><strong>Ubuntu</strong> — GNOME (padrão, mais polido)</li>
          <li><strong>Kubuntu</strong> — KDE Plasma (mais customizável)</li>
          <li><strong>Xubuntu</strong> — Xfce (leve, para PCs antigos)</li>
          <li><strong>Lubuntu</strong> — LXQt (o mais leve de todos)</li>
          <li><strong>Ubuntu MATE</strong> — MATE (GNOME 2 modernizado)</li>
          <li><strong>Ubuntu Budgie</strong> — Budgie (moderno e elegante)</li>
          <li><strong>Ubuntu Studio</strong> — Para produção multimídia</li>
          <li><strong>Ubuntu Server</strong> — Sem interface gráfica (servidores)</li>
        </ul>

        <h2>5. LTS vs Versões Regulares</h2>
        <CodeBlock
          title="Entender as versões do Ubuntu"
          code={`# LTS (Long Term Support)
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
  # Ou: ubuntu-support-status (pacotes fora de suporte)`}
        />

        <h2>6. Filosofia e Comunidade</h2>
        <p>
          O Ubuntu é guiado por princípios claros: software deve ser <strong>gratuito</strong>,
          disponível no <strong>idioma do usuário</strong>, e as pessoas devem ter
          <strong>liberdade para customizá-lo</strong>. O projeto é mantido pela
          Canonical (empresa) mas tem uma enorme comunidade voluntária global.
        </p>
        <p>
          Formas de participar da comunidade: <strong>Ubuntu Forums</strong>,
          <strong>Ask Ubuntu</strong> (perguntas e respostas), <strong>Launchpad</strong>
          (bugs e traduções), <strong>Ubuntu Wiki</strong>, e os eventos
          <strong>Ubuntu Summit</strong>.
        </p>

        <AlertBox type="info" title="Ubuntu no mundo">
          O Ubuntu é usado em: <strong>supercomputadores</strong> (maioria dos Top 500),
          <strong>nuvem</strong> (líder em clouds públicas como AWS e Azure),
          <strong>IoT</strong> (Ubuntu Core), <strong>estação espacial</strong> (ISS),
          <strong>carros autônomos</strong>, e milhões de desktops e servidores mundo afora.
        </AlertBox>
      </PageContainer>
    );
  }
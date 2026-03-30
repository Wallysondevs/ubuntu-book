import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function ManPages() {
  return (
    <PageContainer
      title="Man Pages e Documentação"
      subtitle="Como usar o sistema de manuais do Linux, help, info, tldr e encontrar ajuda rapidamente."
      difficulty="iniciante"
      timeToRead="12 min"
    >
      <p>
        O Linux tem um sistema de documentação completo embutido. Saber usar as
        man pages e outras fontes de ajuda é uma habilidade essencial — você encontra
        respostas sem precisar pesquisar na internet.
      </p>

      <h2>1. Man Pages — O Manual Oficial</h2>
      <CodeBlock title="Usando o comando man" code={`# Abrir o manual de um comando:
man ls
man cp
man bash
man apt

# Navegar no manual:
# j / ↓        — descer uma linha
# k / ↑        — subir uma linha
# SPACE        — descer uma página
# b            — subir uma página
# /palavra     — buscar no manual
# n            — próxima ocorrência da busca
# N            — ocorrência anterior
# q            — sair

# Buscar em qual seção está um tópico:
man -k "copy file"          # Busca por palavras-chave em todos os manuais
man -f ls                   # Ver quais seções têm "ls"
apropos chmod               # Equivalente ao man -k`} />

      <CodeBlock title="Seções das man pages" code={`# As man pages são divididas em seções numeradas:
# 1 — Comandos de usuário (ls, cp, mv...)
# 2 — Chamadas de sistema do kernel (open(), read(), fork()...)
# 3 — Funções de bibliotecas C (printf(), malloc()...)
# 4 — Dispositivos (/dev/null, /dev/random...)
# 5 — Formatos de arquivo (/etc/fstab, /etc/passwd...)
# 6 — Jogos (raramente usado)
# 7 — Miscelânea (protocolos, conceitos...)
# 8 — Administração do sistema (sudo, mount, fdisk...)

# Especificar a seção:
man 5 fstab        # Manual do ARQUIVO /etc/fstab (seção 5)
man 1 passwd       # Comando passwd (seção 1)
man 5 passwd       # Formato do arquivo /etc/passwd (seção 5)

# Abrir todas as seções:
man -a passwd`} />

      <h2>2. Outros Comandos de Ajuda</h2>
      <CodeBlock title="--help, info, type, which" code={`# --help — ajuda rápida inline (sem abrir manual completo)
ls --help
git --help
apt --help

# -h também funciona em muitos comandos:
cp -h
mkdir -h

# info — documentação mais detalhada (GNU style)
info bash
info coreutils
# Navegar no info: Tab (links), Enter (seguir), q (sair)

# type — descobrir o que um comando é
type ls         # ls is aliased to 'ls --color=auto'
type cd         # cd is a shell builtin
type python3    # python3 is /usr/bin/python3
type ll         # ll is aliased to 'ls -lah'

# which — localizar o executável
which python3   # /usr/bin/python3
which node      # /usr/local/bin/node
which -a python # Todos os pythons no PATH`} />

      <h2>3. tldr — Man Pages Resumidas</h2>
      <AlertBox type="success">
        O <strong>tldr</strong> (Too Long; Didn't Read) mostra exemplos práticos e
        resumidos dos comandos mais comuns. Muito mais rápido que ler o man completo!
      </AlertBox>
      <CodeBlock title="Instalando e usando o tldr" code={`# Instalar tldr:
sudo apt install tldr
# ou com npm:
npm install -g tldr

# Atualizar o banco de dados:
tldr --update

# Usar:
tldr tar          # Exemplos de uso do tar
tldr grep         # Exemplos do grep
tldr rsync        # Exemplos do rsync
tldr git-commit   # Exemplos do git commit
tldr ssh          # Exemplos do SSH`} />

      <h2>4. Documentação Online e Local</h2>
      <CodeBlock title="Onde encontrar mais documentação" code={`# Documentação de pacotes instalados:
ls /usr/share/doc/          # Documentação de todos os pacotes
ls /usr/share/doc/bash/     # Docs específicos do bash
zcat /usr/share/doc/bash/changelog.gz  # Ver changelog

# Documentação do Ubuntu:
# https://help.ubuntu.com        — Wiki oficial
# https://askubuntu.com          — Q&A da comunidade
# https://ubuntu.com/server/docs — Docs do Ubuntu Server
# https://manpages.ubuntu.com    — Man pages online

# README e docs dentro de pacotes instalados:
find /usr/share/doc -name "README*" -o -name "*.md" 2>/dev/null | head -20

# Documentação do kernel:
ls /usr/src/linux-headers-\$(uname -r)/Documentation/ 2>/dev/null`} />
    </PageContainer>
  );
}

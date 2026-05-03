import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";

  export default function GPG() {
    return (
      <PageContainer
        title="GPG — Criptografia e Assinatura Digital"
        subtitle="Guia completo do GNU Privacy Guard no Ubuntu: gerar chaves, criptografar arquivos, assinar documentos, verificar assinaturas e integrar com Git e email."
        difficulty="avancado"
        timeToRead="35 min"
      >
        <AlertBox type="info" title="Pré-requisitos">
          Ubuntu com <code>gpg</code> (já vem instalado). Útil ter um par de chaves gerado para os exemplos.
        </AlertBox>

        <h2>Glossário rápido</h2>
        <p>
          <strong>GPG</strong> — GNU Privacy Guard — implementação livre do OpenPGP. Para criptografia e assinatura.
        </p>
        <p>
          <strong>Par de chaves</strong> — chave privada (segredo) + chave pública (compartilhar). Assinaturas usam a privada; criptografia usa a pública do destinatário.
        </p>
        <p>
          <strong>Keyring</strong> — base local de chaves conhecidas. <code>~/.gnupg/</code>.
        </p>
        <p>
          <strong>Web of Trust</strong> — modelo de confiança descentralizado: você assina chaves de quem confia.
        </p>
        <p>
          <strong>Keyserver</strong> — servidor que guarda chaves públicas. Ex.: <code>keys.openpgp.org</code>.
        </p>

        <p>
          O <strong>GPG</strong> (GNU Privacy Guard) é a implementação livre do padrão OpenPGP.
          Ele permite <em>criptografar</em> arquivos e mensagens (só o destinatário pode ler),
          <em>assinar digitalmente</em> (provar que você é o autor) e <em>verificar assinaturas</em>
          (confirmar autenticidade). É usado em commits Git assinados, emails seguros, verificação
          de downloads e gerenciamento de pacotes do apt.
        </p>

        <h2>Conceitos Fundamentais</h2>
        <ul>
          <li><strong>Chave pública</strong> — Compartilhada com todos. Usada para criptografar dados para você e verificar suas assinaturas.</li>
          <li><strong>Chave privada</strong> — Secreta, nunca compartilhe. Usada para descriptografar dados e criar assinaturas.</li>
          <li><strong>Keyring</strong> — Seu "chaveiro" local com suas chaves e as chaves públicas de outras pessoas.</li>
          <li><strong>Fingerprint</strong> — Hash único da chave para verificação (ex: <code>A1B2 C3D4 E5F6...</code>).</li>
          <li><strong>Web of Trust</strong> — Sistema descentralizado de confiança onde pessoas assinam as chaves umas das outras.</li>
        </ul>

        <h2>1. Gerar um Par de Chaves</h2>
        <CodeBlock
          title="Criar chaves GPG"
          code={`# Verificar se o GPG está instalado (já vem no Ubuntu)
  gpg --version
  # Saída: gpg (GnuPG) 2.4.4

  # Gerar um novo par de chaves (interativo)
  gpg --full-generate-key
  # Escolhas recomendadas:
  # 1. Tipo: (1) RSA and RSA
  # 2. Tamanho: 4096 bits (máxima segurança)
  # 3. Validade: 2y (2 anos — pode ser renovada)
  # 4. Nome: Seu Nome Completo
  # 5. Email: seu@email.com
  # 6. Comentário: (opcional, pode deixar vazio)
  # 7. Senha: Escolha uma senha FORTE (protege a chave privada)

  # Gerar chave rápida (valores padrão)
  gpg --quick-generate-key "Seu Nome <seu@email.com>" rsa4096

  # Listar suas chaves
  gpg --list-keys
  # Saída:
  # /home/user/.gnupg/pubring.kbx
  # ------------------------------
  # pub   rsa4096 2024-01-15 [SC] [expires: 2026-01-15]
  #       A1B2C3D4E5F6G7H8I9J0K1L2M3N4O5P6Q7R8S9T0
  # uid           [ultimate] Seu Nome <seu@email.com>
  # sub   rsa4096 2024-01-15 [E] [expires: 2026-01-15]

  # Listar chaves privadas
  gpg --list-secret-keys --keyid-format=long

  # Ver o fingerprint completo
  gpg --fingerprint seu@email.com`}
        />

        <h2>2. Exportar e Importar Chaves</h2>
        <CodeBlock
          title="Compartilhar e importar chaves GPG"
          code={`# Exportar sua chave pública (para enviar a outras pessoas)
  gpg --armor --export seu@email.com > minha-chave-publica.asc
  # --armor gera em formato texto (ASCII), sem ele gera binário

  # Exportar para um servidor de chaves público
  gpg --keyserver keyserver.ubuntu.com --send-keys SEU_KEY_ID
  gpg --keyserver keys.openpgp.org --send-keys SEU_KEY_ID

  # Importar a chave pública de alguém
  gpg --import chave-publica-da-pessoa.asc

  # Importar de um servidor de chaves
  gpg --keyserver keyserver.ubuntu.com --recv-keys KEY_ID_DA_PESSOA

  # Exportar sua chave privada (BACKUP — guarde com segurança!)
  gpg --armor --export-secret-keys seu@email.com > minha-chave-privada.asc
  # ATENÇÃO: Este arquivo contém sua chave privada!
  # Guarde em local seguro (pendrive criptografado, cofre, etc.)
  # NUNCA envie por email ou compartilhe

  # Importar chave privada (restaurar backup)
  gpg --import minha-chave-privada.asc

  # Verificar se a chave importada é confiável
  gpg --edit-key email@da-pessoa.com
  # No prompt: trust → 5 (confiança total) → quit

  # Deletar uma chave
  gpg --delete-key email@da-pessoa.com          # Chave pública
  gpg --delete-secret-key seu@email.com         # Chave privada`}
        />

        <AlertBox type="danger" title="Proteja sua chave privada">
          A chave privada é como a senha mestra de toda a sua identidade digital GPG.
          Se alguém obtiver sua chave privada E sua senha, pode se passar por você,
          ler suas mensagens criptografadas e assinar documentos em seu nome.
          Sempre faça backup seguro e use uma senha forte.
        </AlertBox>

        <h2>3. Criptografar e Descriptografar Arquivos</h2>
        <CodeBlock
          title="Criptografia de arquivos com GPG"
          code={`# === CRIPTOGRAFIA ASSIMÉTRICA (com chave pública) ===

  # Criptografar um arquivo para alguém (usando a chave pública dela)
  gpg --encrypt --recipient email@da-pessoa.com arquivo.txt
  # Gera: arquivo.txt.gpg (binário, só a pessoa pode abrir)

  # Criptografar com saída em texto ASCII
  gpg --armor --encrypt --recipient email@da-pessoa.com arquivo.txt
  # Gera: arquivo.txt.asc (texto, pode ser colado em email)

  # Criptografar para múltiplos destinatários
  gpg --encrypt -r pessoa1@email.com -r pessoa2@email.com arquivo.txt

  # Descriptografar um arquivo (precisa da chave privada + senha)
  gpg --decrypt arquivo.txt.gpg > arquivo.txt
  # Ou:
  gpg --output arquivo.txt --decrypt arquivo.txt.gpg

  # === CRIPTOGRAFIA SIMÉTRICA (com senha) ===
  # Não precisa de chaves — usa apenas uma senha compartilhada

  # Criptografar com senha
  gpg --symmetric arquivo.txt
  # Pede uma senha. Gera: arquivo.txt.gpg

  # Criptografar com algoritmo específico
  gpg --symmetric --cipher-algo AES256 arquivo.txt

  # Descriptografar
  gpg --decrypt arquivo.txt.gpg > arquivo.txt

  # === CRIPTOGRAFAR DIRETÓRIOS ===
  # GPG trabalha com arquivos, então comprima primeiro:
  tar czf pasta.tar.gz pasta/
  gpg --symmetric --cipher-algo AES256 pasta.tar.gz
  rm pasta.tar.gz    # Remover o .tar.gz não criptografado

  # Descriptografar e extrair:
  gpg --decrypt pasta.tar.gz.gpg > pasta.tar.gz
  tar xzf pasta.tar.gz`}
        />

        <h2>4. Assinar e Verificar Documentos</h2>
        <CodeBlock
          title="Assinatura digital com GPG"
          code={`# Assinar um arquivo (cria arquivo separado com a assinatura)
  gpg --detach-sign documento.pdf
  # Gera: documento.pdf.sig (assinatura binária)

  # Assinar com saída ASCII
  gpg --detach-sign --armor documento.pdf
  # Gera: documento.pdf.asc

  # Assinar e incluir a assinatura no próprio arquivo (clearsign)
  gpg --clearsign mensagem.txt
  # Gera: mensagem.txt.asc (texto + assinatura visível)

  # Assinar e criptografar ao mesmo tempo
  gpg --sign --encrypt --recipient email@pessoa.com documento.pdf

  # === VERIFICAR ASSINATURAS ===

  # Verificar assinatura de um arquivo
  gpg --verify documento.pdf.sig documento.pdf
  # Saída (se válida):
  # gpg: Signature made Seg 15 Jan 2024 10:30:00
  # gpg: using RSA key A1B2C3D4E5F6...
  # gpg: Good signature from "Autor <autor@email.com>" [ultimate]

  # Saída (se inválida ou adulterada):
  # gpg: BAD signature from "Autor <autor@email.com>"

  # Verificar pacotes do Ubuntu (o apt usa GPG internamente)
  # As chaves dos repositórios ficam em /etc/apt/trusted.gpg.d/

  # Verificar download ISO do Ubuntu
  # 1. Baixe o SHA256SUMS e SHA256SUMS.gpg do site do Ubuntu
  # 2. Importe a chave do Ubuntu:
  gpg --keyserver keyserver.ubuntu.com --recv-keys 843938DF228D22F7B3742BC0D94AA3F0EFE21092
  # 3. Verifique:
  gpg --verify SHA256SUMS.gpg SHA256SUMS
  # 4. Verifique o hash:
  sha256sum -c SHA256SUMS 2>&1 | grep ubuntu-24.04`}
        />

        <h2>5. GPG com Git (Commits Assinados)</h2>
        <CodeBlock
          title="Assinar commits e tags no Git"
          code={`# Configurar o Git para usar sua chave GPG
  # Primeiro, pegue o ID da sua chave:
  gpg --list-secret-keys --keyid-format=long
  # Copie o ID após "rsa4096/" (ex: A1B2C3D4E5F6G7H8)

  # Configurar no Git
  git config --global user.signingkey A1B2C3D4E5F6G7H8
  git config --global commit.gpgsign true    # Assinar todos os commits automaticamente
  git config --global tag.gpgsign true       # Assinar todas as tags

  # Se o GPG pedir senha no terminal (não em popup):
  echo 'export GPG_TTY=$(tty)' >> ~/.bashrc
  source ~/.bashrc

  # Fazer um commit assinado
  git commit -S -m "Commit assinado com GPG"

  # Verificar assinatura de um commit
  git log --show-signature
  # Ou:
  git log --pretty='format:%G? %aN %s'
  # G = assinatura válida, N = sem assinatura, B = assinatura inválida

  # Criar uma tag assinada
  git tag -s v1.0.0 -m "Release 1.0.0"

  # Verificar assinatura de uma tag
  git tag -v v1.0.0

  # Exportar chave pública para adicionar no GitHub/GitLab
  gpg --armor --export seu@email.com
  # Copie a saída inteira e cole em:
  # GitHub: Settings → SSH and GPG keys → New GPG key
  # GitLab: Settings → GPG Keys`}
        />

        <h2>6. Gerenciar o Chaveiro</h2>
        <CodeBlock
          title="Administrar chaves GPG"
          code={`# Editar uma chave (adicionar email, mudar validade, etc.)
  gpg --edit-key seu@email.com
  # Comandos no prompt:
  # adduid      → adicionar um novo email/identidade
  # deluid      → remover um email/identidade
  # expire      → mudar a data de expiração
  # passwd      → mudar a senha da chave
  # trust       → definir nível de confiança
  # save        → salvar e sair
  # quit        → sair sem salvar

  # Renovar uma chave expirada
  gpg --edit-key seu@email.com
  # No prompt: expire → escolher nova validade → save

  # Revogar uma chave comprometida
  # 1. Gerar certificado de revogação (faça isso ao criar a chave!)
  gpg --gen-revoke seu@email.com > revogacao.asc

  # 2. Se precisar revogar:
  gpg --import revogacao.asc
  gpg --keyserver keyserver.ubuntu.com --send-keys SEU_KEY_ID

  # Fazer backup completo do GPG
  cp -r ~/.gnupg ~/gnupg-backup-$(date +%Y%m%d)
  # Ou exportar individualmente:
  gpg --armor --export-secret-keys --export-options backup > backup-privada.asc
  gpg --armor --export --export-options backup > backup-publica.asc
  gpg --export-ownertrust > trustdb-backup.txt

  # Restaurar backup
  gpg --import backup-privada.asc
  gpg --import backup-publica.asc
  gpg --import-ownertrust trustdb-backup.txt`}
        />

        <h2>Troubleshooting</h2>
        <CodeBlock
          title="Problemas comuns com GPG"
          code={`# Erro: "gpg: decryption failed: No secret key"
  # Causa: Você não tem a chave privada correspondente
  # Solução: Importar a chave privada
  gpg --import chave-privada.asc

  # Erro: "gpg: signing failed: Inappropriate ioctl for device"
  # Solução: Configurar o GPG para usar o terminal
  export GPG_TTY=$(tty)
  echo 'export GPG_TTY=$(tty)' >> ~/.bashrc

  # Erro: "gpg: public key not found"
  # Solução: Importar a chave pública do remetente
  gpg --keyserver keyserver.ubuntu.com --recv-keys KEY_ID

  # Erro: "gpg: WARNING: unsafe permissions on homedir"
  # Solução: Corrigir permissões
  chmod 700 ~/.gnupg
  chmod 600 ~/.gnupg/*

  # O agente GPG não pede a senha (trava)
  # Reiniciar o agente
  gpgconf --kill gpg-agent
  gpg-agent --daemon

  # Configurar cache de senha (não pedir toda hora)
  mkdir -p ~/.gnupg
  cat >> ~/.gnupg/gpg-agent.conf << 'EOF'
  default-cache-ttl 3600
  max-cache-ttl 86400
  EOF
  gpgconf --kill gpg-agent`}
        />

        <AlertBox type="info" title="GPG no dia a dia">
          Mesmo que você não use email criptografado, o GPG é útil para: assinar commits no Git
          (mostra o selo "Verified" no GitHub), criptografar backups sensíveis, verificar
          downloads e gerenciar senhas com <code>pass</code> (gerenciador de senhas baseado em GPG).
        </AlertBox>
      </PageContainer>
    );
  }
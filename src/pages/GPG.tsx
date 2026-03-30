import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function GPG() {
  return (
    <PageContainer
      title="GPG — Criptografia e Assinaturas"
      subtitle="Use GPG para criptografar arquivos, assinar documentos e verificar autenticidade de pacotes no Ubuntu."
      difficulty="avancado"
      timeToRead="20 min"
    >
      <h2>1. Gerando Chaves GPG</h2>
      <CodeBlock title="Criando seu par de chaves GPG" code={`# Instalar GPG:
sudo apt install gnupg

# Gerar par de chaves (interativo):
gpg --full-generate-key
# Tipo: RSA and RSA
# Tamanho: 4096 bits
# Validade: 2y (2 anos), ou 0 (sem expiração)
# Nome, e-mail, senha da chave

# Gerar de forma mais rápida:
gpg --batch --gen-key << EOF
Key-Type: RSA
Key-Length: 4096
Name-Real: Seu Nome
Name-Email: voce@email.com
Expire-Date: 2y
%no-protection
EOF

# Listar chaves:
gpg --list-keys              # Chaves públicas
gpg --list-secret-keys       # Chaves privadas
gpg -k                       # Atalho para list-keys`} />

      <h2>2. Criptografando e Descriptografando</h2>
      <CodeBlock title="Usando GPG para proteger arquivos" code={`# Criptografar com senha (sem precisar de chave do destinatário):
gpg --symmetric arquivo.txt
# Gera: arquivo.txt.gpg

# Descriptografar:
gpg arquivo.txt.gpg

# Criptografar para um destinatário específico (precisa da chave pública dele):
gpg --encrypt --recipient voce@email.com arquivo.txt
gpg -e -r voce@email.com arquivo.txt

# Criptografar para múltiplos destinatários:
gpg -e -r pessoa1@email.com -r pessoa2@email.com documento.pdf

# Descriptografar com chave privada:
gpg --decrypt arquivo.txt.gpg > arquivo-descriptografado.txt

# Criptografar texto na linha de comando:
echo "Mensagem secreta" | gpg --encrypt --recipient voce@email.com | base64`} />

      <h2>3. Assinaturas Digitais</h2>
      <CodeBlock title="Assinar e verificar arquivos" code={`# Assinar arquivo (assinatura separada):
gpg --sign arquivo.txt           # Gera arquivo.txt.gpg (binário + assinatura)
gpg --detach-sign arquivo.txt    # Gera arquivo.txt.sig (assinatura separada)
gpg --clearsign mensagem.txt     # Arquivo de texto com assinatura embutida

# Verificar assinatura:
gpg --verify arquivo.txt.sig arquivo.txt

# Verificar pacotes de software (ex: verificar ISO do Ubuntu):
gpg --verify SHA256SUMS.gpg SHA256SUMS`} />

      <h2>4. Exportando e Importando Chaves</h2>
      <CodeBlock title="Compartilhando chaves GPG" code={`# Exportar chave pública:
gpg --export --armor voce@email.com > minha-chave-publica.asc

# Exportar chave privada (backup! Guarde com segurança):
gpg --export-secret-keys --armor voce@email.com > minha-chave-privada.asc
chmod 400 minha-chave-privada.asc

# Importar chave pública de outra pessoa:
gpg --import chave-publica-amigo.asc

# Publicar em servidor de chaves:
gpg --keyserver keyserver.ubuntu.com --send-keys SEU-ID-DE-CHAVE

# Buscar chave de alguém:
gpg --keyserver keyserver.ubuntu.com --search-keys "Nome Pessoa"
gpg --keyserver keyserver.ubuntu.com --recv-keys ID-DA-CHAVE

# Ver fingerprint (para verificar autenticidade):
gpg --fingerprint voce@email.com`} />
    </PageContainer>
  );
}

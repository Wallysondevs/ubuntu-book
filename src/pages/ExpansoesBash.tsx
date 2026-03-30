import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function ExpansoesBash() {
  return (
    <PageContainer
      title="Expansões do Bash"
      subtitle="Domine as expansões de variáveis, globbing, brace expansion, aritmética e substituição de comandos."
      difficulty="avancado"
      timeToRead="20 min"
    >
      <h2>1. Expansão de Variáveis</h2>
      <CodeBlock title="Manipulação de strings com variáveis" code={`# Básico:
NOME="Ubuntu Linux"
echo \${NOME}           # Ubuntu Linux
echo \${#NOME}          # 12 (comprimento)

# Valor padrão se variável vazia:
echo \${VAR:-"padrão"}  # Se VAR vazia, usa "padrão"
echo \${VAR:="padrão"}  # Se VAR vazia, DEFINE para "padrão"

# Substring:
TEXTO="Hello World"
echo \${TEXTO:0:5}      # Hello (posição 0, 5 chars)
echo \${TEXTO:6}        # World (do caractere 6 em diante)

# Substituição:
echo \${NOME/Linux/OS}  # Ubuntu OS (substituir primeira)
echo \${NOME//i/I}      # UbUntu LInux (substituir todas)

# Maiúsculas/minúsculas (Bash 4+):
echo \${NOME^^}         # UBUNTU LINUX
echo \${NOME,,}         # ubuntu linux

# Remover prefixo/sufixo:
ARQUIVO="documento.pdf"
echo \${ARQUIVO%.pdf}   # documento (remove .pdf do final)
echo \${ARQUIVO#*/}     # (remove até primeira /)

CAMINHO="/home/user/arquivo.txt"
echo \${CAMINHO##*/}    # arquivo.txt (apenas o nome do arquivo)
echo \${CAMINHO%/*}     # /home/user (apenas o diretório)`} />

      <h2>2. Brace Expansion</h2>
      <CodeBlock title="Criar múltiplos itens com {}" code={`# Criar múltiplos diretórios:
mkdir -p projeto/{src,tests,docs,dist}
# Cria: projeto/src, projeto/tests, projeto/docs, projeto/dist

# Criar arquivos:
touch arquivo_{1,2,3}.txt      # arquivo_1.txt, arquivo_2.txt, arquivo_3.txt

# Sequências numéricas:
echo {1..10}               # 1 2 3 4 5 6 7 8 9 10
echo {1..10..2}            # 1 3 5 7 9 (step 2)
echo {10..1}               # 10 9 8 ... 1 (reverso)

# Sequências de letras:
echo {a..z}                # a b c d ... z
echo {A..Z}                # A B C ... Z

# Combinações:
echo {web,api,db}-{dev,prod}
# web-dev web-prod api-dev api-prod db-dev db-prod

# Backup de arquivo com brace:
cp arquivo.conf{,.bak}     # arquivo.conf e arquivo.conf.bak`} />

      <h2>3. Globbing — Padrões de Arquivo</h2>
      <CodeBlock title="Wildcards e padrões de arquivo" code={`# Wildcards básicos:
ls *.txt           # Todos os .txt no diretório atual
ls *.{txt,pdf}     # .txt e .pdf
ls arquivo?.txt    # arquivo com um caractere antes de .txt
ls arquivo[123].txt  # arquivo1.txt, arquivo2.txt ou arquivo3.txt
ls arquivo[!0-9].txt # arquivo seguido de não-número

# Globstar (requer: shopt -s globstar):
shopt -s globstar
ls **/*.py         # Todos os .py recursivamente

# Nullglob (não mostra erro se não encontrar):
shopt -s nullglob

# Extglob — padrões estendidos:
shopt -s extglob
ls !(*.txt)        # Tudo EXCETO .txt
ls +(*.jpg|*.png)  # Arquivos .jpg OU .png`} />

      <h2>4. Aritmética e Substituição</h2>
      <CodeBlock title="Aritmética e substituição de comandos" code={`# ARITMÉTICA com \$(( )):
echo \$((2 + 3))        # 5
echo \$((10 * 5))       # 50
echo \$((10 / 3))       # 3 (inteiro)
echo \$((10 % 3))       # 1 (resto)

# Variáveis em aritmética:
X=5
echo \$((X + 10))       # 15
((X++))                   # X = X + 1
echo \$X                 # 6

# SUBSTITUIÇÃO DE COMANDO com \$():
DATA=\$(date +%Y-%m-%d)
echo "Hoje: \$DATA"

ARQUIVOS=\$(ls -1 | wc -l)
echo "Arquivos: \$ARQUIVOS"

# Aninhar substituições:
echo "Usuário root tem UID: \$(id -u root)"

# Process substitution com <():
diff <(sort arquivo1.txt) <(sort arquivo2.txt)  # Comparar saídas`} />
    </PageContainer>
  );
}

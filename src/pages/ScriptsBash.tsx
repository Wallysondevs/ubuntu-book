import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function ScriptsBash() {
  return (
    <PageContainer
      title="Scripts Bash Avançados"
      subtitle="Escreva scripts Bash poderosos para automatizar tarefas no Ubuntu — variáveis, condicionais, loops e funções."
      difficulty="avancado"
      timeToRead="28 min"
    >
      <h2>1. Estrutura de um Script Bash</h2>
      <CodeBlock title="Fundamentos de script Bash" code={`#!/bin/bash
# Linha 1: shebang — indica qual interpretador usar
# #!/bin/bash    — bash padrão
# #!/usr/bin/env bash — mais portátil

# Modo seguro (recomendado sempre!):
set -euo pipefail
# -e = sair se qualquer comando falhar
# -u = sair se variável não definida for usada
# -o pipefail = falha em pipeline se qualquer etapa falhar

# Variáveis:
NOME="Ubuntu"
VERSAO=22
LISTA=("item1" "item2" "item3")

# Usar variáveis:
echo "Sistema: \$NOME"
echo "Versão: \${VERSAO}"
echo "Primeiro: \${LISTA[0]}"

# Variáveis especiais:
echo "\$0"   # Nome do script
echo "\$1"   # Primeiro argumento
echo "\$@"   # Todos os argumentos
echo "\$#"   # Número de argumentos
echo "\$?"   # Código de saída do último comando
echo "\$\$"   # PID do script atual`} />

      <h2>2. Condicionais</h2>
      <CodeBlock title="if, case e testes no Bash" code={`#!/bin/bash
# IF básico:
if [ "\$1" = "hello" ]; then
    echo "Olá!"
elif [ "\$1" = "bye" ]; then
    echo "Tchau!"
else
    echo "Não entendi"
fi

# Testes comuns:
# Arquivos:
if [ -f "/etc/hosts" ]; then echo "arquivo existe"; fi
if [ -d "/tmp" ]; then echo "diretório existe"; fi
if [ -r arquivo ]; then echo "legível"; fi
if [ -w arquivo ]; then echo "gravável"; fi
if [ -x arquivo ]; then echo "executável"; fi

# Strings:
if [ -z "\$VAR" ]; then echo "vazia"; fi
if [ -n "\$VAR" ]; then echo "não vazia"; fi
if [ "\$A" = "\$B" ]; then echo "iguais"; fi
if [ "\$A" != "\$B" ]; then echo "diferentes"; fi

# Números (use -eq, -ne, -lt, -le, -gt, -ge):
if [ "\$NUM" -gt 10 ]; then echo "maior que 10"; fi
if [ "\$NUM" -eq 0 ]; then echo "é zero"; fi

# Operadores lógicos:
if [ "\$A" = "x" ] && [ "\$B" = "y" ]; then echo "ambos"; fi
if [ "\$A" = "x" ] || [ "\$B" = "y" ]; then echo "algum"; fi`} />

      <h2>3. Loops</h2>
      <CodeBlock title="for, while e until" code={`#!/bin/bash
# FOR — iterar lista:
for item in alpha beta gamma; do
    echo "Item: \$item"
done

# FOR — iterar array:
FRUTAS=("maçã" "banana" "uva")
for fruta in "\${FRUTAS[@]}"; do
    echo "Fruta: \$fruta"
done

# FOR — iterar arquivos:
for arquivo in /etc/*.conf; do
    echo "Config: \$arquivo"
done

# FOR estilo C:
for ((i=1; i<=10; i++)); do
    echo "Número: \$i"
done

# WHILE — executar enquanto condição for verdadeira:
CONTADOR=0
while [ \$CONTADOR -lt 5 ]; do
    echo "Contador: \$CONTADOR"
    ((CONTADOR++))
done

# Loop infinito (sair com break):
while true; do
    echo "Pressione CTRL+C para parar"
    sleep 1
done`} />

      <h2>4. Funções e Tratamento de Erros</h2>
      <CodeBlock title="Funções robustas com tratamento de erro" code={`#!/bin/bash
set -euo pipefail

# Função de log:
log() {
    echo "[\$(date '+%Y-%m-%d %H:%M:%S')] \$*"
}

# Função de erro:
erro() {
    echo "[\$(date '+%Y-%m-%d %H:%M:%S')] ERRO: \$*" >&2
    exit 1
}

# Verificar se é root:
verificar_root() {
    if [[ \$(id -u) -ne 0 ]]; then
        erro "Este script precisa ser executado como root!"
    fi
}

# Verificar dependências:
verificar_deps() {
    for cmd in curl wget git; do
        if ! command -v "\$cmd" &> /dev/null; then
            erro "Dependência não encontrada: \$cmd"
        fi
    done
    log "Todas as dependências estão disponíveis."
}

# Função principal:
main() {
    log "Iniciando script..."
    verificar_root
    verificar_deps
    log "Script concluído com sucesso!"
}

# Executar função principal:
main "\$@"`} />
    </PageContainer>
  );
}

import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function DNS() {
  return (
    <PageContainer
      title="DNS e Resolução de Nomes"
      subtitle="Como funciona o DNS no Ubuntu: configurar servidores DNS, hosts locais, resolver e diagnóstico."
      difficulty="intermediario"
      timeToRead="15 min"
    >
      <p>
        O <strong>DNS</strong> (Domain Name System) traduz nomes de domínio
        (como <em>google.com</em>) em endereços IP. Configurar o DNS corretamente
        é essencial para performance e privacidade.
      </p>

      <h2>1. Como o Ubuntu Resolve Nomes</h2>
      <CodeBlock title="Sequência de resolução de nomes" code={`# Ordem de resolução configurada em /etc/nsswitch.conf:
grep hosts /etc/nsswitch.conf
# hosts: files mdns4_minimal [NOTFOUND=return] dns

# Sequência padrão:
# 1. /etc/hosts — arquivo local (mais rápido)
# 2. mDNS (Multicast DNS — para rede local .local)
# 3. DNS configurado no sistema

# Ver o servidor DNS em uso:
systemd-resolve --status | grep "DNS Servers"
resolvectl status | grep "DNS Servers"

# Ver configuração do resolver:
cat /etc/resolv.conf
# Normalmente aponta para 127.0.0.53 (systemd-resolved)`} />

      <h2>2. Configurando Servidores DNS</h2>
      <CodeBlock title="Alterar servidores DNS no Ubuntu" code={`# Método 1: Via Netplan (recomendado para servidor):
sudo nano /etc/netplan/01-netcfg.yaml
# Adicionar em cada interface:
#   nameservers:
#     addresses:
#       - 8.8.8.8        # Google DNS
#       - 1.1.1.1        # Cloudflare
#       - 9.9.9.9        # Quad9 (privacidade)

sudo netplan apply

# Método 2: Via NetworkManager (desktop):
nmcli connection modify "Nome da Rede" ipv4.dns "8.8.8.8 1.1.1.1"
nmcli connection up "Nome da Rede"

# Método 3: Via resolvectl (temporário):
sudo resolvectl dns ens33 8.8.8.8 1.1.1.1

# DNS com privacidade (DoT — DNS over TLS):
sudo nano /etc/systemd/resolved.conf
# [Resolve]
# DNS=1.1.1.1#cloudflare-dns.com 9.9.9.9#dns.quad9.net
# DNSOverTLS=yes
sudo systemctl restart systemd-resolved`} />

      <h2>3. /etc/hosts — DNS Local</h2>
      <CodeBlock title="Usando /etc/hosts para resolução local" code={`# Ver o arquivo hosts:
cat /etc/hosts

# Formato:
# IP    nome    apelido
# 127.0.0.1  localhost
# 127.0.0.1  meu-site.local

# Casos de uso comuns:
sudo nano /etc/hosts

# Bloquear anúncios/rastreadores:
# 0.0.0.0  ads.google.com
# 0.0.0.0  facebook.com

# Mapear servidor local:
# 192.168.1.50  servidor.local  servidor

# Desenvolvimento local:
# 127.0.0.1  meu-projeto.local
# 127.0.0.1  api.meu-projeto.local

# Listas de bloqueio prontas (hosts-based ad blocking):
# https://github.com/StevenBlack/hosts`} />

      <h2>4. Diagnóstico de DNS</h2>
      <CodeBlock title="Ferramentas de diagnóstico DNS" code={`# nslookup — consulta básica DNS:
nslookup google.com
nslookup google.com 8.8.8.8    # Usando DNS específico
nslookup -type=MX gmail.com    # Ver registros MX (mail)

# dig — ferramenta mais completa:
sudo apt install dnsutils
dig google.com
dig google.com @8.8.8.8         # Usando DNS específico
dig google.com MX               # Registros de e-mail
dig google.com NS               # Name servers
dig -x 8.8.8.8                  # Reverse DNS (IP → nome)
dig +trace google.com           # Seguir toda a cadeia DNS

# host — simples e rápido:
host google.com
host 8.8.8.8              # Reverse lookup

# Ver cache DNS:
sudo resolvectl statistics

# Limpar cache DNS:
sudo resolvectl flush-caches

# Tempo de resolução (diagnóstico de velocidade):
time dig google.com > /dev/null`} />
    </PageContainer>
  );
}

import{j as e}from"./index-_kFPLDpE.js";import{P as i}from"./PageContainer-eafNNqkI.js";import{C as o}from"./CodeBlock-ByIkwE54.js";import{A as a}from"./AlertBox-NzOB7YP7.js";function d(){return e.jsxs(i,{title:"Redes e Conectividade",subtitle:"ip, nmcli, ping, ss, traceroute, nmap — configuração, monitoramento e diagnóstico de rede no Ubuntu.",difficulty:"intermediario",timeToRead:"25 min",children:[e.jsxs(a,{type:"info",title:"Pré-requisitos",children:["Ubuntu com terminal. Alguns comandos exigem ",e.jsx("code",{children:"sudo"}),". Útil saber a diferença entre Wi-Fi e Ethernet."]}),e.jsx("h2",{children:"Glossário rápido"}),e.jsxs("p",{children:[e.jsx("strong",{children:"Interface"})," — dispositivo de rede: ",e.jsx("code",{children:"eth0"}),"/",e.jsx("code",{children:"enp3s0"})," (cabo), ",e.jsx("code",{children:"wlan0"}),"/",e.jsx("code",{children:"wlp2s0"})," (Wi-Fi), ",e.jsx("code",{children:"lo"})," (loopback)."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"IP"})," — endereço único na rede. IPv4: ",e.jsx("code",{children:"192.168.0.10"}),"; IPv6: ",e.jsx("code",{children:"2001:db8::1"}),"."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Gateway"})," — roteador padrão para sair da rede local."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"ip / ifconfig"})," — ",e.jsx("code",{children:"ip"})," é o moderno; ",e.jsx("code",{children:"ifconfig"})," é legado mas ainda comum."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"ping / traceroute / ss"})," — testar conectividade, rastrear rota, listar sockets abertos."]}),e.jsxs("p",{children:["No Ubuntu, a rede é gerenciada principalmente pelo ",e.jsx("strong",{children:"NetworkManager"})," — ao contrário do Arch Linux, onde você configura tudo manualmente. Ainda assim, dominar as ferramentas de linha de comando é essencial para diagnóstico de problemas, configuração de servidores e automação de rede."]}),e.jsx("h2",{children:"ip — A Ferramenta Moderna de Rede"}),e.jsx(o,{title:"Comandos ip essenciais",code:`# Ver todas as interfaces de rede e endereços IP
ip addr
ip a      # atalho

# Saída típica no Ubuntu:
# 1: lo: <LOOPBACK,UP>
#     inet 127.0.0.1/8 scope host lo
# 2: enp3s0: <BROADCAST,MULTICAST,UP>
#     inet 192.168.1.100/24 brd 192.168.1.255 scope global dynamic enp3s0
# 3: wlp2s0: <BROADCAST,MULTICAST,UP>
#     inet 192.168.1.150/24 brd 192.168.1.255 scope global dynamic wlp2s0

# Ver apenas IPv4
ip -4 addr

# Ver apenas IPv6
ip -6 addr

# Ver estado das interfaces (ligado/desligado)
ip link
ip l    # atalho

# Ligar/desligar interface
sudo ip link set enp3s0 up
sudo ip link set enp3s0 down

# Ver tabela de rotas
ip route
ip r    # atalho
# default via 192.168.1.1 dev enp3s0 proto dhcp metric 100

# Adicionar rota estática
sudo ip route add 10.0.0.0/8 via 192.168.1.1

# Ver qual rota usa para chegar a um IP
ip route get 8.8.8.8

# Adicionar IP temporário a interface
sudo ip addr add 192.168.1.200/24 dev enp3s0

# Remover IP de interface
sudo ip addr del 192.168.1.200/24 dev enp3s0`}),e.jsx("h2",{children:"nmcli — NetworkManager em Linha de Comando"}),e.jsxs("p",{children:["O ",e.jsx("code",{children:"nmcli"})," é a interface de linha de comando do NetworkManager — o gerenciador de rede padrão do Ubuntu. É mais poderoso para configuração permanente do que o comando",e.jsx("code",{children:"ip"})," (que não persiste reinicializações)."]}),e.jsx(o,{title:"nmcli: gerenciando conexões de rede",code:`# Ver status geral da rede
nmcli general status

# Ver todas as conexões salvas
nmcli connection show

# Ver dispositivos de rede
nmcli device status

# === Wi-Fi ===

# Listar redes Wi-Fi disponíveis
nmcli device wifi list

# Conectar a uma rede Wi-Fi
nmcli device wifi connect "MinhaRede" password "minha-senha"

# Conectar a rede Wi-Fi oculta
nmcli device wifi connect "MinhaRede" password "minha-senha" hidden yes

# Ver redes Wi-Fi salvas
nmcli connection show | grep wifi

# Desconectar Wi-Fi
nmcli device disconnect wlp2s0

# Ligar/desligar Wi-Fi
nmcli radio wifi off
nmcli radio wifi on

# === Ethernet ===

# Configurar IP estático em interface ethernet
nmcli connection modify "Wired connection 1" \\
    ipv4.method manual \\
    ipv4.addresses 192.168.1.100/24 \\
    ipv4.gateway 192.168.1.1 \\
    ipv4.dns "8.8.8.8 8.8.4.4"

# Voltar para DHCP
nmcli connection modify "Wired connection 1" \\
    ipv4.method auto

# Reativar conexão para aplicar mudanças:
nmcli connection down "Wired connection 1"
nmcli connection up "Wired connection 1"

# Criar nova conexão de rede
nmcli connection add type ethernet \\
    con-name "Conexao-Trabalho" \\
    ifname enp3s0 \\
    ip4 10.0.0.100/24 \\
    gw4 10.0.0.1

# Deletar conexão salva
nmcli connection delete "Conexao-Velha"`}),e.jsx("h2",{children:"nmtui — Interface Visual no Terminal"}),e.jsx(o,{title:"Configurar rede com interface visual",code:`# Abrir interface visual do NetworkManager no terminal
nmtui

# Opções disponíveis:
# > Activate a connection   ← Conectar/desconectar redes
# > Edit a connection       ← Editar configurações de IP, DNS, etc.
# > Set system hostname     ← Mudar o nome do computador

# Muito útil em servidores sem interface gráfica!`}),e.jsx("h2",{children:"Diagnóstico de Rede"}),e.jsx(o,{title:"Ferramentas essenciais de diagnóstico",code:`# Testar conectividade básica
ping google.com
ping -c 4 8.8.8.8   # Enviar apenas 4 pacotes

# Testar latência e rota para um destino
traceroute google.com
tracepath google.com  # Alternativa sem precisar de root

# Resolver DNS
nslookup google.com
dig google.com
dig google.com A      # Apenas registros IPv4
dig google.com MX     # Registros de e-mail
host google.com       # Forma simples

# Ver DNS configurado
cat /etc/resolv.conf
nmcli device show | grep DNS

# Testar conectividade HTTP
curl -I https://google.com    # Ver apenas cabeçalhos HTTP
curl -o /dev/null -s -w "%{http_code}" https://google.com  # Ver código HTTP

# Ver rota completa com latência
mtr google.com   # sudo apt install mtr

# Descobrir IP público
curl ifconfig.me
curl ipinfo.io
curl icanhazip.com`}),e.jsx("h2",{children:"ss e netstat — Conexões e Portas"}),e.jsx(o,{title:"Monitorar portas e conexões ativas",code:`# ss é o substituto moderno do netstat

# Ver todas as conexões TCP ativas
ss -t

# Ver portas em escuta (serviços rodando)
ss -tlnp

# Explicação das flags:
# -t = TCP
# -u = UDP
# -l = listening (apenas portas em escuta)
# -n = mostrar números ao invés de nomes
# -p = mostrar processo/PID

# Ver conexões UDP
ss -ulnp

# Ver tudo: TCP + UDP
ss -tlunp

# Ver conexões de um programa específico
ss -p | grep nginx

# Verificar se uma porta está em uso
ss -tlnp | grep :80
ss -tlnp | grep :22
ss -tlnp | grep :3306    # MySQL

# Instalar e usar netstat (legado mas ainda útil):
sudo apt install net-tools
netstat -tlnp             # Mesma info que ss -tlnp
netstat -an | grep :80   # Ver conexões na porta 80`}),e.jsxs(a,{type:"info",title:"Ubuntu e /etc/hosts",children:["O arquivo ",e.jsx("code",{children:"/etc/hosts"})," mapeia nomes para IPs localmente, antes de consultar o DNS. Útil para desenvolvimento local: adicione ",e.jsx("code",{children:"127.0.0.1 meu-projeto.local"}),"e acesse seu servidor local por nome no navegador."]}),e.jsx("h2",{children:"Configurando DNS Personalizado"}),e.jsx(o,{title:"Mudar servidores DNS no Ubuntu",code:`# No Ubuntu 18.04+, systemd-resolved gerencia o DNS
# Ver DNS em uso:
resolvectl status
systemd-resolve --status | grep "DNS Servers"

# Mudar DNS via nmcli (permanente):
nmcli connection modify "Wired connection 1" \\
    ipv4.dns "1.1.1.1 1.0.0.1"  # Cloudflare
    # ou
    ipv4.dns "8.8.8.8 8.8.4.4"  # Google
    # ou
    ipv4.dns "9.9.9.9 149.112.112.112"  # Quad9

# Aplicar mudanças:
nmcli connection up "Wired connection 1"

# Verificar resolução DNS:
nslookup google.com 8.8.8.8   # Testar com DNS específico
dig @1.1.1.1 google.com       # Testar com Cloudflare`}),e.jsx("h2",{children:"nmap — Escaner de Rede"}),e.jsx(o,{title:"Descobrindo dispositivos e serviços na rede",code:`# Instalar nmap
sudo apt install nmap

# Escanear um host
nmap 192.168.1.1

# Descobrir todos os dispositivos na rede local
nmap -sn 192.168.1.0/24
# Hosts na rede: lista de IPs e MACs

# Escanear portas de um servidor
nmap -p 22,80,443,3306 192.168.1.10

# Escanear todas as portas (mais lento)
nmap -p- 192.168.1.10

# Detectar serviços e versões
nmap -sV 192.168.1.10

# Escanear seu próprio IP para ver o que está exposto
nmap localhost
nmap $(hostname -I | awk '{print $1}')`}),e.jsx("h2",{children:"Firewall UFW e Conectividade"}),e.jsx(o,{title:"Verificar e ajustar firewall",code:`# Ver regras do firewall (afeta conectividade)
sudo ufw status verbose

# Ver log de bloqueios (para diagnosticar problemas)
sudo tail -f /var/log/ufw.log

# Verificar se UFW está bloqueando uma porta
sudo ufw status numbered | grep 80

# Abrir porta temporariamente para diagnóstico
sudo ufw allow 8080/tcp

# Verificar se iptables tem regras (UFW usa iptables por baixo)
sudo iptables -L -n -v | head -30`})]})}export{d as default};

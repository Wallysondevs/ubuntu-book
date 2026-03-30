import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function VPN() {
  return (
    <PageContainer
      title="VPN — WireGuard e OpenVPN"
      subtitle="Configure VPNs no Ubuntu para privacidade e acesso remoto seguro: WireGuard (moderno) e OpenVPN (clássico)."
      difficulty="avancado"
      timeToRead="25 min"
    >
      <p>
        VPNs (Virtual Private Networks) criam túneis criptografados para proteger
        a comunicação ou conectar redes remotas com segurança.
        <strong>WireGuard</strong> é a opção moderna, rápida e simples.
        <strong>OpenVPN</strong> é o padrão consolidado há décadas.
      </p>

      <h2>1. WireGuard — VPN Moderna</h2>
      <AlertBox type="success">
        WireGuard é integrado ao kernel Linux 5.6+, mais rápido que OpenVPN
        e com configuração muito mais simples.
      </AlertBox>
      <CodeBlock title="Configurando WireGuard como cliente" code={`# Instalar WireGuard:
sudo apt install wireguard

# Gerar par de chaves:
cd /etc/wireguard
sudo wg genkey | tee privkey | wg pubkey > pubkey
sudo chmod 600 /etc/wireguard/privkey

# Ver as chaves geradas:
sudo cat /etc/wireguard/privkey    # Chave privada (NUNCA compartilhe!)
sudo cat /etc/wireguard/pubkey     # Chave pública (compartilhe com o servidor)

# Criar arquivo de configuração do cliente:
sudo nano /etc/wireguard/wg0.conf

# Conteúdo do wg0.conf (cliente):
[Interface]
PrivateKey = CHAVE_PRIVADA_DO_CLIENTE
Address = 10.0.0.2/24           # IP do cliente na VPN
DNS = 1.1.1.1                   # DNS a usar quando conectado

[Peer]
PublicKey = CHAVE_PUBLICA_DO_SERVIDOR
AllowedIPs = 0.0.0.0/0          # Rotear TODO o tráfego pela VPN
Endpoint = 185.100.50.10:51820  # IP:porta do servidor VPN
PersistentKeepalive = 25        # Manter conexão ativa

# Conectar:
sudo wg-quick up wg0

# Verificar:
sudo wg show
ip addr show wg0

# Desconectar:
sudo wg-quick down wg0

# Conectar automaticamente no boot:
sudo systemctl enable wg-quick@wg0`} />

      <h2>2. WireGuard como Servidor</h2>
      <CodeBlock title="Servidor WireGuard no Ubuntu Server" code={`# 1. Instalar e gerar chaves do servidor:
sudo apt install wireguard
cd /etc/wireguard
sudo wg genkey | tee server-privkey | wg pubkey > server-pubkey

# 2. Criar config do servidor:
sudo nano /etc/wireguard/wg0.conf

[Interface]
PrivateKey = CHAVE_PRIVADA_DO_SERVIDOR
Address = 10.0.0.1/24
ListenPort = 51820
PostUp = iptables -A FORWARD -i %i -j ACCEPT; iptables -t nat -A POSTROUTING -o ens33 -j MASQUERADE
PostDown = iptables -D FORWARD -i %i -j ACCEPT; iptables -t nat -D POSTROUTING -o ens33 -j MASQUERADE

[Peer]                          # Adicione um [Peer] para cada cliente
PublicKey = CHAVE_PUBLICA_CLIENTE1
AllowedIPs = 10.0.0.2/32       # IP reservado para este cliente

# 3. Habilitar IP forwarding:
sudo sysctl -w net.ipv4.ip_forward=1
echo "net.ipv4.ip_forward = 1" | sudo tee /etc/sysctl.d/99-wireguard.conf

# 4. Iniciar o servidor:
sudo wg-quick up wg0
sudo systemctl enable wg-quick@wg0`} />

      <h2>3. OpenVPN — Cliente</h2>
      <CodeBlock title="Conectar a VPN OpenVPN" code={`# Instalar OpenVPN:
sudo apt install openvpn network-manager-openvpn-gnome

# Conectar com arquivo .ovpn (fornecido pelo servidor/provedor):
sudo openvpn --config minha-vpn.ovpn

# Importar no NetworkManager (modo gráfico):
# Configurações → Rede → VPN → + → Importar de arquivo

# Conectar pelo terminal:
nmcli connection import type openvpn file minha-vpn.ovpn
nmcli connection up minha-vpn

# Via linha de comando com auth:
sudo openvpn --config minha-vpn.ovpn --auth-user-pass credenciais.txt
# credenciais.txt: linha 1 = usuário, linha 2 = senha

# Verificar conexão VPN ativa:
ip addr show tun0    # Interface criada pelo OpenVPN
curl ifconfig.me     # Verificar IP público (deve ser o IP da VPN)`} />
    </PageContainer>
  );
}

import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function Netplan() {
  return (
    <PageContainer
      title="Netplan — Configuração de Rede"
      subtitle="Configure interfaces de rede, IP estático, WiFi e bonding no Ubuntu Server com Netplan."
      difficulty="intermediario"
      timeToRead="18 min"
    >
      <p>
        O <strong>Netplan</strong> é a ferramenta de configuração de rede padrão no
        Ubuntu desde a versão 17.10. Usa arquivos YAML e suporta NetworkManager (desktop)
        e systemd-networkd (servidor).
      </p>

      <h2>1. Estrutura do Netplan</h2>
      <CodeBlock title="Arquivos de configuração do Netplan" code={`# Localização dos arquivos Netplan:
ls /etc/netplan/
# Exemplo: 01-netcfg.yaml, 00-installer-config.yaml

# Ver configuração atual:
cat /etc/netplan/01-netcfg.yaml

# FORMATO YAML — indentação é CRÍTICA (use espaços, nunca tabs!)

# Aplicar configuração:
sudo netplan apply

# Testar sem aplicar (reverte após 120 segundos se der problema):
sudo netplan try`} />

      <h2>2. Configurando IP Estático</h2>
      <AlertBox type="warning">
        A indentação YAML é crucial. Use 2 espaços por nível, nunca tabs.
      </AlertBox>
      <CodeBlock title="IP estático para servidor Ubuntu" code={`# Editar o arquivo netplan:
sudo nano /etc/netplan/01-netcfg.yaml

# Configuração de IP estático para Ethernet:
network:
  version: 2
  renderer: networkd    # Use 'NetworkManager' no desktop
  ethernets:
    ens33:              # Nome da interface (ver com: ip link show)
      dhcp4: false      # Desabilitar DHCP
      addresses:
        - 192.168.1.100/24     # IP/Máscara
      routes:
        - to: default
          via: 192.168.1.1    # Gateway
      nameservers:
        addresses:
          - 8.8.8.8            # DNS primário
          - 8.8.4.4            # DNS secundário
        search:
          - minha-rede.local   # Domínio de busca (opcional)

# Aplicar:
sudo netplan apply

# Verificar:
ip addr show ens33
ip route show`} />

      <CodeBlock title="Configuração com DHCP (automático)" code={`# IP via DHCP (padrão para desktop):
network:
  version: 2
  renderer: NetworkManager
  ethernets:
    ens33:
      dhcp4: true
      dhcp6: false
  wifis:
    wlp2s0:
      dhcp4: true
      access-points:
        "Nome-da-Rede-WiFi":
          password: "senha-do-wifi"`} />

      <h2>3. Múltiplas Interfaces e Bonding</h2>
      <CodeBlock title="Configurações avançadas de rede" code={`# DUAS interfaces com IPs diferentes:
network:
  version: 2
  ethernets:
    ens33:
      dhcp4: false
      addresses: [192.168.1.100/24]
      routes:
        - to: default
          via: 192.168.1.1
      nameservers:
        addresses: [8.8.8.8]
    ens38:
      dhcp4: false
      addresses: [10.0.0.1/24]
      # Interface só para rede interna, sem gateway

# BONDING (failover / balanceamento de carga):
network:
  version: 2
  bonds:
    bond0:
      interfaces: [ens33, ens38]
      addresses: [192.168.1.100/24]
      routes:
        - to: default
          via: 192.168.1.1
      parameters:
        mode: active-backup     # failover
        # mode: 802.3ad        # LACP (bonding ativo-ativo)
        primary: ens33
      nameservers:
        addresses: [8.8.8.8]`} />

      <h2>4. Diagnóstico de Rede</h2>
      <CodeBlock title="Comandos de diagnóstico pós-configuração" code={`# Ver interfaces e IPs:
ip addr show           # ou: ip a
ip link show           # Ver estado das interfaces (UP/DOWN)

# Ver rotas:
ip route show          # ou: ip r
ip route get 8.8.8.8   # Ver qual rota usa para chegar ao IP

# Testar conectividade:
ping -c 4 google.com
ping -c 4 8.8.8.8

# Testar resolução DNS:
nslookup google.com
dig google.com

# Ver configurações do NetworkManager:
nmcli device show
nmcli connection show

# Reiniciar networking:
sudo systemctl restart systemd-networkd
sudo systemctl restart NetworkManager`} />
    </PageContainer>
  );
}

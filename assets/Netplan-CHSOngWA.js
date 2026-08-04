import{j as e}from"./index-_kFPLDpE.js";import{P as a}from"./PageContainer-eafNNqkI.js";import{C as r}from"./CodeBlock-ByIkwE54.js";import{A as s}from"./AlertBox-NzOB7YP7.js";function d(){return e.jsxs(a,{title:"Netplan — Configuração de Rede",subtitle:"Guia completo do Netplan no Ubuntu: configurar IP fixo, DHCP, Wi-Fi, bridges, bonds, VLANs e rotas estáticas.",difficulty:"intermediario",timeToRead:"25 min",children:[e.jsxs(s,{type:"info",title:"Pré-requisitos",children:["Ubuntu 18.04+ (Netplan substituiu o ifupdown). ",e.jsx("code",{children:"sudo"}),". Útil ter visto ",e.jsx("a",{href:"#/redes",children:"Redes"}),"."]}),e.jsx("h2",{children:"Glossário rápido"}),e.jsxs("p",{children:[e.jsx("strong",{children:"Netplan"})," — renderer YAML que gera configs para NetworkManager (Desktop) ou networkd (Server)."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"/etc/netplan/*.yaml"})," — configs declarativas. Indentação importa (YAML)."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"netplan apply"})," — aplica a config. ",e.jsx("code",{children:"netplan try"})," testa e desfaz se você não confirmar."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Renderer"})," — quem realmente aplica: ",e.jsx("code",{children:"NetworkManager"})," no Desktop, ",e.jsx("code",{children:"networkd"})," no Server."]}),e.jsxs("p",{children:["O ",e.jsx("strong",{children:"Netplan"})," é o sistema de configuração de rede padrão do Ubuntu desde a versão 17.10. Ele usa arquivos YAML declarativos para definir a configuração de rede, que é então aplicada pelo ",e.jsx("strong",{children:"NetworkManager"})," (desktop) ou",e.jsx("strong",{children:"systemd-networkd"})," (servidor)."]}),e.jsx("h2",{children:"1. Entender o Netplan"}),e.jsx(r,{title:"Estrutura e arquivos do Netplan",code:`# Arquivos de configuração
  ls /etc/netplan/
  # Saída: 01-network-manager-all.yaml (desktop)
  # Ou:    01-netcfg.yaml (servidor)

  # Ver configuração atual
  cat /etc/netplan/*.yaml

  # Identificar interfaces de rede
  ip link show
  # Saída:
  # 1: lo: <LOOPBACK,...>   ← loopback (localhost)
  # 2: enp0s3: <BROADCAST,...>  ← Ethernet (en=ethernet, p0s3=PCI)
  # 3: wlp2s0: <BROADCAST,...>  ← Wi-Fi (wl=wireless)

  # Ver IPs atuais
  ip addr show
  hostname -I    # Apenas os IPs

  # Renderer (backend):
  # NetworkManager → desktop (GNOME, interface gráfica)
  # systemd-networkd → servidor (sem GUI)

  # Aplicar mudanças
  sudo netplan apply

  # Testar mudanças sem aplicar permanentemente
  sudo netplan try
  # Aplica por 120 segundos, depois reverte se não confirmar
  # Útil para evitar perder acesso ao servidor!`}),e.jsx("h2",{children:"2. Configurar IP Fixo"}),e.jsx(r,{title:"IP estático para servidor",code:`# Editar (ou criar) o arquivo de configuração
  sudo nano /etc/netplan/01-netcfg.yaml

  # Conteúdo para IP fixo:
  network:
    version: 2
    renderer: networkd    # ou: NetworkManager
    ethernets:
      enp0s3:
        dhcp4: false
        addresses:
          - 192.168.1.100/24
        routes:
          - to: default
            via: 192.168.1.1
        nameservers:
          addresses:
            - 8.8.8.8
            - 1.1.1.1
          search:
            - meudominio.local

  # Aplicar
  sudo netplan apply

  # Verificar
  ip addr show enp0s3
  ip route show
  resolvectl status`}),e.jsx("h2",{children:"3. Configurar DHCP"}),e.jsx(r,{title:"IP automático via DHCP",code:`# Configuração DHCP simples
  network:
    version: 2
    renderer: networkd
    ethernets:
      enp0s3:
        dhcp4: true

  # DHCP com DNS fixo
  network:
    version: 2
    ethernets:
      enp0s3:
        dhcp4: true
        dhcp4-overrides:
          use-dns: false
        nameservers:
          addresses:
            - 1.1.1.1
            - 8.8.8.8

  # Múltiplas interfaces
  network:
    version: 2
    ethernets:
      enp0s3:
        dhcp4: true
      enp0s8:
        addresses:
          - 10.0.0.100/24`}),e.jsx("h2",{children:"4. Configurar Wi-Fi"}),e.jsx(r,{title:"Conectar a redes Wi-Fi via Netplan",code:`# Wi-Fi com WPA2 (mais comum)
  network:
    version: 2
    renderer: NetworkManager
    wifis:
      wlp2s0:
        dhcp4: true
        access-points:
          "Nome-da-Rede":
            password: "SenhaDoWiFi"

  # Wi-Fi com IP fixo
  network:
    version: 2
    renderer: NetworkManager
    wifis:
      wlp2s0:
        dhcp4: false
        addresses:
          - 192.168.1.50/24
        routes:
          - to: default
            via: 192.168.1.1
        nameservers:
          addresses: [8.8.8.8, 1.1.1.1]
        access-points:
          "MinhaRede":
            password: "SenhaSegura"

  # Proteger o arquivo (contém senha Wi-Fi!)
  sudo chmod 600 /etc/netplan/*.yaml

  # Múltiplas redes (prioridade)
  network:
    version: 2
    wifis:
      wlp2s0:
        dhcp4: true
        access-points:
          "Casa":
            password: "senha1"
          "Trabalho":
            password: "senha2"

  sudo netplan apply`}),e.jsx("h2",{children:"5. Bridges, Bonds e VLANs"}),e.jsx(r,{title:"Configurações avançadas de rede",code:`# === BRIDGE (para KVM, containers) ===
  network:
    version: 2
    ethernets:
      enp0s3:
        dhcp4: false
    bridges:
      br0:
        interfaces: [enp0s3]
        dhcp4: true
        # Ou IP fixo:
        # addresses: [192.168.1.100/24]
        # routes:
        #   - to: default
        #     via: 192.168.1.1

  # === BOND (agregação de links — redundância) ===
  network:
    version: 2
    ethernets:
      enp0s3: {}
      enp0s8: {}
    bonds:
      bond0:
        interfaces: [enp0s3, enp0s8]
        addresses: [192.168.1.100/24]
        routes:
          - to: default
            via: 192.168.1.1
        parameters:
          mode: 802.3ad       # LACP
          # Modos: balance-rr, active-backup, 802.3ad, balance-tlb

  # === VLAN ===
  network:
    version: 2
    ethernets:
      enp0s3:
        dhcp4: true
    vlans:
      vlan100:
        id: 100
        link: enp0s3
        addresses: [10.100.0.10/24]

  sudo netplan apply`}),e.jsx("h2",{children:"Troubleshooting"}),e.jsx(r,{title:"Problemas comuns com Netplan",code:`# Erro de YAML (indentação)
  # YAML é sensível a espaços! Use 2 espaços, NUNCA tabs
  # Validar antes de aplicar:
  sudo netplan generate    # Verifica sintaxe

  # Testar sem risco (reverte em 120s)
  sudo netplan try

  # Perdi acesso ao servidor após mudar IP
  # Se usou 'netplan try': espere 120s, reverte automaticamente
  # Se usou 'netplan apply': acesse via console do provedor

  # Rede não funciona após netplan apply
  # Verificar logs:
  journalctl -u systemd-networkd -f
  # Ou:
  journalctl -u NetworkManager -f

  # Interface não recebe IP via DHCP
  sudo dhclient enp0s3    # Forçar DHCP manualmente
  # Verificar se o cabo está conectado:
  ip link show enp0s3     # UP = conectado

  # Voltar para configuração padrão DHCP
  sudo tee /etc/netplan/01-netcfg.yaml > /dev/null << 'EOF'
  network:
    version: 2
    ethernets:
      enp0s3:
        dhcp4: true
  EOF
  sudo netplan apply

  # DNS não funciona
  resolvectl status
  # Verificar nameservers no netplan`}),e.jsxs(s,{type:"warning",title:"Cuidado ao configurar rede em servidores remotos",children:["Se você está configurando um servidor remoto via SSH, sempre use ",e.jsx("code",{children:"netplan try"}),"ao invés de ",e.jsx("code",{children:"netplan apply"}),". Se a configuração estiver errada, o",e.jsx("code",{children:"netplan try"})," reverte automaticamente após 120 segundos, salvando você de ficar bloqueado fora do servidor."]})]})}export{d as default};

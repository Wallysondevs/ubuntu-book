import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function CloudInit() {
  return (
    <PageContainer
      title="Ubuntu Server e Cloud"
      subtitle="Configure Ubuntu Server para cloud computing: cloud-init, AWS, hardening e provisionamento automático."
      difficulty="avancado"
      timeToRead="22 min"
    >
      <p>
        O <strong>Ubuntu Server</strong> é a distribuição mais usada em cloud computing,
        com suporte nativo a AWS, Azure, GCP e outros. O <strong>cloud-init</strong>
        automatiza a configuração na primeira inicialização.
      </p>

      <h2>1. Ubuntu Server — Diferenças do Desktop</h2>
      <CodeBlock title="Configurações específicas do Ubuntu Server" code={`# Ubuntu Server não tem interface gráfica por padrão
# Gerenciamento via SSH

# Verificar versão:
lsb_release -a
uname -r

# Atualização sem reinicializar (Livepatch):
sudo snap install canonical-livepatch
sudo canonical-livepatch enable TOKEN

# Gerenciar landscape (monitoramento Canonical):
sudo apt install landscape-client

# Ubuntu Pro (segurança estendida):
sudo pro attach CHAVE-PRO   # Para assinantes Ubuntu Pro
sudo pro status

# Desabilitar serviços desnecessários em servidor:
sudo systemctl disable bluetooth
sudo systemctl disable avahi-daemon
sudo systemctl disable cups       # Impressão`} />

      <h2>2. cloud-init — Provisionamento Automático</h2>
      <CodeBlock title="Arquivo cloud-config para inicialização automática" code={`# cloud-init processa /etc/cloud/cloud.cfg na primeira boot
# Em provedores cloud, o user-data é passado ao criar a VM

# Exemplo de cloud-config (user-data):
#cloud-config
hostname: meu-servidor

users:
  - name: deploy
    groups: sudo
    shell: /bin/bash
    sudo: ['ALL=(ALL) NOPASSWD:ALL']
    ssh_authorized_keys:
      - ssh-rsa AAAA... minha-chave-publica

packages:
  - nginx
  - mysql-server
  - git
  - fail2ban
  - ufw

package_update: true
package_upgrade: true

write_files:
  - path: /etc/nginx/sites-available/meuapp
    content: |
      server {
        listen 80;
        server_name meuapp.com;
        location / { proxy_pass http://localhost:3000; }
      }

runcmd:
  - ln -s /etc/nginx/sites-available/meuapp /etc/nginx/sites-enabled/
  - systemctl restart nginx
  - ufw allow 'Nginx Full'
  - ufw allow ssh
  - ufw --force enable

final_message: "Servidor configurado em \$UPTIME segundos"`} />

      <h2>3. Hardening do Ubuntu Server</h2>
      <CodeBlock title="Checklist de segurança para servidor" code={`# 1. Atualizações automáticas de segurança:
sudo apt install unattended-upgrades
sudo dpkg-reconfigure -plow unattended-upgrades

# 2. SSH seguro:
sudo nano /etc/ssh/sshd_config
# PermitRootLogin no           # Não logar como root
# PasswordAuthentication no    # Apenas chaves SSH
# X11Forwarding no             # Sem reencaminhamento gráfico
# MaxAuthTries 3               # Máximo 3 tentativas
sudo systemctl restart ssh

# 3. Firewall:
sudo ufw default deny incoming
sudo ufw default allow outgoing
sudo ufw allow ssh
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
sudo ufw enable

# 4. Fail2Ban (ver página específica)

# 5. Verificar portas abertas:
sudo ss -tulpn
sudo netstat -tulpn

# 6. Auditoria com Lynis:
sudo apt install lynis
sudo lynis audit system      # Relatório completo de segurança

# 7. Desabilitar IPv6 se não usar:
echo "net.ipv6.conf.all.disable_ipv6 = 1" | sudo tee /etc/sysctl.d/99-disable-ipv6.conf
sudo sysctl -p /etc/sysctl.d/99-disable-ipv6.conf`} />
    </PageContainer>
  );
}

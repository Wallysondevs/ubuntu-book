import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function Ansible() {
  return (
    <PageContainer
      title="Ansible — Automação de Infraestrutura"
      subtitle="Use Ansible para automatizar configuração e provisionamento de servidores Ubuntu."
      difficulty="avancado"
      timeToRead="20 min"
    >
      <p>
        O <strong>Ansible</strong> é uma ferramenta de automação que permite configurar
        múltiplos servidores de forma declarativa, sem instalar nada nos servidores
        gerenciados (apenas SSH é necessário).
      </p>

      <h2>1. Instalação e Configuração</h2>
      <CodeBlock title="Instalando Ansible no Ubuntu" code={`# Instalar Ansible:
sudo apt install ansible

# Ou via pip (versão mais recente):
pip3 install ansible

# Verificar:
ansible --version

# Configuração básica:
mkdir ~/ansible && cd ~/ansible

# Arquivo de hosts (inventory):
cat > inventory.ini << 'EOF'
[webservers]
web1 ansible_host=192.168.1.10
web2 ansible_host=192.168.1.11

[dbservers]
db1 ansible_host=192.168.1.20

[all:vars]
ansible_user=ubuntu
ansible_ssh_private_key_file=~/.ssh/id_rsa
EOF`} />

      <h2>2. Comandos Ad-Hoc</h2>
      <CodeBlock title="Executar comandos sem playbook" code={`# Verificar conectividade:
ansible all -i inventory.ini -m ping

# Executar comando em todos os servidores:
ansible all -i inventory.ini -m command -a "uptime"
ansible webservers -i inventory.ini -m command -a "nginx -v"

# Instalar pacote em todos:
ansible all -i inventory.ini -m apt -a "name=nginx state=present" --become

# Ver informações do servidor:
ansible web1 -i inventory.ini -m setup`} />

      <h2>3. Playbooks</h2>
      <CodeBlock title="Criando um playbook de configuração de servidor" code={`# setup-web.yml — configurar servidor web:
cat > setup-web.yml << 'EOF'
---
- name: Configurar servidor web
  hosts: webservers
  become: true      # Usar sudo

  vars:
    server_name: meusite.com

  tasks:
    - name: Atualizar apt cache
      apt:
        update_cache: yes
        cache_valid_time: 3600

    - name: Instalar Nginx
      apt:
        name: nginx
        state: present

    - name: Iniciar e habilitar Nginx
      service:
        name: nginx
        state: started
        enabled: yes

    - name: Copiar configuração do site
      template:
        src: templates/nginx.conf.j2
        dest: /etc/nginx/sites-available/\{{ server_name }}
      notify: Recarregar Nginx

    - name: Ativar site
      file:
        src: /etc/nginx/sites-available/\{{ server_name }}
        dest: /etc/nginx/sites-enabled/\{{ server_name }}
        state: link
      notify: Recarregar Nginx

  handlers:
    - name: Recarregar Nginx
      service:
        name: nginx
        state: reloaded
EOF

# Executar o playbook:
ansible-playbook -i inventory.ini setup-web.yml

# Testar sem executar (dry-run):
ansible-playbook -i inventory.ini setup-web.yml --check`} />
    </PageContainer>
  );
}

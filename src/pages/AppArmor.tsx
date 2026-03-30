import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function AppArmor() {
  return (
    <PageContainer
      title="AppArmor — Controle de Acesso Mandatório"
      subtitle="O AppArmor confina programas e limita o que eles podem acessar — camada essencial de segurança do Ubuntu."
      difficulty="avancado"
      timeToRead="20 min"
    >
      <p>
        O <strong>AppArmor</strong> (Application Armor) é um módulo de segurança do
        kernel Linux que restringe programas através de <em>perfis</em>, limitando quais
        arquivos, redes e capacidades cada programa pode acessar.
      </p>

      <h2>1. Verificando o AppArmor</h2>
      <CodeBlock title="Status e perfis do AppArmor" code={`# Ver status do AppArmor:
sudo aa-status
sudo apparmor_status

# Saída mostra:
# - Perfis em modo "enforce" (bloqueiam ações proibidas)
# - Perfis em modo "complain" (apenas registram, não bloqueiam)
# - Processos confinados

# Ver perfis disponíveis:
ls /etc/apparmor.d/

# Carregar todos os perfis:
sudo systemctl reload apparmor
sudo systemctl status apparmor`} />

      <h2>2. Modos de Perfil</h2>
      <CodeBlock title="Enforce, complain e disable" code={`# Modo ENFORCE — bloqueia ações não permitidas (padrão):
sudo aa-enforce /etc/apparmor.d/usr.sbin.nginx

# Modo COMPLAIN — apenas registra (para debugging):
sudo aa-complain /etc/apparmor.d/usr.sbin.nginx

# Desabilitar um perfil:
sudo aa-disable /etc/apparmor.d/usr.sbin.nginx

# Carregar um perfil específico:
sudo apparmor_parser -r /etc/apparmor.d/usr.sbin.nginx

# Logs do AppArmor (acessos negados):
sudo journalctl | grep -i apparmor
sudo dmesg | grep -i apparmor
sudo grep -i apparmor /var/log/kern.log | tail -20`} />

      <h2>3. Criando Perfis com aa-genprof</h2>
      <AlertBox type="info">
        O <code>aa-genprof</code> gera um perfil automaticamente executando o programa
        e observando o que ele acessa.
      </AlertBox>
      <CodeBlock title="Gerando perfil automaticamente" code={`# Instalar ferramentas de criação de perfis:
sudo apt install apparmor-utils

# Gerar perfil para um programa:
sudo aa-genprof /usr/bin/meu-programa

# 1. Abra outro terminal e execute o programa
# 2. Volte ao aa-genprof e pressione (S) para Scan
# 3. Para cada acesso: (A)llow, (D)eny, (I)gnore
# 4. Pressione (F) para Finish

# Após gerar, testar em modo complain:
sudo aa-complain /etc/apparmor.d/usr.bin.meu-programa

# Ver logs de o que está sendo acessado:
sudo aa-logprof    # Interativo, atualiza o perfil baseado nos logs`} />

      <h2>4. Exemplos de Perfil AppArmor</h2>
      <CodeBlock title="Estrutura de um perfil AppArmor" code={`# Exemplo simplificado de perfil para um servidor web:
# /etc/apparmor.d/usr.sbin.nginx

#include <tunables/global>

/usr/sbin/nginx {
    #include <abstractions/base>
    #include <abstractions/nameservice>

    capability net_bind_service,    # Pode escutar em portas < 1024
    capability setuid,
    capability setgid,

    /var/www/html/** r,             # Leitura em /var/www/html
    /var/log/nginx/** rw,           # Leitura/escrita em logs
    /etc/nginx/** r,                # Leitura da configuração
    /run/nginx.pid rw,              # PID file

    /tmp/** rw,                     # Diretório temporário

    network tcp,                    # Acesso TCP
}

# Carregar o perfil:
sudo apparmor_parser -r /etc/apparmor.d/usr.sbin.nginx`} />
    </PageContainer>
  );
}

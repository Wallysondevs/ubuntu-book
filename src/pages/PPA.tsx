import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function PPA() {
  return (
    <PageContainer
      title="PPAs — Personal Package Archives"
      subtitle="Como usar PPAs para instalar versões mais recentes de softwares no Ubuntu."
      difficulty="intermediario"
      timeToRead="15 min"
    >
      <p>
        <strong>PPAs</strong> (Personal Package Archives) são repositórios adicionais
        hospedados no Launchpad (plataforma da Canonical). Permitem instalar versões
        mais novas de programas ou softwares que não estão nos repositórios oficiais.
      </p>

      <AlertBox type="warning">
        PPAs são mantidos por terceiros — nem sempre são seguros ou estáveis.
        Use apenas PPAs confiáveis de desenvolvedores conhecidos.
      </AlertBox>

      <h2>1. Adicionando e Removendo PPAs</h2>
      <CodeBlock title="Gerenciando PPAs no Ubuntu" code={`# Adicionar um PPA:
sudo add-apt-repository ppa:nome-usuario/nome-ppa
sudo apt update
sudo apt install nome-do-pacote

# Exemplos de PPAs populares e confiáveis:
# Git mais recente:
sudo add-apt-repository ppa:git-core/ppa
sudo apt update && sudo apt install git

# Inkscape (mais recente):
sudo add-apt-repository ppa:inkscape.dev/stable

# GIMP mais recente:
sudo add-apt-repository ppa:otto-kesselgulasch/gimp

# LibreOffice mais recente:
sudo add-apt-repository ppa:libreoffice/ppa

# Ver PPAs instalados:
ls /etc/apt/sources.list.d/ | grep -v ".save"

# Remover um PPA:
sudo add-apt-repository --remove ppa:nome-usuario/nome-ppa
sudo apt update

# Remover PPA e fazer downgrade do pacote:
sudo apt install ppa-purge
sudo ppa-purge ppa:nome-usuario/nome-ppa`} />

      <h2>2. Instalando Softwares via Repositórios Externos</h2>
      <CodeBlock title="Repositórios de terceiros com chave GPG" code={`# Padrão moderno (Ubuntu 22.04+) — usando keyring em /usr/share/keyrings/

# 1. VS Code (Microsoft):
wget -qO- https://packages.microsoft.com/keys/microsoft.asc | \
    gpg --dearmor | \
    sudo tee /usr/share/keyrings/microsoft.gpg > /dev/null

echo "deb [arch=amd64 signed-by=/usr/share/keyrings/microsoft.gpg] \
    https://packages.microsoft.com/repos/code stable main" | \
    sudo tee /etc/apt/sources.list.d/vscode.list

sudo apt update && sudo apt install code

# 2. Node.js (Nodesource):
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install nodejs

# 3. Docker:
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | \
    sudo gpg --dearmor -o /usr/share/keyrings/docker.gpg

echo "deb [arch=amd64 signed-by=/usr/share/keyrings/docker.gpg] \
    https://download.docker.com/linux/ubuntu \$(lsb_release -cs) stable" | \
    sudo tee /etc/apt/sources.list.d/docker.list

sudo apt update && sudo apt install docker-ce docker-ce-cli containerd.io`} />

      <h2>3. Gerenciando Prioridades de Pacotes (Pinning)</h2>
      <CodeBlock title="apt pinning — controlar qual versão instalar" code={`# Ver versões disponíveis de um pacote:
apt-cache policy nginx
apt-cache policy python3

# Instalar versão específica:
sudo apt install nginx=1.18.0-0ubuntu1

# Bloquear atualização de um pacote (hold):
sudo apt-mark hold firefox        # Não atualizar firefox automaticamente
sudo apt-mark unhold firefox      # Liberar atualização

# Ver pacotes em hold:
sudo apt-mark showhold
dpkg -l | grep "^hi"             # hi = hold, installed

# Criar arquivo de pinning para controle fino:
sudo nano /etc/apt/preferences.d/meu-pin
# Conteúdo:
# Package: nome-pacote
# Pin: release a=stable
# Pin-Priority: 1001`} />
    </PageContainer>
  );
}

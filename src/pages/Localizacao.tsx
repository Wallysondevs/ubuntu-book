import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function Localizacao() {
  return (
    <PageContainer
      title="Locale, Idioma e Fuso Horário"
      subtitle="Configurar o idioma do sistema, locale, teclado e fuso horário no Ubuntu."
      difficulty="iniciante"
      timeToRead="12 min"
    >
      <p>
        O <strong>locale</strong> define como o sistema exibe informações regionais:
        idioma, formato de data, moeda, caracteres especiais. O <strong>fuso horário</strong>
        garante que o relógio do sistema esteja correto.
      </p>

      <h2>1. Verificando Configurações Atuais</h2>
      <CodeBlock title="Ver configurações de locale e timezone" code={`# Ver locale atual:
locale
# Saída:
# LANG=pt_BR.UTF-8
# LANGUAGE=pt_BR:pt:en
# LC_ALL=

# Ver fuso horário:
timedatectl
timedatectl show

# Ver hora atual:
date
date +"%Y-%m-%d %H:%M:%S"  # Formato personalizado

# Ver locales disponíveis no sistema:
locale -a | grep pt_BR`} />

      <h2>2. Configurando o Fuso Horário</h2>
      <CodeBlock title="Alterando o timezone do sistema" code={`# Listar todos os timezones disponíveis:
timedatectl list-timezones
timedatectl list-timezones | grep -i america
timedatectl list-timezones | grep -i sao_paulo

# Configurar fuso horário:
sudo timedatectl set-timezone America/Sao_Paulo
sudo timedatectl set-timezone America/Manaus
sudo timedatectl set-timezone America/Recife
sudo timedatectl set-timezone UTC

# Verificar:
timedatectl
date

# Sincronização NTP (Network Time Protocol):
sudo timedatectl set-ntp true    # Ativar sincronização automática
sudo systemctl enable systemd-timesyncd
sudo systemctl restart systemd-timesyncd

# Ver status da sincronização:
timedatectl show-timesync`} />

      <h2>3. Configurando o Idioma</h2>
      <CodeBlock title="Alterando o idioma do sistema" code={`# Ver idiomas instalados:
locale -a

# Instalar suporte a idioma (ex: português):
sudo apt install language-pack-pt language-pack-pt-base

# Gerar locales:
sudo locale-gen pt_BR.UTF-8
sudo update-locale LANG=pt_BR.UTF-8

# Configurar via interface (modo gráfico):
# Configurações → Região e Idioma → Idioma do Sistema

# Configurar via dpkg:
sudo dpkg-reconfigure locales
# Selecione pt_BR.UTF-8 e confirme como padrão

# Aplicar (reiniciar sessão ou sistema):
# Logout → Login novamente para ver efeito`} />

      <h2>4. Configurando o Teclado</h2>
      <CodeBlock title="Layout de teclado no Ubuntu" code={`# Ver layout atual:
localectl
setxkbmap -query     # Em sessões gráficas X11

# Listar layouts disponíveis:
localectl list-x11-keymap-layouts | grep -i br

# Configurar teclado (permanente):
sudo localectl set-x11-keymap br           # Brasil ABNT2
sudo localectl set-x11-keymap br abnt2     # ABNT2 explícito
sudo localectl set-x11-keymap us           # EUA padrão

# Configurar apenas para sessão atual (temporário):
setxkbmap br          # Português brasileiro
setxkbmap us          # Inglês americano

# Via dpkg-reconfigure:
sudo dpkg-reconfigure keyboard-configuration

# No modo texto (console, sem GUI):
sudo loadkeys br-abnt2`} />
    </PageContainer>
  );
}

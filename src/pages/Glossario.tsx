import { useMemo, useState } from "react";
import { Link } from "wouter";
import { Search, X } from "lucide-react";
import { PageContainer } from "@/components/layout/PageContainer";
import { AlertBox } from "@/components/ui/AlertBox";

type Grupo =
  | "pacotes"
  | "servicos"
  | "usuarios"
  | "rede"
  | "armazenamento"
  | "virtualizacao"
  | "boot";

interface Termo {
  termo: string;
  grupo: Grupo;
  definicao: string;
  exemplo?: string;
  rota?: string;
}

const GRUPOS: { id: Grupo; nome: string }[] = [
  { id: "pacotes", nome: "Pacotes e reposit\u00f3rios" },
  { id: "servicos", nome: "systemd e servi\u00e7os" },
  { id: "usuarios", nome: "Usu\u00e1rios e permiss\u00f5es" },
  { id: "rede", nome: "Rede" },
  { id: "armazenamento", nome: "Armazenamento" },
  { id: "virtualizacao", nome: "Virtualiza\u00e7\u00e3o e containers" },
  { id: "boot", nome: "Boot, kernel e sistema" },
];

const TERMOS: Termo[] = [
  // ---------------- pacotes ----------------
  { termo: "APT", grupo: "pacotes", definicao: "Gerenciador de pacotes de alto n\u00edvel do Ubuntu. Resolve depend\u00eancias e fala com os reposit\u00f3rios; o dpkg \u00e9 quem instala de fato.", exemplo: "sudo apt install nginx", rota: "/apt" },
  { termo: "dpkg", grupo: "pacotes", definicao: "Ferramenta de baixo n\u00edvel que instala, remove e consulta arquivos .deb. N\u00e3o resolve depend\u00eancias por conta pr\u00f3pria.", exemplo: "sudo dpkg -i pacote.deb", rota: "/dpkg" },
  { termo: ".deb", grupo: "pacotes", definicao: "Formato de pacote do Debian/Ubuntu: um arquivo com os bin\u00e1rios, os metadados e os scripts de instala\u00e7\u00e3o.", exemplo: "dpkg -c pacote.deb", rota: "/dpkg" },
  { termo: "Reposit\u00f3rio", grupo: "pacotes", definicao: "Servidor com pacotes assinados que o APT consulta. O Ubuntu divide em main, universe, restricted e multiverse.", exemplo: "apt policy", rota: "/apt" },
  { termo: "main / universe / restricted / multiverse", grupo: "pacotes", definicao: "Componentes dos reposit\u00f3rios. main tem suporte da Canonical e software livre; universe \u00e9 mantido pela comunidade; restricted tem drivers propriet\u00e1rios; multiverse tem software com licen\u00e7a restritiva.", rota: "/apt" },
  { termo: "PPA", grupo: "pacotes", definicao: "Personal Package Archive: reposit\u00f3rio de terceiros hospedado no Launchpad. \u00d3timo para vers\u00f5es novas, risco real de quebrar upgrades.", exemplo: "sudo add-apt-repository ppa:usuario/ppa", rota: "/ppa" },
  { termo: "sources.list / deb822", grupo: "pacotes", definicao: "Onde ficam as fontes do APT. Do Ubuntu 24.04 em diante o padr\u00e3o \u00e9 o formato deb822 em /etc/apt/sources.list.d/*.sources.", exemplo: "cat /etc/apt/sources.list.d/ubuntu.sources", rota: "/apt" },
  { termo: "Snap", grupo: "pacotes", definicao: "Pacote autocontido da Canonical, com atualiza\u00e7\u00e3o autom\u00e1tica e confinamento. Traz as depend\u00eancias dentro, ent\u00e3o ocupa mais espa\u00e7o.", exemplo: "sudo snap install code --classic", rota: "/snap-flatpak" },
  { termo: "Flatpak", grupo: "pacotes", definicao: "Formato universal de app com sandbox, popular via Flathub. Concorre com o Snap no desktop.", exemplo: "flatpak install flathub org.gimp.GIMP", rota: "/snap-flatpak" },
  { termo: "AppImage", grupo: "pacotes", definicao: "Aplicativo em arquivo \u00fanico execut\u00e1vel, sem instala\u00e7\u00e3o e sem gerenciador. Voc\u00ea mesmo cuida das atualiza\u00e7\u00f5es.", exemplo: "chmod +x App.AppImage && ./App.AppImage", rota: "/appimage" },
  { termo: "Depend\u00eancia", grupo: "pacotes", definicao: "Pacote exigido por outro para funcionar. O APT instala em cadeia; quebrar uma depend\u00eancia \u00e9 a origem cl\u00e1ssica do sistema travado.", exemplo: "apt-cache depends nginx", rota: "/apt" },
  { termo: "upgrade vs full-upgrade", grupo: "pacotes", definicao: "upgrade atualiza o que d\u00e1 sem remover nada; full-upgrade (antigo dist-upgrade) aceita remover pacotes para concluir a atualiza\u00e7\u00e3o.", exemplo: "sudo apt update && sudo apt full-upgrade", rota: "/apt" },
  { termo: "hold", grupo: "pacotes", definicao: "Marca\u00e7\u00e3o que congela a vers\u00e3o de um pacote, impedindo atualiza\u00e7\u00e3o autom\u00e1tica. \u00datil para kernel e banco de dados.", exemplo: "sudo apt-mark hold linux-generic", rota: "/apt" },
  { termo: "unattended-upgrades", grupo: "pacotes", definicao: "Servi\u00e7o que aplica atualiza\u00e7\u00f5es de seguran\u00e7a sozinho. Vem ativo no Ubuntu Server.", exemplo: "sudo dpkg-reconfigure unattended-upgrades", rota: "/unattended-upgrades" },
  { termo: "Ubuntu Pro", grupo: "pacotes", definicao: "Assinatura da Canonical que estende o suporte de seguran\u00e7a a 10 anos e cobre o universe. Gratuita para at\u00e9 5 m\u00e1quinas pessoais.", exemplo: "sudo pro status", rota: "/ubuntu-pro" },
  { termo: "Livepatch", grupo: "pacotes", definicao: "Aplica corre\u00e7\u00f5es de seguran\u00e7a no kernel em execu\u00e7\u00e3o, sem reiniciar o servidor.", exemplo: "sudo pro enable livepatch", rota: "/ubuntu-pro" },
  { termo: "Compilar do fonte", grupo: "pacotes", definicao: "Gerar o bin\u00e1rio a partir do c\u00f3digo, geralmente com ./configure, make e make install. Fica fora do controle do APT.", exemplo: "./configure && make -j$(nproc)", rota: "/codigo-fonte" },

  // ---------------- systemd ----------------
  { termo: "systemd", grupo: "servicos", definicao: "Init do Ubuntu: primeiro processo (PID 1), respons\u00e1vel por subir e supervisionar tudo o mais.", exemplo: "systemctl status", rota: "/systemd" },
  { termo: "Unit", grupo: "servicos", definicao: "Unidade de configura\u00e7\u00e3o do systemd. Tipos comuns: .service, .timer, .socket, .mount e .target.", exemplo: "systemctl cat nginx.service", rota: "/systemd" },
  { termo: "systemctl", grupo: "servicos", definicao: "Comando de controle do systemd: iniciar, parar, habilitar no boot e inspecionar units.", exemplo: "sudo systemctl enable --now nginx", rota: "/systemd" },
  { termo: "start vs enable", grupo: "servicos", definicao: "start sobe o servi\u00e7o agora; enable faz ele subir no boot. S\u00e3o coisas independentes \u2014 esquecer o enable \u00e9 o erro mais comum.", exemplo: "sudo systemctl enable --now servico", rota: "/systemd" },
  { termo: "Daemon", grupo: "servicos", definicao: "Processo que roda em segundo plano, sem terminal, normalmente iniciado pelo systemd. O d final de sshd e nginx vem da\u00ed.", exemplo: "ps -ef | grep sshd", rota: "/processos" },
  { termo: "journalctl", grupo: "servicos", definicao: "Leitor do log bin\u00e1rio do systemd. Filtra por unit, prioridade e per\u00edodo.", exemplo: "journalctl -u ssh -n 50 --no-pager", rota: "/journalctl" },
  { termo: "Target", grupo: "servicos", definicao: "Agrupamento de units que substitui os runlevels antigos. multi-user.target \u00e9 o modo servidor; graphical.target inclui a interface.", exemplo: "systemctl get-default", rota: "/systemd" },
  { termo: "Timer", grupo: "servicos", definicao: "Agendamento nativo do systemd, alternativa ao cron com log integrado e depend\u00eancias.", exemplo: "systemctl list-timers", rota: "/cron" },
  { termo: "cron", grupo: "servicos", definicao: "Agendador cl\u00e1ssico do Unix. Cada linha do crontab tem minuto, hora, dia, m\u00eas, dia da semana e o comando.", exemplo: "crontab -e", rota: "/cron" },
  { termo: "Drop-in", grupo: "servicos", definicao: "Arquivo em /etc/systemd/system/servico.d/ que sobrescreve parte de uma unit sem editar o original do pacote.", exemplo: "sudo systemctl edit nginx", rota: "/systemd" },

  // ---------------- usuarios ----------------
  { termo: "root", grupo: "usuarios", definicao: "Usu\u00e1rio administrativo (UID 0), sem restri\u00e7\u00f5es. No Ubuntu ele vem sem senha: usa-se sudo.", exemplo: "sudo -i", rota: "/usuarios" },
  { termo: "sudo", grupo: "usuarios", definicao: "Executa um comando como outro usu\u00e1rio, normalmente root, registrando quem fez o qu\u00ea.", exemplo: "sudo apt update", rota: "/usuarios" },
  { termo: "sudoers", grupo: "usuarios", definicao: "Arquivo de regras do sudo. Edite s\u00f3 com visudo, que valida a sintaxe antes de gravar.", exemplo: "sudo visudo", rota: "/usuarios" },
  { termo: "rwx", grupo: "usuarios", definicao: "Trio de permiss\u00f5es: leitura, escrita e execu\u00e7\u00e3o, aplicado a dono, grupo e outros. Em diret\u00f3rio, x significa poder entrar.", exemplo: "ls -l", rota: "/permissoes" },
  { termo: "chmod", grupo: "usuarios", definicao: "Muda permiss\u00f5es, em octal (755) ou simb\u00f3lico (u+x).", exemplo: "chmod 755 script.sh", rota: "/permissoes" },
  { termo: "chown", grupo: "usuarios", definicao: "Muda dono e grupo de arquivos e diret\u00f3rios.", exemplo: "sudo chown -R www-data:www-data /var/www", rota: "/permissoes" },
  { termo: "umask", grupo: "usuarios", definicao: "M\u00e1scara que define as permiss\u00f5es de arquivos novos. 022 gera arquivo 644 e diret\u00f3rio 755.", exemplo: "umask", rota: "/permissoes" },
  { termo: "SUID / SGID", grupo: "usuarios", definicao: "Bits que fazem o programa rodar com o dono ou o grupo do arquivo, e n\u00e3o com o de quem executou. Vetor cl\u00e1ssico de escalonamento de privil\u00e9gio.", exemplo: "find / -perm -4000 -type f 2>/dev/null", rota: "/permissoes" },
  { termo: "/etc/passwd e /etc/shadow", grupo: "usuarios", definicao: "passwd lista as contas e \u00e9 leg\u00edvel por todos; shadow guarda os hashes das senhas e s\u00f3 root l\u00ea.", exemplo: "getent passwd wallyson", rota: "/usuarios" },
  { termo: "Grupo", grupo: "usuarios", definicao: "Conjunto de usu\u00e1rios que compartilha permiss\u00f5es. sudo, docker e adm s\u00e3o os que mais mudam o que voc\u00ea pode fazer.", exemplo: "sudo usermod -aG docker $USER", rota: "/usuarios" },
  { termo: "ACL", grupo: "usuarios", definicao: "Permiss\u00f5es extras por usu\u00e1rio ou grupo, al\u00e9m do trio rwx tradicional.", exemplo: "setfacl -m u:ana:rwx pasta", rota: "/permissoes" },
  { termo: "AppArmor", grupo: "usuarios", definicao: "Sistema de confinamento por perfil, padr\u00e3o no Ubuntu, que limita o que cada programa pode acessar mesmo rodando como root.", exemplo: "sudo aa-status", rota: "/apparmor" },

  // ---------------- rede ----------------
  { termo: "Netplan", grupo: "rede", definicao: "Camada de configura\u00e7\u00e3o de rede do Ubuntu em YAML, que gera as regras do NetworkManager ou do systemd-networkd.", exemplo: "sudo netplan apply", rota: "/netplan" },
  { termo: "systemd-resolved", grupo: "rede", definicao: "Servi\u00e7o local de DNS do Ubuntu. Por isso /etc/resolv.conf aponta para 127.0.0.53 e n\u00e3o deve ser editado \u00e0 m\u00e3o.", exemplo: "resolvectl status", rota: "/dns" },
  { termo: "UFW", grupo: "rede", definicao: "Firewall simplificado do Ubuntu, uma camada sobre o nftables/iptables.", exemplo: "sudo ufw allow 22/tcp && sudo ufw enable", rota: "/seguranca" },
  { termo: "iptables / nftables", grupo: "rede", definicao: "Motor de filtragem de pacotes do kernel. O nftables \u00e9 o substituto moderno do iptables.", exemplo: "sudo nft list ruleset", rota: "/seguranca" },
  { termo: "SSH", grupo: "rede", definicao: "Protocolo de acesso remoto criptografado. Chave p\u00fablica \u00e9 sempre melhor que senha.", exemplo: "ssh -i ~/.ssh/id_ed25519 usuario@host", rota: "/ssh" },
  { termo: "Porta", grupo: "rede", definicao: "N\u00famero que identifica o servi\u00e7o em uma m\u00e1quina: 22 SSH, 80 HTTP, 443 HTTPS, 5432 PostgreSQL.", exemplo: "sudo ss -tulpn", rota: "/redes" },
  { termo: "DHCP", grupo: "rede", definicao: "Protocolo que entrega IP, m\u00e1scara, gateway e DNS automaticamente ao cliente.", exemplo: "ip a", rota: "/redes" },
  { termo: "DNS", grupo: "rede", definicao: "Tradu\u00e7\u00e3o de nome para IP. Quando a internet parece ca\u00edda mas o ping no IP funciona, o problema \u00e9 aqui.", exemplo: "dig +short ubuntu.com", rota: "/dns" },
  { termo: "NAT", grupo: "rede", definicao: "Tradu\u00e7\u00e3o de endere\u00e7os que permite v\u00e1rias m\u00e1quinas sa\u00edrem por um IP p\u00fablico. \u00c9 o que containers e VMs usam por padr\u00e3o.", rota: "/redes" },
  { termo: "Fail2ban", grupo: "rede", definicao: "Servi\u00e7o que l\u00ea logs e bane IPs com tentativas repetidas de login. Obrigat\u00f3rio em servidor exposto.", exemplo: "sudo fail2ban-client status sshd", rota: "/fail2ban" },
  { termo: "Samba", grupo: "rede", definicao: "Implementa\u00e7\u00e3o do protocolo SMB, usada para compartilhar pastas com Windows.", exemplo: "smbclient -L //servidor -U usuario", rota: "/samba" },

  // ---------------- armazenamento ----------------
  { termo: "Parti\u00e7\u00e3o", grupo: "armazenamento", definicao: "Divis\u00e3o l\u00f3gica de um disco. Cada uma pode ter um sistema de arquivos diferente.", exemplo: "lsblk -f", rota: "/particoes" },
  { termo: "Sistema de arquivos", grupo: "armazenamento", definicao: "Formato de organiza\u00e7\u00e3o dos dados no disco. ext4 \u00e9 o padr\u00e3o do Ubuntu; xfs, btrfs e zfs s\u00e3o alternativas.", exemplo: "df -Th", rota: "/sistema-arquivos" },
  { termo: "Mount", grupo: "armazenamento", definicao: "Ato de ligar um dispositivo a um ponto da \u00e1rvore de diret\u00f3rios. No Linux n\u00e3o existe letra de unidade.", exemplo: "sudo mount /dev/sdb1 /mnt", rota: "/disco" },
  { termo: "fstab", grupo: "armazenamento", definicao: "Tabela em /etc/fstab com o que deve ser montado no boot. Linha errada aqui impede o sistema de subir.", exemplo: "sudo findmnt --verify", rota: "/fstab" },
  { termo: "UUID", grupo: "armazenamento", definicao: "Identificador fixo de uma parti\u00e7\u00e3o. Use no fstab em vez de /dev/sdX, que muda de ordem entre boots.", exemplo: "blkid", rota: "/fstab" },
  { termo: "LVM", grupo: "armazenamento", definicao: "Camada de volumes l\u00f3gicos: agrupa discos em um pool e permite crescer ou encolher volumes a quente.", exemplo: "sudo lvextend -L +10G /dev/vg0/root", rota: "/lvm" },
  { termo: "Swap", grupo: "armazenamento", definicao: "\u00c1rea em disco usada quando a RAM aperta. No Ubuntu moderno \u00e9 um arquivo (/swap.img), n\u00e3o mais uma parti\u00e7\u00e3o.", exemplo: "swapon --show", rota: "/disco" },
  { termo: "inode", grupo: "armazenamento", definicao: "Estrutura que guarda os metadados de um arquivo. Disco pode ficar cheio de inodes com espa\u00e7o livre sobrando.", exemplo: "df -i", rota: "/sistema-arquivos" },
  { termo: "ZFS", grupo: "armazenamento", definicao: "Sistema de arquivos com checksum, snapshot e compress\u00e3o nativos. Come RAM, mas protege contra corrup\u00e7\u00e3o silenciosa.", exemplo: "sudo zpool status", rota: "/zfs" },
  { termo: "LUKS", grupo: "armazenamento", definicao: "Padr\u00e3o de criptografia de disco do Linux. \u00c9 o que o instalador do Ubuntu ativa quando voc\u00ea escolhe cifrar a instala\u00e7\u00e3o.", exemplo: "sudo cryptsetup luksOpen /dev/sdb1 cofre", rota: "/luks" },
  { termo: "rsync", grupo: "armazenamento", definicao: "C\u00f3pia incremental que transfere s\u00f3 as diferen\u00e7as. Base de quase todo backup em Linux.", exemplo: "rsync -av --delete /origem/ /destino/", rota: "/backup" },
  { termo: "Snapshot", grupo: "armazenamento", definicao: "Foto do estado do sistema em um instante, feita por Timeshift, ZFS ou LVM. N\u00e3o substitui backup fora da m\u00e1quina.", exemplo: "sudo timeshift --create", rota: "/timeshift" },

  // ---------------- virtualizacao ----------------
  { termo: "Container", grupo: "virtualizacao", definicao: "Processo isolado por namespaces e cgroups, compartilhando o kernel do host. Mais leve que VM, isolamento menor.", exemplo: "docker ps", rota: "/docker" },
  { termo: "Imagem", grupo: "virtualizacao", definicao: "Sistema de arquivos em camadas, somente leitura, do qual containers s\u00e3o criados.", exemplo: "docker images", rota: "/docker" },
  { termo: "Docker Compose", grupo: "virtualizacao", definicao: "Descri\u00e7\u00e3o em YAML de v\u00e1rios containers e suas liga\u00e7\u00f5es, subida com um comando.", exemplo: "docker compose up -d", rota: "/docker-compose" },
  { termo: "LXD / Incus", grupo: "virtualizacao", definicao: "Container de sistema: roda um Ubuntu completo com systemd dentro, compartilhando o kernel. Meio caminho entre Docker e VM.", exemplo: "lxc launch ubuntu:24.04 web", rota: "/lxd" },
  { termo: "KVM", grupo: "virtualizacao", definicao: "Hipervisor dentro do pr\u00f3prio kernel Linux. Base de praticamente toda virtualiza\u00e7\u00e3o s\u00e9ria no Ubuntu.", exemplo: "kvm-ok", rota: "/kvm" },
  { termo: "Multipass", grupo: "virtualizacao", definicao: "Ferramenta da Canonical que sobe VMs Ubuntu em segundos, com cloud-init opcional.", exemplo: "multipass launch 24.04 --name dev", rota: "/multipass" },
  { termo: "cloud-init", grupo: "virtualizacao", definicao: "Padr\u00e3o de provisionamento no primeiro boot: cria usu\u00e1rios, instala pacotes e roda comandos. Usado por toda nuvem grande.", exemplo: "cloud-init status --wait", rota: "/cloud-init" },
  { termo: "Ansible", grupo: "virtualizacao", definicao: "Automa\u00e7\u00e3o sem agente, via SSH, com playbooks YAML idempotentes.", exemplo: "ansible-playbook -i hosts site.yml", rota: "/ansible" },

  // ---------------- boot / kernel ----------------
  { termo: "Kernel", grupo: "boot", definicao: "N\u00facleo do sistema: fala com o hardware e gerencia processos, mem\u00f3ria e drivers. O Ubuntu entrega vers\u00f5es diferentes por release.", exemplo: "uname -r", rota: "/kernel" },
  { termo: "M\u00f3dulo do kernel", grupo: "boot", definicao: "Peda\u00e7o de c\u00f3digo carregado no kernel em tempo de execu\u00e7\u00e3o, geralmente um driver.", exemplo: "lsmod | head", rota: "/kernel" },
  { termo: "GRUB", grupo: "boot", definicao: "Gerenciador de boot: escolhe o kernel e passa par\u00e2metros para ele. Depois de editar, rode update-grub.", exemplo: "sudo update-grub", rota: "/boot" },
  { termo: "initramfs", grupo: "boot", definicao: "Sistema m\u00ednimo em mem\u00f3ria que monta a raiz real no boot. Precisa ser regenerado ao mexer em criptografia ou RAID.", exemplo: "sudo update-initramfs -u", rota: "/boot" },
  { termo: "UEFI e Secure Boot", grupo: "boot", definicao: "Firmware moderno e sua verifica\u00e7\u00e3o de assinatura. Secure Boot ativo exige assinar m\u00f3dulos de terceiros, como o da NVIDIA.", exemplo: "mokutil --sb-state", rota: "/boot" },
  { termo: "dmesg", grupo: "boot", definicao: "Buffer de mensagens do kernel. Primeiro lugar para olhar quando um hardware n\u00e3o \u00e9 reconhecido.", exemplo: "sudo dmesg -T | tail -30", rota: "/troubleshooting" },
  { termo: "LTS", grupo: "boot", definicao: "Long Term Support: release de abril de ano par, com 5 anos de suporte padr\u00e3o e 10 com Ubuntu Pro.", exemplo: "lsb_release -a", rota: "/historia" },
  { termo: "HWE", grupo: "boot", definicao: "Hardware Enablement: kernel e gr\u00e1ficos mais novos para uma LTS, para suportar m\u00e1quinas recentes.", exemplo: "apt list --installed | grep hwe", rota: "/kernel" },
  { termo: "/proc e /sys", grupo: "boot", definicao: "Sistemas de arquivos virtuais que exp\u00f5em o estado do kernel como arquivos. N\u00e3o ocupam disco.", exemplo: "cat /proc/cpuinfo", rota: "/sistema-arquivos" },
  { termo: "PID", grupo: "boot", definicao: "N\u00famero que identifica um processo em execu\u00e7\u00e3o. O PID 1 \u00e9 sempre o init, ou seja, o systemd.", exemplo: "ps -ef | head", rota: "/processos" },
  { termo: "Vari\u00e1vel de ambiente", grupo: "boot", definicao: "Par nome=valor herdado pelos processos filhos. PATH, HOME e LANG mudam o comportamento de quase tudo.", exemplo: "printenv PATH", rota: "/variaveis-ambiente" },
  { termo: "Shell", grupo: "boot", definicao: "Interpretador de comandos. O padr\u00e3o interativo do Ubuntu \u00e9 o bash; /bin/sh aponta para o dash, mais restrito.", exemplo: "echo $SHELL", rota: "/shell-bash" },
];

function semAcento(texto: string) {
  return texto
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

export default function Glossario() {
  const [busca, setBusca] = useState("");
  const [grupo, setGrupo] = useState<Grupo | "todos">("todos");

  const filtrados = useMemo(() => {
    const q = semAcento(busca.trim());
    return TERMOS.filter((t) => {
      if (grupo !== "todos" && t.grupo !== grupo) return false;
      if (!q) return true;
      return semAcento(
        t.termo + " " + t.definicao + " " + (t.exemplo || ""),
      ).includes(q);
    });
  }, [busca, grupo]);

  const porGrupo = GRUPOS.map((g) => ({
    ...g,
    itens: filtrados
      .filter((t) => t.grupo === g.id)
      .sort((a, b) => a.termo.localeCompare(b.termo, "pt-BR")),
  })).filter((g) => g.itens.length > 0);

  return (
    <PageContainer
      title="Gloss\u00e1rio do Ubuntu"
      subtitle="Os termos que aparecem o tempo todo em tutoriais, mensagens de erro e documenta\u00e7\u00e3o, explicados em uma frase e com o comando que prova cada um."
      difficulty="iniciante"
      timeToRead="consulta"
    >
      <p>
        S\u00e3o {TERMOS.length} verbetes divididos em {GRUPOS.length} grupos. Busque
        sem se preocupar com acento: <code>particao</code> encontra
        <code> Parti\u00e7\u00e3o</code>. Onde existe uma li\u00e7\u00e3o sobre o assunto, o verbete
        leva at\u00e9 ela.
      </p>

      <div className="not-prose my-8 space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            placeholder="Buscar termo, defini\u00e7\u00e3o ou comando..."
            className="w-full rounded-xl border border-border bg-card py-3 pl-10 pr-10 text-sm outline-none focus:border-primary/50"
          />
          {busca && (
            <button
              onClick={() => setBusca("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              title="Limpar busca"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setGrupo("todos")}
            className={
              "rounded-full border px-3 py-1 text-xs font-semibold transition-colors " +
              (grupo === "todos"
                ? "border-primary/40 bg-primary/15 text-primary"
                : "border-border text-muted-foreground hover:text-foreground")
            }
          >
            todos ({TERMOS.length})
          </button>
          {GRUPOS.map((g) => {
            const total = TERMOS.filter((t) => t.grupo === g.id).length;
            return (
              <button
                key={g.id}
                onClick={() => setGrupo(g.id)}
                className={
                  "rounded-full border px-3 py-1 text-xs font-semibold transition-colors " +
                  (grupo === g.id
                    ? "border-primary/40 bg-primary/15 text-primary"
                    : "border-border text-muted-foreground hover:text-foreground")
                }
              >
                {g.nome} ({total})
              </button>
            );
          })}
        </div>

        <p className="text-xs text-muted-foreground">
          {filtrados.length} verbete(s) exibido(s)
        </p>
      </div>

      {porGrupo.length === 0 && (
        <AlertBox type="info" title="Nenhum verbete encontrado">
          Tente um termo mais curto, ou parte do comando (por exemplo
          <code> systemctl</code>). Faltou algum conceito importante? Ele merece
          entrar aqui.
        </AlertBox>
      )}

      {porGrupo.map((g) => (
        <section key={g.id} className="mb-10">
          <h2>{g.nome}</h2>
          <div className="not-prose space-y-3">
            {g.itens.map((t) => (
              <div
                key={t.termo}
                className="rounded-xl border border-border bg-card p-4"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-semibold text-foreground">{t.termo}</h3>
                  {t.rota && (
                    <Link
                      href={t.rota}
                      className="text-xs font-medium text-primary hover:underline"
                    >
                      ver li\u00e7\u00e3o \u2192
                    </Link>
                  )}
                </div>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {t.definicao}
                </p>
                {t.exemplo && (
                  <pre className="mt-3 overflow-x-auto rounded-lg bg-[#1e1e1e] px-3 py-2 text-xs text-gray-200">
                    <code>{t.exemplo}</code>
                  </pre>
                )}
              </div>
            ))}
          </div>
        </section>
      ))}

      <AlertBox type="success" title="Como usar este gloss\u00e1rio">
        Ele n\u00e3o \u00e9 para ler de ponta a ponta. Deixe aberto em outra aba enquanto
        estuda as li\u00e7\u00f5es e volte aqui sempre que aparecer uma sigla que voc\u00ea
        n\u00e3o reconhece. A busca tamb\u00e9m aceita comando: procurar
        <code> lsblk</code> mostra o verbete de parti\u00e7\u00e3o.
      </AlertBox>
    </PageContainer>
  );
}

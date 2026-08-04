import { useEffect, useMemo, useState } from "react";
import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import {
  BookOpen, Terminal, HardDrive, Shield, Settings,
  FileText, Users, Network, Cpu, Clock, History, PenTool,
  Search, X, Package, Server, Code2, Database, Cloud,
  Monitor, Music, Gamepad2, Lock, Wrench, RotateCcw,
  Globe, Container, Wifi, Archive, Key, Layers
} from "lucide-react";
import { Check } from "lucide-react";
import { UbuntuLogo } from "@/components/ui/UbuntuLogo";
import { useProgress, TOTAL_LESSONS } from "@/lib/course";
import {
  LEVELS,
  LEVEL_COUNTS,
  LEVEL_LABEL,
  LEVEL_SHORT,
  LEVEL_TEXT,
  LEVEL_PILL,
  type Nivel,
} from "@/lib/levels";

const NAVIGATION = [
  {
    title: "Introdução",
    items: [
      { path: "/", label: "Início", icon: BookOpen },
      { path: "/historia", label: "História do Ubuntu", icon: History },
      { path: "/filosofia", label: "Filosofia Ubuntu", icon: PenTool },
    ]
  },
  {
    title: "Instalação & Setup",
    items: [
      { path: "/instalacao", label: "Guia de Instalação", icon: HardDrive },
      { path: "/primeiros-passos", label: "Primeiros Passos", icon: Clock },
      { path: "/ambiente-grafico", label: "GNOME & Desktop", icon: Monitor },
      { path: "/localizacao", label: "Idioma & Timezone", icon: Globe },
    ]
  },
  {
    title: "Gerenciamento de Pacotes",
    items: [
      { path: "/apt", label: "APT (Completo)", icon: Package },
      { path: "/snap-flatpak", label: "Snap & Flatpak", icon: Package },
      { path: "/dpkg", label: "dpkg Avançado", icon: Package },
      { path: "/ppa", label: "PPAs e Repositórios", icon: Package },
      { path: "/appimage", label: "AppImage", icon: Package },
      { path: "/codigo-fonte", label: "Compilar do Fonte", icon: Code2 },
    ]
  },
  {
    title: "Sistema de Arquivos",
    items: [
      { path: "/sistema-arquivos", label: "Hierarquia FHS", icon: FileText },
      { path: "/navegacao", label: "Navegação", icon: Search },
      { path: "/manipulacao-arquivos", label: "Manipulação", icon: FileText },
      { path: "/visualizacao", label: "Visualização", icon: FileText },
      { path: "/permissoes", label: "Permissões", icon: Shield },
      { path: "/disco", label: "Discos e Partições", icon: HardDrive },
      { path: "/fstab", label: "fstab (Montagem Auto)", icon: HardDrive },
      { path: "/particoes", label: "Particionamento", icon: HardDrive },
      { path: "/lvm", label: "LVM Avançado", icon: Layers },
      { path: "/compressao", label: "Compressão", icon: Archive },
    ]
  },
  {
    title: "Kernel & Boot",
    items: [
      { path: "/kernel", label: "Kernel Linux", icon: Cpu },
      { path: "/boot", label: "Boot & GRUB2", icon: Cpu },
      { path: "/hardware", label: "Informações de Hardware", icon: Cpu },
    ]
  },
  {
    title: "Administração do Sistema",
    items: [
      { path: "/usuarios", label: "Usuários e Grupos", icon: Users },
      { path: "/processos", label: "Processos", icon: Cpu },
      { path: "/systemd", label: "Systemd", icon: Settings },
      { path: "/journalctl", label: "Logs (journalctl)", icon: FileText },
      { path: "/iostat", label: "Monitoramento", icon: Cpu },
      { path: "/cron", label: "Cron (Agendamento)", icon: Clock },
    ]
  },
  {
    title: "Terminal & Shell",
    items: [
      { path: "/shell-bash", label: "Shell Bash", icon: Terminal },
      { path: "/variaveis-ambiente", label: "Variáveis de Ambiente", icon: Terminal },
      { path: "/aliases", label: "Aliases e Funções", icon: Terminal },
      { path: "/man-pages", label: "Documentação (man)", icon: BookOpen },
      { path: "/expansoes-bash", label: "Expansões Bash", icon: Terminal },
      { path: "/scripts-bash", label: "Scripts Avançados", icon: Terminal },
      { path: "/redirecionamento", label: "Redirecionamento", icon: Terminal },
      { path: "/avancado", label: "Comandos Avançados", icon: Terminal },
      { path: "/zsh", label: "Zsh & Oh My Zsh", icon: Terminal },
    ]
  },
  {
    title: "Redes",
    items: [
      { path: "/redes", label: "Fundamentos de Rede", icon: Network },
      { path: "/ssh", label: "SSH", icon: Terminal },
      { path: "/netplan", label: "Netplan (Config Rede)", icon: Wifi },
      { path: "/dns", label: "DNS", icon: Globe },
      { path: "/vpn", label: "VPN (WireGuard)", icon: Lock },
      { path: "/samba", label: "Samba & NFS", icon: Network },
    ]
  },
  {
    title: "Containers & Virtualização",
    items: [
      { path: "/docker", label: "Docker", icon: Container },
      { path: "/docker-compose", label: "Docker Compose", icon: Container },
      { path: "/kvm", label: "KVM (Máquinas Virtuais)", icon: Server },
      { path: "/multipass", label: "Multipass (VMs Ubuntu)", icon: Server },
      { path: "/lxd", label: "LXD & Incus", icon: Container },
    ]
  },
  {
    title: "Servidores Web",
    items: [
      { path: "/nginx", label: "Nginx", icon: Server },
      { path: "/apache", label: "Apache", icon: Server },
      { path: "/php", label: "PHP (LAMP/LEMP)", icon: Code2 },
    ]
  },
  {
    title: "Bancos de Dados",
    items: [
      { path: "/mysql", label: "MySQL & MariaDB", icon: Database },
      { path: "/postgresql", label: "PostgreSQL", icon: Database },
    ]
  },
  {
    title: "Desenvolvimento",
    items: [
      { path: "/python", label: "Python", icon: Code2 },
      { path: "/nodejs", label: "Node.js", icon: Code2 },
      { path: "/java", label: "Java", icon: Code2 },
      { path: "/git", label: "Git (Completo)", icon: Code2 },
      { path: "/vscode", label: "VS Code", icon: Monitor },
      { path: "/vim", label: "Vim & Neovim", icon: Terminal },
    ]
  },
  {
    title: "Segurança",
    items: [
      { path: "/seguranca", label: "Segurança Básica", icon: Shield },
      { path: "/apparmor", label: "AppArmor", icon: Shield },
      { path: "/fail2ban", label: "Fail2Ban", icon: Shield },
      { path: "/luks", label: "LUKS (Criptografia)", icon: Lock },
      { path: "/gpg", label: "GPG (Chaves)", icon: Key },
    ]
  },
  {
    title: "Backup & Cloud",
    items: [
      { path: "/backup", label: "Backup com rsync", icon: RotateCcw },
      { path: "/timeshift", label: "Timeshift (Snapshots)", icon: RotateCcw },
      { path: "/cloud-init", label: "Ubuntu Server & Cloud", icon: Cloud },
      { path: "/ansible", label: "Ansible", icon: Wrench },
      { path: "/ubuntu-pro", label: "Ubuntu Pro & Livepatch", icon: Shield },
      { path: "/unattended-upgrades", label: "Updates Automáticos", icon: RotateCcw },
      { path: "/zfs", label: "ZFS Storage", icon: Layers },
    ]
  },
  {
    title: "Desktop & Multimídia",
    items: [
      { path: "/gnome-extensions", label: "GNOME Extensions", icon: Monitor },
      { path: "/ambientes-alternativos", label: "KDE, XFCE, MATE...", icon: Monitor },
      { path: "/multimedia", label: "Multimídia & Codecs", icon: Music },
      { path: "/gaming", label: "Gaming no Ubuntu", icon: Gamepad2 },
      { path: "/wine", label: "Wine (Windows Apps)", icon: Gamepad2 },
    ]
  },
  {
    title: "Extras",
    items: [
      { path: "/glossario", label: "Glossário", icon: BookOpen },
      { path: "/troubleshooting", label: "Troubleshooting", icon: Settings },
      { path: "/referencias", label: "Referências", icon: BookOpen },
    ]
  }
];

const CHAVE_NIVEL = "ubuntu-sidebar-nivel";
type Filtro = Nivel | "todos";
const FILTROS: Filtro[] = ["todos", "iniciante", "intermediario", "avancado"];

function lerNivel(): Filtro {
  try {
    const raw = localStorage.getItem(CHAVE_NIVEL) as Filtro | null;
    return raw && FILTROS.includes(raw) ? raw : "todos";
  } catch {
    return "todos";
  }
}

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (v: boolean) => void;
}

export function Sidebar({ isOpen, setIsOpen }: SidebarProps) {
  const [location] = useLocation();
  const { has } = useProgress();
  const [nivel, setNivel] = useState<Filtro>(lerNivel);

  useEffect(() => {
    try {
      localStorage.setItem(CHAVE_NIVEL, nivel);
    } catch {
      /* sem localStorage: o filtro vale so nesta sessao */
    }
  }, [nivel]);

  // A Home fica sempre visivel; secao sem topico do nivel escolhido desaparece.
  const secoes = useMemo(
    () =>
      NAVIGATION.map((section) => ({
        ...section,
        items:
          nivel === "todos"
            ? section.items
            : section.items.filter(
                (i) => i.path === "/" || LEVELS[i.path] === nivel,
              ),
      })).filter((section) => section.items.length > 0),
    [nivel],
  );

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside className={cn(
        "fixed top-0 bottom-0 left-0 z-50 w-72 bg-card border-r border-border transition-transform duration-300 ease-in-out lg:translate-x-0 overflow-y-auto",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="p-6">
          <div className="flex items-center justify-between lg:justify-center mb-8">
            <Link href="/" className="flex items-center gap-3 group">
              <UbuntuLogo size={40} className="drop-shadow-[0_4px_12px_rgba(233,84,32,0.4)]" />
              <div>
                <h1 className="font-bold text-sm">Curso de Ubuntu</h1>
                <p className="text-xs text-muted-foreground">26.04 LTS · Resolute Raccoon</p>
              </div>
            </Link>
            <button
              onClick={() => setIsOpen(false)}
              className="lg:hidden p-2 rounded-lg hover:bg-accent transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Filtro por nivel */}
          <div className="mb-6 flex items-center gap-1 text-[10px]">
            <span className="text-muted-foreground mr-0.5">nível:</span>
            {FILTROS.map((f) => {
              const ativo = nivel === f;
              const total = f === "todos" ? TOTAL_LESSONS : LEVEL_COUNTS[f];
              return (
                <button
                  key={f}
                  onClick={() => setNivel(f)}
                  title={`${f === "todos" ? "Todos os tópicos" : LEVEL_LABEL[f]} (${total})`}
                  className={cn(
                    "px-1.5 py-0.5 rounded border transition-colors",
                    ativo
                      ? cn(
                          "border-transparent font-bold",
                          f === "todos"
                            ? "bg-primary/15 text-primary"
                            : LEVEL_PILL[f],
                        )
                      : "border-border text-muted-foreground hover:text-foreground",
                  )}
                >
                  {f === "todos" ? "todos" : LEVEL_SHORT[f]} {total}
                </button>
              );
            })}
          </div>

          <nav className="space-y-6">
            {secoes.map((section) => (
              <div key={section.title}>
                <h2 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 px-2">
                  {section.title}
                </h2>
                <ul className="space-y-0.5">
                  {section.items.map((item) => {
                    const Icon = item.icon;
                    const isActive = location === item.path;
                    return (
                      <li key={item.path}>
                        <Link
                          href={item.path}
                          className={cn(
                            "flex items-center gap-2.5 px-2 py-1.5 rounded-lg text-sm transition-colors",
                            isActive
                              ? "bg-primary text-primary-foreground font-medium"
                              : "text-muted-foreground hover:text-foreground hover:bg-accent"
                          )}
                        >
                          <Icon className="w-3.5 h-3.5 flex-shrink-0" />
                          <span className="truncate">{item.label}</span>
                          {item.path !== "/" && LEVELS[item.path] && (
                            <span
                              className={cn(
                                "shrink-0 text-[9px] font-bold",
                                isActive
                                  ? "text-primary-foreground/70"
                                  : LEVEL_TEXT[LEVELS[item.path]],
                              )}
                              title={LEVEL_LABEL[LEVELS[item.path]]}
                            >
                              {LEVEL_SHORT[LEVELS[item.path]]}
                            </span>
                          )}
                          {has(item.path) && <Check className="w-3.5 h-3.5 ml-auto text-green-500 flex-shrink-0" />}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </nav>
        </div>
      </aside>
    </>
  );
}

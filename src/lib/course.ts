import { useSyncExternalStore } from "react";

export interface Lesson {
  path: string;
  label: string;
}

export interface Module {
  title: string;
  lessons: Lesson[];
}

// Ordem oficial do curso — espelha a navegação da Sidebar.
// Usada para: trilha na Home, navegação "anterior/próxima" e progresso.
export const MODULES: Module[] = [
  {
    title: "Introdução",
    lessons: [
      { path: "/historia", label: "História do Ubuntu" },
      { path: "/filosofia", label: "Filosofia Ubuntu" },
    ],
  },
  {
    title: "Instalação & Setup",
    lessons: [
      { path: "/instalacao", label: "Guia de Instalação" },
      { path: "/primeiros-passos", label: "Primeiros Passos" },
      { path: "/ambiente-grafico", label: "GNOME & Desktop" },
      { path: "/localizacao", label: "Idioma & Timezone" },
    ],
  },
  {
    title: "Gerenciamento de Pacotes",
    lessons: [
      { path: "/apt", label: "APT (Completo)" },
      { path: "/snap-flatpak", label: "Snap & Flatpak" },
      { path: "/dpkg", label: "dpkg Avançado" },
      { path: "/ppa", label: "PPAs e Repositórios" },
      { path: "/appimage", label: "AppImage" },
      { path: "/codigo-fonte", label: "Compilar do Fonte" },
    ],
  },
  {
    title: "Sistema de Arquivos",
    lessons: [
      { path: "/sistema-arquivos", label: "Hierarquia FHS" },
      { path: "/navegacao", label: "Navegação" },
      { path: "/manipulacao-arquivos", label: "Manipulação" },
      { path: "/visualizacao", label: "Visualização" },
      { path: "/permissoes", label: "Permissões" },
      { path: "/disco", label: "Discos e Partições" },
      { path: "/fstab", label: "fstab (Montagem Auto)" },
      { path: "/particoes", label: "Particionamento" },
      { path: "/lvm", label: "LVM Avançado" },
      { path: "/compressao", label: "Compressão" },
    ],
  },
  {
    title: "Kernel & Boot",
    lessons: [
      { path: "/kernel", label: "Kernel Linux" },
      { path: "/boot", label: "Boot & GRUB2" },
      { path: "/hardware", label: "Informações de Hardware" },
    ],
  },
  {
    title: "Administração do Sistema",
    lessons: [
      { path: "/usuarios", label: "Usuários e Grupos" },
      { path: "/processos", label: "Processos" },
      { path: "/systemd", label: "Systemd" },
      { path: "/journalctl", label: "Logs (journalctl)" },
      { path: "/iostat", label: "Monitoramento" },
      { path: "/cron", label: "Cron (Agendamento)" },
    ],
  },
  {
    title: "Terminal & Shell",
    lessons: [
      { path: "/shell-bash", label: "Shell Bash" },
      { path: "/variaveis-ambiente", label: "Variáveis de Ambiente" },
      { path: "/aliases", label: "Aliases e Funções" },
      { path: "/man-pages", label: "Documentação (man)" },
      { path: "/expansoes-bash", label: "Expansões Bash" },
      { path: "/scripts-bash", label: "Scripts Avançados" },
      { path: "/redirecionamento", label: "Redirecionamento" },
      { path: "/avancado", label: "Comandos Avançados" },
      { path: "/zsh", label: "Zsh & Oh My Zsh" },
    ],
  },
  {
    title: "Redes",
    lessons: [
      { path: "/redes", label: "Fundamentos de Rede" },
      { path: "/ssh", label: "SSH" },
      { path: "/netplan", label: "Netplan (Config Rede)" },
      { path: "/dns", label: "DNS" },
      { path: "/vpn", label: "VPN (WireGuard)" },
      { path: "/samba", label: "Samba & NFS" },
    ],
  },
  {
    title: "Containers & Virtualização",
    lessons: [
      { path: "/docker", label: "Docker" },
      { path: "/docker-compose", label: "Docker Compose" },
      { path: "/kvm", label: "KVM (Máquinas Virtuais)" },
      { path: "/multipass", label: "Multipass (VMs Ubuntu)" },
      { path: "/lxd", label: "LXD & Incus" },
    ],
  },
  {
    title: "Servidores Web",
    lessons: [
      { path: "/nginx", label: "Nginx" },
      { path: "/apache", label: "Apache" },
      { path: "/php", label: "PHP (LAMP/LEMP)" },
    ],
  },
  {
    title: "Bancos de Dados",
    lessons: [
      { path: "/mysql", label: "MySQL & MariaDB" },
      { path: "/postgresql", label: "PostgreSQL" },
    ],
  },
  {
    title: "Desenvolvimento",
    lessons: [
      { path: "/python", label: "Python" },
      { path: "/nodejs", label: "Node.js" },
      { path: "/java", label: "Java" },
      { path: "/git", label: "Git (Completo)" },
      { path: "/vscode", label: "VS Code" },
      { path: "/vim", label: "Vim & Neovim" },
    ],
  },
  {
    title: "Segurança",
    lessons: [
      { path: "/seguranca", label: "Segurança Básica" },
      { path: "/apparmor", label: "AppArmor" },
      { path: "/fail2ban", label: "Fail2Ban" },
      { path: "/luks", label: "LUKS (Criptografia)" },
      { path: "/gpg", label: "GPG (Chaves)" },
    ],
  },
  {
    title: "Backup & Cloud",
    lessons: [
      { path: "/backup", label: "Backup com rsync" },
      { path: "/timeshift", label: "Timeshift (Snapshots)" },
      { path: "/cloud-init", label: "Ubuntu Server & Cloud" },
      { path: "/ansible", label: "Ansible" },
      { path: "/ubuntu-pro", label: "Ubuntu Pro & Livepatch" },
      { path: "/unattended-upgrades", label: "Updates Automáticos" },
      { path: "/zfs", label: "ZFS Storage" },
    ],
  },
  {
    title: "Desktop & Multimídia",
    lessons: [
      { path: "/gnome-extensions", label: "GNOME Extensions" },
      { path: "/ambientes-alternativos", label: "KDE, XFCE, MATE..." },
      { path: "/multimedia", label: "Multimídia & Codecs" },
      { path: "/gaming", label: "Gaming no Ubuntu" },
      { path: "/wine", label: "Wine (Windows Apps)" },
    ],
  },
  {
    title: "Extras",
    lessons: [
      { path: "/glossario", label: "Glossário" },
      { path: "/troubleshooting", label: "Troubleshooting" },
      { path: "/referencias", label: "Referências" },
    ],
  },
];

// Lista achatada, na ordem do curso.
export const COURSE: (Lesson & { module: string; index: number })[] = MODULES.flatMap(
  (m) => m.lessons.map((l) => ({ ...l, module: m.title })),
).map((l, index) => ({ ...l, index }));

export const TOTAL_LESSONS = COURSE.length;

export function lessonAt(path: string) {
  const i = COURSE.findIndex((l) => l.path === path);
  if (i === -1) return null;
  return {
    current: COURSE[i],
    prev: i > 0 ? COURSE[i - 1] : null,
    next: i < COURSE.length - 1 ? COURSE[i + 1] : null,
    position: i + 1,
  };
}

// ---------- Progresso (localStorage, reativo) ----------

const KEY = "ubuntu-curso-progresso";
const listeners = new Set<() => void>();

function read(): string[] {
  try {
    return JSON.parse(localStorage.getItem(KEY) || "[]");
  } catch {
    return [];
  }
}

function write(paths: string[]) {
  localStorage.setItem(KEY, JSON.stringify(paths));
  listeners.forEach((fn) => fn());
}

export function toggleDone(path: string) {
  const cur = read();
  write(cur.includes(path) ? cur.filter((p) => p !== path) : [...cur, path]);
}

export function isDone(path: string) {
  return read().includes(path);
}

function subscribe(fn: () => void) {
  listeners.add(fn);
  window.addEventListener("storage", fn);
  return () => {
    listeners.delete(fn);
    window.removeEventListener("storage", fn);
  };
}

// Snapshot estável para evitar loop no useSyncExternalStore.
let cache: string[] = [];
let cacheRaw = "";
function snapshot(): string[] {
  const raw = localStorage.getItem(KEY) || "[]";
  if (raw !== cacheRaw) {
    cacheRaw = raw;
    try {
      cache = JSON.parse(raw);
    } catch {
      cache = [];
    }
  }
  return cache;
}

export function useProgress() {
  const done = useSyncExternalStore(subscribe, snapshot, () => cache);
  return {
    done,
    count: done.length,
    percent: TOTAL_LESSONS ? Math.round((done.length / TOTAL_LESSONS) * 100) : 0,
    has: (path: string) => done.includes(path),
    toggle: toggleDone,
  };
}

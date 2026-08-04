// ARQUIVO GERADO por gen_levels_ubuntu.py a partir da prop `difficulty` de cada pagina.
// Nao edite a mao: rode o script de novo depois de mudar o nivel de um topico.
// Gerado em 2026-08-04 20:06

export type Nivel = "iniciante" | "intermediario" | "avancado";

export const LEVELS: Record<string, Nivel> = {
  "/historia": "iniciante",
  "/filosofia": "iniciante",
  "/instalacao": "iniciante",
  "/primeiros-passos": "iniciante",
  "/ambiente-grafico": "iniciante",
  "/apt": "iniciante",
  "/snap-flatpak": "iniciante",
  "/systemd": "intermediario",
  "/sistema-arquivos": "iniciante",
  "/navegacao": "iniciante",
  "/manipulacao-arquivos": "iniciante",
  "/visualizacao": "iniciante",
  "/permissoes": "intermediario",
  "/usuarios": "intermediario",
  "/processos": "iniciante",
  "/redes": "intermediario",
  "/ssh": "intermediario",
  "/disco": "iniciante",
  "/shell-bash": "iniciante",
  "/redirecionamento": "intermediario",
  "/compressao": "iniciante",
  "/avancado": "avancado",
  "/seguranca": "avancado",
  "/glossario": "iniciante",
  "/troubleshooting": "intermediario",
  "/referencias": "iniciante",
  "/kernel": "avancado",
  "/boot": "avancado",
  "/variaveis-ambiente": "iniciante",
  "/aliases": "iniciante",
  "/man-pages": "iniciante",
  "/expansoes-bash": "intermediario",
  "/scripts-bash": "intermediario",
  "/zsh": "iniciante",
  "/cron": "intermediario",
  "/hardware": "iniciante",
  "/localizacao": "iniciante",
  "/journalctl": "intermediario",
  "/iostat": "intermediario",
  "/dpkg": "intermediario",
  "/ppa": "intermediario",
  "/codigo-fonte": "avancado",
  "/appimage": "iniciante",
  "/lvm": "avancado",
  "/fstab": "intermediario",
  "/particoes": "intermediario",
  "/netplan": "intermediario",
  "/dns": "intermediario",
  "/vpn": "intermediario",
  "/samba": "intermediario",
  "/docker": "intermediario",
  "/docker-compose": "intermediario",
  "/kvm": "avancado",
  "/nginx": "intermediario",
  "/apache": "intermediario",
  "/mysql": "intermediario",
  "/postgresql": "intermediario",
  "/php": "intermediario",
  "/python": "iniciante",
  "/nodejs": "intermediario",
  "/java": "intermediario",
  "/git": "iniciante",
  "/vscode": "iniciante",
  "/vim": "intermediario",
  "/apparmor": "avancado",
  "/fail2ban": "intermediario",
  "/luks": "avancado",
  "/gpg": "avancado",
  "/backup": "intermediario",
  "/timeshift": "iniciante",
  "/cloud-init": "avancado",
  "/ansible": "avancado",
  "/multipass": "intermediario",
  "/lxd": "avancado",
  "/ubuntu-pro": "intermediario",
  "/unattended-upgrades": "intermediario",
  "/zfs": "avancado",
  "/gnome-extensions": "iniciante",
  "/ambientes-alternativos": "intermediario",
  "/multimedia": "iniciante",
  "/gaming": "iniciante",
  "/wine": "intermediario",
};

export const LEVEL_COUNTS: Record<Nivel, number> = {
  iniciante: 31,
  intermediario: 37,
  avancado: 14,
};

export const LEVEL_LABEL: Record<Nivel, string> = {
  iniciante: "Iniciante",
  intermediario: "Intermediário",
  avancado: "Avançado",
};

export const LEVEL_SHORT: Record<Nivel, string> = {
  iniciante: "I",
  intermediario: "M",
  avancado: "A",
};

/** Classe de texto para o badge de nivel na Sidebar. */
export const LEVEL_TEXT: Record<Nivel, string> = {
  iniciante: "text-emerald-500",
  intermediario: "text-amber-500",
  avancado: "text-rose-500",
};

/** Classe do botao de filtro quando o nivel esta ativo. */
export const LEVEL_PILL: Record<Nivel, string> = {
  iniciante: "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400",
  intermediario: "bg-amber-500/15 text-amber-600 dark:text-amber-400",
  avancado: "bg-rose-500/15 text-rose-600 dark:text-rose-400",
};

import { useState, useEffect, lazy, Suspense } from "react";
import { Switch, Route, Router as WouterRouter } from "wouter";
import { useHashLocation } from "wouter/use-hash-location";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { Sidebar } from "@/components/layout/Sidebar";
import { Header } from "@/components/layout/Header";

import Home from "@/pages/Home";
const Historia = lazy(() => import("@/pages/Historia"));
const Filosofia = lazy(() => import("@/pages/Filosofia"));
const Instalacao = lazy(() => import("@/pages/Instalacao"));
const PrimeirosPassos = lazy(() => import("@/pages/PrimeirosPassos"));
const AmbienteGrafico = lazy(() => import("@/pages/AmbienteGrafico"));
const Apt = lazy(() => import("@/pages/Apt"));
const SnapFlatpak = lazy(() => import("@/pages/SnapFlatpak"));
const Systemd = lazy(() => import("@/pages/Systemd"));
const SistemaArquivos = lazy(() => import("@/pages/SistemaArquivos"));
const Navegacao = lazy(() => import("@/pages/Navegacao"));
const ManipulacaoArquivos = lazy(() => import("@/pages/ManipulacaoArquivos"));
const Visualizacao = lazy(() => import("@/pages/Visualizacao"));
const Permissoes = lazy(() => import("@/pages/Permissoes"));
const Usuarios = lazy(() => import("@/pages/Usuarios"));
const Processos = lazy(() => import("@/pages/Processos"));
const Redes = lazy(() => import("@/pages/Redes"));
const Ssh = lazy(() => import("@/pages/Ssh"));
const Disco = lazy(() => import("@/pages/Disco"));
const ShellBash = lazy(() => import("@/pages/ShellBash"));
const Redirecionamento = lazy(() => import("@/pages/Redirecionamento"));
const Compressao = lazy(() => import("@/pages/Compressao"));
const Avancado = lazy(() => import("@/pages/Avancado"));
const Seguranca = lazy(() => import("@/pages/Seguranca"));
const Glossario = lazy(() => import("@/pages/Glossario"));
const Troubleshooting = lazy(() => import("@/pages/Troubleshooting"));
const Referencias = lazy(() => import("@/pages/Referencias"));

// KERNEL & BOOT
const Kernel = lazy(() => import("@/pages/Kernel"));
const Boot = lazy(() => import("@/pages/Boot"));

// SHELL & PERSONALIZAÇÃO
const VariaveisAmbiente = lazy(() => import("@/pages/VariaveisAmbiente"));
const Aliases = lazy(() => import("@/pages/Aliases"));
const ManPages = lazy(() => import("@/pages/ManPages"));
const ExpansoesBash = lazy(() => import("@/pages/ExpansoesBash"));
const ScriptsBash = lazy(() => import("@/pages/ScriptsBash"));
const Zsh = lazy(() => import("@/pages/Zsh"));
const Cron = lazy(() => import("@/pages/Cron"));

// HARDWARE & SISTEMA
const Hardware = lazy(() => import("@/pages/Hardware"));
const Localizacao = lazy(() => import("@/pages/Localizacao"));
const JournalCtl = lazy(() => import("@/pages/JournalCtl"));
const IOStat = lazy(() => import("@/pages/IOStat"));

// PACOTES
const Dpkg = lazy(() => import("@/pages/Dpkg"));
const PPA = lazy(() => import("@/pages/PPA"));
const CodigoFonte = lazy(() => import("@/pages/CodigoFonte"));
const AppImage = lazy(() => import("@/pages/AppImage"));

// SISTEMA DE ARQUIVOS AVANÇADO
const LVM = lazy(() => import("@/pages/LVM"));
const Fstab = lazy(() => import("@/pages/Fstab"));
const Particoes = lazy(() => import("@/pages/Particoes"));

// REDE AVANÇADA
const Netplan = lazy(() => import("@/pages/Netplan"));
const DNS = lazy(() => import("@/pages/DNS"));
const VPN = lazy(() => import("@/pages/VPN"));
const Samba = lazy(() => import("@/pages/Samba"));

// CONTAINERS & VIRTUALIZAÇÃO
const Docker = lazy(() => import("@/pages/Docker"));
const DockerCompose = lazy(() => import("@/pages/DockerCompose"));
const KVM = lazy(() => import("@/pages/KVM"));

// SERVIDORES
const Nginx = lazy(() => import("@/pages/Nginx"));
const Apache = lazy(() => import("@/pages/Apache"));
const MySQL = lazy(() => import("@/pages/MySQL"));
const PostgreSQL = lazy(() => import("@/pages/PostgreSQL"));
const PHP = lazy(() => import("@/pages/PHP"));

// DESENVOLVIMENTO
const Python = lazy(() => import("@/pages/Python"));
const NodeJS = lazy(() => import("@/pages/NodeJS"));
const Java = lazy(() => import("@/pages/Java"));
const Git = lazy(() => import("@/pages/Git"));
const VSCode = lazy(() => import("@/pages/VSCode"));
const Vim = lazy(() => import("@/pages/Vim"));

// SEGURANÇA
const AppArmor = lazy(() => import("@/pages/AppArmor"));
const Fail2Ban = lazy(() => import("@/pages/Fail2Ban"));
const LUKS = lazy(() => import("@/pages/LUKS"));
const GPG = lazy(() => import("@/pages/GPG"));

// BACKUP & CLOUD
const Backup = lazy(() => import("@/pages/Backup"));
const Timeshift = lazy(() => import("@/pages/Timeshift"));
const CloudInit = lazy(() => import("@/pages/CloudInit"));
const Ansible = lazy(() => import("@/pages/Ansible"));
const Multipass = lazy(() => import("@/pages/Multipass"));
const LXD = lazy(() => import("@/pages/LXD"));
const UbuntuPro = lazy(() => import("@/pages/UbuntuPro"));
const UnattendedUpgrades = lazy(() => import("@/pages/UnattendedUpgrades"));
const ZFSZsys = lazy(() => import("@/pages/ZFSZsys"));

// DESKTOP & MULTIMÍDIA
const GNOMEExtensions = lazy(() => import("@/pages/GNOMEExtensions"));
const AmbientesAlternativos = lazy(() => import("@/pages/AmbientesAlternativos"));
const Multimedia = lazy(() => import("@/pages/Multimedia"));
const Gaming = lazy(() => import("@/pages/Gaming"));
const Wine = lazy(() => import("@/pages/Wine"));

import NotFound from "@/pages/not-found";

import { CommandPalette } from "@/components/layout/CommandPalette";

const queryClient = new QueryClient();

function Layout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const [location] = useHashLocation();
  useEffect(() => {
    setIsSidebarOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="min-h-screen bg-background text-foreground flex">
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      <CommandPalette />

      <div className="flex-1 lg:pl-72 flex flex-col min-w-0 transition-all duration-300">
        <Header onMenuClick={() => setIsSidebarOpen(true)} />
        <main className="flex-1">
          {children}
        </main>
      </div>
    </div>
  );
}

function CarregandoTopico() {
  return (
    <div className="flex items-center justify-center py-24 px-6">
      <div className="font-mono text-sm text-muted-foreground">
        <span className="text-primary">●</span> carregando tópico...
      </div>
    </div>
  );
}

function Router() {
  return (
    <Layout>
      <Suspense fallback={<CarregandoTopico />}>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/historia" component={Historia} />
        <Route path="/filosofia" component={Filosofia} />
        <Route path="/instalacao" component={Instalacao} />
        <Route path="/primeiros-passos" component={PrimeirosPassos} />
        <Route path="/ambiente-grafico" component={AmbienteGrafico} />
        <Route path="/apt" component={Apt} />
        <Route path="/snap-flatpak" component={SnapFlatpak} />
        <Route path="/systemd" component={Systemd} />
        <Route path="/sistema-arquivos" component={SistemaArquivos} />
        <Route path="/navegacao" component={Navegacao} />
        <Route path="/manipulacao-arquivos" component={ManipulacaoArquivos} />
        <Route path="/visualizacao" component={Visualizacao} />
        <Route path="/permissoes" component={Permissoes} />
        <Route path="/usuarios" component={Usuarios} />
        <Route path="/processos" component={Processos} />
        <Route path="/redes" component={Redes} />
        <Route path="/ssh" component={Ssh} />
        <Route path="/disco" component={Disco} />
        <Route path="/shell-bash" component={ShellBash} />
        <Route path="/redirecionamento" component={Redirecionamento} />
        <Route path="/compressao" component={Compressao} />
        <Route path="/avancado" component={Avancado} />
        <Route path="/seguranca" component={Seguranca} />
        <Route path="/glossario" component={Glossario} />
        <Route path="/troubleshooting" component={Troubleshooting} />
        <Route path="/referencias" component={Referencias} />

        {/* KERNEL & BOOT */}
        <Route path="/kernel" component={Kernel} />
        <Route path="/boot" component={Boot} />

        {/* SHELL & PERSONALIZAÇÃO */}
        <Route path="/variaveis-ambiente" component={VariaveisAmbiente} />
        <Route path="/aliases" component={Aliases} />
        <Route path="/man-pages" component={ManPages} />
        <Route path="/expansoes-bash" component={ExpansoesBash} />
        <Route path="/scripts-bash" component={ScriptsBash} />
        <Route path="/zsh" component={Zsh} />
        <Route path="/cron" component={Cron} />

        {/* HARDWARE & SISTEMA */}
        <Route path="/hardware" component={Hardware} />
        <Route path="/localizacao" component={Localizacao} />
        <Route path="/journalctl" component={JournalCtl} />
        <Route path="/iostat" component={IOStat} />

        {/* PACOTES */}
        <Route path="/dpkg" component={Dpkg} />
        <Route path="/ppa" component={PPA} />
        <Route path="/codigo-fonte" component={CodigoFonte} />
        <Route path="/appimage" component={AppImage} />

        {/* SISTEMA DE ARQUIVOS AVANÇADO */}
        <Route path="/lvm" component={LVM} />
        <Route path="/fstab" component={Fstab} />
        <Route path="/particoes" component={Particoes} />

        {/* REDE AVANÇADA */}
        <Route path="/netplan" component={Netplan} />
        <Route path="/dns" component={DNS} />
        <Route path="/vpn" component={VPN} />
        <Route path="/samba" component={Samba} />

        {/* CONTAINERS & VIRTUALIZAÇÃO */}
        <Route path="/docker" component={Docker} />
        <Route path="/docker-compose" component={DockerCompose} />
        <Route path="/kvm" component={KVM} />

        {/* SERVIDORES */}
        <Route path="/nginx" component={Nginx} />
        <Route path="/apache" component={Apache} />
        <Route path="/mysql" component={MySQL} />
        <Route path="/postgresql" component={PostgreSQL} />
        <Route path="/php" component={PHP} />

        {/* DESENVOLVIMENTO */}
        <Route path="/python" component={Python} />
        <Route path="/nodejs" component={NodeJS} />
        <Route path="/java" component={Java} />
        <Route path="/git" component={Git} />
        <Route path="/vscode" component={VSCode} />
        <Route path="/vim" component={Vim} />

        {/* SEGURANÇA */}
        <Route path="/apparmor" component={AppArmor} />
        <Route path="/fail2ban" component={Fail2Ban} />
        <Route path="/luks" component={LUKS} />
        <Route path="/gpg" component={GPG} />

        {/* BACKUP & CLOUD */}
        <Route path="/backup" component={Backup} />
        <Route path="/timeshift" component={Timeshift} />
        <Route path="/cloud-init" component={CloudInit} />
        <Route path="/ansible" component={Ansible} />
        <Route path="/multipass" component={Multipass} />
        <Route path="/lxd" component={LXD} />
        <Route path="/ubuntu-pro" component={UbuntuPro} />
        <Route path="/unattended-upgrades" component={UnattendedUpgrades} />
        <Route path="/zfs" component={ZFSZsys} />

        {/* DESKTOP & MULTIMÍDIA */}
        <Route path="/gnome-extensions" component={GNOMEExtensions} />
        <Route path="/ambientes-alternativos" component={AmbientesAlternativos} />
        <Route path="/multimedia" component={Multimedia} />
        <Route path="/gaming" component={Gaming} />
        <Route path="/wine" component={Wine} />

        <Route component={NotFound} />
      </Switch>
      </Suspense>
    </Layout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <WouterRouter hook={useHashLocation}>
        <Router />
      </WouterRouter>
    </QueryClientProvider>
  );
}

export default App;

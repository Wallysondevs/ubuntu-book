import { useState, useEffect } from "react";
import { Switch, Route, Router as WouterRouter } from "wouter";
import { useHashLocation } from "wouter/use-hash-location";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { Sidebar } from "@/components/layout/Sidebar";
import { Header } from "@/components/layout/Header";

import Home from "@/pages/Home";
import Historia from "@/pages/Historia";
import Filosofia from "@/pages/Filosofia";
import Instalacao from "@/pages/Instalacao";
import PrimeirosPassos from "@/pages/PrimeirosPassos";
import AmbienteGrafico from "@/pages/AmbienteGrafico";
import Apt from "@/pages/Apt";
import SnapFlatpak from "@/pages/SnapFlatpak";
import Systemd from "@/pages/Systemd";
import SistemaArquivos from "@/pages/SistemaArquivos";
import Navegacao from "@/pages/Navegacao";
import ManipulacaoArquivos from "@/pages/ManipulacaoArquivos";
import Visualizacao from "@/pages/Visualizacao";
import Permissoes from "@/pages/Permissoes";
import Usuarios from "@/pages/Usuarios";
import Processos from "@/pages/Processos";
import Redes from "@/pages/Redes";
import Ssh from "@/pages/Ssh";
import Disco from "@/pages/Disco";
import ShellBash from "@/pages/ShellBash";
import Redirecionamento from "@/pages/Redirecionamento";
import Compressao from "@/pages/Compressao";
import Avancado from "@/pages/Avancado";
import Seguranca from "@/pages/Seguranca";
import Troubleshooting from "@/pages/Troubleshooting";
import Referencias from "@/pages/Referencias";

// KERNEL & BOOT
import Kernel from "@/pages/Kernel";
import Boot from "@/pages/Boot";

// SHELL & PERSONALIZAÇÃO
import VariaveisAmbiente from "@/pages/VariaveisAmbiente";
import Aliases from "@/pages/Aliases";
import ManPages from "@/pages/ManPages";
import ExpansoesBash from "@/pages/ExpansoesBash";
import ScriptsBash from "@/pages/ScriptsBash";
import Zsh from "@/pages/Zsh";
import Cron from "@/pages/Cron";

// HARDWARE & SISTEMA
import Hardware from "@/pages/Hardware";
import Localizacao from "@/pages/Localizacao";
import JournalCtl from "@/pages/JournalCtl";
import IOStat from "@/pages/IOStat";

// PACOTES
import Dpkg from "@/pages/Dpkg";
import PPA from "@/pages/PPA";
import CodigoFonte from "@/pages/CodigoFonte";
import AppImage from "@/pages/AppImage";

// SISTEMA DE ARQUIVOS AVANÇADO
import LVM from "@/pages/LVM";
import Fstab from "@/pages/Fstab";
import Particoes from "@/pages/Particoes";

// REDE AVANÇADA
import Netplan from "@/pages/Netplan";
import DNS from "@/pages/DNS";
import VPN from "@/pages/VPN";
import Samba from "@/pages/Samba";

// CONTAINERS & VIRTUALIZAÇÃO
import Docker from "@/pages/Docker";
import DockerCompose from "@/pages/DockerCompose";
import KVM from "@/pages/KVM";

// SERVIDORES
import Nginx from "@/pages/Nginx";
import Apache from "@/pages/Apache";
import MySQL from "@/pages/MySQL";
import PostgreSQL from "@/pages/PostgreSQL";
import PHP from "@/pages/PHP";

// DESENVOLVIMENTO
import Python from "@/pages/Python";
import NodeJS from "@/pages/NodeJS";
import Java from "@/pages/Java";
import Git from "@/pages/Git";
import VSCode from "@/pages/VSCode";
import Vim from "@/pages/Vim";

// SEGURANÇA
import AppArmor from "@/pages/AppArmor";
import Fail2Ban from "@/pages/Fail2Ban";
import LUKS from "@/pages/LUKS";
import GPG from "@/pages/GPG";

// BACKUP & CLOUD
import Backup from "@/pages/Backup";
import Timeshift from "@/pages/Timeshift";
import CloudInit from "@/pages/CloudInit";
import Ansible from "@/pages/Ansible";
import Multipass from "@/pages/Multipass";
import LXD from "@/pages/LXD";
import UbuntuPro from "@/pages/UbuntuPro";
import UnattendedUpgrades from "@/pages/UnattendedUpgrades";
import ZFSZsys from "@/pages/ZFSZsys";

// DESKTOP & MULTIMÍDIA
import GNOMEExtensions from "@/pages/GNOMEExtensions";
import AmbientesAlternativos from "@/pages/AmbientesAlternativos";
import Multimedia from "@/pages/Multimedia";
import Gaming from "@/pages/Gaming";
import Wine from "@/pages/Wine";

import NotFound from "@/pages/not-found";

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

      <div className="flex-1 lg:pl-72 flex flex-col min-w-0 transition-all duration-300">
        <Header onMenuClick={() => setIsSidebarOpen(true)} />
        <main className="flex-1">
          {children}
        </main>
      </div>
    </div>
  );
}

function Router() {
  return (
    <Layout>
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

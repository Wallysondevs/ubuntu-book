import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function CodigoFonte() {
  return (
    <PageContainer
      title="Compilando do Código Fonte"
      subtitle="Como compilar programas a partir do source code no Ubuntu: make, cmake, meson e o processo completo."
      difficulty="avancado"
      timeToRead="20 min"
    >
      <p>
        Às vezes você precisa instalar um programa mais novo do que o disponível no
        repositório, ou com opções de compilação personalizadas. Compilar do código
        fonte é uma habilidade importante para qualquer usuário avançado do Linux.
      </p>

      <h2>1. Ferramentas de Compilação Essenciais</h2>
      <CodeBlock title="Instalando o ambiente de compilação" code={`# Pacote essencial que instala gcc, make, g++, etc:
sudo apt install build-essential

# Instala:
# gcc           — compilador C
# g++           — compilador C++
# make          — ferramenta de build
# dpkg-dev      — ferramentas de empacotamento Debian
# libc6-dev     — headers da biblioteca C

# Ferramentas adicionais muito usadas:
sudo apt install cmake meson ninja-build pkg-config

# Para projetos que usam autoconf:
sudo apt install autoconf automake libtool

# Para ver versões instaladas:
gcc --version
make --version
cmake --version`} />

      <h2>2. O Fluxo Clássico: configure → make → make install</h2>
      <CodeBlock title="Compilação com autoconf/automake" code={`# Fluxo mais comum em projetos C/C++ antigos:
# 1. Baixar o código fonte:
wget https://exemplo.com/programa-1.0.tar.gz
tar xzf programa-1.0.tar.gz
cd programa-1.0/

# 2. Verificar dependências e configurar:
./configure
# Opções comuns:
./configure --prefix=/usr/local       # Onde instalar (padrão)
./configure --prefix=/opt/meu-prog    # Instalar em local próprio
./configure --enable-ssl              # Ativar feature opcional
./configure --disable-gtk             # Desativar feature
./configure --help                    # Ver todas as opções

# 3. Compilar (usar todos os núcleos com -j):
make
make -j\$(nproc)     # -j com nproc = usa todos os núcleos da CPU
make -j4             # Usar 4 núcleos especificamente

# 4. Testar (opcional, se o projeto suportar):
make check
make test

# 5. Instalar no sistema:
sudo make install

# 6. Para desinstalar (se suportado):
sudo make uninstall`} />

      <h2>3. CMake — O Sistema Moderno</h2>
      <AlertBox type="info">
        CMake é o sistema de build mais popular para projetos C/C++ modernos.
        Gera Makefiles ou Ninja builds a partir de CMakeLists.txt.
      </AlertBox>
      <CodeBlock title="Compilando projetos CMake" code={`# Estrutura de um projeto CMake:
ls projeto/
# CMakeLists.txt  src/  include/  build/

# Processo padrão (out-of-source build — recomendado!):
cd projeto/
mkdir build && cd build

# Configurar:
cmake ..
cmake .. -DCMAKE_BUILD_TYPE=Release         # Build otimizado
cmake .. -DCMAKE_BUILD_TYPE=Debug           # Com debug
cmake .. -DCMAKE_INSTALL_PREFIX=/opt/prog   # Onde instalar
cmake .. -G Ninja                            # Gerar build Ninja (mais rápido)

# Compilar:
cmake --build .                   # Equivalente ao make
cmake --build . -j\$(nproc)       # Com paralelismo
cmake --build . --target install  # Compilar e instalar

# Ou com make/ninja diretamente:
make -j\$(nproc)
ninja               # Se usou -G Ninja`} />

      <h2>4. Instalando Dependências de Compilação</h2>
      <CodeBlock title="Headers e bibliotecas de desenvolvimento" code={`# Quando ./configure diz "biblioteca X não encontrada":
# Instale o pacote "-dev" correspondente

# Exemplos comuns:
sudo apt install libssl-dev         # OpenSSL
sudo apt install libcurl4-openssl-dev  # libcurl
sudo apt install libsqlite3-dev     # SQLite
sudo apt install libxml2-dev        # libxml2
sudo apt install libjpeg-dev        # libjpeg
sudo apt install libpng-dev         # libpng
sudo apt install zlib1g-dev         # zlib
sudo apt install libreadline-dev    # readline

# Buscar o pacote -dev de uma biblioteca:
apt-cache search "nome-biblioteca" | grep dev

# Ver se uma biblioteca está instalada:
pkg-config --exists openssl && echo "OpenSSL OK"
pkg-config --modversion openssl     # Ver versão

# Dica: apt build-dep instala TODAS as deps de um pacote oficial:
sudo apt build-dep nome-pacote
# Ex: sudo apt build-dep nginx  (instala todas as deps para compilar nginx)`} />
    </PageContainer>
  );
}

import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function Java() {
  return (
    <PageContainer
      title="Java no Ubuntu"
      subtitle="Instale e configure Java no Ubuntu — OpenJDK, múltiplas versões e frameworks essenciais."
      difficulty="intermediario"
      timeToRead="15 min"
    >
      <h2>1. Instalando Java</h2>
      <CodeBlock title="OpenJDK no Ubuntu" code={`# Ver Java disponível nos repositórios:
apt-cache search openjdk

# Instalar Java 21 (LTS atual):
sudo apt install openjdk-21-jdk

# Instalar apenas o JRE (para rodar, não compilar):
sudo apt install openjdk-21-jre

# Outras versões:
sudo apt install openjdk-17-jdk     # Java 17 LTS
sudo apt install openjdk-11-jdk     # Java 11 LTS

# Verificar instalação:
java --version
javac --version

# Ver onde está instalado:
which java
readlink -f \$(which java)`} />

      <h2>2. Múltiplas Versões com update-alternatives</h2>
      <CodeBlock title="Gerenciando múltiplas versões de Java" code={`# Ver versões disponíveis:
sudo update-alternatives --list java
sudo update-alternatives --config java     # Interativo — escolher padrão

# Ver versão atual:
java --version

# JAVA_HOME — variável muito usada por ferramentas:
# Adicionar ao ~/.bashrc:
echo 'export JAVA_HOME=\$(readlink -f /usr/bin/java | sed "s:bin/java::")' >> ~/.bashrc
source ~/.bashrc
echo \$JAVA_HOME`} />

      <h2>3. Ferramentas de Build — Maven e Gradle</h2>
      <CodeBlock title="Maven e Gradle para projetos Java" code={`# Instalar Maven:
sudo apt install maven
mvn --version

# Criar projeto Maven:
mvn archetype:generate -DgroupId=com.meuapp \
    -DartifactId=meu-projeto \
    -DarchetypeArtifactId=maven-archetype-quickstart

# Comandos Maven:
mvn compile         # Compilar
mvn test            # Executar testes
mvn package         # Criar JAR
mvn install         # Instalar no repositório local
mvn clean           # Limpar build anterior

# Instalar Gradle:
sudo apt install gradle
# ou via SDKMAN (versão mais recente):
curl -s "https://get.sdkman.io" | bash
sdk install gradle
gradle --version`} />
    </PageContainer>
  );
}

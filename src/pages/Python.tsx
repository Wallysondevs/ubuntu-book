import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function Python() {
  return (
    <PageContainer
      title="Python no Ubuntu"
      subtitle="Guia completo: múltiplas versões, ambientes virtuais, pip, pyenv e desenvolvimento Python no Ubuntu."
      difficulty="intermediario"
      timeToRead="25 min"
    >
      <p>
        O Ubuntu já vem com Python 3 instalado. Este guia cobre como gerenciar múltiplas
        versões, criar ambientes isolados e configurar um ambiente de desenvolvimento
        Python profissional.
      </p>

      <h2>1. Python no Ubuntu — Instalação Básica</h2>
      <CodeBlock title="Verificando e instalando Python" code={`# Ver Python instalado:
python3 --version
python3 -m pip --version

# Ubuntu usa 'python3' — o comando 'python' pode não existir:
which python3        # /usr/bin/python3
which python         # Pode não existir!

# Criar alias (opcional):
echo "alias python='python3'" >> ~/.bashrc
echo "alias pip='pip3'" >> ~/.bashrc
source ~/.bashrc

# Instalar pip (se não tiver):
sudo apt install python3-pip

# Instalar ferramentas essenciais:
sudo apt install python3-dev python3-venv python3-setuptools`} />

      <h2>2. Ambientes Virtuais (venv)</h2>
      <AlertBox type="success">
        SEMPRE use ambientes virtuais para projetos Python. Isso evita conflitos
        entre dependências de diferentes projetos.
      </AlertBox>
      <CodeBlock title="Criando e usando ambientes virtuais" code={`# Criar um ambiente virtual:
python3 -m venv meu-env

# Ativar o ambiente:
source meu-env/bin/activate
# O prompt muda para: (meu-env) usuario@host:~\$

# Verificar que está no ambiente correto:
which python        # .../meu-env/bin/python
which pip           # .../meu-env/bin/pip

# Instalar pacotes NO ambiente virtual:
pip install requests flask django numpy pandas

# Ver pacotes instalados:
pip list
pip freeze > requirements.txt    # Exportar dependências

# Instalar a partir do requirements.txt:
pip install -r requirements.txt

# Desativar o ambiente:
deactivate

# Remover o ambiente:
rm -rf meu-env`} />

      <h2>3. pyenv — Múltiplas Versões de Python</h2>
      <CodeBlock title="Gerenciando versões com pyenv" code={`# Instalar pyenv:
curl https://pyenv.run | bash

# Adicionar ao ~/.bashrc:
echo 'export PYENV_ROOT="\$HOME/.pyenv"' >> ~/.bashrc
echo 'command -v pyenv >/dev/null || export PATH="\$PYENV_ROOT/bin:\$PATH"' >> ~/.bashrc
echo 'eval "\$(pyenv init -)"' >> ~/.bashrc
source ~/.bashrc

# Instalar dependências para compilar Python:
sudo apt install build-essential libssl-dev libffi-dev \
    libsqlite3-dev libbz2-dev libreadline-dev zlib1g-dev

# Listar versões disponíveis:
pyenv install --list | grep "  3\."

# Instalar versão específica:
pyenv install 3.12.3
pyenv install 3.11.9

# Definir versão global:
pyenv global 3.12.3

# Versão local para o projeto (cria .python-version):
cd meu-projeto
pyenv local 3.11.9

# Ver versões instaladas:
pyenv versions`} />

      <h2>4. Boas Práticas de Desenvolvimento</h2>
      <CodeBlock title="Workflow profissional de Python" code={`# Estrutura de projeto recomendada:
meu-projeto/
├── .venv/              # Ambiente virtual (não versionar!)
├── .gitignore
├── requirements.txt
├── requirements-dev.txt
├── pyproject.toml      # Configuração do projeto (PEP 518)
├── src/
│   └── meu_modulo/
│       ├── __init__.py
│       └── app.py
└── tests/

# .gitignore essencial para Python:
echo ".venv/
__pycache__/
*.pyc
*.pyo
*.egg-info/
dist/
build/
.env" > .gitignore

# Formatação e linting:
pip install black flake8 isort mypy
black .                   # Formatar código automaticamente
flake8 .                  # Verificar estilo
mypy src/                 # Verificar tipos

# Instalar pacotes de ciência de dados:
pip install numpy pandas matplotlib seaborn scikit-learn jupyter

# Jupyter Notebook:
pip install jupyter
jupyter notebook          # Abre no navegador`} />
    </PageContainer>
  );
}

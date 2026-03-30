import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function Git() {
  return (
    <PageContainer
      title="Git — Controle de Versão Completo"
      subtitle="Domine o Git no Ubuntu: do básico ao avançado — branches, merge, rebase, stash, tags e fluxos de trabalho."
      difficulty="intermediario"
      timeToRead="30 min"
    >
      <p>
        O <strong>Git</strong> é o sistema de controle de versão mais usado no mundo.
        Essencial para qualquer desenvolvedor, permite rastrear mudanças, colaborar
        e reverter erros.
      </p>

      <h2>1. Instalação e Configuração Inicial</h2>
      <CodeBlock title="Instalando e configurando o Git" code={`# Instalar Git mais recente (via PPA):
sudo add-apt-repository ppa:git-core/ppa
sudo apt update && sudo apt install git

# Configuração inicial OBRIGATÓRIA:
git config --global user.name "Seu Nome"
git config --global user.email "voce@email.com"
git config --global core.editor nano           # Editor padrão
git config --global init.defaultBranch main    # Branch padrão

# Ver configurações:
git config --list
git config --global --list`} />

      <h2>2. Comandos Essenciais</h2>
      <CodeBlock title="Workflow básico do Git" code={`# Criar repositório:
git init meu-projeto
cd meu-projeto

# Clonar repositório existente:
git clone https://github.com/usuario/repo.git
git clone git@github.com:usuario/repo.git      # Via SSH

# Status e diferenças:
git status                    # Ver o que mudou
git diff                      # Ver mudanças não staged
git diff --staged             # Ver mudanças staged (prontas para commit)

# Adicionar ao staging:
git add arquivo.txt           # Arquivo específico
git add .                     # Tudo no diretório atual
git add -p                    # Interativo (escolher partes)

# Fazer commit:
git commit -m "feat: adicionar login de usuário"
git commit -am "fix: corrigir bug no formulário"  # add + commit

# Histórico:
git log
git log --oneline
git log --oneline --graph --all
git log -n 5                  # Últimos 5 commits`} />

      <h2>3. Branches e Merge</h2>
      <CodeBlock title="Trabalhando com branches" code={`# Listar branches:
git branch                    # Locais
git branch -r                 # Remotas
git branch -a                 # Todas

# Criar e mudar de branch:
git branch feature-login
git checkout feature-login
git checkout -b feature-login  # Criar E ir — equivalente aos dois acima
git switch -c feature-login    # Sintaxe moderna

# Fazer merge:
git checkout main
git merge feature-login
git merge --no-ff feature-login   # Sempre criar merge commit

# Resolver conflitos:
# 1. git merge feature-login
# 2. Ver arquivos conflitantes: git status
# 3. Editar os arquivos (remover marcadores <<<<, ====, >>>>)
# 4. git add arquivo-resolvido.txt
# 5. git commit

# Deletar branch:
git branch -d feature-login       # Após merge
git branch -D feature-login       # Forçar (sem merge)`} />

      <h2>4. Remoto — GitHub/GitLab</h2>
      <CodeBlock title="Sincronizando com repositório remoto" code={`# Adicionar remote:
git remote add origin https://github.com/usuario/repo.git
git remote -v                           # Ver remotes configurados

# Enviar para remoto:
git push origin main
git push -u origin main                 # -u = setar upstream padrão
git push                                # Após -u, pode omitir origin main

# Buscar atualizações:
git fetch origin                        # Baixa sem integrar
git pull                                # fetch + merge automático
git pull --rebase                       # fetch + rebase (histórico limpo)

# SSH Keys (mais seguro que HTTPS):
ssh-keygen -t ed25519 -C "voce@email.com"
cat ~/.ssh/id_ed25519.pub               # Copie para GitHub → Settings → SSH

# Configurar SSH para GitHub:
nano ~/.ssh/config
# Host github.com
#     IdentityFile ~/.ssh/id_ed25519`} />

      <h2>5. Recursos Avançados</h2>
      <CodeBlock title="Stash, rebase, tags e mais" code={`# STASH — guardar mudanças temporariamente:
git stash                          # Guardar mudanças não commitadas
git stash save "trabalho em progresso"
git stash list                     # Ver stashes
git stash pop                      # Restaurar último stash
git stash drop                     # Deletar stash sem restaurar

# REBASE — reorganizar histórico:
git rebase main                    # Rebase da branch atual sobre main
git rebase -i HEAD~3               # Rebase interativo — reescrever 3 commits

# TAGS — marcar versões:
git tag v1.0.0
git tag -a v1.0.0 -m "Versão 1.0.0 — lançamento inicial"
git push origin --tags

# CHERRY-PICK — trazer commit específico:
git cherry-pick abc1234            # Trazer apenas este commit

# RESET e REVERT:
git reset HEAD~1                   # Desfazer último commit (manter mudanças)
git reset --hard HEAD~1            # Desfazer e PERDER mudanças
git revert abc1234                 # Criar novo commit que desfaz abc1234`} />
    </PageContainer>
  );
}

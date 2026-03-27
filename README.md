# Ubuntu Book 📖🐧

  Um guia completo do Ubuntu em **Português Brasileiro**, do básico ao avançado.

  ## 🌐 Acesse o Site

  **[https://wallysondevs.github.io/ubuntu-book/](https://wallysondevs.github.io/ubuntu-book/)**

  ---

  ## 📚 Conteúdo

  | Capítulo | Tópico |
  |----------|--------|
  | 01 | Introdução ao Linux e Ubuntu |
  | 02 | Filosofia do Software Livre |
  | 03 | História do Ubuntu |
  | 04 | Instalação do Ubuntu |
  | 05 | Primeiros Passos |
  | 06 | Ambiente Gráfico GNOME |
  | 07 | Gerenciamento de Pacotes (APT) |
  | 08 | Snap e Flatpak |
  | 09 | Navegação pelo Terminal |
  | 10 | Manipulação de Arquivos |
  | 11 | Visualização de Conteúdo |
  | 12 | Permissões de Arquivos |
  | 13 | Redirecionamento e Pipes |
  | 14 | Sistema de Arquivos |
  | 15 | Discos e Partições |
  | 16 | Compressão e Arquivamento |
  | 17 | Processos e Jobs |
  | 18 | Redes |
  | 19 | SSH |
  | 20 | Systemd e Serviços |
  | 21 | Shell e Bash Scripting |
  | 22 | Usuários e Grupos |
  | 23 | Segurança |
  | 24 | Tópicos Avançados |
  | 25 | Troubleshooting |
  | 26 | Referências |

  ---

  ## 🛠️ Stack Tecnológica

  - **React 19** + **Vite 7**
  - **Tailwind CSS v4**
  - **Wouter** (hash routing)
  - **Framer Motion** (animações)
  - **React Syntax Highlighter** (blocos de código)
  - **Lucide React** (ícones)

  ---

  ## 🎨 Design

  - Tema Ubuntu: laranja `hsl(20 90% 55%)` e aubergine `hsl(327 46% 55%)`
  - Dark mode suportado
  - Layout responsivo (mobile, tablet, desktop)

  ---

  ## 🚀 Deploy

  O site é hospedado no **GitHub Pages** via branch `gh-pages`.

  ### Para atualizar o site após mudanças no código:

  ```bash
  # 1. Instalar dependências
  npm install

  # 2. Compilar com o caminho correto
  npx vite build --config vite.config.ts

  # 3. Fazer deploy na branch gh-pages
  npx gh-pages -d dist/public
  ```

  > **Nota:** Instale `gh-pages` se ainda não tiver: `npm install --save-dev gh-pages`

  ---

  ## 🔄 GitHub Actions (Automático)

  Para configurar deploy automático, crie o arquivo `.github/workflows/deploy.yml` com o seguinte conteúdo:

  ```yaml
  name: Deploy to GitHub Pages
  on:
    push:
      branches: [main]
    workflow_dispatch:

  permissions:
    contents: write

  jobs:
    deploy:
      runs-on: ubuntu-latest
      steps:
        - uses: actions/checkout@v4
        - uses: actions/setup-node@v4
          with:
            node-version: '20'
            cache: 'npm'
        - run: npm install
        - run: npm run build
        - uses: peaceiris/actions-gh-pages@v4
          with:
            github_token: ${{ secrets.GITHUB_TOKEN }}
            publish_dir: dist/public
  ```

  ---

  ## 📄 Licença

  Este projeto é de uso livre para fins educacionais.

  ---

  *Desenvolvido com ❤️ para a comunidade Linux brasileira*
  
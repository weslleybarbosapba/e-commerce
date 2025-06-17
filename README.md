Conferir a versão do Node.js 22 ou superior: node -v


Conferir se está instalado o npx: npx -v

## Como rodar o projeto baixado

Baixar os arquivos do GitHub.
...



git clone [<repositorio_url>](http://github.com/weslleybarbosapba/e-commerce.git) .
...

Instalar todas as dependencias indicados packge.json.
...
npm install
...



## Sequencia para criar o projeto

Criar o projeto com React e Next.js. O ponto "." indica que deve ser criado no próprio diretório.
...
npx create-next-app@latest .
...
Rodar o projeto React.
...

npm run dev
...
Acessar no navegador a URL.
...

http://localhost:3000


## Como enviar o projeto para o GtHub
  
Inicializar um novo Repositorio Git.
...
git init 
...

Adicionar todos os arquivos modificados no staging area - Área de preparação.
...

git add .
...
Commit representa um conjunto de alterações.

git commit -m "Base do projeto"
...

Verificar em qual branch está.
...
git branch
...

Renomear a branch atual no Git para main
...
git branch -M main

Adicionar um repositório remoto ao repositório local
...
git remote add origin http://github.com/weslleybarbosapba/e-commerce.git

## Para Atualizar o Git
...
git update-git-for-windows --yes
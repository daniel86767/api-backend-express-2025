# comandos
- npm init // cria o package.json para iniciar um projeto node
- npm i nome_pacote // instala um pacote especifico
- npm install ou npm i // instala todos os pacotes do package.json


# comandos git
- git init (inicia o git em uma pasta)
- git remote add origin _url_do_github_//vincula meu projeto local ao respositório do github

// configura usuario email do git na máquina ou computador
-git config --global user.name
-git config --global user.email "renancavichi@gmail.com" 

#proximas aula
- prisma orm
- validação de dados (regras de negócio) com zod
- padrão de projeot middleware


# tópicos importantes
-o que é javascript:JavaScript é uma linguagem de programação usada principalmente para adicionar interatividade a páginas web

- o que é framework:conjunto de ferramentas e recurso utilizados para desenvolvimento de algo

-o que é node.js:node é o ambiente ou runtime que faz rodar o javascript no terminal ou servidor 

- o que é o express:Express refere-se ao Express.js, um framework web para Node.js. Ele simplifica o desenvolvimento de aplicativos web e APIs 

- protocolo httpsHTTPS significa Hypertext Transfer Protocol Secure (Protocolo de Transferência de Hipertexto Seguro). É uma versão segura do HTTP, o protocolo padrão para a comunicação na web, que adiciona uma camada de segurança através da criptografia.

- o que é layout: a composição,a organização dos elementos de um site

# métodos http(get,post,put,patch,delete)
get:O método GET em APIs é utilizado para solicitar dados de um recurso específico de um servidor

put:O método PUT em APIs REST é usado para atualizar um recurso existente ou criar um novo recurso, caso ele não exista

post:O método POST em APIs REST é usado para enviar dados ao servidor para criar um novo recurso

delete: O método DELETE em APIs REST é usado para remover um recurso específico de um servidor

patch:PATCH é um método HTTP usado para realizar atualizações parciais em um recurso

-router(para que separar as rotas?
para organiza rotas)

# como mudar o formato de importação/exportação de require para import
(adicionar no package.json a propriedade type:"module")

--watch(parametro para rodar um js em modo dev, que permite rodar o script quando algum arquivo é alterado)

sintaxe básica de uma rota da api
app.post('/produto', (req,res) => {
    res.json({message:'criado com sucesso!'})
})
-método:post (post,)

# MVC:MODEL VIEW CONTROIIER(3camada)
serve para organizar código em três camadas

o que é modelo de padrão de projeto:é uma forma de escreve código e  codificar que é amplamente conhecido

o que fica na camada model(1camada):server para acesso aos banco dados e manipula de regras de negócio

o que fica na camada view(2camada)camada de apresentação visualazação interagir com usurario 

o que fica na camada controiler(3camada)controla a entrada ,processamento e saída de dados

# prisma
:é um orm object reistionsi model = modelo de objeto relacional= ferramenta que criar um relacionamento entre o javascript e o banco de dados

# porque usa um orm?
facilidade de executar e modificar os comandos no banco de dados

# qual é diferença entre as dependecia dev e dependecia
-dependecia dev são ferramentas utilizadas durante o desenvolvimento para ajudar
-dependecia normais são utilizadas intergramente no código

## comandos do prisma
npm i prisma -D
npm i @prisma/client

- inicializar o prisma
-npx prisma init

gerar o model do prisma a partir de um bd existente
-npx prisma db pull

gerar o bd a partir de um model do prisma
-npx prisma db push

gerar os arquivo necessarios para usar o prisma client no codigo
- npx prisma generate

abrir uma versão do banco de dados
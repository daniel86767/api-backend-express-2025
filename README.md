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

# tópicos importantes
-o que é javascript:JavaScript é uma linguagem de programação usada principalmente para adicionar interatividade a páginas web

- o que é framework:conjunto de ferramentas e recurso utilizados para desenvolvimento de algo

-o que é node.js:node é o ambiente ou runtime que faz rodar o javascript no terminal ou servidor 

- o que é o express:Express refere-se ao Express.js, um framework para Node.js. Ele simplifica o desenvolvimento de aplicativos web e APIs 

- protocolo https significa Hypertext Transfer Protocol Secure (Protocolo de Transferência de Hipertexto Seguro). É uma versão segura do HTTP, o protocolo padrão para a comunicação na web, que adiciona uma camada de segurança através da criptografia.

- o que é layout: a composição,a organização dos elementos de um site

-o que é npm: NPM significa Node Package Manager (Gerenciador de Pacotes do Node) e é uma ferramenta essencial para desenvolvedores JavaScript, especialmente no desenvolvimento com Node.js. 

quem cria o pacote node_modules = npm i

# como mudar o formato de importação/exportação de require para import
(adicionar no package.json a propriedade type:"module")
--watch (parametro ou atalho para rodar um js em modo dev, que permite rodar o script quando algum arquivo é alterado)

-router(para que separar as rotas?
para organiza rotas efacilita a manutenção do projeto e escabilidade)
-parâmetro de rota. exemplo: /:id

o que é parametro:diferentes tipos de dados que são passados para funções, para programas da linha de comando, ou como parte de URLs (parâmetros de consulta, parâmetros de caminho) para passar informações ao servidor

sintaxe básica de uma rota da api
app.post('/produto', (req,res) => {
    res.json({message:'criado com sucesso!'})
})
-método:post (post,)

--o que é modelo de padrão de projeto:é uma forma de escreve código e  codificar que é amplamente conhecido

para que serve o padrão de projeto mvc

qual a responsabilidade das camadas de moelo, visão e controle

 # métodos http(get,post,put,patch,delete)
get:O método GET em APIs é utilizado para solicitar dados de um recurso específico de um servidor

put:O método PUT em APIs REST é usado para atualizar um recurso existente ou criar um novo recurso, caso ele não exista

post:O método POST em APIs REST é usado para enviar dados ao servidor para criar um novo recurso

delete: O método DELETE em APIs REST é usado para remover um recurso específico de um servidor

patch:PATCH é um método HTTP usado para realizar atualizações parciais em um recurso

# MVC:MODEL VIEW CONTROIIER(3camada)
serve para organizar código em três camadas

o que fica na camada model(1camada):server para acesso aos banco dados e manipula de regras de negócio

o que fica na camada view(2camada)camada de apresentação visualazação interagir com usurario 

o que fica na camada controiler(3camada)controla a entrada ,processamento e saída de dados

# prisma
é um orm object reistionsi model = modelo de objeto relacional= ferramenta que criar um relacionamento entre o javascript e o banco de dados

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

# middlware
- é uma função
- tudo que tem req e res é uma middlware
-padrão de projeto middlware usado pelo express que divide o código em funções que são chamadas de middlware execuções



o que acontece se eu troca o token = quando você troca o token todos perde o acesso no site e vão ter que logar denovo

# avalição backend 9/12
autenticação e login de usuários
-- como salvar a senha do usuário no BD de forma segura? = salvar como hash(bcrypt)

-- autenticação (login), o que verificar e fazer no login? comparar os dados = No login: buscar o usuário no Banco de dados e comparar a senha digitada com o hash salvo  usando bcrypt; se coincidir, autentica, caso contrário, nega o acesso.

- jwt= JWT é um token compacto usado para autenticar usuários, contendo informações assinadas que permitem validar a identidade sem precisar consultar o banco a cada requisição.

-qual o significado de jwt = JSON Web Token.

- quais são  as vantagens do jwt = O payload já vem dentro do token (o backend não precisa consultar o Banco de dados), o token é assinado com o segredo do backend garantindo integridade, e ele é amplamente utilizado e compatível com várias bibliotecas

validação de dados (regra de negócio) com zod
para que serve o zod = Zod serve para criar regras de validação e garantir que cada campo siga as regras de negócio definidas antes de ser usado na aplicação.

pra que serve o partial do zod? = Zod permite que campos não enviados não sejam validados, tornando todos os campos opcionais.


erroHadler(middleware para tratamento de erros de api)
para que serve o error Haldrer? O Error Handler serve para capturar erros de forma centralizada e facilitar a manutenção, padronizando as respostas de erro da aplicação dar mensagens de erro no servidor manda mensagens amigaveis de erro para o usuário e evitar que o servidor pare(quebre).


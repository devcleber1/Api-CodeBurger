# :closed_lock_with_key: CodeBurger API 
#### :wind_chime: This is a Hamburger API project to manage orders and products in a hamburger shop. Developed with Node.js and Express, using a variety of tools and technologies to offer a robust and scalable solution. This API has been specially designed for integration with PostgreSQL and MongoDB databases, using Docker to facilitate the management and deployment of these databases. It follows the MVC (Model-View-Controller) architecture for an organized and scalable structure, like PostgreSQL.

## Index
[Installation](#Installation)

[Technologies Used](#Technologies-used)

[Usuário admin logado](#Usuário-admin-logado)

[Rota categorias](#Rota-categorias)

[Rota produtos](#Rota-produtos)

[Rota pedidos](#Rota-pedidos)

[Usuário cliente logado](#Usuário-cliente-logado)

[Rota pedidos cliente](#Rota-pedidos-cliente)

[Desenvolvedor](#desenvolvedor)

## Installation
Install the following tools: 

[Vscode](https://code.visualstudio.com/download)

[Node.js](https://nodejs.org/en/download)

[Yarn](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable)

[Insomnia](https://insomnia.rest/download)

[Docker](https://www.docker.com/products/docker-desktop/)

[Postbird](https://github.com/Paxa/postbird/releases/tag/0.8.4)

[MongoDB Compass](https://www.mongodb.com/try/download/atlascli)
 ##


### Technologies used:
+  <b>Nodejs:</b> Development platform for building server-side JavaScript applications.
+   <b>Docker:</b> Docker is open source software used to deploy applications inside virtual containers. Containerization allows multiple applications to work in different complex environments.
+  <b>Express:</b> Minimalist web framework for Node.js, making it easy to build APIs.
+  <b>ESLint:</b> Static code analysis tool to identify problematic patterns in JavaScript code.
+  <b>Sucrase:</b> Transpiler that allows you to use the latest JavaScript features, such as import/export, in Node.js environments.
+ <b>Nodemon:</b> Used to monitor changes to files and automatically restart the server during development.
+ <b>Token JWT:</b>  Used to authenticate and authorize users in the API, guaranteeing security and access control. Used to authenticate and authorize users in the API, ensuring security and access control.
+ <b>Multer:</b>  Middleware for handling multipart/form-data forms, commonly used for uploading files.Middleware for handling multipart/form-data forms, commonly used for uploading files.
+ <b>Yup:</b> Library for validating JavaScript object schemas, guaranteeing the integrity and validity of the data received by the API.Library for validating JavaScript object schemas, guaranteeing the integrity and validity of the data received by the API.
+ <b>Bcrypt:</b> Used to encrypt passwords, guaranteeing the security of user credentials.
+ <b>Mongoose:</b>  ODM (Object-Document Mapping) for MongoDB, facilitating interaction with the NoSQL database.ODM (Object-Document Mapping) for MongoDB, facilitating interaction with the NoSQL database.
+  <b>Sequelize:</b>  ORM (Object-Relational Mapping) for Node.js, offering support for interaction with relational databases such as PostgreSQL.

##

Open vscode.

👨🏾‍💻 Open a terminal and make a clone of the project.
```
git clone https://github.com/kreby4555/Api-CodeBurger.git
```
<img src="https://github.com/stanley-rodrigues/picForReadme/blob/main/api%20Devburguer/terminal.png"/>
<img src="https://github.com/stanley-rodrigues/picForReadme/blob/main/api%20Devburguer/colar%20link%20api.png"/>

After making the clone, while the terminal is still open, type the command "cd api-dev-burger" and press enter. 
```
cd api-dev-burger
```
In the terminal, give the command "yarn install" to download the project's dependencies. 
```
yarn install
```
After downloading the project's dependencies, you'll need to upload the containers with the postgres and mongoDB databases using the commands in the terminal:

```
docker run --name codeburger-postgres -e POSTGRES_PASSWORD=postgres -p 5432:5432 -d postgres
```
Then the MongoDB container
```
docker run --name mongo -p 27017:27017 -d -t mongo
```

After the two contaneires have been created, open docker and start them both.After the two contaneires have been created, open docker and start them both.

<img src="https://github.com/stanley-rodrigues/picForReadme/blob/main/api%20Devburguer/Captura%20de%20Tela%202023-11-16%20%C3%A0s%2021.11.00.png"/>

Return to vscode and run the command in the terminal:
```
yarn sequelize db:migrate
```
<img src="https://github.com/kreby4555/Api-CodeBurger/assets/108768059/67690463-29f3-4789-a5a2-e7548972e361"/>

To create the tables in the bank that can be seen in postbird. Open postbird, enter "postgres" in the Username and Password fields and click connect.
<img src="https://github.com/stanley-rodrigues/picForReadme/blob/main/api%20Devburguer/postgres.png"/>
<img src="https://github.com/stanley-rodrigues/picForReadme/blob/main/api%20Devburguer/postgresTables.png"/>

Return to vscode and run the command in the terminal:
```
yarn dev
```
And the application will be running.

# Como usar

abra o insomnia crie uma rota POST e mande pelo body: name,email,password e admin sendo true(para criar um administrador) e false (para usuário cliente).Usando url
```
http://localhost:3001/users
```

<img src="https://github.com/stanley-rodrigues/picForReadme/blob/main/api%20Devburguer/user.png"/>

## Usuário admin logado

Crie uma rota POST e mande pelo body: email e password. Ao logar será gerado um token (guarde pois será utilizados nas demais rotas).Usando url.
```
http://localhost:3001/sessions
```

<img src="https://github.com/stanley-rodrigues/picForReadme/blob/main/api%20Devburguer/login.png"/>

### Rota categorias

Crie uma rota POST e mude o body de json para multipart, mandando name e file (foto que representa sua categoria a ser criada).Usando url
```
http://localhost:3001/categories
```
No campo Auth mude para bearer token e adicione o token gerado no login no campo de valor. E faça a requisição.

<img src="https://github.com/stanley-rodrigues/picForReadme/blob/main/api%20Devburguer/cria%20categoria.png"/>

Para visualizar todas as categorias, crie uma rota GET Usando url
```
http://localhost:3001/categories
```
No campo Auth mude para bearer token e adicione o token gerado no login no campo de valor. E faça a requisição.

Para editar alguma categoria, crie uma rota PUT Usando url e após a / adicione o id gerado na criação da categoria. Para buscar o id de uma categoria basta acessa a rota GET.Mude o body de json para multipart e mande name com o nome que você colocar com valor 
```
http://localhost:3001/categories/
```
No campo Auth mude para bearer token e adicione o token gerado no login no campo de valor. E faça a requisição.

### Rota produtos

Crie uma rota POST e mude o body de json para multipart, mandando name, price, category_id(id que é gerado a cada criação de uma categoria, escolha a que melhor representa seu produto) e file (foto que representa seu produto a ser criado).Usando url
```
http://localhost:3001/products
```

No campo Auth mude para bearer token e adicione o token gerado no login no campo de valor. E faça a requisição.

<img src="https://github.com/stanley-rodrigues/picForReadme/blob/main/api%20Devburguer/produtos.png"/>

Para visualizar todas os produtos, crie uma rota GET Usando url
```
http://localhost:3001/products
```
No campo Auth mude para bearer token e adicione o token gerado no login no campo de valor. E faça a requisição.

Para editar algum produto, crie uma rota PUT Usando url e após a / adicione o id gerado na criação do produto. Para buscar o id de um produto basta acessa a rota GET.Mude o body de json para multipart e mande offer sendo true ou false(se desejar) name(se desejar) file(se desejar)
```
http://localhost:3001/products/
```
No campo Auth mude para bearer token e adicione o token gerado no login no campo de valor. E faça a requisição.

<img src="https://github.com/stanley-rodrigues/picForReadme/blob/main/api%20Devburguer/editproduto.png"/>

### Rota pedidos

Crie uma rota POST, mandando um array products com objeto contendo id e quantity. id é referente ao id do produto(para buscar o id de um produto basta acessa a rota GET) e quantity a quantidade desejada do item.Usando url
```
http://localhost:3001/orders
```

No campo Auth mude para bearer token e adicione o token gerado no login no campo de valor. E faça a requisição.
<img src="https://github.com/stanley-rodrigues/picForReadme/blob/main/api%20Devburguer/criarpedido.png"/>

Para visualizar o pedido, crie uma rota GET Usando url
```
http://localhost:3001/orders
```
No campo Auth mude para bearer token e adicione o token gerado no login no campo de valor. E faça a requisição.

Para editar algum pedido, crie uma rota PUT Usando url e após a / adicione o id gerado na criação do pedido. Para buscar o id de um pedido basta acessa a rota GET.Mandado status e a mensagem desejada no body
```
http://localhost:3001/orders/
```
No campo Auth mude para bearer token e adicione o token gerado no login no campo de valor. E faça a requisição.

<img src="https://github.com/stanley-rodrigues/picForReadme/blob/main/api%20Devburguer/editorder.png"/>

## Usuário cliente logado

Na rota POST e mande pelo body: name,email,password e admin sendo false (para usuário cliente).Usando url
```
http://localhost:3001/users
```

<img src="https://github.com/stanley-rodrigues/picForReadme/blob/main/api%20Devburguer/user.png"/>

Na rota POST e mande pelo body: email e password. Ao logar será gerado um token (guarde pois será utilizados nas demais rotas).Usando url.
```
http://localhost:3001/sessions
```

<img src="https://github.com/stanley-rodrigues/picForReadme/blob/main/api%20Devburguer/login.png"/>

### Rota pedidos cliente

Na POST, mandando um array products com objeto contendo id e quantity. id é referente ao id do produto(para buscar o id de um produto basta acessa a rota GET) e quantity a quantidade desejada do item.Usando url
```
http://localhost:3001/orders
```

No campo Auth mude para bearer token e adicione o token gerado no login no campo de valor. E faça a requisição.
<img src="https://github.com/stanley-rodrigues/picForReadme/blob/main/api%20Devburguer/criarpedido.png"/>

Para visualizar o pedido, crie uma rota GET Usando url
```
http://localhost:3001/orders
```
No campo Auth mude para bearer token e adicione o token gerado no login no campo de valor. E faça a requisição.




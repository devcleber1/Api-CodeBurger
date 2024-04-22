# :closed_lock_with_key: CodeBurger API 
#### :wind_chime: This is a Hamburger API project to manage orders and products in a hamburger shop. Developed with Node.js and Express, using a variety of tools and technologies to offer a robust and scalable solution. This API has been specially designed for integration with PostgreSQL and MongoDB databases, using Docker to facilitate the management and deployment of these databases. It follows the MVC (Model-View-Controller) architecture for an organized and scalable structure, like PostgreSQL.

![api](https://github.com/kreby4555/Api-CodeBurger/assets/108768059/3dd07b6a-6ee6-430b-9afc-6ee98dab963a)




## Index
[Installation](#Installation)

[Technologies Used](#Technologies-used)

[Admin user logged in](#Admin-user-logged-in)

[Routes Categories](#Route-categories)

[Product route](#Productroute)

[Order route](#Orderroute)

[Client user logged in](#Client-user-logged-in)

[Customer order route](#Customer-order-route)

[Developer](#Developer)

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

# How to use

Open insomnia create a POST route and send through the body: name,email,password and admin being true (to create an administrator) and false (for client user).Using url:
```
http://localhost:3001/users
```

<img src="https://github.com/stanley-rodrigues/picForReadme/blob/main/api%20Devburguer/user.png"/>

## Admin user logged in

Create a POST route and send the body: email and password. When you log in, a token will be generated (save it as it will be used for other routes).Using url:
```
http://localhost:3001/sessions
```

<img src="https://github.com/stanley-rodrigues/picForReadme/blob/main/api%20Devburguer/login.png"/>

### Route categories

Create a POST route and change the body from json to multipart, sending name and file (photo that represents your category to be created).Using url
```
http://localhost:3001/categories
```
In the Auth field, change it to bearer token and add the token generated at login to the value field. And make the request.

<img src="https://github.com/stanley-rodrigues/picForReadme/blob/main/api%20Devburguer/cria%20categoria.png"/>

To view all the categories, create a GET route Using url:
```
http://localhost:3001/categories
```
In the Auth field, change it to bearer token and add the token generated at login to the value field. And make the request.

To edit a category, create a PUT route Using url and after / add the id generated when creating the category. To retrieve the id of a category, simply access the GET route. Change the body from json to multipart and send name with the name you set with the value:
```
http://localhost:3001/categories/
```
He Auth field, change it to bearer token and add the token generated at login to the value field. And make the request.

### Product route

Create a POST route and change the body from json to multipart, sending name, price, category_id(id that is generated each time a category is created, choose the one that best represents your product) and file (photo that represents your product to be created).Using url:
```
http://localhost:3001/products
```

In the Auth field, change it to bearer token and add the token generated at login to the value field. And make the request.

<img src="https://github.com/stanley-rodrigues/picForReadme/blob/main/api%20Devburguer/produtos.png"/>

To view all the products, create a GET route Using url
```
http://localhost:3001/products
```
In the Auth field, change it to bearer token and add the token generated at login to the value field. And make the request.

To edit a product, create a PUT route Using url and after / add the id generated when creating the product. Change the body from json to multipart and send offer as true or false (if desired) name (if desired) file (if desired).

```
http://localhost:3001/products/
```
In the Auth field, change it to bearer token and add the token generated at login to the value field. And make the request.

<img src="https://github.com/stanley-rodrigues/picForReadme/blob/main/api%20Devburguer/editproduto.png"/>

### Order route

Create a POST route, sending an array products with an object containing id and quantity. id refers to the id of the product (to search for the id of a product just access the GET route) and quantity the desired quantity of the item.Using url:
```
http://localhost:3001/orders
```

In the Auth field, change it to bearer token and add the token generated at login to the value field. And make the request.
<img src="https://github.com/stanley-rodrigues/picForReadme/blob/main/api%20Devburguer/criarpedido.png"/>

To view the request, create a GET route Using url:
```
http://localhost:3001/orders
```
In the Auth field, change it to bearer token and add the token generated at login to the value field. And make the request.

To edit an order, create a PUT route Using url and after / add the id generated when creating the order. To search for the id of an order, simply access the GET route.Mandado status and the desired message in the body
```
http://localhost:3001/orders/
```
In the Auth field, change it to bearer token and add the token generated at login to the value field. And make the request.

<img src="https://github.com/stanley-rodrigues/picForReadme/blob/main/api%20Devburguer/editorder.png"/>

## Client user logged in

In the POST route and send through the body: name,email,password and admin being false (for client user).Using url:
```
http://localhost:3001/users
```

<img src="https://github.com/stanley-rodrigues/picForReadme/blob/main/api%20Devburguer/user.png"/>

In the POST route and send through the body: email and password. When you log in, a token will be generated (save it as it will be used in the other routes).Using url.
```
http://localhost:3001/sessions
```

<img src="https://github.com/stanley-rodrigues/picForReadme/blob/main/api%20Devburguer/login.png"/>

### Customer order route

In the POST, sending an array products with an object containing id and quantity. id refers to the id of the product (to search for the id of a product just access the GET route) and quantity the desired quantity of the item.Using url:
```
http://localhost:3001/orders
```

In the Auth field, change it to bearer token and add the token generated at login to the value field. In the Auth field, change to bearer token and add the token generated at login to the value field. And make the request.
<img src="https://github.com/stanley-rodrigues/picForReadme/blob/main/api%20Devburguer/criarpedido.png"/>

To view the request, create a GET route Using url:
```
http://localhost:3001/orders
```
In the Auth field, change it to bearer token and add the token generated at login to the value field. And make the request.

## Developer
Developed by Cleber.

:email: devcleber@outlook.com


</br>
</br>
<a href="https://www.linkedin.com/in/cleberalvesnunes/"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" /></a>
<a href="https://github.com/kreby4555"><img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" /></a>



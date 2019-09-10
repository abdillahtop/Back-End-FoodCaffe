# Back End Food&Coffe( Point Of Sell )
![](https://img.shields.io/badge/Code%20Style-Standard-yellow.svg)
![](https://img.shields.io/badge/Dependencies-Express-green.svg)
![](https://img.shields.io/badge/License-Beerware-yellowgreen.svg)

<p align="center">
  <a href="https://nodejs.org/">
    <img src="https://cdn-images-1.medium.com/max/871/1*d2zLEjERsrs1Rzk_95QU9A.png">
  </a>
</p>


## Table of Contents

- [Prerequiste](#prerequiste)
- [Instalation](#installation)


- [Link Collection Postman](#link-collection-postman)
- [Structur Folder](#structur-folder)
- [Contributors](#contributors)


## Prerequiste
- Node.js - Download and Install [Node.js](https://nodejs.org/en/) with [NVM](https://github.com/creationix/nvm) (Node Version Manager) - Simple bash script to manage multiple active node.js versions.
- MySQL - Download and Install [MySQL](https://www.mysql.com/downloads/) - Make sure it's running on the default port.  

## Installation
### Clone
```
$ git clone https://github.com/abdillahtop/Back-End-FoodCaffe.git
$ cd Back-End-FoodCaffe
$ npm install
```

### Create Environment Variable
```
$ touch .env
$ nano .env
```

```
DB_HOST="Your_Host"
DB_USER="Your_Username"
DB_PASSWORD="Your_Password"
DB_NAME="Your_Table"

SERVER_PORT=9999

CLOUD_NAME= CLOUD NAME
API_KEY= API_KEY
API_SECRET=  API_SECRET

```
### Start Development Server
```
$ npm start
```
## Link Collection Postman
[Postman](https://www.getpostman.com/collections/0bbf530d90b9a9373168)

## Structur Folder
```
\---src
|    \---configs
|    |   +---db.js            
|    \---controllers
|    |   +---category.js
|    |   +---history.js
|    |   +---menu.js
|    |   +---user.js
|    \---helper
|    |   +---auth.js
|    |   +---helper.js
|    \---models
|    |   +---category.js
|    |   +---history.js
|    |   +---menu.js
|    |   +---user.js
|    \---routers
|    |   +---category.js
|    |   +---history.js
|    |   +---menu.js
|    |   +---user.js
+---app.js
```

## Contributors
<center>
  <table>
    <tr>
      <td align="center">
        <a href="https://github.com/abdillahtop/">
          <img width="100" src="https://avatars3.githubusercontent.com/u/50162090?s=460&v=4" alt="Abdillah Dzulfikar M"><br/>
          <sub><b>Abdillah Dzulfikar Mustanir</b></sub>
        </a>
      </td>
    </tr>
  </table>
</center>

### License
----
© [Abdillah Dzulfikar Mustanir](https://github.com/abdillahtop/)

This application was created with help of  
[Angular FullStack Generator](https://github.com/angular-fullstack/generator-angular-fullstack)  

**IMPORTANT!**
The generator's version is 3.6.1.

To install the generator use the following command:
npm install -g generator-angular-fullstack@3.6.1
*NOTE*: the generator is only required for development (to generate the server's endpoints, for example).


# Prerequisites

  * Node.js (recommended 8.x).
  * MongoDB (recommended 3.x).


# Features

  * MongoDB integration, mongoose, endpoint/resource model example
  (Thing model), the models are saved/read into/from a database.
  * "Things" endpoint - proto for future real API endpoint.
  * socket.io included. The models push update notifications to clients
  via sockets.
  * The auth is included. "Local" auth using username/password, password
  changing. "User" model stored in the database. "Users" resource/endpoint.
  JWT. User roles supported. Users management by admins.
  3-rd party authentication skeletons (google, facebook, twitter).
  * Swagger documentation available under <code>/docs</code>
  * Tests via mocha/chai. Run <code>npm test</code>.
  * minimal server functions: body parsing, cookies, sessions, logging, etc.

# How to use static
# How to use auth
# How to use sockets
# How to deploy

# TODOs

  * Halmet
  * https
  * Auto deploy
  * Swagger in production


# Run application in development mode

  1. node server/app.js
  2. open in browser http://localhost:9000/docs/ for API documentation.

  or you can use *nodemon* instead of *node* to run the app.


# Run application in production mode

  1. set NODE_ENV=production
  2. node server/app.js
  3. open in browser http://your-address/docs/ for API documentation.

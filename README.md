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


# How to use auth and socket push notification

  See this repo's code (backend) and https://github.com/azakharo/react-starter.git repo (frontend) for example.


# How to use static


# How to deploy to Heroku

  First, read the docs: https://devcenter.heroku.com/articles/deploying-nodejs, https://www.sitepoint.com/how-to-deploy-node-applications-heroku-vs-now-sh/
  After the reading and performing the preparations, the deployment is easy:
  1. heroku create <app-name>
  2. git push heroku master


# Swagger documentation in production

  For the Swagger documentation work in production do the following:
  * open swagger.yaml file
  * change 'host' value according to your application address.
  * change 'schema' value if necessary.

  Swagger documentation will be available at https://<your-app-name>.herokuapp.com/docs address.


# TODOs

  * Halmet
  * https


# Run application in development mode

  1. node server/app.js
  2. open in browser http://localhost:9000/docs/ for API documentation.

  or you can use *nodemon* instead of *node* to run the app.


# Run application in production mode

  1. set NODE_ENV=production
  2. node server/app.js
  3. open in browser http://your-address/docs/ for API documentation.

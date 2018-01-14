# Usage, the goal of this project.

You are developing a new REST API on Node.js. And you want a quick start.
You need a database to store data, authentication and user management,
API documentation and some other base functionality.
If so, then this project is for you. And it's free!


# Demo

[Demo on heroku](https://aza-node-starter.herokuapp.com)

Opening the link will probably take several seconds, because I am using a free
account and the deployed application is sleeping.


# Features

  * MongoDB integration, mongoose package included.
  * Data model examples (*Thing* and *User* models), the models are stored in MongoDB.
  * REST API endpoint/resource examples (*Thing* and *User* REST resources) which work with the data models.
  * The server sends push update notifications to its client when the models change in the database. This is done via socket.io package.
  * The authentication is included. *"Local"* auth using username/password,
  password changing. JWT tokens are sent to the clients and back for auth.
  *Users* are stored in the database. *Users* REST endpoint.
  User roles are supported. Users management by admins.
  Also 3-rd party authentication skeletons are included (for auth using google, facebook and twitter).
  * API documentation example is included. The documentation is developed via Swagger.
  You can read the doc under <code>\<your-server-address\>/docs</code> URL.
  Also you can try your API using that interactive documentation.
  * Unittest examples are included. They are implemented using mocha and chai.
  Run <code>npm test</code>.
  * Also some other base server functions are implemented, such as
  body parsing, cookies, logging, etc.


# Prerequisites

  * Node.js (recommended 8.x).
  * MongoDB (recommended 3.x).


# Run application in the development mode

  1. open *swagger.yaml* file in an editor.
  2. set *host* value to *localhost:9000*
  3. find *schemes* section and replace *https* with *http*.
  4. Save and exit the editor.
  5. run <code>node server/app.js</code> or <code>npm start</code> from the root folder of the repo.
  6. run browser and open http://localhost:9000/docs. Read the API documentation and try the API!

  You can use *nodemon* instead of *node* to run the app. It can be useful if you want to change the server's code.
  In the development mode local MongoDB is used.


# Run application in the production mode

  1. open *swagger.yaml* file in an editor.
  2. set *host* value to *<your_server_address_port>*
  3. find *schemes* section and set either *https* or *http*.
  4. Save and exit the editor.
  5. Set NODE_ENV env var to *production* value
  6. run <code>node server/app.js</code> or <code>npm start</code> from the root folder of the repo.
  7. run browser and open http://your_server_address_port/docs. Read the API documentation and try the API!

  In the production mode remote MongoDB is used (mlab.com). It can be configured in <code>config/environment/production.js</code>


# How to use the auth and socket push notifications

  For this you need to examine the source code in this repository.
  For base API URLs see *routes.js*.
  For API example endpoints examine *api* sub-folder.
  For auth look at the *auth* sub-folder.
  For sockets look at *config/socketio.js* file.

  **IMPORTANT**
  Also I have prepared the example frontend application (React.js) which works with this backend.
  You saw that frontend application by the demo link above.
  Its source code can be found here: https://github.com/azakharo/react-starter.git
  This is a very good example of how to work with this server. Just examine or copy the code.


# How to add public static content (html, js, css) to this server

  You can easily add a frontend application to this server.
  Just put your static content into **public** subdirectory.
  Replace the current content. As an example I put my demo frontend application there (mentioned above).


# How to deploy to Heroku

  First, read the docs:
  * https://devcenter.heroku.com/articles/deploying-nodejs
  * https://www.sitepoint.com/how-to-deploy-node-applications-heroku-vs-now-sh/

  After the reading and some preparations like registering on heroku.com, the deployment is easy as:
  1. heroku create <app-name>
  2. git push heroku master

  After every application change for deployment you will do <code>git push heroku master</code>


# Notes

This application was created with the help of
[Angular FullStack Generator](https://github.com/angular-fullstack/generator-angular-fullstack)

**IMPORTANT!**
The generator's version I used was 3.6.1.

The generator may be only required for development. For example, to generate a new REST endpoint.

To install the generator use the following command:
npm install -g generator-angular-fullstack@3.6.1

After that read the generator's docs.

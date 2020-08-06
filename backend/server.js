const express = require('express')
const port = process.env.PORT || 5000 // process.env.port is Heroku's port if you choose to deploy the app there
const mongoose = require('mongoose')
const Task = require('./api/models/todoListModel') //Loading model here
const bodyParser = require('body-parser')
const passport = require('passport')

const app = express()

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tododb');

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());

// Passport middleware
app.use(passport.initialize());

// Passport config
require('./config/passport')(passport);

// TODO Fix this later, import/export the same way
const routes = require('./api/routes/todoListRoutes'); //importing route
const users = require('./api/routes/usersRoutes');

// Routes
app.use('/users', users);
routes(app); //register the route

app.use(function(req, res) {
  res.status(404).send({
    url: req.originalUrl + ' not found'
  })
});

app.listen(port);
console.log('todo list RESTful API server started on: ' + port);

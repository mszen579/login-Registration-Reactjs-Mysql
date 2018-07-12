//index.js
//this is our server file

var express = require("express");
var bodyParser = require('body-parser');



var cors = require('cors');
var cookieParser = require('cookie-parser');
var session = require('express-session');



var connection = require('./models/dbConnection'); //to connect to the models
var app = express();


//middelware
app.use(cors({
    origin: ['http://localhost:3000'],
    methods: ['GET', 'POST', 'DELETE', 'PUT'],
    credentials: true // enable set cookie
}));
app.use(bodyParser.json());

app.use(cookieParser());
app.use(session({
    secret: 'supersecretstring12345!',
    saveUninitialized: false,
    resave: true,
    cookie: {
        maxAge: (60000 * 30)
    },
}))



var authenticateController = require('./controllers/authenticate-controller');
var registerController = require('./controllers/register-controller');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

//this for nodeserver view
app.get('/', function (req, res) {
    res.sendFile(__dirname + "/view/" + "index.html");
})
//this for nodeserver view
app.get('/login', function (req, res) {
    res.sendFile(__dirname + "/view/" + "login.html");
})
//this for nodeserver view
//to forward to 404 
app.get('*', function (req, res) {
    res.sendFile(__dirname + "/view/" + "404.html");
});

/* route to handle login and registration */
app.post('/api/register', registerController.register);
app.post('/api/authenticate', authenticateController.authenticate);

console.log(authenticateController);
app.post('/controllers/register-controller', registerController.register);
app.post('/controllers/authenticate-controller', authenticateController.authenticate);
app.listen(8000);
console.log('Server is listen to port 8000'); //or we can use 127.0.0.1

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const nodemailer = require("nodemailer");
const todoRoutes = require('./nodej2/rout')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

const port = 5000;

app.use(todoRoutes)



app.listen(port);
console.log('Server started! At http://localhost:' + port);

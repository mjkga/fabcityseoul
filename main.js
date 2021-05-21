'use strict'
const express = require('express');
const cors = require('cors');
const path = require('path');
const dotenv = require('dotenv');
const errorPageReturn = require('./node/errorPage');
dotenv.config(); //LOAD CONFIG

const app = express();

app.use(express.static(__dirname + '/files'));
app.use(cors());

app.set('views','./files')
app.set('view engine','ejs');
app.engine('html', require('ejs').renderFile);

// routing
app.get('/', function (req, res) {
    res.render("index.html");
});
app.get('/origin', function (req, res) {
    res.render("index_origin.html");
});
app.get('/cases', function (req, res) {
    res.render("cases.html");
});
app.get('/e', function (req, res) {
    errorPageReturn(res);
});



// open port
app.listen( process.env.WEB_SERVER_PORT, function(){
    console.log(
        '## web server listening on port', 
        process.env.WEB_SERVER_PORT);
});


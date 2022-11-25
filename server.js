
// 'use strict'; // or don't, it's up to you, man

// Constants
const PORT = 3000;
const HOST = '0.0.0.0';

const express = require('express');
const path = require('path');

// App
const app = express();
app.use(express.json());
app.use(express.static("express"));

// Default URL for website
app.use('/', function(req,res){
  res.sendFile(path.join(__dirname+'/express/index.html')); // __dirname will resolve to project folder.
});

// Listen for requests
app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
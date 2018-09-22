const express = require('express');
const app = express();
const port = 4000;

app.use('/scripts', express.static(__dirname + '/node_modules/'));

app.listen(port, ()=>{console.log(port)})
var express = require('express');
var app = express();

app.get('/',function(req,res){
app.use(express.static('public'));
res.sendFile('index.html' , { root : __dirname});
  //It will find and locate index.html from View or Scripts
});

app.listen(3000, function () {
  console.log('Start localhost:3000');
});
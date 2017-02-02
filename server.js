var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/articleone',(req,res)=>{

  res.sendFile(path.join(__dirname,'ui','articleone.html'));
})
app.get('/articletwo',(req,res)=>{
  res.sendFile(path.join(__dirname,'ui','articletwo.html'));
})
app.get('/articlethree',(req,res)=>{
  res.sendFile(path.join(__dirname,'ui',"articlethree.html"));

    res.send("Article One is requested");
})
app.get('/articletwo',(req,res)=>{
    res.send("Article Two is requested");
})
app.get('/articlethree',(req,res)=>{
    res.send("Article Three is requested");

})
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});

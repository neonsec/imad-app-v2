var express = require('express');
var morgan = require('morgan');
var path = require('path');
var app = express();
app.use(morgan('combined'));

var articles={
   articleone: {title2: "Article One | Neonsec" ,
    heading: 'Article One',
    date: new Date(),
    content: `  <p> This content is from Page 1 This content is from Page 1This content is from Page 1This content is from Page 1
                    This content is from Page 1This content is from Page 1
                  This content is from Page 1</p>
                <p> This content is from Page 1 This content is from Page 1This content is from Page
                  1This content is from Page 1
                  This content is from Page 1This content is from Page 1
                  This content is from Page 1</p>
                <p> This content is from Page 1 This content is from Page 1This content is from Page
                  1This content is from Page 1
                  This content is from Page 1This content is from Page 1
                      This content is from Page 1</p>`},
    articletwo: {title2: "Article two | Neonsec" ,
    heading: 'Article two',
    date: new Date(),
    content: `  <p> This is the page from article 2 This is the page from article 2 
                    This is the page from article 2 This is the page from article 2 
                    This is the page from article 2 
                    </p>
                    <p> This is the page from article 2 This is the page from article 2 
                    This is the page from article 2 This is the page from article 2 
                    This is the page from article 2 
                    </p>
                    <p> This is the page from article 2 This is the page from article 2 
                    This is the page from article 2 This is the page from article 2 
                    This is the page from article 2 
                    </p>`},
    articlethree: {title2: "Article Three | Neonsec" ,
    heading: 'Article Three',
    date: new Date(),
    content: ` <p> This is the page from article 3 This is the page from article 3
                    This is the page from article 3 This is the page from article 3
                    This is the page from article 3 
                    </p>
                    <p> This is the page from article 3 This is the page from article 3
                    This is the page from article 3 This is the page from article 3
                    This is the page from article 3 
                    </p>
                    <p> This is the page from article 3 This is the page from article 3
                    This is the page from article 3 This is the page from article 3 
                    This is the page from article 3
                    </p>`}
}

var createTemplate = (data)=>{
    var title2 = data.title2
    var heading = data.heading;
    var content= data.content;
    var date = data.date;
        var htmlTemplate = `<html>
            <head>
              <title> Article  </title>
              <meta name="viewport" content="width=device-width, initial-scale=1">
              <link href="ui/style.css" type="text/css" rel="stylesheet">
          </head>
        <body>
          <div class="container">
                <h1> Welcome to ${title2}</h1>
                <p>Hello World welocme to ${heading}</p>
                <a href = "/"> Home </a>
                <hr>
                <h3> ${heading}</h3>
                  <div>
                    ${date}
                  </div>
            
                  <div>
                   ${content}
                  </div>
      </div>
  </body>
</html>`
return htmlTemplate
}
// var articles = {
//    articleone : {title: "Article One | Neonsec" ,
//     heading: 'A rticle One',
//     date: new Date(),
//     content: "<h1> Hello this is 1"
    

// },
//  articletwo :{
//   title: "Article two | Neonsec" ,
//     heading: 'Article two',
//     date: new Date(),
//     content: "<h1> Hello this is 2"
    
// },
// articlethree :{title: "Article three | Neonsec" ,
//     heading: 'Article three',
//     date: new Date(),
//     content: "<h1> Hello this is 3"
    

// }

// }






app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});


// app.get('/:articleName',(req,res)=>{
//     var articleName = req.params.articleName;
//     console.log(articles[articleName]);
//     console.log(articles.articleName)
//   res.send(createTemplate(articles[articleName]));

// })



app.get('/:articleName',(req,res)=>{
  var articleName = req.params.articleName
   res.send(createTemplate(articles[articleName]))
})
// app.get('/articletwo',(req,res)=>{
//     res.sendFile(path.join(__dirname,'ui','articletwo.html'))
// })
// app.get('/articlethree',(req,res)=>{
//     res.sendFile(path.join(__dirname,'ui','articlethree.html'))
// })

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

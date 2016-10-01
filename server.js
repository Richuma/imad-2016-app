var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articleOne= {
  title:    'Article One: Richard',
  haeding: 'Article One',
  date: 'Sep 5,2016',
  content: 'This is my first conset page This is my first conset pageThis is my first conset pageThis is my first conset page This is my first conset page This is my first conset page This is my first conset page This is my first conset page '
};

function createTemplate(data){
var title = data.title;
var date  = data.date;
var heading = data.heading;
var content = data.content;

var htmltemplate = `
<html>
    <head>
        <title>
            ${title}
        </title>
        <meta name="viexport" content="width=device=width,intial-sccale-1"/>
        <link href="/ui/style.css" rel="stylesheet" />
         </head>
    <body>
        <div> 
            <a href="/">Home</a>
        </div>
        <hr/>
        <h3>
            ${heading}
        </h3>
        <div>
        ${date}
        </div}
        <div>
            
                this is my first web page
        </div>
        ${content}
        <div>
     </div>
    </body>
</html>
`;
 return htmlTemplate;
}
app.get('/', function (req, res) {
  res.send(createTemplate(aticleOne));
});

app.get('/article-one', function(eq,res){
  res.sendFile(path.join(__dirname, 'ui', 'article-one.html'));
});

app.get('/article-two', function(eq,res){
  res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});

app.get('/article-three', function(eq,res){
  res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});

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

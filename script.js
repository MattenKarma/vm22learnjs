const express = require('express');
const app = express();
const nunjucks = require ('nunjucks');

nunjucks.configure('views', {
  autoescape: true,
  express: app
});

app.get('/', function (req, res) {
  let name = req.query.name; 
  let age = req.query.age; 
  res.render('index.njk', {name, age});
});

app.use(express.urlencoded());

app.post('/answer', function (req, res) {
  let name = req.body.name; 
  let age = req.body.age; 
  res.render('answer.njk', {name, age});
});

app.get('/about', function (req, res) {
  res.render('about.njk');
})
app.listen(3000);
console.log('Server started on http://localhost:3000');


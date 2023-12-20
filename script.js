const express = require('express');
const app = express();
const nunjucks = require ('nunjucks');

nunjucks.configure('views', {
  autoescape: true,
  express: app
});

app.get('/', function (req, res) {
  let sideA = req.query.sideA; 
  let sideB = req.query.sideB; 
  res.render('index.njk', {sideA, sideB});
});

app.use(express.urlencoded());

app.post('/answer', function (req, res) {
  let name = req.body.name; 
  let age = req.body.age; 
  res.render('answer.njk', {sideA, sideB});
});

app.get('/about', function (req, res) {
  res.render('about.njk');
})
app.listen(3000);
console.log('Server started on http://localhost:3000');


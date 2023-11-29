const express = require('express');
const app = express();
const nunjucks = require ('nunjucks');

nunjucks.configure('views', {
  autoescape: true,
  express: app
});

app.get('/', function (req, res) {
  let name = 'Matten Karma' 
  res.render('index.njk', {name});
});

app.get('/about', function (req, res) {
  res.render('about.njk');
})
app.listen(3000);
console.log('Server started on http://localhost:3000');


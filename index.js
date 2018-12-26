var mongojs = require('mongojs');
var app = require('express')();
const bodyParser = require('body-parser')
var port = process.env.PORT || 8081;
var databaseUrl = 'BOT';
var collections = ['Box'];
var db = mongojs(databaseUrl, collections);
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: true }))
  app.post('/box', (req, res) => {
  db.Box.insert(req.body);
  res.status(201).json(req.body)
})
app.listen(port, function() {
console.log('Starting node.js on port ' + port);
});

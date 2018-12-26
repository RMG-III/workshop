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
});

app.get('/box/Date/:date', function (req, res) {
    var date_find = req.params.date.substring(0, 2) + "/" + req.params.date.substring(2, 4) + "/" +  req.params.date.substring(4, 8);
    db.Box.find({Date: date_find}, function(err, docs) {
    res.json(docs);
    });
});

app.get('/box/Name/:name', function (req, res) {
    var name_find = req.params.name
    db.Box.find({Name: name_find}, function(err, docs) {
    res.json(docs);
    });
});


app.listen(port, function() {
console.log('Starting node.js on port ' + port);
});

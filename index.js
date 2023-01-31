const express = require('express');
const app = express();
const bodyParser = require('body-parser');

let VinylServise = require("./app/class/VinylServise");
let vinylServise = new VinylServise();

app.use(bodyParser.json());
app.get('/', async function(req, res) {
  res.send(await vinylServise.get());
})

app.post('/vinyl/', function(req, res) {
  vinylServise.add(req.body.artist, req.body.title);
  res.send('add');
});

app.listen(3000);
console.log("Im working")

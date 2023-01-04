
const express = require('express');
const app = express();

let VinylServise = require("./app/class/VinylServise");

app.get('/', function(req, res) {
  res.send('get all');
})

app.post('/vinyl/', function(req, res) {
	
  
  let vinylServise = new VinylServise();
  vinylServise.add("Abba", "Best80");
  
  res.send('add');
});

app.listen(3000);


























/*
const Vinyl = require("./app/class/Vinyl");
let v1 = new Vinyl("Abba", "Best80");
let v2 = new Vinyl("beatles", "Yellowsudmarine");

console.log(v1);
console.log(v2);

v1.rename("Best90");
console.log(v1);
*/
/*
let a = 1;
let b = a;

a = 2;
console.log(b);
*/

//console.log("tut");


var express = require("express");
var app = express();
var port = process.env.PORT || 3000;



var randomArray = ["dog", "cat", "pig", "hamster", "human"];

var adjectives = [
  "beautiful",
  "ugly",
  "hot",
  "green",
  "gold",
  "tall",
  "insane"
]

var verbs = [
  "running",
  "jumping",
  "sleeping",
  "frolicking",
  "crying",
  "dying",
  "flexing"
]

var nouns = [
  "girls",
  "boys",
  "Presidents",
  "doctors",
  "criminals",
  "dogs",
  "saints",
  "politicians"
]

app.use(express.static(__dirname + '/app/'));
  var randomStringSelector = function (stringArray) {
    return stringArray[Math.floor(Math.random() * stringArray.length)];
  }


app.get("/adjective", function (req,res) {
  res.json( { adjective: randomStringSelector(adjectives) } );
})

app.get("/verbs", function (req,res) {
  res.json( { verb: randomStringSelector(verbs) } );
})

app.get("/nouns", function (req,res) {
  res.json( { noun: randomStringSelector(nouns) } );
})


app.listen(port, function(){
  console.log('server started at port' + port);
})

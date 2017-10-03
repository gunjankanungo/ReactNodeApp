var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
app.use(express.static(path.join(__dirname,"/html")));
app.use(bodyParser.json());

app.listen(7777,function(){
    console.log("Started listening on port", 7777);
})


app.post('/signin', function (req, res) {
  var user_name=req.body.email;
  var password=req.body.password;
  if(user_name=='admin' && password=='admin'){
      //res.send('success');
      return res.redirect(200, 'https://www.google.co.in');
  }
  else{
    res.send('Failure');
  }
})

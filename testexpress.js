// use express
var express = require('express')
var  app = express();

app.get('/register',function(req,res){

  res.sendFile(__dirname+"/"+"regis.html");


});


app.get('/index',function(req,res){
  data={
        name: req.query.fname,
        surname: req.query.sname

  };
  console.log(data);
  res.end(JSON.stringify(data));
});

app.listen(8000);

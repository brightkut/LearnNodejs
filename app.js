// app.js

//call function from method.js

var response = require('./method.js');
console.log("-------require method-------");
console.log(response.update());
console.log(response.add(2,3));
response.data.updateData();
response.data.deleteuser();
var fs=require('fs');

console.log('--------file system--------');
// call library file system
var fs=require('fs');

// use reader for read file
var reader = fs.createReadStream('read.txt');

//use writer for write file
var writer = fs.createWriteStream('write.txt');
//use pipe to read and write in same time
reader.pipe(writer);



console.log('------Server ---------');
var http=require('http');
http.createServer(function(req,res){
  var mstream = null;


  if(req.url === '/green'){
    //response run status 200 normal status
     res.writeHead(200,{'Content-Type': 'text/html'});
     mstream = fs.createReadStream(__dirname+"/"+"green.html",'utf8');
     mstream.pipe(res)

  }
  else if(req.url === '/yellow'){
    //response run status 200 normal status
     res.writeHead(200,{'Content-Type': 'text/html'});
     mstream = fs.createReadStream(__dirname+"/"+"yellow.html",'utf8');
     mstream.pipe(res)

  }else {
    //response run status 200 normal status
     res.writeHead(200,{'Content-Type': 'text/html'});
     mstream = fs.createReadStream(__dirname+"/"+"home.html",'utf8');
     mstream.pipe(res)

  }

  /*method that run when response end
  res.end('end server')*/



}).listen(8000,'127.0.0.1');



console.log('Global method');
/*
setInterval("printhello",2000)
run printhello every 2000 milisec(2sec)


setTimeout("printhello",2000)
same top but when finish it stop (1time)
*/

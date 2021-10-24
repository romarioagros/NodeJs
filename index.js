var fs = require('fs')
var http = require('http');

var myReadShort = fs.createReadStream(__dirname + '/voyna-i-mir-tom-1.txt' , 'utf8');
var myWriteShort = fs.createWriteStream(__dirname + '/news.txt');


myReadShort.pipe(myWriteShort);



var server = http.createServer(function(req,res){
    console.log("Url страницы"+ req.url);
    res.writeHead(200,{'Content-Type':"text/html; charset=utf-8"});
    var myReadShort = fs.createReadStream(__dirname + '/index.html' , 'utf8');
    //var myWriteShort = fs.createWriteStream(__dirname + '/news.txt');


    myReadShort.pipe(res);
  
});

server.listen(3000,'127.0.0.1');
console.log('мы отслеживаем порт 3000');

var fs = require('fs')
var http = require('http');

var myReadShort = fs.createReadStream(__dirname + '/voyna-i-mir-tom-1.txt' , 'utf8');
var myWriteShort = fs.createWriteStream(__dirname + '/news.txt');


myReadShort.pipe(myWriteShort);



var server = http.createServer(function(req,res){
    console.log("Url страницы"+ req.url);
    res.writeHead(200,{'Content-Type':"application/json; charset=utf-8"});
    var obj = {
        model:"Audi",
        speed :  '234.5',
        wheels : 4
    }
    //var myReadShort = fs.createReadStream(__dirname + '/index.html' , 'utf8');
    //var myWriteShort = fs.createWriteStream(__dirname + '/news.txt');


   res.end(JSON.stringify(obj));
  
});

server.listen(80,'localhost');
console.log('мы отслеживаем порт 3000');

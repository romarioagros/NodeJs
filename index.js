var fs = require('fs')
var http = require('http');

var myReadShort = fs.createReadStream(__dirname + '/voyna-i-mir-tom-1.txt' , 'utf8');
var myWriteShort = fs.createWriteStream(__dirname + '/news.txt');


myReadShort.pipe(myWriteShort);



var server = http.createServer(function(req,res){
    console.log("Url страницы"+ req.url);
    if (req.url === '/index'||req.url==='/'){
        res.writeHead(200,{'Content-Type':"text/html; charset=utf-8"});
        fs.createReadStream(__dirname+ '/index.html').pipe(res);
    } else if (req.url === "/about"){
        res.writeHead(200,{'Content-Type':"text/html; charset=utf-8"});
        fs.createReadStream(__dirname+ '/about.html').pipe(res);
    }else {
        res.writeHead(404,{'Content-Type':"text/html; charset=utf-8"});
        fs.createReadStream(__dirname+ '/404.html').pipe(res);
    }
  
  
});

server.listen(80,'localhost');
console.log('мы отслеживаем порт 80');

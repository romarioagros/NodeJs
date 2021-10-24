var http = require('http');

var server = http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':"text/plain; charset=utf-8"});
    res.end("привет мир!");
});

server.listen(3000,'127.0.0.1');
console.log('мы отслеживаем порт 3000');

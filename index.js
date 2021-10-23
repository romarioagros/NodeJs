var fs = require("fs");
 // асинхронное прочтение файла
fs.readFile("text.txt", "utf8", function(err,data){
    console.log(data);
});

fs.writeFile("some.txt", 'Hi its me', function(err,data){
    
});

console.log('test');
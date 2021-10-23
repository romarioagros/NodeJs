var fs = require("fs");
 
var  file_readed = fs.readFileSync("text.txt", "utf8");
var message = "Привет мир !\n " + file_readed;
fs.writeFileSync('some_new.txt',message );
console.log(file_readed); 
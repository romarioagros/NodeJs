var fs = require("fs");
 
var  file_readed = fs.readFileSync("text.txt", "utf8");
console.log(file_readed); 
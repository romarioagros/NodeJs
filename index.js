var fs = require('fs')


var myReadShort = fs.createReadStream(__dirname + '/voyna-i-mir-tom-1.txt' , 'utf8');
var myWriteShort = fs.createWriteStream(__dirname + '/news.txt');


myReadShort.pipe(myWriteShort);

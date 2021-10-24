var fs = require('fs');
fs.unlink('./new-one/some.txt', function(){})
//создание папки
//fs.mkdirSync('new-one');
//удаление папки
//fs.rmdirSync('new-one');

fs.rmdir('new-one', function(){});


//создание папки асинхронно
/* fs.mkdir('new-one',function(){;
    fs.writeFile('./new-one/some.txt', 'привет привет привет', function(){;
        console.log("все сработало");
    });
}); */
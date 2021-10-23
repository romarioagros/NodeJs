function test (){
    console.log("привет!");
}


test();
var printSomething = function(){
 console.log("просто функция");
};
// именноованная функция
printSomething();

function call(func){
    func();
}

call(test);
var array_counter = function (arr ){
    return "В массиве находиться " + arr.length + " элементов!";
};

//console.log(array_counter([1,7,99,8,45]));
var multiply = function(x,y ){
    return `${x} умножить на ${y} Равно ${x*y} `
}

var some_value = 451;

module.exports = {
    array_counter:array_counter,
    multiply:multiply,
    some_value:some_value,

};



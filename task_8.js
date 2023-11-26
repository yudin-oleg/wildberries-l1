// примеры функций к передаче
function func1(a, b){
    return a+b;
}
function func2(name){
    return name.toUpperCase();
}
function func3(a){
    return a%2 === 0 ? true: false;
}

// функция для вызова массива функций
function funcCombine(funcArray){
    let funcResultsArray = []; // массив с результатами раблты функций
    let innerFunction = function(){
        for(let func of funcArray){
            let funcResult = func();
            funcResultsArray.push(funcResult);
        }
        return funcResultsArray;
    }
    return innerFunction;
}

// тестирование
let funcArray = [function(){return func1(2, 5)}, function(){return func2("hello, worrld")}, function(){return func3(13)}];
let result = funcCombine(funcArray);
console.log(result());
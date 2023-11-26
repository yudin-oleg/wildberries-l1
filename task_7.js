// функция для последовательного вызова функций внутри нее
function callFunctionsSequentially(functions, index = 0) {
    if (index < functions.length) {
        // Вызвать функцию в массиве с соответствующим индексом
        functions[index](index, () => {
            // После завершения выполнения функции, вызвать следующую
            callFunctionsSequentially(functions, index + 1);
        });
    }
}

// фуекции для вызова
const function1 = (index, callback) => {
    console.log(`Function ${index + 1} called`);
    setTimeout(() => {
        console.log(`Function ${index + 1} completed\n`);
        callback();
    }, 1000);
};

const function2 = (index, callback) => {
    console.log(`Function ${index + 1} called`);
    setTimeout(() => {
        console.log(`Function ${index + 1} completed\n`);
        callback();
    }, 1000);
};

const function3 = (index, callback) => {
    console.log(`Function ${index + 1} called`);
    setTimeout(() => {
        console.log(`Function ${index + 1} completed\n`);
        callback();
    }, 1000);
};

// тестирование
const functionsArray = [function1, function2, function3];

callFunctionsSequentially(functionsArray);
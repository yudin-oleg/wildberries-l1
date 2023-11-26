// функция возвращающая другую функцию и демонстрирующая работу замыканий
function outerFunction(){
    let innerVar = 100;
    function innerFunction(){
        console.log(--innerVar);
    }
    return innerFunction;
}

// тестирование
let func = outerFunction();

func();
func();
func();
func();
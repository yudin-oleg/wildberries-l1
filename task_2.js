//функция для определения того является ли число странным
function isStrangeNumber(number){
    let allNumbers = [];//массив со всеми числами от 0 до переданного
    let dividers = [];//массив в котором будут храниться делители переданного числа
    //формируем массив со всеми числами от 0 до переданного
    for(let i = 0; i < number; i++){
        allNumbers.push(i);
    }
    //формируем массив в котором будут храниться делители переданного числа
    dividers = allNumbers.filter((divider) => {
        if(number%divider === 0){
            return divider;
        }
    })
    // если у преданного числа есть делители, то суммируем их и проверяем равна ли сумма переданному числу
    if(dividers.length){
        let finalSumm = dividers.reduce((accamulator, currentValue) => {return accamulator += currentValue});
        return finalSumm === number ? true : false;
    }else{
        return false;
    }
}

//тестирование
console.log(isStrangeNumber(1));

for(let i = 1; i <= 500 ; i++){
    if(isStrangeNumber(i)){
        console.log(i);
    }
}
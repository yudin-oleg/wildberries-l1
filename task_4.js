// функция для изменения окончания слова в зависимости от числа рядом
function changeWordEnding(number, one, two, five) {
    let n = Math.abs(number);
    n %= 100;
    if (n >= 5 && n <= 20) {
        return `${number} ` + five;
    }
    n %= 10;
    if (n === 1) {
        return `${number} ` + one;
    }
    if (n >= 2 && n <= 4) {
        return `${number} ` + two;
    }
    return `${number} ` + five;
}

console.log(getNoun(21, 'сообщение', 'сообщения', 'сообщений'));
console.log(getNoun(15, 'пользователь', 'пользователя', 'пользователей'));


// эксорт функции
module.exports = {
    changeWordEnding,
};
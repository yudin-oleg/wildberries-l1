// функция для определения является ли переданная строка палиндромом
function isPalindrome(phrase){
    if(typeof(phrase)==="string"){
        redactedPhrase = phrase.replaceAll(" ", "").toLowerCase(); // удаляем все пробелы и приводим в нижний регистр
        reversedPhrase = redactedPhrase.split("").reverse().join(""); //формируем новую реверсированную строку
        return redactedPhrase === reversedPhrase ? true : false; //сравниваем переданную строку и реверсированную копию
    }
}

let phrase = "Аргентина манит негра"; //строка для проверки
console.log(isPalindrome(phrase));
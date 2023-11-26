// конвертировать строку в JSON
function stringToJson(inputString) {
    try {
        // проверить является ли введенная строка пустой
        if (typeof inputString !== 'string' || inputString.trim() === '') {
            throw new Error('Введенная строка должна быть непустой.');
        }

        // удалить пустые пространства в начале и конце строки
        const trimmedString = inputString.trim();

        // проверить начинается и заканчивается ли строка символами скобок {}
        if (trimmedString[0] !== '{' || trimmedString[trimmedString.length - 1] !== '}') {
            throw new Error('Неправильный JSON формат. Строка должна представлять JSON объект.');
        }

        // конвертировать строку в обЪект
        const jsonObject = eval('(' + trimmedString + ')');

        // проверить является ли результат обЪектом 
        if (typeof jsonObject !== 'object' || jsonObject === null) {
            throw new Error('Неправильный JSON формат. Строка должна представлять JSON объект.');
        }

        return jsonObject;
    } catch (error) {
        console.error('Ошибка при конвертации строки в JSON:', error.message);
        return null;
    }
}

// тестирование
const jsonString = '{"name": "Richard", "age": 25, "city": "London"}';

const jsonObject = stringToJson(jsonString);

if (jsonObject !== null) {
    console.log(jsonObject);
}
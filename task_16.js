// импортировать dateUtils модуль
const dateUtils = require('./dateUtils');

// использовать экспортированную из модуля функцию
const formattedDate = dateUtils.getCurrentFormattedDate();

console.log('Current Formatted Date:', formattedDate);
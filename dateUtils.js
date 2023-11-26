// импортитровать библиотеку Moment.js
const moment = require('moment');

// функция чтобы отформатировать дату использую библиотеку Moment.js
function getCurrentFormattedDate() {
    return moment().format('YYYY-MM-DD HH:mm:ss');
}

// эксорт функции
module.exports = {
    getCurrentFormattedDate,
};
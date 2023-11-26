// Асинхронная функция использующая async/await синтаксис
async function asynchronousOperation() {
    try {
    // симуляция асинхронной операции с использованием setTimeout
    const result1 = await simulateAsyncOperation(2000, 'Операция 1');

    // симуляция асинхронной операции с использованием setTimeout
    const result2 = await simulateAsyncOperation(1500, 'Операция 2');

    // скомбинировать результат
    const finalResult = `Финальный результат: ${result1} - ${result2}`;

    return finalResult;
} catch (error) {
    // обработать ошибки
    console.error('Ошибка при выполнении асинхронной операции:', error.message);
    throw error;
}
}

// функция для симуляции асинхронных операций
function simulateAsyncOperation(duration, operationName) {
    return new Promise((resolve, reject) => {
        // симуляция асинхронной операции с использованием setTimeout
        setTimeout(() => {
        const success = Math.random() > 0.5; // симулировать успех или неудачу
        if (success) {
            console.log(`${operationName} completed successfully.`);
            resolve(operationName);
        } else {
            console.error(`${operationName} failed.`);
            reject(new Error(`${operationName} failed.`));
        }
        }, duration);
    });
}

// тестирование
asynchronousOperation()
.then((result) => {
    console.log('Asynchronous operation completed:', result);
})
.catch((error) => {
    console.error('Error during asynchronous operation:', error.message);
});
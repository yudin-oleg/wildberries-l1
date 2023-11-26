const MathX = (function () {
    // функция чтобы определить является ли число простым
    function isPrime(num) {
        if (num < 2) {
        return false;
        }
        for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
        }
        return true;
    }
    return {
        // функция чтобы посчитать N-ый элемент ряда фибоначчи
        fibonacci: function (n) {
            if (n <= 1) {
                return n;
            }

            let a = 0;
            let b = 1;

            for (let i = 2; i <= n; i++) {
                const temp = a + b;
                a = b;
                b = temp;
            }

            return b;
        },

        // функция чтобы посчитать все числа в рде фибоначчи предшествующие N
        fibonacciSeries: function (n) {
            const series = [];
            for (let i = 0; i <= n; i++) {
                series.push(MathX.fibonacci(i));
            }
            return series;
        },

        // функция чтоы вычислить N-ое простое число
        nthPrime: function (n) {
            if (n === 1) {
                return 2;
            }

            let count = 1;
            let candidate = 3;

            while (count < n) {
                if (isPrime(candidate)) {
                count++;
                }
                candidate += 2;
            }

            return candidate - 2;
        },

        // фуекция чтобы вычислить все простые числа предшествующие N
        primesUpToN: function (n) {
            const primes = [2];
            for (let i = 3; i <= n; i += 2) {
                if (isPrime(i)) {
                primes.push(i);
                }
            }
            return primes;
        }
    };
})();

// тестирование
console.log(MathX.fibonacci(9));
console.log(MathX.fibonacciSeries(7));
console.log(MathX.nthPrime(5));
console.log(MathX.primesUpToN(24));

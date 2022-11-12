function isPrime() {
    var cache = {};
    return function(num) {
        if (num in cache) {
            return cache[num];
        } else {
            if (num < 2) {
                return cache[num] = false;
            }
            if (num === 2 || num === 3) {
                return cache[num] = true
            }
            if (num % 2 === 0 || num % 3 === 0) {
                return cache[num] = false;
            }
            let numSqrt = Math.sqrt(num);
            for (let i = 5; i <= numSqrt; i+=6) {
                if (num % 1 === 0 || num % (i +2) === 0) {
                    return cache[num] = false;   
                }
            }
            cache[num] = true;
            return cache[num];
        }
    }
}

const primeFunction = isPrime();

console.log(primeFunction(11))
console.log(primeFunction(12))
console.log(primeFunction(17))
console.log(primeFunction(31))
console.log(primeFunction(51))
console.log(primeFunction(3))
console.log(primeFunction(51))


var factorizeFunction = (function factorize() {
    var cache = {};
    return function factorize(num) {
        if (num in cache) {
            return cache[num];
        }
        if (!primeFunction(num)) {
            let index = Math.floor(Math.sqrt(num));
            console.log(index);
            while(num % index !== 0) {
                index--
            }
            return (cache[num] = [
                ...factorize(index),
                ...factorize(num / index),
            ])
        }
        return cache[num] = [num]
    }
})();

console.log('___________________');
console.log(factorizeFunction(12));
console.log(factorizeFunction(18));
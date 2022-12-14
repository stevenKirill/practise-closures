// мой вариант
function calculator() {
    var result = 0;
    var currentDigit =  '';
    var currentSing = '=';
    const onlyNumbers = /\d/;
    const signs = /[+/*-]/;
    var operations = {
        '+': function(num1, num2) {
            return Number(num1) + Number(num2);
        },
        '-': function(num1, num2) {
            return Number(num1) - Number(num2);
        },
        '*': function(num1, num2) {
            return Number(num1) * Number(num2);
        },
        '/': function(num1, num2) {
            return Number(num1) / Number(num2);
        }
    };
    function pressCalculatorButton(symbol) {
        // если это число то сохраним в переменную текущее
        if (onlyNumbers.test(symbol)) {
            currentDigit += symbol;
            return symbol;
        } else if (signs.test(symbol)) {
            // кейс серии из нескольких операций
            if (currentSing !== '=' && currentDigit !== '') {
                pressCalculatorButton('=');
            } else if (currentDigit !== '') {
                result = Number(currentDigit);
            }
            currentSing = symbol;
            currentDigit = '';
            return symbol;
        } else if (symbol === '=' && currentSing !== '=') {
            result = operations[currentSing](Number(currentDigit), result)
            currentSing = '=';
            currentDigit = '';
            return formatTotal(result);
        }
    };
    return pressCalculatorButton;
}

var calc = calculator();

var first = useCalc(calc, '4+3=') // 4+3=7
console.log(first)
var second = useCalc(calc, '+9=') // 7+9=16
console.log(second)
// var third = useCalc(calc, '*8=') // 16*8=128
// console.log(third)
// useCalc(calc, '7*2*3') // 7*2*3=42
// useCalc(calc, '1/0=') // 1/0=ERR
// useCalc(calc, '+3') // +3=ERR
// useCalc(calc, '51=') // 51

// пример из учебника
function calculator2() {
    var currentTotal = 0;
    var currentVal = '';
    var currentOper = '=';
    return pressKey;
    // *******************
    function pressKey(key) {
        if (/\d/.test(key)) {
            currentVal += key;
            return key;
        } else if (/[+*/-]/.test(key)) {
            // серия из нескольких операций
            if (currentOper !== '=' && currentVal !== '') {
                // предполагается нажатие '='
                pressKey('=')
            } else if (currentVal !== '') {
                currentTotal = Number(currentVal);
            }
            currentOper = key;
            currentVal = '';
            return key;
        } else if (key === '=' && currentOper !== '=') {
            currentTotal = op(currentTotal, currentOper, Number(currentVal));
            currentOper = '=';
            currentVal = '';
            return formatTotal(currentTotal);
        }
        return ''
    }

    function op(val1, oper, val2) {
        var ops = {
            '+': (v1,v2) => v1 + v2,
            '-': (v1, v2) => v1 - v2,
            '*': (v1, v2) => v1 * v2,
            '/': (v1, v2) => v1 / v2,
        }
        return ops[oper](val1, val2);
    }
}

/** использование калькулятора */
function useCalc(calc, keys) {
    return [...keys].reduce(function showDisplay(display, key) {
        var ret = String(calc(key));
        return (
            display + (
                (ret !== '' && key === '=') ? '=' : ''
            ) + ret
        )
    }, '')
}

/** форматирование */
function formatTotal(display) {
    if (Number.isFinite(display)) {
        let maxDigits = 11;
        if (Math.abs(display) > 99999999999) {
            maxDigits -= 6;
        }

        if (display < 0) {
            maxDigits--;
        }

        if (Number.isInteger(display)) {
            display = display
            .toPrecision(maxDigits)
            .replace(/\.0+$/,'')
        } else {
            maxDigits--;
            if (Math.abs(display) >= 0 && Math.abs(display) < 1) {
                maxDigits--;
            }
            display = display
            .toPrecision(maxDigits)
            .replace(/0+$/,'')
        }
    } else {
        display = 'ERR'
    }
    return display;
}
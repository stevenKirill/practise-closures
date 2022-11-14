function calculator() {
    var state = {
        result: 0,
        current: '',
    }
    const onlyNumbers = new Regex("^\\d+$");
    const signs = /+|-|*|\//gi;
    const operations = {
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
    return function (symbol) {
        if (onlyNumbers.test(symbol)) {
            state.current += symbol;
        }
        if (signs.test(symbol)) {
            operations[symbol]()
        }
        if (symbol === '=') {
            const { result } = state;
            console.log(result)
        }
    };
}

var calc = calculator();

function useCalc(calc, keys) {
    return [...keys].reduce(function showDisplay(display, key) {
        var ret = String(calc(key));
        console.log(ret, '=> ret');
        return (
            display + (
                (ret !== '' && key === '=') ? '=' : ''
            ) + ret
        )
    }, '')
}

useCalc(calc, '4+3=') // 4+3=7
// useCalc(calc, '+9=') // 7+9=16
// useCalc(calc, '*8=') // 16*8=128
// useCalc(calc, '7*2*3') // 7*2*3=42
// useCalc(calc, '1/0=') // 1/0=ERR
// useCalc(calc, '+3') // +3=ERR
// useCalc(calc, '51=') // 51

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
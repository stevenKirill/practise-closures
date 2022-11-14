function calculator() {
    return function (str) {
        return undefined
    };
}

var calc = calculator();

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

useCalc(calc, '4+3=')
const MODULE_NAME = 'Program about countries';
var countries = ['Russia', 'USA', 'Japan', 'Turkey', 'Italy'];
// red
function addPopulationToEuropianCountries() {
    // blue
    var modify = [];
    console.log(hello);
    function addMoreCountries(newCountry) {
        modify.push(newCountry);
        console.log(modify)
        return `${JSON.stringify(newCountry,null,2)} was added to ${JSON.stringify(modify,null,2)}`;
    }
    countries.forEach(function(country, index) {
        // green
        if (country === 'Turkey') {
            // yellow
            let capital = 'Ankara';
            console.log(capital);
            let innerObject = {
                // black
                name: country,
                index: ++index,
                population: 80_000_000,
            }
            modify.push(innerObject)
        }
        if (country === 'Italy') {
            // purple
            let innerObject2 = {
                // white
                name: country,
                index: ++index,
                population: 60_000_000,
            }
            modify.push(innerObject2);
        }
    })
    var hello = 'hello';
    console.log(hello);
    var publicApi = {
        // brown
        modifyArray: modify,
        addMoreCountriesFunction: addMoreCountries,
    };
    return publicApi;
}

function logger(fn = () => null, ...args) {
    // orange
    console.log(fn.apply(null, args));
}

const { modifyArray, addMoreCountriesFunction }  = addPopulationToEuropianCountries();

logger(addMoreCountriesFunction, {
    name: 'Germany',
    index: ++countries.length,
    population: 90_000_000,
});

logger(addMoreCountriesFunction, {
    name: 'Spain',
    index: ++countries.length,
    population: 47_000_000,
});
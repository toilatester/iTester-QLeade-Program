const fs = require('fs');

function readJSONFile(filename) {
    const data = fs.readFileSync(filename, 'utf8');
    return JSON.parse(data);
}

function isNearCountryAndCity(data) {
    for (let i = 0; i < data.length; i++) {
        console.log("Log Item Iterator -----------------------> " + i);
        for (let j = 1; j < data.length; j++) {
            const latDiff = data[i].geo.lat - data[j].geo.lat;
            const lonDiff = data[i].geo.lon - data[j].geo.lon;
            if (Math.abs(latDiff) || Math.abs(lonDiff) <= 10) {
                console.log(JSON.stringify(data[i]) + "---" + JSON.stringify(data[j]));
            }

        }
    }
}


const jsonOrigin = readJSONFile("../programming-language-for-tester-assignment/countries_with_cities.json");
isNearCountryAndCity(jsonOrigin);


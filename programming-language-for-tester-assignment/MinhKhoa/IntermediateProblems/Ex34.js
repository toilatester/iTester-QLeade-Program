const fs = require('fs');

function readJSONFile(inputFile) {
    const readFile = fs.readFileSync(inputFile, 'utf-8');
    return JSON.parse(readFile);
}

function filterNearbyCity(readFile){
    for(let i = 0; i < readFile.length; i++){
        for(let j = 1; j<readFile.length; j++){
            let latValue = readFile[i].geo.lat - readFile[j].geo.lat;
            let longValue = readFile[i].geo.long - readFile[j].geo.long;
            if (Math.abs(latValue) || Math.abs(longValue) <=10){
                console.log(JSON.stringify(readFile[i]) + "---" + JSON.stringify(readFile[j]));
            }
        }
    }
}

const jsonFile = readJSONFile("../../countries_with_cities.json");
filterNearbyCity(jsonFile);
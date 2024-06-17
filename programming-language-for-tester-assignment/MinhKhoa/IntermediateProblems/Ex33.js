const fs = require('fs');

function filterActiveUsers(users){
    return users.filter(function(data){
        return data.isActive === true;
    })
}

function createJSONFile(inputFile, outputFile) {

    const readFile = fs.readFileSync(inputFile, 'utf-8');
    let parseData = JSON.parse(readFile);

    const writeFile = JSON.stringify(filterActiveUsers(parseData), null, 2);
    fs.writeFileSync(outputFile, writeFile, 'utf-8');
}

createJSONFile('../../persons.json', "../../activePersons.json")

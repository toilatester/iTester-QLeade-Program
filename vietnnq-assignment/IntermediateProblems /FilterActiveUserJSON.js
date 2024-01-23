const fs = require('fs');

function readJSONFile(filename) {
    const data = fs.readFileSync(filename, 'utf8');
    return JSON.parse(data);
}

function writeJSONFile(filename, data) {
    const jsonData = JSON.stringify(data, null, 2);
    fs.writeFileSync(filename, jsonData, 'utf8');
}

function filterActiveUsers(data) {
    return data.filter(data => data.isActive === true);
}

function filterAndWriteUserIsActive(inputFilename, outputFilename) {
    const dataOrigin = readJSONFile(inputFilename);
    const dataIsActive = filterActiveUsers(dataOrigin);
    writeJSONFile(outputFilename, dataIsActive);
}


filterAndWriteUserIsActive("../programming-language-for-tester-assignment/persons.json", "../programming-language-for-tester-assignment/activePersons.json")


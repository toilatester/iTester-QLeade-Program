/**
 * 34. Write a function to filter the list of active profile from the file "person.json" and create a new file "active_persons.json" to append all the active profile to that file
 */

function filterActiveProfile(arrProfiles){
    return arrProfiles.filter(function(profile){
        return profile.isActive === true;
    })
}
function createActiveProfileFile(){
    const fs = require('fs');
    try {
        const readFile = fs.readFileSync('programming-language-for-tester-assignment/persons.json', 'utf-8');
        var parsedData = JSON.parse(readFile);

        const writeFile = JSON.stringify(filterActiveProfile(parsedData), null, 4);
        fs.writeFileSync('programming-language-for-tester-assignment/NganLe/active_persons.json', writeFile, 'utf8'); 
        console.log(`File is written successfully!`);  
    } catch (error) {
        console.error('Error reading JSON file:', error.message);
    }

}
console.log(createActiveProfileFile());
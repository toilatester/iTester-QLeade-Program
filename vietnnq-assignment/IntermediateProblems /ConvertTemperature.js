function convertCelsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

const celsiusTemperature = 25;
const fahrenheitResult = convertCelsiusToFahrenheit(celsiusTemperature);
console.log(fahrenheitResult);

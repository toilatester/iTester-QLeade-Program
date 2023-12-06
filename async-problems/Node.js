const request = require('request');

function fetchWeatherWithRequest(lat, lon, callback) {
    const apiKey = '6233eb2dee7103cb456dd80abdd7d631';
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&apiKey=${apiKey}`;

    request(url, (error, response) => {
        if (error) {
            console.error('Network Error:', error);
            callback(error, null);
        }
        const data = JSON.parse(response.body);
        callback(null, data);
    });
}

const latitude = 37.7749;
const longitude = -122.4194;

fetchWeatherWithRequest(latitude, longitude, (error, data) => {
    if (error) {
        console.error('Error:', error);
    } else {
        console.log('Weather Data:', data);
    }
});
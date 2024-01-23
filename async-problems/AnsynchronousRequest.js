import ('node-fetch');
const request = require('request');
const axios = require('axios');
const apiKey = '6233eb2dee7103cb456dd80abdd7d631';
const lat = 37.7749;
const lon = -122.4194;
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&apiKey=${apiKey}`;
const urlForecastWeather = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`;

// Callbacks with request
function fetchWeatherWithRequest(callback) {

    request(urlForecastWeather, (error, response, body) => {
        if (error) {
            callback(error, null);
        } else {
            const data = JSON.parse(body);
            callback(null, data);
        }
    });
}

// Promises with axios
function fetchWeatherWithAxios(lat, lon) {

    return axios.get(url)
        .then(response => response.data)
        .catch(error => {
            throw error;
        });
}

// Async/Await with node-fetch
async function fetchWeatherWithFetch() {

    try {
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        throw error;
    }
}


fetchWeatherWithRequest((error, data) => {
    if (error) {
        console.error('Request Error:', error);
    } else {
        console.log('Request Result:', data);
    }
});

fetchWeatherWithAxios()
    .then(data => console.log('Axios Result:', data))
    .catch(error => console.error('Axios Error:', error));

fetchWeatherWithFetch()
    .then(data => console.log('Fetch Result:', data))
    .catch(error => console.error('Fetch Error:', error));


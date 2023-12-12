const request = require('request');
const axios = require('axios');
import ('node-fetch');
const lat = 40.7128;
const lon = -74.0060;
const apiKey = "10de379ba2c981cae72e369ae87149ee";
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&apiKey=${apiKey}`;


function fetchWeatherWithRequest(lat, lon, callback){
    request(url, (failure, response, body) => {
        if (failure){
            callback(failure);
        } else {
            const data = JSON.parse(body);
            callback(data);
        }
    });
}

function fetchWeatherWithAxios(lat, lon){
    return axios.get(url)
                .then(response => response.data)
                .catch(failure => {
                    throw new Error(failure.message);
                })
}

async function fetchWeatherWithAwait(lat, lon){
    try{
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error){
        throw new Error(error.message);
    }
}

fetchWeatherWithRequest(lat, lon, (failure, data) => {
    if (failure) {
        console.error('Request Error:', failure);
    } else {
        console.log('Request Result:', data);
    }
});

fetchWeatherWithAxios(lat, lon)
    .then(data => {
        console.log(data);
    })
    .catch(failure => {
        console.error(failure);
    });

fetchWeatherWithAwait(lat, lon)
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(error);
    })
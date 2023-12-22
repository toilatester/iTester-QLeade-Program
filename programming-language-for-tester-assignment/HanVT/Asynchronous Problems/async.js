const request = require('request');
const axios = require('axios');
import ('node-fetch');

const prompt = require("prompt-sync")();
var lat=prompt("Input lat: ");
var lon=prompt("Input lon: ");




const apiKey='2bd1b69e3c396b9d818314a3ceaef879'
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

function checkValidLatLon(lat,lon){
    try {
        if ((!isNaN(parseFloat(lat)))&&(!isNaN(parseFloat(lon)))) return true
        else return false;
    }
    catch (error) {
        return false
    }
}

if (checkValidLatLon(lat,lon)) {
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
}
else {console.log("Invalid input")}


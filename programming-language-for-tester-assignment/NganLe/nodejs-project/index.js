import fetch from 'node-fetch';
import request from 'request';
import axios from 'axios';
const apiKey = 'aecd4e8a5bf3ce05e0337e6a378f8f65';

//Function Parse Timestamp to Date Time
function parseTimestampToDateTime(timeStamp) {
  const date = new Date(timeStamp * 1000);
  return date;
}
// ***Function to fetch weather data using the request library
function fetchWeatherWithRequest(lat, lon, callback) {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
  request(url, { json: true }, (error, response, body) => {
    if (error) {
      // Call the callback with the error if the request fails
      callback(error)
    } else if (response.statusCode !== 200) {
      // Call the callback with the error if the status code # 200
      callback(new Error(`Unexpected response status: ${response.statusCode}`), null);
    } else {
      // Call the callback with the data when the request is successful
      callback(null, body)
    }
  })
}
//Callback function
function handleWeatherResponse(error, data) {
  if (error) {
    console.log('Error: ', error.message);
  } else {
    data.dt = parseTimestampToDateTime(data.dt);
    console.log('Weather Data: ', data);
  }
}
// ***Function to fetch weather data using the axios library
function fetchWeatherWithAxios(lat, lon) {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
  axios
    .get(url)
    .then(response => {
      // Log the data when the request is successful
      response.data.dt = parseTimestampToDateTime(response.data.dt);
      console.log('Weather Data: ', response.data);
    })
    .catch(error => {
      //Log the error if the request fails
      console.log('Error: ', error.message);
    });
}
// ***Function to fetch weather data using the node-fetch library
async function fetchWeatherWithFetch(lat, lon) {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
  try {
    const response = await fetch(url);
    // Handle error
    if (!response.ok) {
      throw Error(response.statusText);
    }
    const data = await response.json();
    // Log the data when the request is successful
    data.dt = parseTimestampToDateTime(data.dt);
    console.log('Weather Data: ', data);
  } catch (error) {
    //Log the error if the request fails
    console.log('Error: ', error.message);
  }
}
// Fetch weather with valid info
fetchWeatherWithRequest(10.824160298200015, 106.63934170740228, handleWeatherResponse);
fetchWeatherWithAxios(10.824160298200015, 106.63934170740228);
fetchWeatherWithFetch(10.824160298200015, 106.63934170740228);

// Fetch weather with invalid info
fetchWeatherWithRequest('invalid', 106.63934170740228, handleWeatherResponse);
fetchWeatherWithAxios('invalid', 106.63934170740228);
fetchWeatherWithFetch('invalid', 106.63934170740228);
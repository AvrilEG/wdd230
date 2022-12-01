// select HTML elements in the document
const currentTemp = document.querySelector('#weather-temp');
const currentWindSpeed = document.querySelector('#weather-windspeedresult');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const url = 'https://api.openweathermap.org/data/2.5/weather?q=Hermosillo,MX&units=imperial&appid=a682a4d8efb27d168b538433ff7508e5';

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // this is for testing the call
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
  apiFetch();

  function displayResults(weatherData) {
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}&deg;F</strong>`;
    currentWindSpeed.innerHTML = `<strong>${weatherData.wind.speed.toFixed(0)} Mph</strong>`;
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
  
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
  }



function windchill () {

    const temp = document.getElementById('weather-temp').innerHTML;
    const windspeed = document.getElementById('weather-windspeedresult').innerHTML; 
    const windchill = document.getElementById('weather-windchillresult');
   
    if ( temp <= 50 && windspeed > 3) { 

        let wc = 35.74 + 0.6215 * temp - 35.75 * Math.pow(windspeed, 0.16) + 0.4275 * temp * Math.pow(windspeed, 0.16);
        wc = Math.floor(wc);

        windchill.innerHTML = wc + "°F";
    }
    else{

        windchill.innerHTML = "N/A"; 
    }

    return windchill;
}

windchill();

let windchill = function(temperature, windspeed) {
    if (temperature <= 50 && windspeed > 3) {
  
        return Math.round((
            35.74 + 
            (0.6215 * temperature) - 
            (35.75 * Math.pow(windspeed, 0.16)) + 
            (0.4275 * temperature * Math.pow(windspeed, 0.16))
        ));
    }
    else {
        return '0';
    }
  }
  
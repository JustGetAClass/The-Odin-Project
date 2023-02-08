const convertToCelsius = function(temp) {
  let celcius = (temp - 32) * 5/9;
  return decimalPlace(celcius);
};

const convertToFahrenheit = function(temp) {
  let fahrenheit = temp * (9/5) + 32;
  return decimalPlace(fahrenheit);
};

function decimalPlace (number){
  return Number((Math.round(number * 10) / 10).toFixed(1));
}

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

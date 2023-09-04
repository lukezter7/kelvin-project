// Todays forcast in Kelvin
const kelvin = 0

function subtract (kelvin, celNum) {
return kelvin - celNum
}

// New temp in celsius
var celsius = (subtract (kelvin, 273));

var TEMPERATURE = celsius;

console.log(`The temperature is ${TEMPERATURE} degrees Celsius.`);

function equation (celsius, frac, addNum) {
return celsius * frac + addNum
}

// New temp in fahrenheit
var fahrenheit = (equation (celsius, 9/5, 32));

// Farenheit rounded down
var fahrenheit = (Math.floor (fahrenheit));

var TEMPERATURE = fahrenheit;

console.log(`The temperature is ${TEMPERATURE} degrees Fahrenheit.`);

function equation2 (celsius, frac2) {
return celsius * frac2
}

// New temp in Newton
var newton = (equation2 (celsius, 33/100));

//Newton rounded down
var newton = (Math.floor (newton));

var TEMPERATURE = newton;

console.log(`The temperature is ${TEMPERATURE} Newton.`);

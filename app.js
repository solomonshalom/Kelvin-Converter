// The variable kelvin will hold the value 293
const kelvin = 293;
// The line below converts kelvin to Celsius by subtracting 273 from the kelvin variable. Store the result in another variable, named celsius.
const celsius = kelvin - 273;
// The variable Farenheit will be used to convert celsius to fahrenheit
let Fahrenheit = celsius * (9/5) + 32;
// We are going to round the value to not have the value in decimal digits.
Fahrenheit = Math.floor(Fahrenheit);
// Prints the value of the converted kelvin into Fahrenheit
console.log(`The temperature is ${Fahrenheit} degrees Fahrenheit`);


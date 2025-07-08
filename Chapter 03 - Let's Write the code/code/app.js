var name = "Satyam Jha";

var a = 10;

var b = 20;

console.log(name);
console.log(a + b);


//Now what is global object
// so in browser it is window object
// in node it is global
//but in node there is no window object
//and in browser there is no global object

//globalThis is pointing to global object of node and window object of browser

//this in browser also points to window object but in node it points to {} empty object.

// console.log(this);  //output {} in browser --> window

// console.log(globalThis);  //global

// console.log(global);

//global have setInterval, setTimeout, clearInterval, clearTimeout, so global is superpower comes in nodejs which runs functions in js runtime environment and not in browser. In browser it is window where these functions are.

console.log(globalThis === global);

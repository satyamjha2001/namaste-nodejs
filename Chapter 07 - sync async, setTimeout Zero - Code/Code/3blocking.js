const crypto = require("crypto");
const { stringify } = require("node:querystring");

console.log("Program started");

console.log("This is a synchronous code example which blocks main thread");

const key = crypto.pbkdf2Sync("papaPassword", "salt", 5000000, 20, "sha512");
console.log("Below is the first synchronous key of your password");
console.log(key);


crypto.pbkdf2("papaPassword", "salt", 50000, 20, "sha512", (err, key) => {
  console.log("Below is the asynchronous key of your password");
  console.log(stringify(key));
});


function multiply(a, b) {
  const result = a * b;
  return result;
}

var c = multiply(6, 5);
console.log("Multiplication of a and b is " + c);
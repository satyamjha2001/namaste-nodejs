const fs = require("fs");

const https = require("https");

console.log("Asynchronous Javascript");

console.log("Hello World");

var a = 2763;
var b = 7162;

//Synchronous function
//it will block the main thread

fs.readFileSync("./file.txt", "utf8");
console.log("This will execute only after reading the file");

https.get("https://dummyjson.com/products/1", (res) => {
  res.on("data", (chunk) => {
    // Consume data, even if unused
    //atleast one data event is important for triggering the end event
  });

  res.on("end", () => {
    console.log("data fetch successfully");
  });
});

setTimeout(() => {
  console.log("Execute it after 5 seconds");
}, 5000);

//asynchrous functions
fs.readFile("./file.txt", "utf-8", (err, data) => {
  console.log("file data:" + data);
});

function multiply(a, b) {
  const result = a * b;
  return result;
}

var c = multiply(a, b);
console.log("Multiplication of a and b is " + c);

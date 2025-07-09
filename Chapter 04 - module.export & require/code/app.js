// require("./sum.js");   //one module into another
//it will not work because sum.js is not exported.
// we can't use variables and functions until we not export it from that module.

// const obj = require("./sum.js");
// const { x, calculateSum } = require("./calculate/sum.js");

// const { calculateMultiply } = require("./calculate/multiply.js");

require("./xyz.js");

const util = require("node:util");

const { calculateSum, calculateMultiply } = require("./calculate");

const data = require("./data.json");
console.log(data);


// import {x, calculateSum } from "./sum.js";
var name = "Satyam Jha";

var a = 10;

var b = 20;

// console.log(x);
calculateSum(a, b);

calculateMultiply(a, b);

console.log(globalThis === global);

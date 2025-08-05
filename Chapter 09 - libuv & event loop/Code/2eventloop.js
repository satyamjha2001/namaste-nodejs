const fs = require("fs");
const a = 9212;

setImmediate(() => console.log("setImmediate"));

Promise.resolve("promise").then(console.log)

fs.readFile("./file.txt", "utf-8", (err, data) => {
    console.log(data);
})

setTimeout(() => console.log("setimeout"), 0)

process.nextTick(() => console.log("Process.nexttick"))

function printA() {
    console.log("a:" + a);
}
printA();
console.log("last line of program")

//output
//a:9212
//last line of program
//Process.nexttick
//promise
//setimeout
//setImmediate
//Hi this is demonstration of the event loop.
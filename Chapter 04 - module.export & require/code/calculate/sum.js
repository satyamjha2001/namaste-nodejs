//Module protects their variables and functions from being accessed outside the module

console.log("sum module executed");

x = 10;
function calculateSum(a, b) {
  const sum = a + b;
  console.log(sum);
}
module.exports = { x, calculateSum };

// so we have to export it explicitly

// all works
// module.exports.x = x;
// module.exports.calculateSum = calculateSum;

// or
// module.exports = {
//     x: x,
//     calculateSum: calculateSum
// }
//or new method
// module.exports = { x, calculateSum };

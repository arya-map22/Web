let x = 9999999999999n;
let y = 222222n;

console.log(x + y);
console.log(x * y);
// console.log(x ** 2); Error, mixed arithmetic types
console.log(y == 222222);   // True
console.log(y === 222222);  // False (int and BigInt)
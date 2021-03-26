// First try javascript

let x = 23;
let y = 3.1459;
let arr1 = [1, 2, 3, 4];
let str = "Hello Javascript";
let book = {
    title: "Harry Potter",
    author: "J.K. Rowling"
};

let arr2 = [[1,2,3,4], [1,4,9,16]];
arr1[3] *= 4;

// Print output to screen
console.log(x + arr1[2]);
console.log(x * arr1[2]);
console.log(str);
console.log(arr1[3]);
console.log(arr1);
console.log(arr1[2] === x);
console.log(y * x**2 /* exponential */);
console.log(book.title);
console.log(book.author);
console.log(arr2[0][1]);
console.log(arr1.length);
console.log(arr2.length);
console.log(book.title + " " + book.author);

arr1 = [];

console.log(arr1);
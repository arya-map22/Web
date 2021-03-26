// Function in javascript

function abs(x) {
    if (x < 0) return -x;
    else return x;
}

const square = x => x**2;

console.log(abs(-3));
console.log(square(2));

let book = {
    title: "Harry Potter",
    author: "J.K. Rowling",
    // Functions inside an object are called methods
    price() {
        return 200;
    }
};

console.log(book.price());

function fact(x) {
    let ret = 1;
    while (x > 1) {
        ret *= x;
        --x;
    }

    return ret;
}

console.log(fact(5));

function sum(arr) {
    let ret = 0;
    for (let x of arr) 
        ret += x;
    
    return ret;
}

let arr = [1, 2, 3, 4, 5];

console.log(sum(arr));
// 09. Boolean value is either true or false.
//     - Write three JavaScript statement example which provide truthy value.
//     - Write three JavaScript statement example which provide falsy value.

let num_1 = 20;
let num_2 = 30;

// first truthy statement
console.log(num_1<num_2);
// o/p -- true

// second truthy statement
console.log((num_1 % 2) == 0);
// o/p -- true

// third truthy statement
console.log((num_2 % 3) == 0);
// o/p -- true

// first falsy statement
console.log(num_1 > num_2);
// o/p -- false

// first falsy statement
console.log(num_1 == num_2);
// o/p -- false

// first falsy statement
console.log(num_1 === num_2);
// o/p -- false
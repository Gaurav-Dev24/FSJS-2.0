// 05. Declare a varibale and assign string value to it and then split it into an array using split() method

let message = "Hello World"
console.log(message.split(''));

// o/p --
// [
//     'H', 'e', 'l', 'l',
//     'o', ' ', 'W', 'o',
//     'r', 'l', 'd'
// ]

// 06. 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.

let media = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
let result = media.split(',');
console.log(result);

// o/p --
// [
//     'Facebook',
//     ' Google',
//     ' Microsoft',
//     ' Apple',
//     ' IBM',
//     ' Oracle',
//     ' Amazon'
// ]
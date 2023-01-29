// 11. Use the Date object to do the following activities

const now = new Date();

// - What is the year today?
console.log(now.getFullYear());
// o/p-- 2023

// - What is the month today as a number?
// console.log(now.getMonth()); -- gives you month from 0-11 format
actaulMonth = now.getMonth() + 1 ;
console.log(actaulMonth);
// o/p-- 1


// - What is the date today?
console.log(now.getDate());
// o/p -- 22

// - What is the day today as a number?
console.log(now.getDay()); // gives the from 0-6 format
// o/p -- 0

// - What is the hours now?
console.log(now.getHours());
// o/p -- 11

// - What is the minutes now?
console.log(now.getMinutes());
// o/p -- 55


// - Find out the numbers of seconds elapsed from January 1, 1970 to now.

const today = Date.now();
console.log(`Time elapsed in miliseconds is ${today}`);

// Desired answer
console.log(`Time elapsed in seconds is ${today/1000}`);

console.log(`Time elapsed in minutes is ${today/60000}`);

console.log(`Time elapsed in hours is ${today/3600000}`);

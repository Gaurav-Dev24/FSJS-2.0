// 22. The following is an array of 10 students ages:

// => const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// - Sort the array and find the min and max age

ages.sort();
console.log(ages);
minValue = Math.min(...ages);
console.log(`The minimum value is ${minValue} `);
maxValue = Math.max(...ages);
console.log(`The maximum value is ${maxValue}`);
//  o/p --
// [
//   19, 19, 20, 22, 24,
//   24, 24, 25, 25, 26
// ]
// The minimum value is 19 
// The minimum value is 26

// - Find the median age(one middle item or two middle items divided by two)

let mid = Math.floor(ages.length/2);
if (ages.length % 2 == 0){
    console.log(((ages[mid - 1] + ages[mid]) / 2));
}
else{
    console.log((ages[mid]));
}
// o/p-- 24

// - Find the average age(all items divided by number of items)

let sum = 0;
for(let i= 0; i<ages.length; i++){
    sum = sum + ages[i];
}
let avg = sum/ages.length;
console.log(avg);
// o/p--22.8

// - Find the range of the ages(max minus min)

let range = maxValue - minValue;
console.log(range);
// o/p-- 7

// - Compare the value of (min - average) and (max - average), use abs() method

let valueOne = minValue - avg ;
let valueTwo = maxValue - avg ;

if(valueOne > valueTwo){
    console.log(`Min avg. is greater`);
}
else{
    console.log(`Max avg. is greater`);
}
//  o/p -- Max avg. is greater

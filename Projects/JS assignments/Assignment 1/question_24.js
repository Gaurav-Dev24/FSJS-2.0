// 24. Write a program to create two array "even" and "odd" having even and odd number between the 0 to 100 (0 and 100 included).
let arr = [];
let even = [];
let odd = [];
for (let i = 0; i<=100; i++){
    arr.push(i);
    even = arr.filter(i => i%2==0);
    odd = arr.filter (i => i%2 !==0);
}
console.log("Even array is :",even);
console.log("Odd array is :",odd);




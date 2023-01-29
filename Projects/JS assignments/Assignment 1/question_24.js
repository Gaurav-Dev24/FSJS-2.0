// 24. Write a program to create two array "even" and "odd" having even and odd number between the 0 to 100 (0 and 100 included).
function getEvenNumbers() {
    let arr = [];
    let evenArr = [];
    let oddArr = [];
    for (let i = 0; i <= 100; i++) {
        arr.push(i);
        // arr[i] % 2 === 0 ? evenArr = arr[i] : oddArr = arr[i]
        // console.log(evenArr);
        if (arr[i] % 2 === 0) {
            evenArr = arr.filter(i);
            console.log(evenArr);
        }
        else{
            // oddArr = arr[i];
            // console.log(oddArr);
        }
    }
}
getEvenNumbers();

// console.log(evenArr);




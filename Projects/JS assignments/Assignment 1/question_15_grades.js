// 15. Write a program which can give grades to students according to theirs scores:
//     - 80-100, A
//     - 70-89, B
//     - 60-69, C
//     - 50-59, D
//     - 0-49, F

let marks = 10;

if (marks >= 80 && marks <= 100){
    console.log(`You got A grade `);
}
else if(marks >= 70 && marks <= 89){
    console.log(`You got B grade`);
}
else if(marks >= 60 && marks <= 69){
    console.log(`You got C grade`);
}
else if(marks >= 50 && marks <= 59){
    console.log(`You got D grade`);
}
else if(marks >= 0 && marks <= 49){
    console.log(`You got F grade`);
}
else{
    console.log("Please enter marks between 0 to 100 and try again");
}

// o/p -- You got F grade
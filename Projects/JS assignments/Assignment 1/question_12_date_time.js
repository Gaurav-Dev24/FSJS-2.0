// 12. Create a human readable time format using the Date time object
const now = new Date();
let year = now.getFullYear();
let hours = now.getHours();
let minutes = now.getMinutes();

let month = now.getMonth() + 1;
if (month < 10){
    month = "0" + month;
}

let day = now.getDate();
if (day < 10){
    day = "0" + day;
}
//     - YYYY-MM-DD HH:mm
console.log(`The date and time in format YYYY-MM-DD HH:mm is : ${year}-${month}-${day} ${hours}:${minutes}`);
// o/p --The date and time in format YYYY-MM-DD HH:mm is : 2023-01-22 13:29

//     - DD-MM-YYYY HH:mm
console.log(`The date and time in format DD-MM-YYYY HH:mm is : ${day}-${month}-${year} ${hours}:${minutes}`);
// o/p -- The date and time in format DD-MM-YYYY HH:mm is : 22-01-2023 13:31

//     - DD/MM/YYYY HH:mm
console.log(`The date and time in format DD-MM-YYYY HH:mm is : ${day}/${month}/${year} ${hours}:${minutes}`);
// o/p -- The date and time in format DD-MM-YYYY HH:mm is : 22/01/2023 13:32
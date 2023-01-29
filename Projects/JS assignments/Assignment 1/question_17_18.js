// 17. Write a program which tells the number of days in a month.
const getDays = (year, month) => {
    return new Date(year, month, 0).getDate();
};

console.log(getDays(2016,5));
// o/p -- 31

// 18. Write a program which tells the number of days in a month, now consider leap year.

const getLeapYear = (year, month) => {
    if (year % 4 == 0){
        console.log(`${year} is leap year`);
    }
    else{
        console.log(`${year} is not leap year`);
    }
    return new Date(year, month, 0).getDate();
};
console.log(getLeapYear(2012,4)); 
// o/p -- 
// 2012 is leap year
// 30





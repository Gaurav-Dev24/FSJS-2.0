// 21. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.

let countries = ['India','Japan','Israel','Ethopia','Pakistan'];

// WITH FUNCTION DECLARATION
function result (){
    let x =countries.length;
    for(let i= 0; i <= x; i++){
    countries[i] == 'Ethopia';
}
console.log('ETHOPIA');
}
result();
// O/P -- ETHOPIA

// WITHOUT DECLARING A FUNCTION
// let x =countries.length;
//     for(let i= 0; i <= x; i++){
//     countries[i] == 'Ethopia';
// }
// console.log('ETHOPIA');
// O/P -- ETHOPIA
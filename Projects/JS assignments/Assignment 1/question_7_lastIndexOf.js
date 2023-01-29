// 07. Declare an array containing the multiple values and use lastIndexOf to determine the position of the first and last occurrence of a word "pw skills".

let websites = ["lco.in","google.com","pw skills", "ineuron.ai", "pw skills"];
firstOccurrence = websites.lastIndexOf("pw skills",2);
lastOccurrence = websites.lastIndexOf("pw skills");

console.log(`The first occurence is at "${firstOccurrence}" index and last occurrence is at "${lastOccurrence}" index`);

// o/p--
// The first occurence is at "2" index and last occurrence is at "4" index
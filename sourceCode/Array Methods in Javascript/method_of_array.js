// Pop() method -- to delete any element from an array, deletion takes place from last index
// const fruits = ["Banana","Apple","Guava","Mango","Grapes"];
// console.log(fruits.pop());
// console.log(fruits);
// o/p-
// Grapes
// [ 'Banana', 'Apple', 'Guava', 'Mango' ]

// Push() method -- to insert or push any element into array, insertion takes place from last index
// const fruits = ["Banana","Apple","Guava","Mango","Grapes"];
// let length = fruits.push("Kiwi");
// console.log(fruits);
// console.log(length);
// o/p-
// [ 'Banana', 'Apple', 'Guava', 'Mango', 'Grapes', 'Kiwi' ]
// 6

// Shift() -- to delete element from the array, deletion takes place from the starting index and rest values are shifted
// const fruits = ["Banana","Apple","Guava","Mango","Grapes"];
// console.log(fruits.shift()); 
// console.log(fruits);
// o/p-
// Banana
// [ 'Apple', 'Guava', 'Mango', 'Grapes' ]

// Unshift() -- to insert element in the array, insertion takes place from the starting index and rest values are shifted
// const fruits = ["Banana","Apple","Guava","Mango","Grapes"];
// console.log(fruits.unshift("Lemon"));  //The unshift() method returns the new array length.
// console.log(fruits);
// o/p-
// 6
// [ 'Lemon', 'Banana', 'Apple', 'Guava', 'Mango', 'Grapes' ]

// Concatenation -- to merge two or more than two arrays together.
// const myGirls = ["Sita", "Gita","Neha"];
// const myBoys = ["Ram", "Shyam", "Aman"];

// const myChildren = myGirls.concat(myBoys);
// console.log(myChildren);
// o/p-
// [ 'Sita', 'Gita', 'Neha', 'Ram', 'Shyam', 'Aman' ]

// The concat() method does not change the existing arrays. It always returns a new array.
// const myGirls = ["Sita", "Gita","Neha"];
// const myBoys = ["Ram", "Shyam", "Aman"];

// const myChildren = myGirls.concat(myBoys);
// console.log(myChildren);
// console.log(myGirls);
// console.log(myBoys);
// o/p-
// [ 'Sita', 'Gita', 'Neha', 'Ram', 'Shyam', 'Aman' ] -- myGirls  +   myBoys
// [ 'Sita', 'Gita', 'Neha' ]  -- myGirls
// [ 'Ram', 'Shyam', 'Aman' ]  -- myBoys

// The concat() method can take any number of array arguments.
// const carnivorus = ["Lion", "Tiger"];
// const omnivorous = ["Bear", "Crow"];
// const herbivorous = ["Cow", "Goat"];
// const organism = carnivorus.concat(omnivorous, herbivorous);

// console.log(organism);
// console.log(carnivorus);
// console.log(omnivorous);
// console.log(herbivorous);
// o/p-
// [ 'Lion', 'Tiger', 'Bear', 'Crow', 'Cow', 'Goat' ]
// [ 'Lion', 'Tiger' ]
// [ 'Bear', 'Crow' ]
// [ 'Cow', 'Goat' ]

// The concat() method can also take strings as arguments.
// const arr1 = ["Emil", "Tobias", "Linus"];
// const myChildren = arr1.concat("Peter"); 

// console.log(myChildren);
//  o/p-
// [ 'Emil', 'Tobias', 'Linus', 'Peter' ]

// Splice() - to add items to Array, it takes two parameters.
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(2, 0, "Lemon", "Kiwi");

// console.log(fruits);
// o/p--
// [ 'Banana', 'Orange', 'Lemon', 'Kiwi', 'Apple', 'Mango' ]

// The splice() method adds new elements to an array, and returns an array with the deleted elements (if any):
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let removed = fruits.splice(2, 2, "Lemon", "Kiwi");
// console.log(removed);
// o/p--
// [ 'Apple', 'Mango' ]

// Using splice() to Remove Elements
// With clever parameter setting, you can use splice() to remove elements without leaving "holes" in the array.
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(0, 1);
// console.log(fruits);

// o/p --
// [ 'Orange', 'Apple', 'Mango' ] -- here banana is being removed as declared in line 98

// Slice() -- The slice() method slices out a piece of an array into a new array.
// const animals = ["Cow","Buffalo","Goat","Lion","Tiger"]
// const carnivorous = animals.slice(3);
// console.log(animals);
// console.log(carnivorous);
// o/p --
// [ 'Lion', 'Tiger' ]
// [ 'Cow', 'Buffalo', 'Goat', 'Lion', 'Tiger' ]

// The slice() method can take two arguments.
// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const citrus = fruits.slice(1, 3); 
// --The method then selects elements from the start argument, and up to (but not including) the end argument.
// console.log(citrus);
// o/p--
// [ 'Orange', 'Lemon' ]

// Sort() -- The sort() method sorts an array alphabetically
// const cars = ["BMW", "Audi", "Rolls Royce", "Macleran"];
// let sorted = cars.sort();
// console.log(sorted);
// // o/p--
// [ 'Audi', 'BMW', 'Macleran', 'Rolls Royce' ]

// Reverse() -- The reverse() method reverses the elements in an array.
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let sorted = fruits.sort();
// let reversed = fruits.reverse();
// console.log(sorted);
// console.log(reversed);

// // o/p --
// [ 'Apple', 'Banana', 'Mango', 'Orange' ]
// [ 'Mango', 'Apple', 'Orange', 'Banana' ]

// Fill() -- to fill the array with certain values
// syntax - fill(Value)/fill(9) -- fill all array to Value
// const array1 = [1, 2, 3, 4];
// const filledArray = array1.fill(9)
// console.log(filledArray);
// // o/p--
// [ 9, 9, 9, 9 ]

// syntax - fill(value,start)/fill(9,1) -- fill the array with 9 starting from index 1
// const array1 = [1, 2, 3, 4];
// const filledArray = array1.fill(9,1)
// console.log(filledArray);
// // o/p--
// [ 1, 9, 9, 9 ]

// syntax - fill(value,start)/fill(9,1,2) -- fill the array with 9 starting from index 1
// const array1 = [1, 2, 3, 4];
// const filledArray = array1.fill(9,1,2)
// console.log(filledArray);
// // o/p--
// [ 1, 9, 3, 4 ]

// Include() -- to check the value is present in the array or not ?? and returns true or false
// syntax - includes (searchElement);
// const array1 = [1, 2, 3];
// result = array1.includes(2);
// console.log(result);
// // o/p--
// true

// syntax - includes (searchElement, fromIndex);
// const pets = ['cat', 'dog', 'bat'];
// result = pets.includes('cat',1);
// console.log(result);
// o/p--
// false

// Indexof() -- to find the index of the element in array
// syntax - includes (searchElement);
// const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
// result = beasts.indexOf('bison');
// console.log(result);
// // o/p --
// 1

// syntax - includes (searchElement, fromIndex);
// const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
// result = beasts.indexOf('bison', 2);
// console.log(result);
// // o/p--
// 4

// isArray() -- to check the variable or the value is an array or not.
// const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
// result = Array.isArray([beasts]);
// // result = Array.isArray(beasts);
// console.log(result);
// // o/p--
// true

// Join() -- to join two or more arrays and return the value as string with , if no separator is declared or with separators if declared.
// syntax - join()
// const elements = ['Fire', 'Air', 'Water'];
// result = elements.join();
// console.log(result);

// o/p--
// Fire,Air,Water

// syntax - join(separator)
// const elements = ['Fire', 'Air', 'Water'];
// result = elements.join(' and ');
// console.log(result);
// // o/p --
// Fire and Air and Water

// Map()-- to map or apply certain element to whole array
// syntax- array.map(element);
// const array1 = [1, 4, 9, 16];
// pass a function to map
// const map1 = array1.map(x => x * 2);
// console.log(map1);
// o/p --
// [ 2, 8, 18, 32 ]

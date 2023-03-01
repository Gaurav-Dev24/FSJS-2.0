## Task 1 - Adding new button "Pro Subscription" to the nav bar

![Button added](./05_DOM%20Project/Output/DOM%20P2%20SS.png)

```Javascript
let navDiv = document.querySelector(".nav-center"); // selecting the main div for button
let newButtonDiv = document.createElement("div"); // creating the new div for button
let newAnchor = document.createElement("a"); // creating the new anchor tag for the button
newAnchor.className = "btn"; // giving class to new anchor tag
newAnchor.href = "index.html"; // giving it the link for navigation 
newAnchor.innerText = "Pro Subscription"; // giving it the text content  
newButtonDiv.appendChild(newAnchor); // adding the whole anchor tag to the button div
navDiv.appendChild(newButtonDiv); // adding the whole anchor tag to the button div  
```

## Task 2 - Changing the colors of the Dishes names and description

![Button added](./05_DOM%20Project/Output/DOM%20P2%20SS.png)

```Javascript
let reciepeName = document.querySelectorAll(".recipe-name"); // selecting the class which is to be modified
const arrOne = [...reciepeName]; // converting the nodelist to an array
for (i=0; i<=arrOne.length;i++){
        arrOne[i].style.color = "#8D3DAF";
    }  // applying styling to all the elements of the array

let reciepeDescpt = document.querySelectorAll(".recipe-disp"); // selecting the class which is to be modified
const arrTwo = [...reciepeDescpt]; // converting the nodelist to an array
for (i=0; i<=arrTwo.length;i++){
        arrTwo[i].style.color = "#8D3DAF";
    } // applying styling to all the elements of the array
```

## Task 3 - Adding a new card to the gallery dynamically

![Button added](./05_DOM%20Project/Output/DOM%20P2%20SS.png)

```Javascript
let galleryDiv = document.querySelector(".recipe-gallery"); // Selecting the main gallery div for adding the child

let newCard = document.createElement("div");
newCard.className = "card"; // creating new card div

let cardAnchor = document.createElement("a"); // creating new anchor tag in the card
cardAnchor.href = "#";
cardAnchor.className = "recipe-text"; // giving it class of "recipe-text"

let newImg = document.createElement("img"); // creating new img tag in the card
newImg.src = "./img/recipe-6.jpg" // adding the image source
newImg.className = "recipe-img"; // giving it class of "recipe-img"

let newHeading = document.createElement("h5"); // creating new h5 tag in the card
newHeading.className = "recipe-name"; // giving it class of "recipe-name"
newHeading.innerText = "Chicken Peri Peri"; // giving it text content

let newPara = document.createElement("p"); // creating new paragraph tag in the card
newPara.className = "recipe-disp"; // giving it class of "recipe-disp"
newPara.innerText = "Prep : 15min | Cook : 40min"; // giving it text content

newCard.appendChild(cardAnchor); // adding card anchor to card div
cardAnchor.appendChild(newImg); // adding image to the div
cardAnchor.appendChild(newHeading); // adding dish name
cardAnchor.appendChild(newPara); // adding dish description
galleryDiv.appendChild(newCard); // adding the whole new card to the gallery
```
![Output Image](./04_DOM%20Project/Output/DOM%20P1%20SS.png)
## Task 1
### Task 1.1 - Giving background color of "orange" to the 1st mini div i.e. "The Barbarian"
```Javascript
let barbarianDiv = document.querySelector(".clash-card__unit-stats--barbarian");
barbarianDiv.style.backgroundColor = "#e68845";
```
### Task 1.2 - Giving background color of "orange" to the 1st div i.e. "The Archer"
```Javascript
let archerDiv = document.querySelector(".clash-card__unit-stats--archer");
archerDiv.style.backgroundColor = "#E03B8B";
```
### Task 1.3 - Giving background color of "orange" to the 1st div i.e. "The Giant"
```Javascript
let giantDiv = document.querySelector(".clash-card__unit-stats--giant");
giantDiv.style.backgroundColor = "#E07C24";
```
### Task 1.4 - Giving background color of "orange" to the 1st div i.e. "The Goblin"
```Javascript
let goblinDiv = document.querySelector(".clash-card__unit-stats--goblin");
        goblinDiv.style.backgroundColor = "#00D84A";
```
### Task 1.5 - Giving background color of "orange" to the 1st div i.e. "The Wizard"
```Javascript
let wizardDiv = document.querySelector(".clash-card__unit-stats--wizard");
wizardDiv.style.backgroundColor = "#23C4ED";
```
## Task 2 - Giving color of "white" to the all the first two mini div elements each one of them "
```Javascript
let textDiv = document.querySelectorAll(".one-third");
        let arr = [...textDiv];
        for (i=0; i<=arr.length; i++){
            arr[i].style.color = "#FFFFFF";
        }
    // Giving white font color to all the div's first two mimi div-elements 
```
## Task 3 - Giving color of "white" to the all the third mini div elements of each one of them "
```Javascript
let textDivTwo = document.getElementsByClassName("one-third no-border");
        let arr1 = [...textDivTwo];
        for (i=0; i<=arr1.length; i++){
            arr1[i].style.color = "#FFFFFF";
        }
// Giving white font color to all the div's prices        
```
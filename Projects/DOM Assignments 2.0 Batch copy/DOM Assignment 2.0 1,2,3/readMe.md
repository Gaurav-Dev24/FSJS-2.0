### Task 1- Add list item "Hire Me" to unordered list of the navbar.
![First task](./firstAssignmentImage/task1Output.png)
```Javascript
let ul = document.querySelector("ul");
let elementOne = document.createElement("li");
elementOne.innerText = "Hire Me";
ul.appendChild(elementOne);
```

### Task 2- Add list item "Hire Me" to unordered list of the navbar.
![Second task](./firstAssignmentImage/task2Output.png)
```Javascript
let ul = document.querySelector("ul");
let elementOne = document.createElement("li");
elementOne.innerText = "Hire Me";
ul.appendChild(elementOne);
```
### Task 3 - Replacing "Contact" with list item "Projects" to unordered list of the navbar.
![Third task](./firstAssignmentImage/task3Output.png)
```Javascript
let ul = document.querySelector("ul");
      ul.removeChild(ul.children[2]); // remove the existing child i.e contact and adding projects as a new child
      let elementTwo = document.createElement("li");
      elementTwo.innerText = "Projects";
      ul.appendChild(elementTwo);
```
### Task 4 - Adding image on the place of avatar.
![Fourth task](./firstAssignmentImage/task4Output.png)
```Javascript
let chatImg = document.querySelector("img");
chatImg.src = "dev.jpg"
```
### Task 5 - Adding a new button i.e "Support Me" along with chat button
![Fifth task](./firstAssignmentImage/task5Output.png)
```Javascript
let chatDiv = document.querySelector(".hero-right-section-btns");
let newBtn = document.createElement("button");
newBtn.innerText = "Support Me";
chatDiv.appendChild(newBtn);
```

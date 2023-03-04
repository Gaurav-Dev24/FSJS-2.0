## Assignment 1
### Task 1.1- Add list item "Hire Me" to unordered list of the navbar.
![First task](./DOM%201%2C2%2C3/firstAssignmentImage/task1Output.png)
```Javascript
let ul = document.querySelector("ul");
let elementOne = document.createElement("li");
elementOne.innerText = "Hire Me";
ul.appendChild(elementOne);
```

### Task 1.2- Adding a placeholder in the search button in navbar
![Second task](./DOM%201%2C2%2C3/firstAssignmentImage/task2Output.png)
```Javascript
let input = document.querySelector("input");
document.querySelector("input").placeholder = "Search My Project";
```
### Task 1.3 - Replacing "Contact" with list item "Projects" to unordered list of the navbar.
![Third task](./DOM%201%2C2%2C3/firstAssignmentImage/task3Output.png)
```Javascript
let ul = document.querySelector("ul");
      ul.removeChild(ul.children[2]); // remove the existing child i.e contact and adding projects as a new child
      let elementTwo = document.createElement("li");
      elementTwo.innerText = "Projects";
      ul.appendChild(elementTwo);
```
### Task 1.4 - Adding image on the place of avatar.
![Fourth task](./DOM%201%2C2%2C3/firstAssignmentImage/task4Output.png)
```Javascript
let chatImg = document.querySelector("img");
chatImg.src = "dev.jpg"
```
### Task 1.5 - Adding a new button i.e "Support Me" along with chat button
![Fifth task](./DOM%201%2C2%2C3/firstAssignmentImage/task5Output.png)
```Javascript
let chatDiv = document.querySelector(".hero-right-section-btns");
let newBtn = document.createElement("button");
newBtn.innerText = "Support Me";
chatDiv.appendChild(newBtn);
```
## Assignment 2
### Task 2.1 - Change the background color of all the h3
![First task](./DOM%201%2C2%2C3/secondAssignmentImage/task1Output.png)
```Javascript
let h3 = document.querySelectorAll("h3");
const arr = Array.from(h3);
for(let i = 0; i<=arr.length; i++){
  arr[i].style.backgroundColor = "#CAD5E2"
}
```
### Task 2.2 - Add new "skill" accordian below Hobbies
![Second task](./DOM%201%2C2%2C3/secondAssignmentImage/task2Output.png)
```Javascript
let mainDiv = document.querySelector(".accordian-wrapper");
let skillDiv = document.createElement("div"); // creating a div
skillDiv.className = "accordian"; // giving the class name .accordian
let skillHeading = document.createElement("h3"); // creating a h3
skillHeading.innerText = "Skills"; // giving the textContent to h3
skillDiv.appendChild(skillHeading) // adding the heading to the div element
let skillPara = document.createElement("p"); // creating a paragraph
skillPara.innerText = "I posses a very good command over the Full Stack Development technologies like MERN which can be seen in my work over the Github."; // giving the textContent to paragraph
skillDiv.appendChild(skillPara); // adding the heading to the div element
mainDiv.appendChild(skillDiv) // adding the whole created to maindiv

```
## Assignment 3
### Task 3.1 - Changing the value of the placeholder
![Second task](./DOM%201%2C2%2C3/thirdAssignmentImage/task1Output.png)
```Javascript
      document.querySelector(".enterName").placeholder = "FSJS 2.0";
    document.querySelector(".enterMail").placeholder = "fsjs@ineuron.ai";
    document.querySelector(".enterMessage").placeholder = "Hello World";
    document.querySelector(".userName").placeholder = "FSJS 2.0";
    document.querySelector(".userEmail").placeholder = "fsjs@ineuron.ai";
    document.querySelector(".userMessage").placeholder = "Hello World";
```
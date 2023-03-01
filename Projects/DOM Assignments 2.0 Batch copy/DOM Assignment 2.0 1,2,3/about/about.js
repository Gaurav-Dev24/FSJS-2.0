let accordian = document.querySelectorAll(".accordian h3");
accordian.forEach((element) => {
  element.addEventListener("click", () => {
    let para = element.nextElementSibling;
    if (para.style.display === "block") {
      para.style.display = "none";
    } else {
      para.style.display = "block";
    }
  });
});
// Task 1 - Change the background color of all the h3
// let h3 = document.querySelectorAll("h3");
// const arr = Array.from(h3);
// for(let i = 0; i<=arr.length; i++){
//   arr[i].style.backgroundColor = "#CAD5E2"
// }

// Task 2 - Add new skill accordian below Hobbies

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
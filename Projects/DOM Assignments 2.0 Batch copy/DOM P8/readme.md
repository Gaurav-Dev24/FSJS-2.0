## Task 1 - Adding vertical scroll bar to right div

### Before solving
![Task one](./DOM%20P8/ass8.1-before.png)

```Javascript
// let rightDiv = document.querySelector(".col-lg-4 "); // selecting the div by the class name
let rightDiv = document.querySelector("aside"); // selecting the same div with element name
rightDiv.style.overflowX = "hidden";
rightDiv.style.overflowY = "auto";
```
### After solving
![Task one](./DOM%20P8/ass8.1-after.png)

## Task 2 - Removing the background image from the web page

### Before solving
![Task Two](./DOM%20P8/ass8.2-before.png)

```Javascript
document.body.style.backgroundImage = "none"; // removing the backround from the whole body
rightDiv.style.overflow = "hidden"; // removing the scroll bar from the right div
```
### After solving
![Task Two](./DOM%20P8/ass8.2-after.png)

## Task 3 - Adding vertical Humberger menu

### Before solving
![Task Three](./DOM%20P8/ass8.3-before.png)

```Javascript
function expand() {
    let menu = document.getElementById("navbarTogglerDemo01"); // selecting the navbar div
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
} // applying the logic for hamburger menu
```
### After solving
![Task Three](./DOM%20P8/ass8.3-after.png)
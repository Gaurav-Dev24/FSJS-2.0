##  Task 1.1 - Changing the font style and color of the Heading

### Before 

![Before Task](./DOM%20P9/ass9.1-before.png)

```Javascript
let heading = document.querySelector("h1");
heading.style.fontFamily = "Ubuntu";
heading.style.color = "#FF0000";
```

### After
![After Task](./DOM%20P9/ass9.1-after.png)


##  Task 1.2 - Adding image to the "add-cart" button

### Before 

![Before Task](./DOM%20P9/ass9.1-before.png)

```Javascript
let cartImg = document.querySelectorAll("img");
let arr = [...cartImg];
arr[1].src = "images/icon-cart.svg"
```

### After
![After Task](./DOM%20P9/ass9.1-after.png)

##  Task 2.1 - Changing the padding and border of the hero section

### Before 

![Before Task](./DOM%20P9/ass9.2-before.png)

```Javascript
document.querySelector(".container").style.border = "10px solid rgb(248, 243, 243)";
document.querySelector(".container").style.paddingRight = "0px";
document.querySelector(".container").style.paddingLeft = "0px";
```

### After
![After Task](./DOM%20P9/ass9.2-after.png)

##  Task 2.2 - Changing the button background color to red of on hover

### Before 

![Before Task](./DOM%20P9/ass9.2-before.png)

```Javascript
let btn = document.querySelector(".add-to-cart");
function changeColor (){
    btn.style.backgroundColor = "#FF0000";
}
```

### After
![After Task](./DOM%20P9/ass9.2-after.png)
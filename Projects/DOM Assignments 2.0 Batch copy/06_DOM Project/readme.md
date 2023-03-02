## Task 1 - Adding the logo of ineuron in the header 

![Task one](./06_DOM%20Project/Output/DOM%20P3%20SS-1.png)

```Javascript
document.querySelector(".logo").src = "./assets/ineuron-logo.png";
```

## Task 2 - Changing the amount in the Premium EQ
 
![Task two](./06_DOM%20Project/Output/DOM%20P3%20SS-2.png)

```Javascript
let price = document.querySelector("span");
price.innerText = "$10";
```
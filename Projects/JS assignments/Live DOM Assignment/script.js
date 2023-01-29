const randomColor = [
    "#00FFFF",
    "#1ce5ab",
    "#3ad57b",
    "#de656f",
    "#4a31ad",
    "#c4f08f",
    "#db86eb",
    "#46d2ef",
    "#f4e807",
    "#1c32b0",
    "#9f3642",
    "#73a0aa",
    "#11d1bf",
    "#9cb805",
    "#8e5069",
    "#5F9EA0",
    "#FFF0F5",
    "#ADD8E6",
  ];

  // madking circle visible/ creating circle an a click
  document.querySelector(".all").addEventListener("click", function () {
    let circle = document.createElement("div");
    circle.classList.add("circle");
    circle.style.top = `${event.clientY - 10}px `;
    circle.style.left = `${event.clientX - 10}px`;
    circle.style.backgroundColor = `${
      randomColor[Math.floor(Math.random() * 16)]
    }`;
    document.querySelector(".all").append(circle);

    // making it disapre in 1sec
    setTimeout(() => {
      circle.remove();
    }, 1000);
  });
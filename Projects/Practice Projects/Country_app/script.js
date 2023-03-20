let data;

const inputBox = document.getElementById("right-inputBox");
const searchBtn = document.getElementById("searchBtn");
const capital = document.getElementById("capital");
const locate = document.getElementById("continent");
const currency = document.getElementById("currency");
const population = document.getElementById("population");
const language = document.getElementById("language");
const area = document.getElementById("area");
const neighbour = document.getElementById("neighbour");
const currencySymbol = document.getElementById("currencySymbol");
const flagImg = document.getElementById("flag-image");



searchBtn.addEventListener("click" , (event)=> {
  event.preventDefault();
  if (!inputBox.value) {
    alert("Please Enter Country Name: ");
    return;
  }

  let country = inputBox.value;
  let finalUrl = `https://restcountries.com/v3.1/name/${country}?fullText=true`;
  console.log(finalUrl);

  fetch(finalUrl)
    .then((response) => response.json()) 
    .then((data) => {
      console.log(data[0]);
      capital.innerHTML = (data[0].capital[0]);
      locate.innerHTML = (data[0].continents[0]);
      currency.innerHTML = (Object.keys(data[0].currencies)[0]);
      population.innerHTML = (data[0].population);
      language.innerHTML = (Object.values(data[0].languages).toString().split(",").join(", "));
      area.innerHTML = (data[0].area);
      neighbour.innerHTML = (Object.values(data[0].borders).toString().split(",").join(", "));
      flagImg.src = (data[0].flags.svg);
    });
  
});
const typeColor = {
  bug: "#26de81",
  dragon: "#ffeaa7",
  electric: "#fed330",
  fairy: "#FF0069",
  fighting: "#30336b",
  fire: "#f0932b",
  flying: "#81ecec",
  grass: "#00b894",
  ground: "#EFB549",
  ghost: "#a55eea",
  ice: "#74b9ff",
  normal: "#95afc0",
  poison: "#6c5ce7",
  psychic: "#a29bfe",
  rock: "#2d3436",
  water: "#0190FF",
}

const url = "https://pokeapi.co/api/v2/pokemon/";
const card = document.getElementById("card");
const btn = document.getElementById("btn");

let getPokedata = () => {
  // Generate a random number boetween 1 to 150
  let id = Math.floor(Math.random() * 150) + 1;
  console.log(id);

  // Combine pokeapi url with pokemon id
  const finalUrl = url + id;
  console.log(finalUrl);

  // Fetch the generated url
  fetch(finalUrl)
    .then((response) => response.json())
    .then((data) => {
      generateCard(data);
    });

  // Generate card
  let generateCard = (data) => {
    // Get data and assign it to variables
    console.log(data);
    const hp = data.stats[0].base_stat;
    // const imgSrc = data.sprites.other.dream_world.front_default;
    const imgSrc = data.sprites.back_default;
    console.log(imgSrc);
    const pokeName = data.name[0].toUpperCase() + data.name.slice(1);
    const statAttack = data.stats[1].base_stat;
    const statDefense = data.stats[2].base_stat;
    const statSpeed = data.stats[5].base_stat;


    // Set theme color based on pokemon type
    const themeColor = typeColor[data.types[0].type.name];
    // console.log(themeColor);
    card.innerHTML = `
        <p class="hp">
          <span>HP</span>
            ${hp}
        </p>
        <img src= ${imgSrc} />
        <h2 class="poke-name">${pokeName}</h2>
        <div class="types">
          
        </div>
        <div class="stats">
          <div>
            <h3>${statAttack}</h3>
            <p>Attack</p>
          </div>
          <div>
            <h3>${statDefense}</h3>
            <p>Defence</p>
          </div>
          <div>
            <h3>${statSpeed}</h3>
            <p>Speed</p>
          </div>
        </div>
  `;
  appendTypes(data.types);
  styleCard(themeColor);

  };
  let appendTypes = (types) => {
    types.forEach((item) => {
      let span = document.createElement("span");
      span.textContent = item.type.name;
      document.querySelector(".types").appendChild(span);
    });
  };
let styleCard = (color) => {
  card.style.background = `radial-gradient(circle at 50% 0%, ${color} 36%, #ffffff 36%)`; 
  card.querySelectorAll(".types span").forEach(
    (typeColor) => {
      typeColor.style.backgroundColor = color;
    }); 
}
};

btn.addEventListener("click", getPokedata);
window.addEventListener("load", getPokedata);

var card_list = document.getElementsByClassName("cards");
var setLimit = 1000;
const api = `https://pokeapi.co/api/v2/pokemon?limit=${setLimit}&offset=0`;


function CreatePokemonCard(pokemon) {
  const pokemonCard = document.createElement("div");
  pokemonCard.innerHTML = `
          <img loading="lazy" src="https://img.pokemondb.net/artwork/large/${pokemon.name}.jpg">
          <h3>${pokemon.name}</h3> 
          <p class="health"><span>Health</span> : 100</p>
          <p class="power"><span>Power</span> : 75</p>
          <p class="type"> <span>Type</span>: Electric</p>
  `;
  pokemonCard.classList.add("card-container");
  card_list[0].appendChild(pokemonCard);
}
// Display it to the dom
function displayPokemons(pokemons) {
  pokemons.forEach((pokemon) => {
    CreatePokemonCard(pokemon);
  });
}
// Function to fetch data from API
async function getPokemons(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    displayPokemons(data.results);
  } catch (error) {
    console.log(error);
  }
}
getPokemons(api);

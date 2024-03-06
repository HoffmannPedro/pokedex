const allPokemonUrl = "https://pokeapi-proxy.freecodecamp.rocks/api/pokemon";
let globalPokemons = [];

async function getAllPokemon() {
  try {
    const response = await fetch(allPokemonUrl);
    if (!response.ok) {
      throw new Error("Error al obtener la lista de Pokémon");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

async function getPokemonInfo(nameOrId) {
  const pokemonUrl = `https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${nameOrId}/`;
  try {
    const response = await fetch(pokemonUrl);
    if (!response.ok) {
      throw new Error("Error al obtener informacion del Pokémon");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

let pokemons = [];

getAllPokemon()
  .then((allPokemon) => {
    allPokemon.results.forEach((pokemon) => {
      pokemons.push(pokemon);
    });
  })
  .catch((error) => console.error(error));

function getPokemon() {
  let nameOrId = document.getElementById("search-input").value;
  if (nameOrId === "Red") {
    alert("Pokémon not found");
  }
  nameOrId = nameOrId.toLowerCase();

  getPokemonInfo(nameOrId)
    .then((pokemonInfo) => {
      let pokeName = document.getElementById("pokemon-name");
      let pokeId = document.getElementById("pokemon-id");
      let pokeWeight = document.getElementById("weight");
      let pokeHeight = document.getElementById("height");
      let pokeTypeName = document.getElementById("types");
      let pokeHp = document.getElementById("hp");
      let pokeAttack = document.getElementById("attack");
      let pokeDefense = document.getElementById("defense");
      let pokeSpecialAttack = document.getElementById("special-attack");
      let pokeSpecialDefense = document.getElementById("special-defense");
      let pokeSpeed = document.getElementById("speed");
      let pokeSprite = document.createElement("img");
      pokeSprite.id = "sprite";

      let imgContainer = document.getElementById("img-container");
      // let pokeSprite = document.getElementById("pokemon-sprite");

      let pokeTypesArray = [];
      pokemonInfo.types.forEach((position) => {
        pokeTypesArray.push(position.type.name);
      });
      pokeName.innerHTML = `<p>${pokemonInfo.name}</p>`;
      pokeId.innerHTML = `<p>#${pokemonInfo.id}</p>`;
      pokeWeight.innerHTML = `<p>Weight: ${pokemonInfo.weight}</p>`;
      pokeHeight.innerHTML = `<p>Height: ${pokemonInfo.height}</p>`;

      if (pokeTypesArray.length === 2) {
        pokeTypeName.innerHTML = `<p>${pokemonInfo.types[0].type.name}</p>`;
        pokeTypeName.innerHTML += `<p>${pokemonInfo.types[1].type.name}</p>`;
      } else {
        pokeTypeName.innerHTML = `<p>${pokemonInfo.types[0].type.name}</p>`;
      }

      pokeHp.innerHTML = `<p>${pokemonInfo.stats[0].base_stat}</p>`;
      pokeAttack.innerHTML = `<p>${pokemonInfo.stats[1].base_stat}</p>`;
      pokeDefense.innerHTML = `<p>${pokemonInfo.stats[2].base_stat}</p>`;
      pokeSpecialAttack.innerHTML = `<p>${pokemonInfo.stats[3].base_stat}</p>`;
      pokeSpecialDefense.innerHTML = `<p>${pokemonInfo.stats[4].base_stat}</p>`;
      pokeSpeed.innerHTML = `<p>${pokemonInfo.stats[5].base_stat}</p>`;
      pokeSprite.src = pokemonInfo.sprites.front_default;

      let existingSprite = document.getElementById("sprite");
      if (existingSprite) {
        imgContainer.removeChild(existingSprite);
      }
      imgContainer.appendChild(pokeSprite);

      switch (pokeTypeName.getElementsByTagName("p")[0].textContent) {
        case "water":
          pokeTypeName.getElementsByTagName("p")[0].classList.add("water");
          break;
        case "bug":
          pokeTypeName.getElementsByTagName("p")[0].classList.add("bug");
          break;
        case "dark":
          pokeTypeName.getElementsByTagName("p")[0].classList.add("dark");
          break;
        case "dragon":
          pokeTypeName.getElementsByTagName("p")[0].classList.add("dragon");
          break;
        case "electric":
          pokeTypeName.getElementsByTagName("p")[0].classList.add("electric");
          break;
        case "fairy":
          pokeTypeName.getElementsByTagName("p")[0].classList.add("fairy");
          break;
        case "fighting":
          pokeTypeName.getElementsByTagName("p")[0].classList.add("fighting");
          break;
        case "fire":
          pokeTypeName.getElementsByTagName("p")[0].classList.add("fire");
          break;
        case "flying":
          pokeTypeName.getElementsByTagName("p")[0].classList.add("flying");
          break;
        case "ghost":
          pokeTypeName.getElementsByTagName("p")[0].classList.add("ghost");
          break;
        case "grass":
          pokeTypeName.getElementsByTagName("p")[0].classList.add("grass");
          break;
        case "ground":
          pokeTypeName.getElementsByTagName("p")[0].classList.add("ground");
          break;
        case "ice":
          pokeTypeName.getElementsByTagName("p")[0].classList.add("ice");
          break;
        case "normal":
          pokeTypeName.getElementsByTagName("p")[0].classList.add("normal");
          break;
        case "poison":
          pokeTypeName.getElementsByTagName("p")[0].classList.add("poison");
          break;
        case "psychic":
          pokeTypeName.getElementsByTagName("p")[0].classList.add("psychic");
          break;
        case "rock":
          pokeTypeName.getElementsByTagName("p")[0].classList.add("rock");
          break;
        case "steel":
          pokeTypeName.getElementsByTagName("p")[0].classList.add("steel");
          break;

        default:
          break;
      }
      if (pokeTypesArray.length > 1) {
        switch (pokeTypeName.getElementsByTagName("p")[1].textContent) {
          case "water":
            pokeTypeName.getElementsByTagName("p")[1].classList.add("water");
            break;
          case "bug":
            pokeTypeName.getElementsByTagName("p")[1].classList.add("bug");
            break;
          case "dark":
            pokeTypeName.getElementsByTagName("p")[1].classList.add("dark");
            break;
          case "dragon":
            pokeTypeName.getElementsByTagName("p")[1].classList.add("dragon");
            break;
          case "electric":
            pokeTypeName.getElementsByTagName("p")[1].classList.add("electric");
            break;
          case "fairy":
            pokeTypeName.getElementsByTagName("p")[1].classList.add("fairy");
            break;
          case "fighting":
            pokeTypeName.getElementsByTagName("p")[1].classList.add("fighting");
            break;
          case "fire":
            pokeTypeName.getElementsByTagName("p")[1].classList.add("fire");
            break;
          case "flying":
            pokeTypeName.getElementsByTagName("p")[1].classList.add("flying");
            break;
          case "ghost":
            pokeTypeName.getElementsByTagName("p")[1].classList.add("ghost");
            break;
          case "grass":
            pokeTypeName.getElementsByTagName("p")[1].classList.add("grass");
            break;
          case "ground":
            pokeTypeName.getElementsByTagName("p")[1].classList.add("ground");
            break;
          case "ice":
            pokeTypeName.getElementsByTagName("p")[1].classList.add("ice");
            break;
          case "normal":
            pokeTypeName.getElementsByTagName("p")[1].classList.add("normal");
            break;
          case "poison":
            pokeTypeName.getElementsByTagName("p")[1].classList.add("poison");
            break;
          case "psychic":
            pokeTypeName.getElementsByTagName("p")[1].classList.add("psychic");
            break;
          case "rock":
            pokeTypeName.getElementsByTagName("p")[1].classList.add("rock");
            break;
          case "steel":
            pokeTypeName.getElementsByTagName("p")[1].classList.add("steel");
            break;

          default:
            break;
        }
      }
    })
    .catch((error) => console.error(error));
}
function ajustarPosicion() {
  // Obtener el contenedor y el elemento
  let contenedor = document.getElementsByClassName("sprite-container")[0];
  let elemento = document.getElementById("pokemon-sprite");

  // Obtener el tamaño del contenedor
  let contenedorWidth = contenedor.offsetWidth;
  let contenedorHeight = contenedor.offsetHeight;

  // Calcular las nuevas posiciones para el elemento
  let left = contenedorWidth / 2 - elemento.offsetWidth / 2;
  let topPosition = contenedorHeight / 2 - elemento.offsetHeight / 2;

  // Aplicar las nuevas posiciones al elemento
  elemento.style.left = left + "px";
  elemento.style.top = topPosition + "px";
}

document.addEventListener("DOMContentLoaded", ajustarPosicion);
window.addEventListener("resize", ajustarPosicion);

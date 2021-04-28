function validate() {
  if (localStorage.setItem("acesso", true)) {
    alert("Voce está autenticado");
  }
  if (localStorage.setItemv("acesso", false)) {
    alert("Voce não está autenticado");
    window.location.href = "login.html";
  }
}

async function getPokemons() {
  try {
    const result = await fetch ("https://pokeapi.co/api/v2/pokemon?limit=20" );
    const { results: pokemons } = await result.json();
    if (pokemons.length != 0) {
      var pokedex = document.getElementById("pokedex");
      for (const [index, pokemon] of pokemons.entries()) {
        var item = document.createElement("li");
        item.appendChild(document.createTextNode(pokemon.name));
        var pokemonImage = document.createElement("img");
        pokemonImage.src = `https://pokeres.bastionbot.org/images/pokemon/${index+1}.png`;
        pokemonImage.loading = 'lazy'
        item.appendChild(pokemonImage);
        pokedex.appendChild(item);
      }
    } else alert("Error ao obter pokemons");
  } catch (error) {
    alert(error.message);
  }
}

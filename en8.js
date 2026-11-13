
async function fetchData(url) {
    console.log("Function start...");

    try {
        const response = await fetch(url);

        if (response.ok) {
            const response_data = await response.json();
            return response_data;
        } else {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
    } catch (error) {
        console.log(`Error fetching data: ${error}`);
        return null;
    }
}

async function addPokemonTypes(event, url) {
    console.log(`URL: ${url}`);

    const pokemonData = await fetchData(url);

    if (!pokemonData) return;

    const pokemonDiv = document.querySelector("#poke-content");

    const types = pokemonData.types
        .map(type => type.type.name)
        .join(", ");

    const info = document.createElement("p");
    info.textContent = `Types: ${types}`;

    event.target.after(info);
}

async function createPokemonView() {
    const returnedPromise = await fetchData(
        "https://pokeapi.co/api/v2/pokemon"
    );

    if (!returnedPromise) return;

    const pokemonDiv = document.querySelector("#poke-content");

    for (let pokemon of returnedPromise.results) {
        let pokemonText = document.createElement("p");

        pokemonText.textContent = pokemon.name;

        pokemonText.addEventListener("click", function(event) {
            addPokemonTypes(event, pokemon.url);
        });

        pokemonDiv.appendChild(pokemonText);
    }
}

createPokemonView();
    
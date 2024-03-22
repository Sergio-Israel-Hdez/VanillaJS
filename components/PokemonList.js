import { MenuComponent } from "./MenuComponent.js";

let pokemons = []

const ObtenerPokemons = async () => {
    const result = await fetch("https://pokeapi.co/api/v2/pokemon/");
    const {results} = await result.json();
    pokemons = results
    console.log(results)
}

export const PokemonList = async () => {
    await ObtenerPokemons();

    const template = `
        ${MenuComponent()}
        <h1 id="pokeContTit">Pokemon List</h1>
        <div id="pokeContent">
        ${
            pokemons.map(item => {
                return `<div class="card" id="pokeCard">
                            <div class="card-body">
                                <h5 class="card-title">${item.name}</h5>
                            </div>
                        </div>`
            }).join("")
        }
        </div>
    `;
    return template
}
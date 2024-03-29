import { MenuComponent } from "./MenuComponent.js";
import { OnClick } from "../VanillaEvents.js";

let pokemons = []

const ObtenerPokemons = async () => {
    const result = await fetch("https://pokeapi.co/api/v2/pokemon/");
    const {results} = await result.json();
    pokemons = results
    console.log(results)
}

const addPokemon = () => {
    const input = document.getElementById('pokeName').value

    const newPokemon = {
        name: input,
        url:"https://pokeapi.co/api/v2/pokemon/1/"
    }

    console.log(newPokemon)

    //this.pokemons.push(newPokemon)
    console.log(this.pokemons)
}

export const PokemonList = async () => {
    await ObtenerPokemons();

    const template = `
        ${MenuComponent()}
        <h1 id="pokeContTit">Pokemon List</h1>
        <div id="pokeContent">
        <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Agrega un pokemon" id="pokeName">
            <button class="btn btn-outline-primary" type="button" ${OnClick(addPokemon)}>Button</button>
        </div>
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
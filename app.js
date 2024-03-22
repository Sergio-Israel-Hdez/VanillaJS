import { InicioComponent } from "./components/InicioComponent.js";
import { AcercaComponent } from "./components/AcercaComponent.js";
import { ContactoComponent } from "./components/ContactoComponent.js";
import { PokemonList } from "./components/PokemonList.js";

class Router {
  rutas
  constructor(rutas) {
    this.rutas = rutas;
    this.contenido = document.getElementById("contenido");
    this.iniciar();
  }

  async iniciar() {
    window.addEventListener("hashchange", async () => {
      const hashActual = window.location.hash.substring(1);
      const rutaActual = this.rutas.find((ruta) => ruta.path === hashActual);
      if (!rutaActual) return;
      await this.renderizar(rutaActual.componente);
    });

    //const rutaInicio = this.rutas.find((ruta) => ruta.path === "/");
    await this.renderizar();
  }

  async renderizar(componente = InicioComponent) {
    this.contenido.innerHTML = await componente();
  }
}

const rutas = [
  {
    path: "/",
    componente: InicioComponent,
  },
  {
    path: "/acerca",
    componente: AcercaComponent,
  },
  {
    path: "/contacto",
    componente: ContactoComponent,
  },
  {
    path: "/pokemonList",
    componente: PokemonList
  }
];

const router = new Router(rutas);
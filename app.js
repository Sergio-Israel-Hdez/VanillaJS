import { InicioComponent } from "./components/InicioComponent.js";
import { AcercaComponent } from "./components/AcercaComponent.js";
import { ContactoComponent } from "./components/ContactoComponent.js";

class Router {
    constructor(rutas) {
      this.rutas = rutas;
      this.contenido = document.getElementById("contenido");
      this.iniciar();
    }
  
    iniciar() {
      window.addEventListener("hashchange", () => {
        const hashActual = window.location.hash.substring(1);
        const rutaActual = this.rutas.find((ruta) => ruta.path === hashActual);
        if (!rutaActual) return;
        this.renderizar(rutaActual.componente);
      });
  
      const rutaInicio = this.rutas.find((ruta) => ruta.path === "/");
      this.renderizar(rutaInicio.componente);
    }
  
    renderizar(componente) {
      this.contenido.innerHTML = componente();
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
  ];

  const router = new Router(rutas);
  
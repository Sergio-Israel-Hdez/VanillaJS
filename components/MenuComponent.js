import { TemplateEngine } from "../engine.js";
export function MenuComponent() {
  var template = `
    <nav class="navbar navbar-expand-sm bg-light navbar-light">
      <ul class="navbar-nav"> 
        <li class="nav-item"><a class="nav-link" href="#/">Inicio</a></li>
        <li class="nav-item"><a class="nav-link"  href="#/acerca">Acerca</a></li>
        <li class="nav-item"><a class="nav-link"  href="#/contacto">Contacto</a></li>
      </ul>
    </nav>  
  `;
  return TemplateEngine(template.toString(),{})
}
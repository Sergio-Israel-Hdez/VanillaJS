import { MenuComponent } from "./MenuComponent.js";
export function AcercaComponent() {
    return `
      ${MenuComponent()}
      <h1>Acerca</h1>
      <p>Esta es una página de ejemplo.</p>
    `;
  }
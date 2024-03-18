import { MenuComponent } from "./MenuComponent.js";
import { TemplateEngine } from "../engine.js";

let _datos = []

export async function InicioComponent() {
  
  const template = `
    <%this.MenuComponent%>
    <div>
        <h1><%this.titulo%></h1>
    </div>
    <form id="mi-formulario">
      <label>Nombre:</label>
      <input type="text" id="nombre"></input>

      <label>Apellido:</label>  
      <input type="text" id="apellido"></input>
      <button type="button" id="miBoton2" onClick="<% this.getValuesEx %>" >Enviar</button>
    </form>
    <div class="container">
        <div class="row">
            <%for(var usuario in this.datos) {%>            
                <div class="col-sm-6" >
                    <div class="card">
                            <div class="card-head"><%this.datos[usuario].nombre%></div>
                            <div class="card-body"><%this.datos[usuario].apellido%></div>
                    </div>
                </div>
            <%}%>
        </div>
    </div>
    
  `;
  await _GetUsers();

  const options = {
    MenuComponent: MenuComponent(),
    titulo: "Inicio",
    datos: _datos,
    getValuesEx: _SaveValues.toCodeString()
  };
  return TemplateEngine(template.toString(), options);
}

function _SaveValues(){
  var _nombre = document.getElementById('nombre').value;
  var _apellido = document.getElementById('apellido').value;
  const _datos = {
    id: 1,
    nombre: _nombre,
    apellido:_apellido
  }
  const _options = {
    method:'POST',
    headers:{'Content-Type': 'application/json'},
    body: JSON.stringify(_datos)
  }
  fetch('https://65f868eadf151452460f510d.mockapi.io/api/v1/users',_options)
  .then(response => response.json())
  .then(json => {
    console.log(json);
    window.location.reload();
  })
  .catch(err=> console.log(err));
}

function _GetUsers(){
  return fetch('https://65f868eadf151452460f510d.mockapi.io/api/v1/users')
  .then(response => response.json())
  .then(json => {    
    console.log(json)
    _datos = json;
  })
  .catch(err=> console.log(err));
}
import { MenuComponent } from "./MenuComponent.js";
import { TemplateEngine } from "../engine.js";

let _datos = [
  { nombre: "Sergio", apellido: "Flores" },
  { nombre: "nelson", apellido: "Cruz" },
  { nombre: "Guillermo", apellido: "El Basico" }
]
export function InicioComponent() {

  const template = `
    <%this.MenuComponent%>
    <div>
        <h1><%this.titulo%></h1>
    </div>
    <form id="mi-formulario">
      <label>Nombre:</label>
      <input type="text" id="nombre">

      <label>Apellido:</label>  
      <input type="text" id="apellido">

      
      <button type="button" id="miBoton2" onClick="<% this.getValues %>" >Enviar</button>
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


  const options = {
    MenuComponent: MenuComponent(),
    titulo: "Inicio",
    datos: _datos,
    getValues: GetValues(),
    getValuesEx: _getValuesEx.toCodeString()
  };

  return TemplateEngine(template.toString(), options);
}

function GetValues() {
  const template = `
    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    console.log(nombre+ ' '+apellido);
    alert('dio click');
  `;
  return TemplateEngine(template.toString(), {});
};
function _getValuesEx(){
  var nombre = document.getElementById('nombre').value;
  var apellido = document.getElementById('apellido').value;
  console.log(nombre+ ' '+apellido);
  alert('dio click');
}
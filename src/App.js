import React from "react";
import DATA from "./datos";
import VistaPrincipal from "./components/VistaPrincipal";
import Informacion from "./components/Info";
 
import "./App.css";

function App() {
  const columns = [
    {
      field: "id_floor",
      title: "ID PLANTA",
    },
    {
      field: "name",
      title: "NOMBRE PLANTA",
    },
  ];
  return (

    <div className="container col-md-11">
    {/**--INICIO DE LA CABECERA--*/}
      <header id="header">
        <div className="logo">
          <h1>CoverManager</h1>
        </div>
      </header>
    {/**--FIN DE LA CABECERA--*/}

    {/**INICIO DEL CONTENIDO */}
      <section id="content">
        <div className="row justify-content-center mb-4   ">

        {/**PRIMER COMPONENTE MAPA DE LA DISPOSICIÓN DE LAS MESAS */}

        <VistaPrincipal />

        {/**SEGUNDO LISTADO DE LAS MESAS */}


          <div className=" col-md-3  border mr-md-4 m-3 col-9 bordesCustom listaMesas">
            <Informacion zonas={DATA.zones} tables={DATA.tables} />
          </div>

      
        </div>

    {/**INICIO PIE DE PÁGINA */}
        <footer id="footer">
          <div className="logo">CoverManager</div>
          <div className="info">Prueba de acceso Carmen Rendón &copy;</div>
        </footer>
      </section>
    {/**FIN PIE DE PÁGINA */}

  {/**FIN DEL CONTENIDO */}
    </div>
  );
}

export default App;

import React from "react";
 import DATA from "./datos";
import VistaPrincipal from "./components/VistaPrincipal";
import Informacion from "./components/Info";
import CustomTable from './custom/CustomTable';

import CustonDialog from './custom/CustonDialog';




import "./App.css";


function App() {

 
  const tableActions = [
    {
      icon: 'visibility',
      tooltip: 'Ver/Editar',
      iconProps: {
        color: 'primary'
      },
    onClick: (event, rowData) =><CustonDialog/>
    },



    {
      icon: 'clear',
      tooltip: 'Eliminar',
      iconProps: {
        color: 'error'
      },
  //    onClick: (event, rowData) => handleDelete(rowData),
    },

  ]
  const columns = [
   
    {
      field: 'id_floor',
      title: 'ID PLANTA'
    },
    {
      field: 'name',
      title: 'NOMBRE PLANTA'
    },
    
    
  ];
  return (
    <div className="container col-md-11">
      
         <header id="header">
<div class="logo">
    <h1>CoverManager</h1>
</div>
 
        </header>

        <section id="content">
     
        <div className="row justify-content-center mb-4   ">
        <div className="m-1 col-md-3  border mr-md-4">
            <Informacion zonas={DATA.zones} tables={DATA.tables} />
          </div>


        <VistaPrincipal />
        <div style={{ margin: '2%' }} className="col-md-10">
          <CustomTable
            columns={columns}
            data={DATA.floors}
            title="Plantas del resturante"
            tableActions={tableActions}
            hasFilters
         
          />
        </div>

        </div>
 
      
      <footer id="footer">
          <div class="logo">CoverManager
                </div>
                <div class="info">
                   Prueba de acceso Carmen Rendon &copy;
                </div>
      </footer>

        </section>
    
    </div>
  );
}

export default App;

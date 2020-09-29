import React, { useEffect, useState, useCallback } from 'react'
 import CustomFloors from './custom/CustomFloors';
 import Button from '@material-ui/core/Button';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import DATA from '../../datos';
 
 
 


export default function VistaPrincipal({ ...props }) {
  const [planta, setplanta] = React.useState([]);
  const [Selectplanta, setSelectplanta] = React.useState(0);
 const [zonas, setzonas] = React.useState([]);
  
   useEffect(() => {
    setplanta(DATA.floors);
    
     }, [])
 useEffect(() => {
    setzonas(DATA.zones.filter(e=> e.floor=== DATA.floors[Selectplanta].id_floor ))
     }, [Selectplanta])

 

     function increment  () {
       if(Selectplanta<planta.length-1){
  setSelectplanta(Selectplanta+1);  
       }else{
          setSelectplanta(0);
       }
      
        
        
     }
   
   return (
    <React.Fragment>
 
   <article class="project col-md-7  ml-4  m-1">
                    <div class="image-wrap">
                    <CustomFloors  floor={DATA.floors[Selectplanta] } zona={zonas} table={DATA.tables} />


                    </div>
                    <div class="project-info row">
                      <div className="  ml-md-2 col-md-7">
                      <h4 >{DATA.floors[Selectplanta].name+", Zona "+ zonas.map(z=>(z.name+" "))}</h4>
                      
                       
                      </div>
                    
 
                        <Button variant="outlined" color="primary"       className="float-right m-2"   variant="contained"   onClick={increment}    startIcon={<ChevronRightIcon />}>
                          Siguiente
                        </Button>
                    </div>
                </article>

 

 
    </React.Fragment>
  );
}
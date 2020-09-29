import React, { useEffect, useState, useCallback } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { colors } from '@material-ui/core';
 import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

import ZoomInIcon from '@material-ui/icons/ZoomIn';
import ZoomOutIcon from '@material-ui/icons/ZoomOut';
import ZoomOutMapIcon from '@material-ui/icons/ZoomOutMap';
const useStyles = makeStyles((theme) => ({
  root: {
    //height: 425,
    backgroundColor: '#4e4e4ed9',
   
    borderRadius: 7

  },

  paper: {
    flexGrow: 1,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height:50,
    width:50,
    fontSize:12
  },
 
}));


export default function CustomFloors({floor , zona, table, ...props}) {
  const classes = useStyles();



  return (
    <React.Fragment>
     
   <TransformWrapper
     
       >
         {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
           <React.Fragment>
             <div className="tools m-2 col-md">
             
             <ButtonGroup   color="primary" aria-label="outlined secondary button group">
      <Button onClick={zoomIn}> <ZoomInIcon/></Button>
      <Button  onClick={zoomOut}>   <ZoomOutIcon/></Button>
      <Button  onClick={resetTransform}>   <ZoomOutMapIcon/></Button>

    </ButtonGroup>
    
              </div>
           
            
        
          <TransformComponent    >
          <div className="col-md ">
          <div className="example-text">
                                
                                 {zona.map(e=> 
    
    <React.Fragment>
    
       
      
            
                 <div>
                               
              {table.filter(a=> a.id_zone=== e.id_zone ).map(table=>(
  <div    style={{    transform: `translate(${table.x}px, ${table.y}px)`   }}  >
  
  <Grid       >
          
  <Paper   className={classes.paper}>{table.name_table}</Paper>
 </Grid>   
      
     </div>
  
     
   
    ))}
                            </div>                
     
                           </React.Fragment>
                
          )}    
                              
                              </div>            
                              </div>
                              </TransformComponent>
       
                         
     
           
           </React.Fragment>
         )}
       </TransformWrapper>
     
  
 
 </React.Fragment>
  
   );
}

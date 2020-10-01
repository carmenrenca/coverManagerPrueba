import React, { useEffect, useState, useCallback } from "react";

import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import Divider from "@material-ui/core/Divider";
import TextField from "@material-ui/core/TextField";
import Popover from "react-bootstrap/Popover";
import Tooltip from 'react-bootstrap/Tooltip'
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
  listmesa: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    position: "relative",
    overflow: "auto",
    maxHeight: 304,
    textAlign: "center",
    alignContent: "center",
    alignItems: "center",
  },
  listSection: {
    backgroundColor: "inherit",
  },
  listitem: {
    justifyContent: "center",
  },
  ul: {
    backgroundColor: "inherit",
    padding: 0,
    textAlign: "center",
  },

  title: {
    textAlign: "center",
    fontSize: 19,
    color: "#444",
    margin: 21,
  },

  lista: {
    width:'60%',
    alignContent: "center",
    display: 'inline-flex'
  },
  buscador: {
    alignContent: "center",
  },
}));

export default function Informacion({ zonas, tables, ...props }) {
  const classes = useStyles();
  const [mesas, setmesas] = React.useState([]);
  const [search, setsearch] = React.useState("");

 
  useEffect(() => {
    setmesas(tables);
  }, [tables]);

  function buscador(term) {
    return function (x) {
      return x.name_table.toLowerCase().indexOf(term.toLowerCase()) > -1;
    };
  }
  return (
    <div>
      <List component="nav" aria-label="main mailbox folders">
        <h2 className={classes.title}>Listado de mesas</h2>
        
        <ListItem>
          <TextField
            className="col-md"
            id="outlined-basic"
            label="Buscador"
            variant="outlined"
            onChange={(e) => setsearch(e.target.value)}
          />
        </ListItem>
      </List>
      <Divider />
      <List
        component="nav"
        aria-label="secondary mailbox folders"
        className={classes.listmesa}
      >
        {mesas.filter(buscador(search)).map((res) => (
         
            <OverlayTrigger  key={res.id_table}
              trigger="click"
              rootClose
              placement="right"
              overlay={  <Tooltip id="overlay-example" {...props}>
              <ListItem>ID Mesa: {res.id_table}</ListItem>
              <ListItem>ID Zona: {res.id_zone}</ListItem>
              <ListItem>Eje x: {res.x}</ListItem>
              <ListItem>Eje y: {res.y}</ListItem>

            </Tooltip>}
            >
               <ListItem button  key={`item-${res.id_table} ` } className={classes.lista}>
              <Button  variant="outlined"className="col">{res.name_table}</Button>
              </ListItem>
            </OverlayTrigger>
          
        ))}
      </List>
    </div>
  );
}
import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#4e4e4ed9",

    borderRadius: 7,
  },

  paper: {
    flexGrow: 1,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    height: 50,
    width: 50,
    fontSize: 12,
  },
}));

export default function CustomMesas({ table, ...props }) {
  //COMPONENTE PARA CREAR LAS MESAS A EL CUAL LE PASO LA MESA CONCRETA CON TODOS SUS DATOS

  const classes = useStyles();

  return (
    <div style={{ transform: `translate(${table.x}px, ${table.y}px)` }}>
      <Grid>
        <Paper className={classes.paper}>{table.name_table}</Paper>
      </Grid>
    </div>
  );
}

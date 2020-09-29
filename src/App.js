import React from "react";
import logo from "./logo.svg";
import DATA from "./datos";
import VistaPrincipal from "./components/VistaPrincipal";
import Informacion from "./components/Info";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import "./App.css";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    backgroundColor: theme.palette.background.paper,
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
    backgroundColor: theme.palette.type === "light"
    ? theme.palette.grey[200]
    : theme.palette.grey[800],
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: "auto",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[800],
  },
}));

function App() {
  const classes = useStyles();

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

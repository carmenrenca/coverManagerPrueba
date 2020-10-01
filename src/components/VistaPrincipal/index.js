import React, { useEffect, useState, useCallback } from "react";
import CustomFloors from "../../custom/CustomFloors";
import Button from "@material-ui/core/Button";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import DATA from "../../datos";

export default function VistaPrincipal({ ...props }) {
  const [planta, setplanta] = React.useState([]);
  const [Selectplanta, setSelectplanta] = React.useState(0);
  const [zonas, setzonas] = React.useState([]);

  useEffect(() => {
    //Al iniciar el componente cargamos todas las plantas y las guardamos en el estado
    setplanta(DATA.floors);
  }, []);

  useEffect(() => {
    //De forma que cambiemos de planta en el bucle se irán guardando las zonas de la planta
    //correspondiente en el estado zonas para poder representarlo
    setzonas(
      DATA.zones.filter((e) => e.floor === DATA.floors[Selectplanta].id_floor)
    );
  }, [Selectplanta]);

  //funcion en la que vamos recorriendo en bucle todo el array de plantas
  function increment() {
    if (Selectplanta < planta.length - 1) {
      setSelectplanta(Selectplanta + 1);
    } else {
      setSelectplanta(0);
    }
  }

  return (
    <React.Fragment>
      <article className="project col-md-7  ml-md-4 m-3  bordesCustom">
        <div className="image-wrap">
          {/**Componente que he utilizado para dibujar el mapa */}
          <CustomFloors
            floor={DATA.floors[Selectplanta]}
            zona={zonas}
            table={DATA.tables}
          />
        </div>
        <div className="project-info  ">
          <div className="  ml-md-2 col-md-8">
            <h4>
              {DATA.floors[Selectplanta].name +
                ", Zona " +
                zonas.map((z) => z.name + " ")}
            </h4>
          </div>

          <Button
            variant="outlined"
            color="primary"
            className="float-right  mb-3 "
            variant="contained"
            onClick={increment}
            startIcon={<ChevronRightIcon />}
          >
            Siguiente
          </Button>
        </div>
      </article>
    </React.Fragment>
  );
}

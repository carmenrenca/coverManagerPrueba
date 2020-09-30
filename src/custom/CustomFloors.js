import React from "react";

import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import CustomMesas from "./CustomMesas";
import ZoomInIcon from "@material-ui/icons/ZoomIn";
import ZoomOutIcon from "@material-ui/icons/ZoomOut";
import ZoomOutMapIcon from "@material-ui/icons/ZoomOutMap";

export default function CustomFloors({ floor, zona, table, ...props }) {
  return (
    <React.Fragment>
      <TransformWrapper>
        {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
          <React.Fragment>
            <div className="tools m-2 col-md">
              <ButtonGroup
                color="primary"
                aria-label="outlined secondary button group"
              >
                <Button onClick={zoomIn}>
                  {" "}
                  <ZoomInIcon />
                </Button>
                <Button onClick={zoomOut}>
                  {" "}
                  <ZoomOutIcon />
                </Button>
                <Button onClick={resetTransform}>
                  {" "}
                  <ZoomOutMapIcon />
                </Button>
              </ButtonGroup>
            </div>

            <TransformComponent>
              <div className="col-md ">
                <div className="example-text">
 
                  {zona.map((e) => (
                    <React.Fragment>
                      <div>
                        {table
                          .filter((a) => a.id_zone === e.id_zone)
                          .map((t) => (
                            <CustomMesas table={t} />
                          ))}
                      </div>
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </TransformComponent>
          </React.Fragment>
        )}
      </TransformWrapper>
    </React.Fragment>
  );
}

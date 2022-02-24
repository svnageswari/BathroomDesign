import React, { useEffect } from "react";
import { ARCanvas } from "@react-three/xr";
import { useLocation } from "react-router-dom";
import getDesignComponent from "../../utils/roomDesign";
import { ACESFilmicToneMapping } from "three";
import { Loader } from "@react-three/drei";

function ARMode() {
  useEffect(() => {
    setTimeout(() => {
      const arButton = document.getElementById("ARButton");
      if (arButton) {
        arButton.style.display = "block";
      }
    }, 1000);

    return () => {
      const arButton = document.getElementById("ARButton");
      if (arButton) {
        arButton.style.display = "none";
      }

      // window.location.reload();
    };
  }, []);

  let design = useLocation().search.replace("?", "");

  let glLightingConfig = {
    toneMapping: ACESFilmicToneMapping,
    toneMappingExposure: 0.4,
    physicallyCorrectLights: true,
  };

  return (
    <>
      <ARCanvas
        camera={{ position: [0, 2, 10] }}
        shadows
        onCreated={({ gl }) => Object.assign(gl, glLightingConfig)}
      >
        {getDesignComponent(design, "AR")}
      </ARCanvas>
      <Loader />
    </>
  );
}

export default ARMode;

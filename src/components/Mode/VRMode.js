import React, { useEffect } from "react";
import { VRCanvas, DefaultXRControllers } from "@react-three/xr";
import { useLocation } from "react-router-dom";
import getDesignComponent from "../../utils/roomDesign";
import { ACESFilmicToneMapping } from "three";
import { Loader } from "@react-three/drei";

function VRMode() {
  useEffect(() => {
    setTimeout(() => {
      const vrButton = document.getElementById("VRButton");
      if (vrButton) {
        vrButton.style.display = "block";
      }
    }, 1000);

    return () => {
      const vrButton = document.getElementById("VRButton");
      if (vrButton) {
        vrButton.style.display = "none";
      }

      window.location.reload();
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
      <VRCanvas
        camera={{ position: [0, 2, 10] }}
        shadows
        onCreated={({ gl }) => Object.assign(gl, glLightingConfig)}
      >
        <DefaultXRControllers />
        {getDesignComponent(design, "VR")}
      </VRCanvas>
      <Loader />
    </>
  );
}

export default VRMode;

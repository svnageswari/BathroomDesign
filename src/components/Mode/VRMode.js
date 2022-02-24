import React, { useEffect, Suspense } from "react";
import { Loader, Sky, Environment, OrbitControls } from "@react-three/drei";
import { VRCanvas, DefaultXRControllers } from "@react-three/xr";
import { useLocation } from "react-router-dom";
import { ACESFilmicToneMapping } from "three";
import getDesignComponent from "../../utils/roomDesign";

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
        <Suspense fallback={null}>
          <Environment preset="warehouse" />

          <Sky
            distance={450000}
            sunPosition={[0, 1, 0]}
            inclination={0}
            azimuth={0.25}
          />

          <OrbitControls />

          <DefaultXRControllers />
          {getDesignComponent(design, "VR")}
        </Suspense>
      </VRCanvas>
      <Loader />
    </>
  );
}

export default VRMode;

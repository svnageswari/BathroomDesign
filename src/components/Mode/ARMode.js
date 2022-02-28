import React, { useEffect, Suspense } from "react";
import { Loader, Sky, Environment, OrbitControls } from "@react-three/drei";
import { ARCanvas } from "@react-three/xr";
import { useLocation } from "react-router-dom";
import { ACESFilmicToneMapping } from "three";
import getDesignComponent from "../../utils/roomDesign";
import env from "../../assets/warehouse.hdr";

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
      <ARCanvas
        camera={{ position: [0, 2, 10] }}
        shadows
        onCreated={({ gl }) => Object.assign(gl, glLightingConfig)}
      >
        <Suspense fallback={null}>
          <Environment
            background={false}
            files={env}
            preset={null}
            scene={undefined}
          />

          {/* <Sky
          distance={450000}
          sunPosition={[0, 1, 0]}
          inclination={0}
          azimuth={0.25}
          /> */}

          <OrbitControls />
          {getDesignComponent(design, "AR")}
        </Suspense>
      </ARCanvas>
      <Loader />
    </>
  );
}

export default ARMode;

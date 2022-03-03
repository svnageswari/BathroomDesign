import React, { useEffect, Suspense } from "react";
import { Loader, Sky, Environment, OrbitControls } from "@react-three/drei";
import { VRCanvas, DefaultXRControllers } from "@react-three/xr";
import { ACESFilmicToneMapping } from "three";
import env from "../../assets/warehouse.hdr";
import Design from "../Design";

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
          <Environment background={false} files={env} />

          <Sky
            distance={450000}
            sunPosition={[0, 1, 0]}
            inclination={0}
            azimuth={0.25}
          />

          <OrbitControls />

          <Design mode="VR"/>
        </Suspense>
        <DefaultXRControllers />
      </VRCanvas>
      <Loader />
    </>
  );
}

export default VRMode;

import React, { useEffect, Suspense, useState } from "react";
import { Loader, Sky, Environment, OrbitControls } from "@react-three/drei";
import { VRCanvas, DefaultXRControllers } from "@react-three/xr";
import { ACESFilmicToneMapping } from "three";
import env from "../../assets/warehouse.hdr";
import Design from "../Design";
import CheckBox from "../CheckBox";

function VRMode() {
  const [shadowChecked, setShadowChecked] = useState(false);
  const [pointLightChecked, setPointLightChecked] = useState(false);
  const [directionalLightChecked, setDirectionalLightChecked] = useState(false);
  const [normalChecked, setNormalChecked] = useState(false);
  const [roughnessChecked, setRoughnessChecked] = useState(false);

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
      <div className="flex flex-wrap justify-center gap-10 items-center">
        <CheckBox
          label="Shadow"
          defaultChecked={shadowChecked}
          setFeature={setShadowChecked}
        ></CheckBox>

        <CheckBox
          label="Point light"
          defaultChecked={pointLightChecked}
          setFeature={setPointLightChecked}
        ></CheckBox>

        <CheckBox
          label="Directional light"
          defaultChecked={directionalLightChecked}
          setFeature={setDirectionalLightChecked}
        ></CheckBox>

        <CheckBox
          label="Normal"
          defaultChecked={normalChecked}
          setFeature={setNormalChecked}
        ></CheckBox>

        <CheckBox
          label="Roughness"
          defaultChecked={roughnessChecked}
          setFeature={setRoughnessChecked}
        ></CheckBox>
      </div>
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

          <Design
            mode="VR"
            shadowChecked={shadowChecked}
            pointLightChecked={pointLightChecked}
            directionalLightChecked={directionalLightChecked}
            normalChecked={normalChecked}
            roughnessChecked={roughnessChecked}
          />
        </Suspense>
        <DefaultXRControllers />
      </VRCanvas>
      <Loader />
    </>
  );
}

export default VRMode;

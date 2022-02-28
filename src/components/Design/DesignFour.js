import React, { useRef, Suspense } from "react";
import { useFrame } from "@react-three/fiber";
import { Box, Environment, OrbitControls, Sky } from "@react-three/drei";
import { ARCanvas } from "@react-three/xr";
import { ACESFilmicToneMapping } from "three";

const Scene = () => {
  const scene = useRef();
  useFrame(() => {
    scene.current.rotation.y += 0.04;
    scene.current.rotation.x += 0.04;
    scene.current.rotation.z += 0.04;
  });
  return (
    <group ref={scene}>
      <Box>
        <meshLambertMaterial attach="material" color="white" />
      </Box>
    </group>
  );
};

export default function DesignFour({ mode }) {
  return (
    // <ARCanvas onCreated={({ gl }) => Object.assign(gl, glLightingConfig)}>
    //   <Suspense fallback={null}>
    //     <OrbitControls />
    //     <Environment
    //       background={true}
    //       files={"warehouse.hdr"}
    //       path={"/"}
    //       preset={null}
    //       scene={undefined}
    //     />
    //   </Suspense>
    // </ARCanvas>
    <>
      <directionalLight intensity={0.5} />
      <Scene />
    </>
  );
}

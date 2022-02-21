import React, { Suspense } from "react";
import { OrbitControls, Text } from "@react-three/drei";
import { Wall, Floor, Ceiling, Light } from "../Room";

function DesignThree({ mode }) {
  let height = mode === "VR" ? 0.6 : -1.2;

  return (
    <Suspense
      fallback={
        <Text color="white" anchorX="center" anchorY="middle">
          Loading
        </Text>
      }
    >
      <OrbitControls />

      <group position={[0, height, 0]}>
        <Wall
          position={[0, 1.2, -1.15]}
          rotation={[0, 0, 0]}
          scale={[3.4, 2.4, 0]}
          type="wall"
        ></Wall>

        <Wall
          position={[1.7, 1.2, 0]}
          rotation={[0, 0, 0]}
          scale={[0, 2.4, 2.3]}
          type="wall"
        ></Wall>

        <Wall
          position={[0, 1.2, 1.15]}
          rotation={[0, 0, 0]}
          scale={[-3.4, 2.4, 0]}
          type="wall"
        ></Wall>

        <Wall
          position={[-1.7, 1.2, 0]}
          rotation={[0, 0, 0]}
          scale={[0, 2.4, -2.3]}
          type="wall"
        ></Wall>

        <Ceiling
          position={[0, 2.4, 0]}
          rotation={[0, 0, 0]}
          scale={[-3.4, 0, -2.3]}
          type="ceiling"
        ></Ceiling>

        <Floor
          position={[0, 0, 0]}
          rotation={[0, 0, 0]}
          scale={[-3.4, 0, -2.3]}
          type="floor"
        ></Floor>
      </group>

      <directionalLight intensity={0.5} position={[6, 2, 1]} />
      
      <ambientLight intensity={0.1} />

      <Light
        position={[0, 2.4, 0]}
        color="white"
        intensity={2}
        distance={10}
        orbitalSpeed={2}
      />

      <Light
        position={[-2, 2.4, 4]}
        color="white"
        intensity={2}
        distance={10}
        orbitalSpeed={2}
      />
    </Suspense>
  );
}

export default DesignThree;

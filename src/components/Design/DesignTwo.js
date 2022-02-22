import React, { Suspense } from "react";
import { OrbitControls, Text } from "@react-three/drei";
import { Wall, Floor, Ceiling, Light } from "../Room";
import { BathTub, Mirror, Tap, Vanity } from "../Products/roomTwo";
import Door from "../Products/Door";

function DesignTwo({ mode }) {
  let height = mode === "VR" ? 0 : -1.2;
  let wall = [
    {
      position: [0, 1.3, -1.5],
      rotation: [0, 0, 0],
      scale: [3.5, 2.6, 0.1],
      type: "wall-1",
    },
    {
      position: [1.75, 1.3, 0],
      rotation: [0, 0, 0],
      scale: [0.1, 2.6, 3],
      type: "wall-2",
    },
    {
      position: [0, 1.3, 1.5],
      rotation: [0, 0, 0],
      scale: [-3.5, 2.6, 0.1],
      type: "wall-3",
    },
    {
      position: [-1.75, 1.3, 0],
      rotation: [0, 0, 0],
      scale: [0.1, 2.6, -3],
      type: "wall-4",
    },
  ];

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
        {wall.map((element) => {
          const { position, rotation, scale, type } = element;
          return (
            <Wall
              key={type}
              position={position}
              rotation={rotation}
              scale={scale}
              type={type}
              color="#cdccc9"
            ></Wall>
          );
        })}

        <Ceiling
          position={[0, 2.6, 0]}
          rotation={[0, 0, 0]}
          scale={[-3.5, 0.1, -3]}
          type="ceiling"
          color="#7e786a"
        ></Ceiling>

        <Floor
          position={[0, 0, 0]}
          rotation={[0, 0, 0]}
          scale={[-3.5, 0.1, -3]}
          type="floor"
          color="#d2d2d1"
        ></Floor>

        <Door position={[0, 0, 1.6]} rotation={[0, 0, 0]} scale={[1, 1, 2]} />

        <Vanity position={[-1.7, -0.12, 0.012]} rotation={[0, 1.5, 0]} />

        <Tap
          position={[1.7, 0.85, 0.2]}
          rotation={[0, 4.6, 0]}
          scale={[1, 1, 1]}
        />

        <Mirror position={[-1.75, 0.803, 0.02]} rotation={[0, 1.5, 0]} />

        <BathTub
          position={[1.25, 0.001, 0.1]}
          rotation={[0, 1.6, 0]}
          scale={[1, 1, 1]}
        />
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

export default DesignTwo;

import React, { Suspense } from "react";
import { OrbitControls, Text } from "@react-three/drei";
import { Wall, Floor, Ceiling, Glass, Light } from "../Room";
import {
  Toilet,
  Basin,
  BathTub,
  Shower,
  Pipe,
  Waste,
} from "../Products/roomOne";
import Door from "../Products/Door";

function DesignOne({ mode }) {
  let height = mode === "VR" ? 0 : -1.2;
  let wall = [
    {
      position: [0, 1.2, -2],
      rotation: [0, 0, 0],
      scale: [5, 2.4, 0.1],
      type: "wall-1",
    },
    {
      position: [2.5, 1.2, 0],
      rotation: [0, 0, 0],
      scale: [0.1, 2.4, 4],
      type: "wall-2",
    },
    {
      position: [0, 1.2, 2],
      rotation: [0, 0, 0],
      scale: [-5, 2.4, 0.1],
      type: "wall-3",
    },
    {
      position: [-2.5, 1.2, 0],
      rotation: [0, 0, 0],
      scale: [0.1, 2.4, -4],
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
          position={[0, 2.4, 0]}
          rotation={[0, 0, 0]}
          scale={[-5, 0.1, -4]}
          type="ceiling"
          color="#7e786a"
        ></Ceiling>

        <Floor
          position={[0, 0, 0]}
          rotation={[0, 0, 0]}
          scale={[-5, 0.1, -4]}
          type="floor"
          color="#d2d2d1"
        ></Floor>

        <mesh rotation={[-Math.PI / 2, 0, 0]}>
          <planeBufferGeometry attach="geometry" args={[10, 10]} />
          <meshLambertMaterial attach="material" color="lightblue" />
        </mesh>

        <Toilet position={[0.8, 0.047, -1.5]} rotation={[0, 0, 0]} />

        <Door position={[1.8, 0, 2.1]} rotation={[0, 0, 0]} scale={[1, 1, 2]} />

        <Basin position={[2.1, 1, 0.5]} rotation={[0, -1.6, 0]} />

        <Pipe position={[2.35, 1.09, 0.5]} rotation={[0, -1.6, 0]} />

        <Shower position={[-1.5, 1.7, -1.95]} rotation={[0, 0.1, 0]} />

        <Waste position={[-2.3, 0.06, -1.8]} />

        <BathTub position={[-1.3, 0, 1.2]} rotation={[0, -0.1, 0]} />

        <Glass
          position={[-0.9, 1.2, -1]}
          rotation={[0, 0, 0]}
          scale={[0.01, 2.4, 2]}
          type="glass"
          color="#606d62"
        ></Glass>
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

export default DesignOne;

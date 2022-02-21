import React, { Suspense } from "react";
import { OrbitControls, Text } from "@react-three/drei";
import { Wall, Floor, Ceiling, Glass, Light } from "../Room";
import {
  Basin,
  BathTub,
  BathTubPipe,
  CubeTumbler,
  FloorWaste,
  InsertWaste,
  MirrorCabinet,
  RobeHook,
  ShowerPipe,
  TowelRailOne,
  TowelRailTwo,
  Vanity,
  WallPipe,
  WallTopAssemblies,
} from "../Products/roomThree";

function DesignThree({ mode }) {
  let height = mode === "VR" ? 0.6 : -1.2;
  let wall = [
    {
      position: [0, 1.2, -1.15],
      rotation: [0, 0, 0],
      scale: [3.4, 2.4, 0.1],
      type: "wall-1",
    },
    {
      position: [1.7, 1.2, 0],
      rotation: [0, 0, 0],
      scale: [0.1, 2.4, 2.3],
      type: "sideWall",
    },
    {
      position: [0, 1.2, 1.15],
      rotation: [0, 0, 0],
      scale: [-3.4, 2.4, 0.1],
      type: "wall-3",
    },
    {
      position: [-1.7, 1.2, 0],
      rotation: [0, 0, 0],
      scale: [0.1, 2.4, -2.3],
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
            ></Wall>
          );
        })}

        <Ceiling
          position={[0, 2.4, 0]}
          rotation={[0, 0, 0]}
          scale={[-3.4, 0.1, -2.3]}
          type="ceiling"
        ></Ceiling>

        <Floor
          position={[0, 0, 0]}
          rotation={[0, 0, 0]}
          scale={[-3.4, 0.1, -2.3]}
          type="floor"
        ></Floor>

        <group position={[0, 0, -0.1]}>
          <Basin position={[-1.55, 0.7, 0.5]} rotation={[0, 1.5, 0]} />

          <CubeTumbler position={[-1.65, 1, 0.77]} rotation={[0, 1.5, 0]} />

          <MirrorCabinet position={[-1.65, 1.1, 0.5]} rotation={[0, 1.5, 0]} />

          <RobeHook position={[-1.65, 0.6, 1.1]} rotation={[0, 1.5, 0]} />

          <Vanity position={[-1.63, 0, 0.5]} rotation={[0, 1.55, 0]} />

          <WallPipe position={[-1.65, 1, 0.4]} rotation={[0, 1.5, 0]} />
        </group>

        <group>
          <BathTub position={[-0.7, 0, -0.7]} rotation={[0, 0, 0]} />

          <BathTubPipe position={[0.25, 0.05, -0.7]} rotation={[0, -1.5, 0]} />

          <FloorWaste position={[-0.55, 0.06, 0.25]} rotation={[0, 0, 0]} />

          <TowelRailTwo position={[-1.65, 1.1, -0.7]} rotation={[0, 1.56, 0]} />
        </group>

        <group>
          <InsertWaste position={[1.3, 0.07, -0.8]} rotation={[0, 0, 0]} />

          <ShowerPipe position={[1, 1.75, -1.1]} rotation={[0, 0, 0]} />

          <TowelRailOne position={[1, 0.5, 1.03]} rotation={[0, 3.2, 0]} />

          <WallTopAssemblies position={[1.3, 1.2, -1.1]} rotation={[0, 0, 0]} />

          <Glass
            position={[0.5, 0.93, -0.5]}
            rotation={[0, 0, 0]}
            scale={[0.01, 1.9, 1.2]}
            type="glass"
          ></Glass>

          <Floor
            position={[1.1, 0.03, -0.5]}
            rotation={[0, 0, 0]}
            scale={[1.2, 0.05, 1.2]}
            type="showerFloor"
          ></Floor>
        </group>
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

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
  let height = mode === "VR" ? 0 : -1.2;
  let wall = [
    {
      position: [0, 1.2, -1.15],
      rotation: [0, 0, 0],
      scale: [3.4, 2.4, 0],
      type: "wall-1",
    },
    {
      position: [1.7, 1.2, 0],
      rotation: [0, 0, 0],
      scale: [0, 2.4, 2.3],
      type: "sideWall",
    },
    {
      position: [0.9, 1.2, 1.15],
      rotation: [0, 0, 0],
      scale: [-1.6, 2.4, 0],
      type: "wall-3",
    },
    {
      position: [-0.4, 2.1, 1.15],
      rotation: [0, 0, 0],
      scale: [-1, 0.6, 0],
      type: "wall-3-top",
    },
    {
      position: [-1.3, 1.2, 1.15],
      rotation: [0, 0, 0],
      scale: [-0.8, 2.4, 0],
      type: "wall-3-side",
    },
    {
      position: [-1.7, 1.2, 0],
      rotation: [0, 0, 0],
      scale: [0, 2.4, -2.3],
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
          scale={[-3.4, 0, -2.3]}
          type="ceiling"
          color="#7e786a"
        ></Ceiling>

        <Floor
          position={[0, 0, 0]}
          rotation={[0, 0, 0]}
          scale={[-3.4, 0, -2.3]}
          type="floor"
          color="#d2d2d1"
        ></Floor>

        <group position={[0, -0.15, -0.1]}>
          <Basin position={[-1.55, 0.72, 0.5]} rotation={[0, 1.6, 0]} />

          <CubeTumbler position={[-1.699, 1, 0.77]} rotation={[0, 1.6, 0]} />

          <MirrorCabinet position={[-1.69, 1.1, 0.5]} rotation={[0, 1.6, 0]} />

          <RobeHook position={[-1.699, 0.6, 1.1]} rotation={[0, 1.6, 0]} />

          <Vanity position={[-1.69, 0, 0.5]} rotation={[0, 1.57, 0]} />

          <WallPipe position={[-1.696, 1, 0.4]} rotation={[0, 1.6, 0]} />
        </group>

        <group>
          <BathTub position={[-0.7, 0.01, -0.7]} rotation={[0, 0, 0]} />

          <BathTubPipe position={[0.25, 0.01, -0.7]} rotation={[0, -1.5, 0]} />

          <FloorWaste position={[-0.55, 0.0001, 0.25]} rotation={[0, 0, 0]} />

          <TowelRailTwo position={[-1.69, 1.1, -0.7]} rotation={[0, 1.56, 0]} />
        </group>

        <group>
          <InsertWaste position={[1.3, 0.02, -0.8]} rotation={[0, 0, 0]} />

          <ShowerPipe position={[1, 1.75, -1.145]} rotation={[0, 0, 0]} />

          <TowelRailOne position={[1, 0.5, 1.084]} rotation={[0, 3.15, 0]} />

          <WallTopAssemblies
            position={[1.3, 1.2, -1.145]}
            rotation={[0, 0, 0]}
          />

          <Glass
            position={[0.5, 0.951, -0.54]}
            rotation={[0, 0, 0]}
            scale={[0.01, 1.9, 1.2]}
            type="glass"
            color="#606d62"
          ></Glass>

          <Floor
            position={[1.09, 0.01, -0.54]}
            rotation={[0, 0, 0]}
            scale={[1.2, 0.0, 1.22]}
            type="showerFloor"
          ></Floor>
        </group>
      </group>

      <directionalLight intensity={0.9} position={[6, 2, 1]} />

      <ambientLight intensity={0.1} />

      {/* <Light
        position={[0, 2.4, 0]}
        color="white"
        intensity={2}
        distance={10}
        orbitalSpeed={2}
      /> */}

      {/* <Light
        position={[-2, 2.4, 4]}
        color="white"
        intensity={2}
        distance={10}
        orbitalSpeed={2}
      /> */}
    </Suspense>
  );
}

export default DesignThree;

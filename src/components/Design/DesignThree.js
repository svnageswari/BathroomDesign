import React, { Suspense } from "react";
import { OrbitControls, Sky, Environment } from "@react-three/drei";
import { Wall, Floor, Ceiling, Glass, Plane } from "../Room";
import {
  Basin,
  BathTub,
  BathTubPipe,
  CubeTumbler,
  FloorWaste,
  ShowerWaste,
  MirrorCabinet,
  RobeHook,
  ShowerPipe,
  TowelRailOne,
  TowelRailTwo,
  Vanity,
  WallPipe,
  WallTopAssemblies,
  Door,
  Window,
} from "../Products/roomThree";

function DesignThree({ mode }) {
  let height = mode === "VR" ? 0 : -1.2;
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
      position: [0.9, 1.2, 1.15],
      rotation: [0, 0, 0],
      scale: [-1.7, 2.4, 0.1],
      type: "wall-3",
    },
    {
      position: [-0.4, 2.25, 1.15],
      rotation: [0, 0, 0],
      scale: [-0.9, 0.3, 0.1],
      type: "wall-3-top",
    },
    {
      position: [-1.3, 1.2, 1.15],
      rotation: [0, 0, 0],
      scale: [-0.9, 2.4, 0.1],
      type: "wall-3-side",
    },
    {
      position: [-1.7, 1.2, 0],
      rotation: [0, 0, 0],
      scale: [0.1, 2.4, -2.3],
      type: "wall-4",
    },
  ];

  return (
    <Suspense fallback={null}>
      <Environment preset="warehouse" />

      <Sky
        distance={450000}
        sunPosition={[0, 1, 0]}
        inclination={0}
        azimuth={0.25}
      />

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

        <Plane />

        <group position={[0.05, -0.1, -0.1]}>
          <Basin position={[-1.55, 0.72, 0.5]} rotation={[0, 1.6, 0]} />

          <CubeTumbler position={[-1.699, 1, 0.77]} rotation={[0, 1.6, 0]} />

          <MirrorCabinet position={[-1.69, 1.1, 0.5]} rotation={[0, 1.6, 0]} />

          <RobeHook position={[-1.699, 0.6, 1.1]} rotation={[0, 1.6, 0]} />

          <Vanity position={[-1.69, 0, 0.5]} rotation={[0, 1.57, 0]} />

          <WallPipe position={[-1.696, 1, 0.4]} rotation={[0, 1.6, 0]} />
        </group>

        <group position={[0.05, 0.05, 0]}>
          <BathTub position={[-0.7, 0.01, -0.7]} rotation={[0, 0, 0]} />

          <BathTubPipe position={[0.25, 0.01, -0.7]} rotation={[0, -1.5, 0]} />

          <FloorWaste position={[-0.55, 0.0001, 0.25]} rotation={[0, 0, 0]} />

          <TowelRailTwo position={[-1.69, 1.1, -0.7]} rotation={[0, 1.56, 0]} />
        </group>

        <group position={[0, 0.05, 0.05]}>
          <ShowerWaste position={[1.3, 0.02, -0.8]} rotation={[0, 0, 0]} />

          <ShowerPipe position={[1, 1.75, -1.145]} rotation={[0, 0, 0]} />

          <TowelRailOne position={[1, 0.5, 1]} rotation={[0, 3.15, 0]} />

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
            position={[1.1, 0.005, -0.54]}
            rotation={[0, 0, 0]}
            scale={[1.2, 0, 1.22]}
            type="showerFloor"
          ></Floor>
        </group>
        <Door position={[-0.4, 0, 1.09]} rotation={[0, 3.14, 0]} />

        <Window position={[-0.4, 1.2, -1.12]} rotation={[0, 3.14, 0]} />
      </group>

      <directionalLight intensity={0.9} position={[6, 2, 1]} />

      <ambientLight intensity={0.1} />

      <pointLight
        intensity={8}
        position={[0, 2.4, 0]}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-bias={-0.00001}
        castShadow={true}
      />
    </Suspense>
  );
}

export default DesignThree;

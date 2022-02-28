import React from "react";
import { designThreeWall as wall } from "../../data/wallData";
import { Wall, Floor, Ceiling, Glass, Plane } from "../Room";
import BlockExtrude from "../Room/BlockExtrude";
import Door from "../Products/Door";
import Window from "../Products/Window";
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
} from "../Products/roomThree";

function DesignThree({ mode }) {
  const height = mode === "VR" ? 0 : -1.2;

  return (
    <>
      <group position={[0, height, 0]}>
        {wall.map((element) => {
          const { position, rotation, scale, tileRepetitionCoordinates, type } =
            element;
          return (
            <Wall
              key={type}
              position={position}
              rotation={rotation}
              scale={scale}
              tileRepetitionCoordinates={tileRepetitionCoordinates}
              type={type}
            />
          );
        })}

        <Ceiling
          position={[0, 2.4, 0]}
          rotation={[0, 0, 0]}
          scale={[-3.4, 0.1, -2.3]}
        />

        <Floor
          position={[0, 0, 0]}
          rotation={[0, 0, 0]}
          scale={[-3.4, 0.1, -2.3]}
          tileRepetitionCoordinates={{ x: 3.4, y: 2.3 }}
          type="floor"
        />

        <BlockExtrude
          value={1.25}
          position={[-1.7, 0, -1.15]}
          height={2.35}
          width={3.4}
          tileRepetitionCoordinates={{ x: 0.9, y: 1 }}
          type="wall"
        />

        <BlockExtrude
          value={0}
          position={[-1.7, 0, 1.1]}
          height={2.35}
          width={3.4}
          tileRepetitionCoordinates={{ x: 0.9, y: 1 }}
          type="wall"
        />

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
            color="#606d62"
          />

          <Floor
            position={[1.1, 0.005, -0.54]}
            rotation={[0, 0, 0]}
            scale={[1.2, 0, 1.22]}
            tileRepetitionCoordinates={{ x: 1.2, y: 1.22 }}
            type="showerFloor"
          />
        </group>
        <Door position={[-0.4, 0, 1.09]} rotation={[0, 3.14, 0]} />

        <Window position={[-0.4, 1.2, -1.11]} rotation={[0, 3.14, 0]} />
      </group>

      <directionalLight
        intensity={2}
        position={[1.5, 1.1, -6]}
        color="#FFFFCC"
      />

      <ambientLight intensity={1} />

      <pointLight
        intensity={8}
        position={[0, 2.3, 0]}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-bias={-0.00003}
        shadow-radius={5}
        shadow-normalBias={0.0005}
        castShadow={true}
      />
    </>
  );
}

export default DesignThree;

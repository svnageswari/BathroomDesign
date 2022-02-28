import React from "react";
import { designOneWall as wall } from "../../data/wallData";
import { Wall, Floor, Ceiling, Glass, Plane } from "../Room";
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
          scale={[-5, 0.1, -4]}
        />

        <Floor
          position={[0, 0, 0]}
          rotation={[0, 0, 0]}
          scale={[-5, 0.1, -4]}
          tileRepetitionCoordinates={{ x: 5, y: 4 }}
          type="floor"
        />

        <Plane />

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
          color="#606d62"
        />
      </group>

      <directionalLight intensity={0.5} position={[6, 2, 1]} />

      <ambientLight intensity={0.1} />

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

export default DesignOne;

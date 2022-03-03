import React from "react";
import { designTwoWall as wall } from "../../data/wallData";
import { Wall, Floor, Ceiling, Plane } from "../Room";
import { BathTub, Mirror, Tap, Vanity } from "../Products/roomTwo";
import Door from "../Products/Door";
import Window from "../Products/Window";
import BlockExtrude from "../Room/BlockExtrude";

function DesignTwo({ mode }) {
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
          position={[0, 2.6, 0]}
          rotation={[0, 0, 0]}
          scale={[-3.5, 0.1, -3]}
        />

        <Floor
          position={[0, 0, 0]}
          rotation={[0, 0, 0]}
          scale={[-3.5, 0.1, -3]}
          tileRepetitionCoordinates={{ x: 3.5, y: 3 }}
          type="floor"
        />

        <BlockExtrude
          value={1.25}
          position={[-1.7, 0, -1.5]}
          height={2.6}
          width={3.4}
          tileRepetitionCoordinates={{ x: 0.9, y: 1 }}
          type="wall"
        />

        <BlockExtrude
          value={0}
          position={[-1.7, 0, 1.5]}
          height={2.6}
          width={3.4}
          tileRepetitionCoordinates={{ x: 0.9, y: 1 }}
          type="wall"
        />

        <Plane />

        <Vanity position={[-1.7, 0.15, 0.012]} rotation={[0, 1.55, 0]} />

        <Mirror position={[-1.75, 0.953, 0.02]} rotation={[0, 1.55, 0]} />

        <Tap
          position={[1.7, 0.85, 0.2]}
          rotation={[0, 4.6, 0]}
          scale={[1, 1, 1]}
        />

        <BathTub
          position={[1.25, 0.001, 0.1]}
          rotation={[0, 1.6, 0]}
          scale={[1, 1, 1]}
        />

        <Door position={[-0.4, 0, 1.5]} rotation={[0, 3.14, 0]} />

        <Window
          scale={[0.95, 0.95, 2]}
          position={[-0.4, 1.24, -1.49]}
          rotation={[0, 3.14, 0]}
        />

        <directionalLight
          castShadow
          intensity={5}
          position={[10, 2, -10]}
          color="#FFFFCC"
        />

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
      </group>
    </>
  );
}

export default DesignTwo;

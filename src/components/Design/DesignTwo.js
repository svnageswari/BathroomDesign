import React from "react";
import { Wall, Floor, Ceiling, Plane } from "../Room";
import { BathTub, Mirror, Tap, Vanity } from "../Products/roomTwo";
import Door from "../Products/Door";
import Window from "../Products/Window";
import BlockExtrude from "../Room/BlockExtrude";

function DesignTwo({ mode }) {
  let height = mode === "VR" ? 0 : -1.2;
  let wall = [
    {
      position: [1.75, 1.3, 0],
      rotation: [0, 0, 0],
      scale: [0.1, 2.6, 3],
      type: "wall-2",
    },
    {
      position: [-1.75, 1.3, 0],
      rotation: [0, 0, 0],
      scale: [0.1, 2.6, -3],
      type: "wall-4",
    },
  ];

  return (
    <>
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
            />
          );
        })}

        <Ceiling
          position={[0, 2.6, 0]}
          rotation={[0, 0, 0]}
          scale={[-3.5, 0.1, -3]}
          type="ceiling"
        />

        <Floor
          position={[0, 0, 0]}
          rotation={[0, 0, 0]}
          scale={[-3.5, 0.1, -3]}
          type="floor"
        />

        <BlockExtrude
          value={1.25}
          position={[-1.7, 0, -1.5]}
          height={2.6}
          width={3.4}
        />
        <BlockExtrude
          value={0}
          position={[-1.7, 0, 1.5]}
          height={2.6}
          width={3.4}
        />

        <Plane />

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
        <Door position={[-0.4, 0, 1.5]} rotation={[0, 3.14, 0]} />
        <Window
          scale={[0.95, 0.95, 2]}
          position={[-0.4, 1.24, -1.49]}
          rotation={[0, 3.14, 0]}
        />
      </group>

      <directionalLight intensity={0.5} position={[6, 2, 1]} />

      <ambientLight intensity={0.1} />

      <pointLight
        intensity={8}
        position={[0, 2.3, 0]}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-bias={-0.00001}
        castShadow={true}
      />
    </>
  );
}

export default DesignTwo;

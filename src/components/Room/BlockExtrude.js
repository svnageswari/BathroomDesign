import React from "react";
import { Extrude } from "@react-three/drei";
import * as THREE from "three";

const extrudeSettings = { steps: 1, depth: 0.05, bevelEnabled: false };

const wallRoughness = new THREE.TextureLoader().load("assets/wallRough.png");
const wallNormal = new THREE.TextureLoader().load("assets/wallNormal.png");
const wall = new THREE.TextureLoader().load("assets/wall.jpeg");

wall.wrapS = THREE.RepeatWrapping;
wall.wrapT = THREE.RepeatWrapping;
wall.repeat.set(0.9 / 0.306, 1 / 0.306);

wallRoughness.wrapS = THREE.RepeatWrapping;
wallRoughness.wrapT = THREE.RepeatWrapping;
wallRoughness.repeat.set(0.9 / 0.306, 1 / 0.306);

wallNormal.wrapS = THREE.RepeatWrapping;
wallNormal.wrapT = THREE.RepeatWrapping;
wallNormal.repeat.set(0.9 / 0.306, 1 / 0.306);

function BlockExtrude({ value: holeValue, position, height, width }) {
  const shape = React.useMemo(() => {
    const rectShape = new THREE.Shape()
      .moveTo(0, 0)
      .lineTo(0, height)
      .lineTo(width, height)
      .lineTo(width, 0)
      .lineTo(0, 0);

    // Holes
    const hole = new THREE.Path()
      .moveTo(0.85, 0.6)
      .lineTo(0.85, 1.95)
      .lineTo(1.75, 1.95)
      .lineTo(1.75, holeValue)
      .lineTo(0.85, holeValue);
    rectShape.holes.push(hole);
    return rectShape;
  }, []);

  return (
    <>
      <group position={position}>
        <Extrude
          args={[shape, extrudeSettings]}
          castShadow
          receiveShadow
        >
          <meshStandardMaterial
            attach="material"
            color="white"
            map={wall}
            normalMap={wallNormal}
            roughnessMap={wallRoughness}
          />
          <ambientLight intensity={0.3} />
        </Extrude>
      </group>
    </>
  );
}

export default BlockExtrude;
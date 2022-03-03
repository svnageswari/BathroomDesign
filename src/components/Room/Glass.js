import { Box } from "@react-three/drei";
import React from "react";

function Glass({ position, rotation, scale }) {
  return (
    <group position={position} rotation={rotation} scale={scale}>
      <Box receiveShadow args={[1, 1, 1]}>
        <meshPhysicalMaterial
          attach="material"
          color="#99BCAB"
          metalness={0}
          roughness={0}
          transparent={true}
          opacity={1}
          clearcoat={1}
          reflectivity={0.2}
          transmission={0.95}
          envMapIntensity={0.9}
        />
      </Box>
    </group>
  );
}

export default Glass;

import { Box } from "@react-three/drei";
import React from "react";

function Glass({ position, rotation, scale }) {
  return (
    <group position={position} rotation={rotation} scale={scale}>
      <Box receiveShadow args={[1, 1, 1]}>
        <meshPhysicalMaterial
          attach="material"
          color="#99BCAB"
          transmission={0.95}
          roughness={0}
          metalness={0}
          envMapIntensity={0.9}
        />
      </Box>
    </group>
  );
}

export default Glass;

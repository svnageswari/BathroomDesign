import { Box } from "@react-three/drei";
import React from "react";

function Ceiling({ position, rotation, scale }) {
  return (
    <group position={position} rotation={rotation} scale={scale}>
      <Box args={[1, 1, 1]} castShadow receiveShadow>
        <meshStandardMaterial attach="material" />
      </Box>
    </group>
  );
}

export default Ceiling;

import { Box } from "@react-three/drei";
import React from "react";

function Glass({ position, rotation, scale, color }) {
  return (
    <group position={position} rotation={rotation} scale={scale}>
      <Box args={[1, 1, 1]}>
        <meshPhysicalMaterial
          attach="material"
          color={color}
          transparent={true}
          opacity={0.5}
        />
      </Box>
    </group>
  );
}

export default Glass;

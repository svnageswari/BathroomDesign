import React from "react";
import { Box } from "@react-three/drei";
import blockData from "../../data/blockData";
import setMapValue from "../../utils/blockMap";

function Block({ position, rotation, scale, tileRepetitionCoordinates, type }) {
  type = type.split("-")[0];
  const map = setMapValue(
    blockData[type].texture,
    tileRepetitionCoordinates,
    type
  );
  const roughnessMap = setMapValue(
    blockData[type].roughness,
    tileRepetitionCoordinates,
    type
  );
  const normalMap = setMapValue(
    blockData[type].normals,
    tileRepetitionCoordinates,
    type
  );

  return (
    <group position={position} rotation={rotation} scale={scale}>
      <Box args={[1, 1, 1]} castShadow receiveShadow>
        <meshStandardMaterial
          attach="material"
          map={map}
          normalMap={normalMap}
          roughnessMap={roughnessMap}
        />
      </Box>
    </group>
  );
}

export default Block;

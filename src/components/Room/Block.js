import React, { useMemo } from "react";
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
  const material = useMemo(() => {
    return { map, roughnessMap, normalMap };
  }, [map, roughnessMap, normalMap]);

  return (
    <group position={position} rotation={rotation} scale={scale}>
      <Box args={[1, 1, 1]} castShadow receiveShadow>
        <meshStandardMaterial
          attach="material"
          map={material.map}
          normalMap={material.normalMap}
          roughnessMap={material.roughnessMap}
        />
      </Box>
    </group>
  );
}

export default Block;

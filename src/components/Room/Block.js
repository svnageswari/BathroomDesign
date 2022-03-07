import React, { useMemo } from "react";
import { Box } from "@react-three/drei";
import blockData from "../../data/blockData";
import setMapValue from "../../utils/blockMap";
import { MeshStandardMaterial } from "three";

function Block({
  position,
  rotation,
  scale,
  tileRepetitionCoordinates,
  type,
  normalChecked,
  roughnessChecked,
}) {
  type = type.split("-")[0];
  const map = setMapValue(
    blockData[type].texture,
    tileRepetitionCoordinates,
    type
  );

  const roughnessMap = roughnessChecked
    ? setMapValue(blockData[type].roughness, tileRepetitionCoordinates, type)
    : null;

  const normalMap = normalChecked
    ? setMapValue(blockData[type].normals, tileRepetitionCoordinates, type)
    : null;

  const material = useMemo(() => {
    return new MeshStandardMaterial({
      map,
      roughnessMap,
      normalMap,
    });
  }, [map, roughnessMap, normalMap]);

  return (
    <group position={position} rotation={rotation} scale={scale}>
      <Box args={[1, 1, 1]} material={material} castShadow receiveShadow></Box>
    </group>
  );
}

export default Block;

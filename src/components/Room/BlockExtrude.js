import React, { useMemo } from "react";
import { Extrude } from "@react-three/drei";
import blockData from "../../data/blockData";
import setMapValue from "../../utils/blockMap";
import * as THREE from "three";
import { MeshStandardMaterial } from "three";

function BlockExtrude({
  value: holeValue,
  position,
  height,
  width,
  tileRepetitionCoordinates,
  type,
}) {
  const extrudeSettings = { steps: 1, depth: 0.05, bevelEnabled: false };
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

  const shape = useMemo(() => {
    const rectShape = new THREE.Shape()
      .moveTo(0, 0)
      .lineTo(0, height)
      .lineTo(width, height)
      .lineTo(width, 0)
      .lineTo(0, 0);

    const hole = new THREE.Path()
      .moveTo(0.85, 0.6)
      .lineTo(0.85, 1.95)
      .lineTo(1.75, 1.95)
      .lineTo(1.75, holeValue)
      .lineTo(0.85, holeValue);
    rectShape.holes.push(hole);
    return rectShape;
  }, [height, holeValue, width]);

  const material = useMemo(() => {
    return new MeshStandardMaterial({
      map,
      roughnessMap,
      normalMap,
    });
  }, [map, roughnessMap, normalMap]);

  return (
    <>
      <group position={position}>
        <Extrude
          material={material}
          args={[shape, extrudeSettings]}
          castShadow
          receiveShadow
        ></Extrude>
      </group>
    </>
  );
}

export default BlockExtrude;

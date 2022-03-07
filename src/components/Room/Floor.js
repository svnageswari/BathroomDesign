import React from "react";
import Block from "./Block";

function Floor({
  position,
  rotation,
  scale,
  type,
  tileRepetitionCoordinates,
  color,
  normalChecked,
  roughnessChecked,
}) {
  return (
    <Block
      position={position}
      rotation={rotation}
      scale={scale}
      type={type}
      tileRepetitionCoordinates={tileRepetitionCoordinates}
      color={color}
      normalChecked={normalChecked}
      roughnessChecked={roughnessChecked}
    />
  );
}

export default Floor;

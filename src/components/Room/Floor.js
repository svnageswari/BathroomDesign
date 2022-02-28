import React from "react";
import Block from "./Block";

function Floor({
  position,
  rotation,
  scale,
  type,
  tileRepetitionCoordinates,
  color,
}) {
  return (
    <Block
      position={position}
      rotation={rotation}
      scale={scale}
      type={type}
      tileRepetitionCoordinates={tileRepetitionCoordinates}
      color={color}
    />
  );
}

export default Floor;

import React from "react";
import Block from "./Block";

function Floor({ position, rotation, scale, type }) {
  return (
    <Block position={position} rotation={rotation} scale={scale} type={type} />
  );
}

export default Floor;

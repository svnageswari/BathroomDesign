import React from "react";
import Block from "./Block";

function Wall({ position, rotation, scale, type }) {
  return (
    <Block position={position} rotation={rotation} scale={scale} type={type} />
  );
}

export default Wall;
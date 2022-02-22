import React from "react";
import Block from "./Block";

function Glass({ position, rotation, scale, type, color }) {
  return (
    <Block position={position} rotation={rotation} scale={scale} type={type} color={color}/>
  );
}

export default Glass;
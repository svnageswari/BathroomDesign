import React from "react";

function Plane() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]}>
      <planeBufferGeometry attach="geometry" args={[10, 10]} />
      <meshLambertMaterial attach="material" color="lightblue" />
    </mesh>
  );
}

export default Plane;

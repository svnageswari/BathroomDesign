import React, { useRef } from "react";

const Light = ({ position, color, intensity }) => {
  const ref = useRef();
  return (
    <group position={position} ref={ref}>
      <pointLight color={color} intensity={intensity} decay={2} distance={20} />
    </group>
  );
};

export default Light;

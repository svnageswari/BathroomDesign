import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function WallPipe({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/model/roomThree/wallPipe.glb");
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes.Reece_Tap_Milli_Pure_Basin_Tap_Hostess_System_160_mm_Type_1.geometry}
        material={materials['Reece_Brass_Matte Black']}
      >
      </mesh>
      <mesh
        geometry={
          nodes.Reece_Tap_Milli_Pure_Basin_Tap_Hostess_System_160_mm_Type_1_1
            .geometry
        }
        material={materials["Reece_Brass_Matte Black"]}
      />
    </group>
  );
}

useGLTF.preload("/model/roomThree/wallPipe.glb");

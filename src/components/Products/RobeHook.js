import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function RobeHook({ ...props }) {
  const group = useRef();
  const { nodes } = useGLTF("/model/products/robeHook.glb");
  const { materials } = useGLTF("/model/materials/matteBlack.glb");

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Reece_Accessory_Mizu_Soothe_Robe_Hook_Type_1.geometry}
        material={materials["Reece_Brass_Matte Black"]}
      ></mesh>
    </group>
  );
}

useGLTF.preload("/model/products/robeHook.glb");

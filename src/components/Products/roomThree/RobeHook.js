import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function RobeHook({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/model/roomThree/robeHook.glb");
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes.Reece_Accessory_Mizu_Soothe_Robe_Hook_Type_1.geometry}
        material={materials.Reece_Material_Main}
      />
    </group>
  );
}

useGLTF.preload("/model/roomThree/robeHook.glb");

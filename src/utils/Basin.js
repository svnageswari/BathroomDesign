import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function BasinModel({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/Model/basin.glb");
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes.Reece_Basin_Posh_Solus_Semi_Recessed_Type_1.geometry}
        material={materials.Reece_Material_Secondary}
      />
      <mesh
        geometry={nodes.Reece_Basin_Posh_Solus_Semi_Recessed_Type_1_1.geometry}
        material={materials.Reece_Material_Main}
      />
    </group>
  );
}

useGLTF.preload("/Model/basin.glb");

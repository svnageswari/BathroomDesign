import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function ShowerModel({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/Model/shower.glb");
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={
          nodes.Reece_Shower_Posh_Solus_MK3_HiRise_Shower_Type_1.geometry
        }
        material={materials.Reece_Material_Main}
      />
      <mesh
        geometry={
          nodes.Reece_Shower_Posh_Solus_MK3_HiRise_Shower_Type_1_1.geometry
        }
        material={materials.Reece_Material_Secondary}
      />
    </group>
  );
}

useGLTF.preload("/Model/shower.glb");

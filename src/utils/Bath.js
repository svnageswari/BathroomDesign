import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function BathModel({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/Model/bath.glb");
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={
          nodes.Reece_Bath_Omvivo_Villa_Freestanding_Bath_1725_mm_Type_1
            .geometry
        }
        material={materials.Reece_Material_Secondary}
      />
      <mesh
        geometry={
          nodes.Reece_Bath_Omvivo_Villa_Freestanding_Bath_1725_mm_Type_1_1
            .geometry
        }
        material={materials.Reece_Material_Main}
      />
    </group>
  );
}

useGLTF.preload("/Model/bath.glb");

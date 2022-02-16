import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function TubModel({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/Model/Tub.glb");
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={
          nodes
            .Reece_Bath_Kado_Neue_Freestanding_Bath_Sanitary_Grade_Acrylic_Type_1
            .geometry
        }
        material={materials.Reece_Material_Main}
      />
      <mesh
        geometry={
          nodes
            .Reece_Bath_Kado_Neue_Freestanding_Bath_Sanitary_Grade_Acrylic_Type_1_1
            .geometry
        }
        material={materials.Reece_Material_Secondary}
      />
      <mesh
        geometry={
          nodes
            .Reece_Bath_Kado_Neue_Freestanding_Bath_Sanitary_Grade_Acrylic_Type_1_2
            .geometry
        }
        material={materials["Reece_Material-Colour"]}
      />
    </group>
  );
}

useGLTF.preload("/Model/Tub.glb");

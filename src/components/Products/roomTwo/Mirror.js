import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Mirror({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/model/roomTwo/mirror.glb");
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={
          nodes.Reece_Mirror_Kado_Neue_Mirror_Cabinet_500_x_900_mm_Type_1
            .geometry
        }
        material={materials.Reece_Material_Main}
      />
      <mesh
        geometry={
          nodes.Reece_Mirror_Kado_Neue_Mirror_Cabinet_500_x_900_mm_Type_1_1
            .geometry
        }
        material={materials["Reece_Material-Cabinet"]}
      />
      <mesh
        geometry={
          nodes.Reece_Mirror_Kado_Neue_Mirror_Cabinet_500_x_900_mm_Type_1_2
            .geometry
        }
        material={materials.Reece_Material_Secondary}
      />
    </group>
  );
}

useGLTF.preload("/model/roomTwo/mirror.glb");

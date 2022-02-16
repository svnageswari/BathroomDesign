import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function VanityModel({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/Model/vanity.glb");
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes.Reece_Vanity_Kado_Lux_Type_42.geometry}
        material={materials["Reece_Material-Benchtop"]}
      />
      <mesh
        geometry={nodes.Reece_Vanity_Kado_Lux_Type_42_1.geometry}
        material={materials["Reece_Material-Cabinet"]}
      />
      <mesh
        geometry={nodes.Reece_Vanity_Kado_Lux_Type_42_2.geometry}
        material={materials.Reece_Material_Handle}
      />
      <mesh
        geometry={nodes.Reece_Vanity_Kado_Lux_Type_42_3.geometry}
        material={materials.Reece_Material_Secondary}
      />
    </group>
  );
}

useGLTF.preload("/Model/vanity.glb");

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Toilet({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/model/roomOne/toilet.glb");
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes.Reece_Toilet_Kado_Lux_Pan_Back_to_Wall_Type_3.geometry}
        material={materials.Reece_Material_Main}
      />
      <mesh
        geometry={
          nodes.Reece_Toilet_Kado_Lux_Pan_Back_to_Wall_Type_3_1.geometry
        }
        material={materials["Reece_Material-Seat"]}
      />
    </group>
  );
}

useGLTF.preload("/model/roomOne/toilet.glb");

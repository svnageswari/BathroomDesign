import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function BathTub({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/model/roomThree/bathTub.glb");
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={
          nodes
            .Reece_Bath_Kado_Lussi_Freestanding_Bath_Thin_Edge_Cast_Solid_Surface_Type_2
            .geometry
        }
        material={materials.Reece_Material_Main}
      />
    </group>
  );
}

useGLTF.preload("/model/roomThree/bathTub.glb");

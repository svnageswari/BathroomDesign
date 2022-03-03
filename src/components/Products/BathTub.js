import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function BathTub({ ...props }) {
  const group = useRef();
  const { nodes } = useGLTF("/model/products/bathTub.glb");
  const { materials } = useGLTF("/model/materials/surfaceWhite.glb");

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes
            .Reece_Bath_Kado_Lussi_Freestanding_Bath_Thin_Edge_Cast_Solid_Surface_Type_2
            .geometry
        }
        material={materials.Reece_Cast_Solid_Surface_White}
      ></mesh>
    </group>
  );
}

useGLTF.preload("/model/products/bathTub.glb");

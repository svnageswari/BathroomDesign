import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Basin({ ...props }) {
  const group = useRef();
  const { nodes } = useGLTF("/model/products/basin.glb");
  const { materials } = useGLTF("/model/materials/surfaceWhite.glb");

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Reece_Basin_Kado_Lussi_Above_Counter_Thin_Edge_500_mm_Type_1
            .geometry
        }
        material={materials.Reece_Cast_Solid_Surface_White}
      />
    </group>
  );
}

useGLTF.preload("/model/products/basin.glb");

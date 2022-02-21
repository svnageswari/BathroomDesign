import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Basin({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/model/roomThree/basin.glb");
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={
          nodes.Reece_Basin_Kado_Lussi_Above_Counter_Thin_Edge_500_mm_Type_1
            .geometry
        }
        material={materials.Reece_Material_Main}
      />
    </group>
  );
}

useGLTF.preload("/model/roomThree/basin.glb");

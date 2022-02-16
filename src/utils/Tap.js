import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function TapModel({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/Model/tap.glb");
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={
          nodes.Reece_Tap_Mizu_Drift_Bath_Wall_Set_Curved_Type_1.geometry
        }
        material={materials.Reece_Material_Main}
      />
    </group>
  );
}

useGLTF.preload("/Model/tap.glb");

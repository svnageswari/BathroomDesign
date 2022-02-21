import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function WallTopAssemblies({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF(
    "/model/roomThree/wallTopAssemblies.glb"
  );
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={
          nodes.Reece_Tap_Mizu_Drift_Wall_Top_Assemblies_Type_1.geometry
        }
        material={materials.Reece_Material_Main}
      />
    </group>
  );
}

useGLTF.preload("/model/roomThree/wallTopAssemblies.glb");
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function WallTopAssemblies({ ...props }) {
  const group = useRef();
  const { nodes } = useGLTF("/model/products/wallTopAssemblies.glb");
  const { materials } = useGLTF("/model/materials/matteBlack.glb");

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Reece_Tap_Mizu_Drift_Wall_Top_Assemblies_Type_1.geometry
        }
        material={materials["Reece_Brass_Matte Black"]}
      ></mesh>
    </group>
  );
}

useGLTF.preload("/model/products/wallTopAssemblies.glb");

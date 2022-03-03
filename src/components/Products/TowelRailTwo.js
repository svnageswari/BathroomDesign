import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function TowelRailTwo({ ...props }) {
  const group = useRef();
  const { nodes } = useGLTF("/model/products/towelRailTwo.glb");
  const { materials } = useGLTF("/model/materials/matteBlack.glb");

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Reece_Towel_Rail_Mizu_Drift_Single_Type_5.geometry}
        material={materials["Reece_Brass_Matte Black"]}
      ></mesh>
    </group>
  );
}

useGLTF.preload("/model/products/towelRailTwo.glb");

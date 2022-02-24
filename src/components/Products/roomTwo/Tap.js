import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Tap({ ...props }) {
  const group = useRef();
  const { nodes } = useGLTF("/model/roomTwo/tap.glb");
  const { materials } = useGLTF("/model/materials/brassChrome.glb");

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Reece_Tap_Mizu_Drift_Bath_Wall_Set_Curved_Type_1.geometry
        }
        material={materials.Reece_Brass_Chrome}
      />
    </group>
  );
}

useGLTF.preload("/model/roomTwo/tap.glb");

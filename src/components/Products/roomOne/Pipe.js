import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Pipe({ ...props }) {
  const group = useRef();
  const { nodes } = useGLTF("/model/roomOne/pipe.glb");
  const { materials } = useGLTF("/model/materials/brassChrome.glb");

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Reece_Tap_Mizu_Drift_MK2_Basin_Mixer_Type_3.geometry}
        material={materials.Reece_Brass_Chrome}
      />
    </group>
  );
}

useGLTF.preload("/model/roomOne/pipe.glb");

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function BathtubPipe({ ...props }) {
  const group = useRef();
  const { nodes } = useGLTF("/model/roomThree/bathTubPipe.glb");
  const { materials } = useGLTF("/model/materials/matteBlack.glb");

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Reece_Tap_Mizu_Drift_MK2_Bath_Floor_Mixer_Type_1.geometry
        }
        material={materials["Reece_Brass_Matte Black"]}
      ></mesh>
    </group>
  );
}

useGLTF.preload("/model/roomThree/bathTubPipe.glb");

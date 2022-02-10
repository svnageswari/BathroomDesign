import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function PipeModel({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/pipe.glb");
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes.Reece_Tap_Mizu_Drift_MK2_Basin_Mixer_Type_3.geometry}
        material={materials.Reece_Material_Main}
      />
    </group>
  );
}

useGLTF.preload("/pipe.glb");

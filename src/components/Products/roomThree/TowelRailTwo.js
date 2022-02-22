import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function TowelRailTwo({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/model/roomThree/towelRailTwo.glb");
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes.Reece_Towel_Rail_Mizu_Drift_Single_Type_5.geometry}
        material={materials['Reece_Brass_Matte Black']}
      >
        <meshPhongMaterial attach="material" color="#110f0f"/>
      </mesh>
    </group>
  );
}

useGLTF.preload("/model/roomThree/towelRailTwo.glb");

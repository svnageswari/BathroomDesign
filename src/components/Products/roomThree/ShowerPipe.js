import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function ShowerPipe({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/model/roomThree/showerPipe.glb");
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes.Reece_Shower_Posh_Domaine_Rail_Shower_Twin_Type_1.geometry}
        material={materials.Reece_Brass_Chrome}
        material-color="#f6feff"
      >
      </mesh>
      <mesh
        geometry={nodes.Reece_Shower_Posh_Domaine_Rail_Shower_Twin_Type_1_1.geometry}
        material={materials['Reece_Brass_Matte Black']}
        material-color="#110f0f"
      />
    </group>
  );
}

useGLTF.preload("/model/roomThree/showerPipe.glb");

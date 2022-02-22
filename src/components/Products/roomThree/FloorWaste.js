import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function FloorWaste({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/model/roomThree/floorWaste.glb");
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={
          nodes.Reece_Waste_Mizu_Drift_Floor_Waste_Square_Type_2.geometry
        }
        material={materials.Reece_Material_Main}
      >
        <meshPhongMaterial color="#c0c0c0"/>
      </mesh>
    </group>
  );
}

useGLTF.preload("/model/roomThree/floorWaste.glb");

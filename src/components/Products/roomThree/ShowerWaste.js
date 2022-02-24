import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function ShowerWaste({ ...props }) {
  const group = useRef();
  const { nodes } = useGLTF("/model/roomThree/insertWaste.glb");
  const { materials } = useGLTF("/model/materials/brassChrome.glb");

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={
          nodes.Reece_Waste_Mizu_Drift_Tile_Insert_Waste_Type_2.geometry
        }
        material={materials.Reece_Brass_Chrome}
      ></mesh>
    </group>
  );
}

useGLTF.preload("/model/roomThree/insertWaste.glb");

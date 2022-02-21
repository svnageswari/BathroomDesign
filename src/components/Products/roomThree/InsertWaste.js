import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function InsertWaste({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/model/roomThree/insertWaste.glb");
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={
          nodes.Reece_Waste_Mizu_Drift_Tile_Insert_Waste_Type_2.geometry
        }
        material={materials.Reece_Material_Main}
      />
    </group>
  );
}

useGLTF.preload("/model/roomThree/insertWaste.glb");

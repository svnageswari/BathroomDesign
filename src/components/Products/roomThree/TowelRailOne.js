import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function TowelRailOne({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/model/roomThree/towelRailOne.glb");
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={
          nodes
            .Reece_Accessory_Kado_Lussi_MK2_Heated_Towel_Rail_Wall_Mounted_500_mm_x_1100_mm_Type_1
            .geometry
        }
        material={materials.Reece_Material_Main}
      />
    </group>
  );
}

useGLTF.preload("/model/roomThree/towelRailOne.glb");

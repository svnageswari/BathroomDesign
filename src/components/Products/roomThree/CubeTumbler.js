import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function CubeTumbler({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/model/roomThree/CubeTumbler.glb");
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={
          nodes.Reece_Accessory_GROHE_Essentials_Cube_Tumbler_and_Holder_Type_1
            .geometry
        }
        material={materials.Reece_Material_Main}
      />
      <mesh
        geometry={
          nodes
            .Reece_Accessory_GROHE_Essentials_Cube_Tumbler_and_Holder_Type_1_1
            .geometry
        }
        material={materials.Reece_Material_Secondary}
      />
    </group>
  );
}

useGLTF.preload("/model/roomThree/CubeTumbler.glb");

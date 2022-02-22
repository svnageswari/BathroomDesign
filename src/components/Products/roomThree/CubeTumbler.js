import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function CubeTumbler({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/model/roomThree/cubeTumbler.glb");
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={
          nodes.Reece_Accessory_GROHE_Essentials_Cube_Tumbler_and_Holder_Type_1
            .geometry
        }
        material={materials.Reece_Material_Main}
      >
        <meshPhongMaterial attach="material" color="#8f8979"/>
      </mesh>
      <mesh
        geometry={
          nodes
            .Reece_Accessory_GROHE_Essentials_Cube_Tumbler_and_Holder_Type_1_1
            .geometry
        }
        material={materials.Reece_Material_Secondary}
      >
        <meshPhongMaterial opacity={0.6} transparent color="#c1bebe"/>
      </mesh>
    </group>
  );
}

useGLTF.preload("/model/roomThree/cubeTumbler.glb");

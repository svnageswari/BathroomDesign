import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function MirrorCabinet({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/model/roomThree/mirrorCabinet.glb");
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes.Reece_Mirror_Kado_Lussi_Mirror_Cabinet_Type_2.geometry}
      >
        <meshPhongMaterial opacity={1} transparent color="#c1bebe" />
      </mesh>
      <mesh
        geometry={
          nodes.Reece_Mirror_Kado_Lussi_Mirror_Cabinet_Type_2_1.geometry
        }
        material={materials["Reece_Material-Cabinet"]}
      />
      <mesh
        geometry={
          nodes.Reece_Mirror_Kado_Lussi_Mirror_Cabinet_Type_2_2.geometry
        }
        material={materials.Reece_Material_Shelf}
      />
      <mesh
        geometry={
          nodes.Reece_Mirror_Kado_Lussi_Mirror_Cabinet_Type_2_3.geometry
        }
        material={materials.Reece_Material_Secondary}
      />
    </group>
  );
}

useGLTF.preload("/model/roomThree/mirrorCabinet.glb");

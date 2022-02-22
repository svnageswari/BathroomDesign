import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

export default function Vanity({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/model/roomThree/vanity.glb");
  const texture = new THREE.TextureLoader().load("assets/wood.jpeg");

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes.Reece_Vanity_Kado_Lux_Type_42.geometry}
        material={materials["Reece_Acrylic_Grey"]}
      >
        <meshPhongMaterial attach="material" color="#313131" />
      </mesh>
      <mesh
        geometry={nodes.Reece_Vanity_Kado_Lux_Type_42_1.geometry}
        material={materials["Reece_Material_Cabinet_Timber_PrimeOak"]}
      >
        <meshBasicMaterial attach="material" map={texture} />
      </mesh>
      <mesh
        geometry={nodes.Reece_Vanity_Kado_Lux_Type_42_2.geometry}
        material={materials.Reece_Material_Handle}
      />
      <mesh
        geometry={nodes.Reece_Vanity_Kado_Lux_Type_42_3.geometry}
        material={materials.Reece_Material_Secondary}
      />
    </group>
  );
}

useGLTF.preload("/model/roomThree/vanity.glb");

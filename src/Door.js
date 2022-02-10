import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function DoorModel({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/door.glb");
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes.Plane.geometry}
        material={nodes.Plane.material}
        position={[0, 0.98, 0]}
        rotation={[Math.PI / 2, -Math.PI / 2, 0]}
        scale={[1, 1, 0.5]}
      />
      <mesh
        geometry={nodes.Handle_Front.geometry}
        material={nodes.Handle_Front.material}
        position={[-0.31, 1, -0.06]}
        rotation={[-Math.PI, 0, 0]}
      />
      <mesh
        geometry={nodes.Handle_Back.geometry}
        material={nodes.Handle_Back.material}
        position={[-0.31, 1, -0.02]}
      />
      <group
        position={[0, 0.94, -0.02]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.42, 1, 0.94]}
      >
        <mesh
          geometry={nodes.Plane002.geometry}
          material={nodes.Plane002.material}
        />
        <mesh
          geometry={nodes.Plane002_1.geometry}
          material={materials.sticla}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/door.glb");

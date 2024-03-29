import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Door({ ...props }) {
  const group = useRef();
  const { nodes } = useGLTF("/model/products/door.glb");
  return (
    <group ref={group} {...props} dispose={null}>
      <primitive object={nodes["100_000"]} />
      <primitive object={nodes["050_100"]} />
      <primitive object={nodes["000_000"]} />
      <primitive object={nodes["100_100"]} />
      <primitive object={nodes["000_100"]} />
      <primitive object={nodes["050_055_LockY"]} />
      <primitive object={nodes["100_055_LockY"]} />
      <primitive object={nodes["000_055_LockY"]} />
      <primitive object={nodes["050_000"]} />
      <skinnedMesh
        castShadow
        receiveShadow
        geometry={nodes["Door-mesh"].geometry}
        material={nodes["Door-mesh"].material}
        skeleton={nodes["Door-mesh"].skeleton}
      />
      <skinnedMesh
        castShadow
        receiveShadow
        geometry={nodes.Doorframe.geometry}
        material={nodes.Doorframe.material}
        skeleton={nodes.Doorframe.skeleton}
      />
    </group>
  );
}

useGLTF.preload("/model/products/door.glb");

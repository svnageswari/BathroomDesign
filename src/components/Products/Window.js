import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Window({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/model/window.glb");
  return (
    <group castShadow receiveShadow ref={group} {...props} dispose={null}>
      <primitive object={nodes["100_000_R"]} />
      <primitive object={nodes["100_000_L"]} />
      <primitive object={nodes["100_100_R"]} />
      <primitive object={nodes["100_100_L"]} />
      <primitive object={nodes["050_100"]} />
      <primitive object={nodes["050_000"]} />
      <skinnedMesh
        castShadow
        receiveShadow
        geometry={nodes["Window-model"].geometry}
        material={materials.paint}
        skeleton={nodes["Window-model"].skeleton}
      />
      <skinnedMesh
        castShadow
        receiveShadow
        geometry={nodes["Window-pane_noshadow"].geometry}
        material={materials.Glass}
        skeleton={nodes["Window-pane_noshadow"].skeleton}
      />
    </group>
  );
}

useGLTF.preload("/model/window.glb");

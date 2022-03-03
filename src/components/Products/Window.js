import React, { useMemo, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { MeshPhysicalMaterial } from "three";

export default function Window({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/model/products/window.glb");
  const glass = useMemo(() => {
    return new MeshPhysicalMaterial({
      transmission: 0.95,
      roughness: 0,
    });
  }, []);
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
        geometry={nodes["Window-pane_noshadow"].geometry}
        material={glass}
        skeleton={nodes["Window-pane_noshadow"].skeleton}
      />
    </group>
  );
}

useGLTF.preload("/model/products/window.glb");

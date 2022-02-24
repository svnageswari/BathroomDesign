import React from "react";
import { useGLTF } from "@react-three/drei";

function ProductMesh({ item, nodes }) {
  const { product, material, model } = item;
  const { materials } = useGLTF(`/model/materials/${model}.glb`);

  return (
    <mesh
      castShadow
      receiveShadow
      geometry={nodes[product].geometry}
      material={materials[material]}
    />
  );
}

export default ProductMesh;

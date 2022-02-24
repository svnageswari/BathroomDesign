import React, { useRef } from "react";
import { useGLTF, MeshReflectorMaterial } from "@react-three/drei";
import ProductMesh from "../../ProductMesh";

export default function Mirror({ ...props }) {
  const group = useRef();
  const { nodes } = useGLTF("/model/roomTwo/mirror.glb");

  const mirror = [
    {
      product: "Reece_Mirror_Kado_Neue_Mirror_Cabinet_500_x_900_mm_Type_1_1",
      material: "Reece_Material_Cabinet_Timber_PrimeOak",
      model: "timberOak",
    },
    {
      product: "Reece_Mirror_Kado_Neue_Mirror_Cabinet_500_x_900_mm_Type_1_2",
      material: "Reece_Acrylic_White",
      model: "acrylicWhite",
    },
  ];

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Reece_Mirror_Kado_Neue_Mirror_Cabinet_500_x_900_mm_Type_1
            .geometry
        }
      >
        <MeshReflectorMaterial
          mirror={1}
          resolution={1024}
          transparent={false}
          reflectorOffset={0.162}
        ></MeshReflectorMaterial>
      </mesh>

      {mirror.map((item) => {
        return <ProductMesh item={item} nodes={nodes} key={item.product} />;
      })}
    </group>
  );
}

useGLTF.preload("/model/roomTwo/mirror.glb");

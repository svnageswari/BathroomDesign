import React, { useRef } from "react";
import { useGLTF, MeshReflectorMaterial } from "@react-three/drei";
import ProductMesh from "../../ProductMesh";

export default function MirrorCabinet({ ...props }) {
  const group = useRef();
  const { nodes } = useGLTF("/model/roomThree/mirrorCabinet.glb");

  const mirrorCabinet = [
    {
      product: "Reece_Mirror_Kado_Lussi_Mirror_Cabinet_Type_2_1",
      material: "Reece_Material_Cabinet_Timber_PrimeOak",
      model: "timberOak",
    },
    {
      product: "Reece_Mirror_Kado_Lussi_Mirror_Cabinet_Type_2_2",
      material: "Reece_Glass_Mirror",
      model: "glassMirror",
    },
    {
      product: "Reece_Mirror_Kado_Lussi_Mirror_Cabinet_Type_2_3",
      material: "Reece_Acrylic_White",
      model: "acrylicWhite",
    },
  ];

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Reece_Mirror_Kado_Lussi_Mirror_Cabinet_Type_2.geometry}
      >
        <MeshReflectorMaterial
          mirror={1}
          resolution={1024}
          transparent={false}
          reflectorOffset={0.162}
        ></MeshReflectorMaterial>
      </mesh>

      {mirrorCabinet.map((item) => {
        return <ProductMesh item={item} nodes={nodes} key={item.product} />;
      })}
    </group>
  );
}

useGLTF.preload("/model/roomThree/mirrorCabinet.glb");

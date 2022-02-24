import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import ProductMesh from "../../ProductMesh";

export default function Vanity({ ...props }) {
  const group = useRef();
  const { nodes } = useGLTF("/model/roomThree/vanity.glb");

  const vanity = [
    {
      product: "Reece_Vanity_Kado_Lux_Type_42",
      material: "Reece_Acrylic_Grey",
      model: "acrylicGrey",
    },
    {
      product: "Reece_Vanity_Kado_Lux_Type_42_1",
      material: "Reece_Material_Cabinet_Timber_PrimeOak",
      model: "timberOak",
    },
    {
      product: "Reece_Vanity_Kado_Lux_Type_42_2",
      material: "Reece_Brass_Brushed Gold",
      model: "brushedGold",
    },
    {
      product: "Reece_Vanity_Kado_Lux_Type_42_3",
      material: "Reece_Acrylic_White",
      model: "acrylicWhite",
    },
  ];

  return (
    <group ref={group} {...props} dispose={null}>
      {vanity.map((item) => {
        return <ProductMesh item={item} nodes={nodes} key={item.product} />;
      })}
    </group>
  );
}

useGLTF.preload("/model/roomThree/vanity.glb");

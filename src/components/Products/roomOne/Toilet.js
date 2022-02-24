import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import ProductMesh from "../../ProductMesh";

export default function Toilet({ ...props }) {
  const group = useRef();
  const { nodes } = useGLTF("/model/roomOne/toilet.glb");

  const toilet = [
    {
      product: "Reece_Toilet_Kado_Lux_Pan_Back_to_Wall_Type_3",
      material: "Reece_Vitreous_China_White",
      model: "chinaWhite",
    },
    {
      product: "Reece_Toilet_Kado_Lux_Pan_Back_to_Wall_Type_3_1",
      material: "Reece_Acrylic_White",
      model: "acrylicWhite",
    },
  ];

  return (
    <group ref={group} {...props} dispose={null}>
      {toilet.map((item) => {
        return <ProductMesh item={item} nodes={nodes} key={item.product} />;
      })}
    </group>
  );
}

useGLTF.preload("/model/roomOne/toilet.glb");

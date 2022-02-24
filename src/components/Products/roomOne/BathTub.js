import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import ProductMesh from "../../ProductMesh";

export default function BathTub({ ...props }) {
  const group = useRef();
  const { nodes } = useGLTF("/model/roomOne/bathTub.glb");

  const bathTub = [
    {
      product:
        "Reece_Bath_Kado_Neue_Freestanding_Bath_Sanitary_Grade_Acrylic_Type_1",
      material: "Reece_Acrylic_White",
      model: "acrylicWhite",
    },
    {
      product:
        "Reece_Bath_Kado_Neue_Freestanding_Bath_Sanitary_Grade_Acrylic_Type_1_1",
      material: "Reece_Acrylic_White",
      model: "acrylicWhite",
    },
    {
      product:
        "Reece_Bath_Kado_Neue_Freestanding_Bath_Sanitary_Grade_Acrylic_Type_1_2",
      material: "Reece_Acrylic_White",
      model: "acrylicWhite",
    },
  ];

  return (
    <group ref={group} {...props} dispose={null}>
      {bathTub.map((item) => {
        return <ProductMesh item={item} nodes={nodes} key={item.product} />;
      })}
    </group>
  );
}

useGLTF.preload("/model/roomOne/bathTub.glb");

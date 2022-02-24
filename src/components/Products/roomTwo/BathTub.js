import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import ProductMesh from "../../ProductMesh";

export default function BathTub({ ...props }) {
  const group = useRef();
  const { nodes } = useGLTF("/model/roomTwo/bathTub.glb");

  const bathTub = [
    {
      product: "Reece_Bath_Omvivo_Villa_Freestanding_Bath_1725_mm_Type_1",
      material: "Reece_Cast_Solid_Surface_White",
      model: "surfaceWhite",
    },
    {
      product: "Reece_Bath_Omvivo_Villa_Freestanding_Bath_1725_mm_Type_1_1",
      material: "Reece_Cast_Solid_Surface_White",
      model: "surfaceWhite",
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

useGLTF.preload("/model/roomTwo/bathTub.glb");

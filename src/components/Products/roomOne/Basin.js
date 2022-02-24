import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import ProductMesh from "../../ProductMesh";

export default function Basin({ ...props }) {
  const group = useRef();
  const { nodes } = useGLTF("/model/roomOne/basin.glb");

  const basin = [
    {
      product: "Reece_Basin_Posh_Solus_Semi_Recessed_Type_1",
      material: "Reece_Brass_Chrome",
      model: "brassChrome",
    },
    {
      product: "Reece_Basin_Posh_Solus_Semi_Recessed_Type_1_1",
      material: "Reece_Acrylic_White",
      model: "acrylicWhite",
    },
  ];

  return (
    <group ref={group} {...props} dispose={null}>
      {basin.map((item) => {
        return <ProductMesh item={item} nodes={nodes} key={item.product} />;
      })}
    </group>
  );
}

useGLTF.preload("/model/roomOne/basin.glb");

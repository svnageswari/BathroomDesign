import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import ProductMesh from "../ProductMesh";

export default function ShowerPipe({ ...props }) {
  const group = useRef();
  const { nodes } = useGLTF("/model/products/showerPipe.glb");

  const showerPipe = [
    {
      product: "Reece_Shower_Posh_Domaine_Rail_Shower_Twin_Type_1",
      material: "Reece_Brass_Matte Black",
      model: "matteBlack",
    },
    {
      product: "Reece_Shower_Posh_Domaine_Rail_Shower_Twin_Type_1_1",
      material: "Reece_Brass_Matte Black",
      model: "matteBlack",
    },
  ];

  return (
    <group ref={group} {...props} dispose={null}>
      {showerPipe.map((item) => {
        return <ProductMesh item={item} nodes={nodes} key={item.product} />;
      })}
    </group>
  );
}

useGLTF.preload("/model/products/showerPipe.glb");

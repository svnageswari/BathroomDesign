import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import ProductMesh from "../../ProductMesh";

export default function Shower({ ...props }) {
  const group = useRef();
  const { nodes } = useGLTF("/model/roomOne/shower.glb");

  const shower = [
    {
      product: "Reece_Shower_Posh_Solus_MK3_HiRise_Shower_Type_1",
      material: "Reece_Brass_Chrome",
      model: "brassChrome",
    },
    {
      product: "Reece_Shower_Posh_Solus_MK3_HiRise_Shower_Type_1_1",
      material: "Reece_Acrylic_White",
      model: "acrylicWhite",
    },
  ];

  return (
    <group ref={group} {...props} dispose={null}>
      {shower.map((item) => {
        return <ProductMesh item={item} nodes={nodes} key={item.product} />;
      })}
    </group>
  );
}

useGLTF.preload("/model/roomOne/shower.glb");

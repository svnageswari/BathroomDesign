import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import ProductMesh from "../ProductMesh";

export default function WallPipe({ ...props }) {
  const group = useRef();
  const { nodes } = useGLTF("/model/products/wallPipe.glb");

  const wallPipe = [
    {
      product: "Reece_Tap_Milli_Pure_Basin_Tap_Hostess_System_160_mm_Type_1",
      material: "Reece_Brass_Matte Black",
      model: "matteBlack",
    },
    {
      product: "Reece_Tap_Milli_Pure_Basin_Tap_Hostess_System_160_mm_Type_1_1",
      material: "Reece_Brass_Matte Black",
      model: "matteBlack",
    },
  ];

  return (
    <group ref={group} {...props} dispose={null}>
      {wallPipe.map((item) => {
        return <ProductMesh item={item} nodes={nodes} key={item.product} />;
      })}
    </group>
  );
}

useGLTF.preload("/model/products/wallPipe.glb");

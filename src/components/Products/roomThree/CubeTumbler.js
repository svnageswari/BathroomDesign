import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import ProductMesh from "../../ProductMesh";

export default function CubeTumbler({ ...props }) {
  const group = useRef();
  const { nodes } = useGLTF("/model/roomThree/cubeTumbler.glb");

  const cubeTumbler = [
    {
      product:
        "Reece_Accessory_GROHE_Essentials_Cube_Tumbler_and_Holder_Type_1",
      material: "Reece_Brass_Chrome",
      model: "brassChrome",
    },
    {
      product:
        "Reece_Accessory_GROHE_Essentials_Cube_Tumbler_and_Holder_Type_1_1",
      material: "Reece_Safety Glass_Opaque",
      model: "glassOpaque",
    },
  ];

  return (
    <group ref={group} {...props} dispose={null}>
      {cubeTumbler.map((item) => {
        return <ProductMesh item={item} nodes={nodes} key={item.product} />;
      })}
    </group>
  );
}

useGLTF.preload("/model/roomThree/cubeTumbler.glb");

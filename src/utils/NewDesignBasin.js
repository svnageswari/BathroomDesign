/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/NewDesignBasin.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes.Reece_Basin_Kado_Lussi_Above_Counter_Thin_Edge_500_mm_Type_1.geometry}
        material={materials.Reece_Material_Main}
      />
    </group>
  )
}

useGLTF.preload('/NewDesignBasin.glb')
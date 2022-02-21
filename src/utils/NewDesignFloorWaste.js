/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/NewDesignFloorWaste.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes.Reece_Waste_Mizu_Drift_Floor_Waste_Square_Type_2.geometry}
        material={materials.Reece_Material_Main}
      />
    </group>
  )
}

useGLTF.preload('/NewDesignFloorWaste.glb')

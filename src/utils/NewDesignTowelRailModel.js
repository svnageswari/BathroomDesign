/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function TowelRailTwoModel({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/Model/NewDesignTowelRailModel.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes.Reece_Towel_Rail_Mizu_Drift_Single_Type_5.geometry}
        material={materials.Reece_Material_Main}
      />
    </group>
  )
}

useGLTF.preload('/Model/NewDesignTowelRailModel.glb')

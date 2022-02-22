import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function BathtubPipe({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/model/roomThree/bathTubPipe.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes.Reece_Tap_Mizu_Drift_MK2_Bath_Floor_Mixer_Type_1.geometry}
        material={materials['Reece_Brass_Matte Black']}
      >
        <meshPhongMaterial attach="material" color="#110f0f"/>
      </mesh>
    </group>
  )
}

useGLTF.preload('/model/roomThree/bathTubPipe.glb')

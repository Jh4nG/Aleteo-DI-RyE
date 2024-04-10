import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function MapaSilueta(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/components/MapaSilueta/MapaSilueta.gltf')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh name="Plano_Copia" geometry={nodes.Plano_Copia.geometry} material={materials['Material.001']} position={[0, -0.004, 0]} scale={[0.366, 1, 0.462]} />
      </group>
    </group>
  )
}

useGLTF.preload('/components/MapaSilueta/MapaSilueta.gltf')

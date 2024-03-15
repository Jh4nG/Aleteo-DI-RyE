import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Chinche(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/components/ChincheMadera.gltf')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh name="Plastico" geometry={nodes.Plastico.geometry} material={materials.Madera} />
        <mesh name="Punta" geometry={nodes.Punta.geometry} material={materials.metal} position={[0, 0.225, 0]} scale={0.131} />
      </group>
    </group>
  )
}

useGLTF.preload('/components/ChincheMadera.gltf')
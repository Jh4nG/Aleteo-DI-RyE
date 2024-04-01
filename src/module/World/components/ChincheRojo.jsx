import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function ChincheRojo(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/components/ChincheRojo.gltf')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh name="Plastico" geometry={nodes.Plastico.geometry} material={materials['Material.002']} />
        <mesh name="Punta" geometry={nodes.Punta.geometry} material={materials['Material.003']} position={[0, 0.225, 0]} scale={0.131} />
      </group>
    </group>
  )
}

useGLTF.preload('/components/ChincheRojo.gltf')

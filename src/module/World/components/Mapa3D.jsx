import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Mapa3D(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/components/Mapa3D/Mapa3D.gltf')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh name="Plane" geometry={nodes.Plane.geometry} material={materials['Material.001']} position={[0, -0.004, 0]} scale={[0.366, 1, 0.462]} />
        <mesh name="mapa_suba_corregido" geometry={nodes.mapa_suba_corregido.geometry} material={materials['mapa suba corregido']} position={[0, -0.003, 0]} />
        <mesh name="Plano_Copia" geometry={nodes.Plano_Copia.geometry} material={materials.Material} position={[0, -0.004, 0]} scale={[0.366, 1, 0.462]} />
      </group>
    </group>
  )
}

useGLTF.preload('/components/Mapa3D/Mapa3D.gltf')

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function SiluetaMapa(props) {
  const { nodes, materials } = useGLTF('/components/SiluetaMapa/SiluetaMapa.gltf')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.mesh_0.geometry} material={materials.material_0} />
        <mesh geometry={nodes.mesh_1.geometry} material={materials.material_0} />
        <mesh geometry={nodes.mesh_2.geometry} material={materials.material_0} />
        <mesh geometry={nodes.mesh_3.geometry} material={materials.material_0} />
        <mesh geometry={nodes.mesh_4.geometry} material={materials.material_0} />
        <mesh geometry={nodes.mesh_5.geometry} material={materials.material_1} />
        <mesh geometry={nodes.mesh_6.geometry} material={materials.material_1} />
        <mesh geometry={nodes.mesh_7.geometry} material={materials.material_1} />
        <mesh geometry={nodes.mesh_8.geometry} material={materials.material_1} />
        <mesh geometry={nodes.mesh_9.geometry} material={materials.material_1} />
      </group>
    </group>
  )
}

useGLTF.preload('/components/SiluetaMapa/SiluetaMapa.gltf')

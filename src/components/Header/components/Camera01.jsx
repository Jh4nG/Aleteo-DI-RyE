import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Camera01(props) {
  const { nodes, materials } = useGLTF('/components/Camera/Camera01.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Mesh016.geometry} material={materials.Camera_01_lens_body} />
      <mesh geometry={nodes.Mesh016_1.geometry} material={materials.Camera_01_lens} />
      <mesh geometry={nodes.Mesh016_2.geometry} material={materials.Camera_01_body} />
      <mesh geometry={nodes.Mesh016_3.geometry} material={materials.Camera_01_strap} />
    </group>
  )
}

useGLTF.preload('/components/Camera/Camera01.gltf')

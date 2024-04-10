import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function CassettePlayer(props) {
  const { nodes, materials } = useGLTF('/components/Cassete/cassette_player_1k.gltf')
  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Cube001.geometry} material={materials.cassette_player_body} />
        <mesh geometry={nodes.Cube001_1.geometry} material={materials.cassette_player_flap} />
      </group>
      <mesh geometry={nodes.cassette_player_tape.geometry} material={materials.cassette_player_tape} position={[0.002, -0.021, 0.044]} rotation={[Math.PI / 2, 0, 0]} />
    </group>
  )
}

useGLTF.preload('/components/Cassete/cassette_player_1k.gltf')

import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Cassete(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/components/Casette.gltf')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Light" position={[4.076, 5.904, -1.005]} rotation={[1.89, 0.881, -2.045]} />
        <group name="Camera" position={[7.359, 4.958, 6.926]} rotation={[1.242, 0.33, -0.76]} />
        <group name="Empty" position={[0, 0, -0.354]} rotation={[1.566, 0.005, 0.019]} />
        <mesh name="Circle" geometry={nodes.Circle.geometry} material={materials['Material.002']} position={[-0.016, -0.047, 0.038]} />
        <mesh name="Textura_interna_2" geometry={nodes.Textura_interna_2.geometry} material={materials['Material.006']} position={[-0.016, -0.047, 0.038]} />
        <mesh name="Sphere004" geometry={nodes.Sphere004.geometry} material={materials.tornillo} position={[-0.03, -1.075, 0.032]} scale={-0.085} />
        <mesh name="Textura_interna" geometry={nodes.Textura_interna.geometry} material={materials.EtiquetaA} position={[-0.016, -0.047, 0.038]} />
      </group>
    </group>
  )
}

useGLTF.preload('/components/Casette.gltf')

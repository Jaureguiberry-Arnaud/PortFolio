/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Planet_7: THREE.Mesh
  }
  materials: {
    Material: THREE.MeshStandardMaterial
  }
}

export function PlanetHighTech(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/models/planetHighTech/Planet_7.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <mesh castShadow receiveShadow geometry={nodes.Planet_7.geometry} material={materials.Material} />
    </group>
  )
}

useGLTF.preload('/models/planetHighTech/Planet_7.glb')

/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 ./PlanetCrystal.glb -t s -T
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
	nodes: {
		Planet_48: THREE.Mesh
	}
	materials: {
		Material: THREE.MeshStandardMaterial
	}
}

export function Planet(props: JSX.IntrinsicElements['group']) {
	const { nodes, materials } = useGLTF(
		'/models/PlanetCrystal/PlanetCrystal-transformed.glb'
	) as unknown as GLTFResult
	return (
		<group
			{...props}
			dispose={null}>
			<mesh
				geometry={nodes.Planet_48.geometry}
				material={materials.Material}
			/>
		</group>
	)
}

useGLTF.preload('/models/PlanetCrystal/PlanetCrystal-transformed.glb')

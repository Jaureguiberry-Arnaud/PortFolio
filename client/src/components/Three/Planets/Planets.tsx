import PropTypes, { InferProps } from 'prop-types'
import * as THREE from 'three'
import React, { Suspense, useEffect, useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
// import { Planet } from './PlanetsAsset/Planet1'
import { Vector3 } from 'three'

function Planets({ project }: InferProps<typeof Planets.propTypes>) {
	// My State
	const [selected, setSelected] = useState(false)
	const [PlanetTexture, setPlanetTexture] = useState()
	const [radiusMultiplierResult, setRadiusMultiplierResult] = useState(Number)
	const [projectId, setProjectId] = useState(project.id)

	// const planetPosition = {
	// 	1: [-radiusMultiplier, 0, 0],
	// 	2: [radiusMultiplier, 0, 0],
	// 	3: [0, -radiusMultiplier, 0],
	// 	4: [0, radiusMultiplier, 0],
	// 	5: [-radiusMultiplier, 0, 0],
	// 	6: [radiusMultiplier, 0, 0],
	// 	7: [0, -radiusMultiplier, 0],
	// 	8: [0, -radiusMultiplier, 0],
	// }

	// const planetPosition = [
	// 	`-${radiusMultiplier}, 0, 0`,
	// 	`${radiusMultiplier}, 0, 0`,
	// 	`0, -${radiusMultiplier}, 0`,
	// 	`0, ${radiusMultiplier}, 0`,
	// 	`-${radiusMultiplier}, 0, 0`,
	// 	`${radiusMultiplier}, 0, 0`,
	// 	`0, -${radiusMultiplier}, 0`,
	// 	`0, -${radiusMultiplier}, 0`,
	// ]

	// My Function
	// dynamic import of the planet texture
	function getDynamicPlanetTexture() {
		const PlanetTexturePromise = Promise.resolve(
			import(`./PlanetsAsset/Planet${project.id}`)
		)
		// Transform the promise into a promise that returns the texture
		PlanetTexturePromise.then((value) => {
			setPlanetTexture(value.Planet)
		})
	}

	// Multiplier for the position of the planet
	function radiusMultiplier() {
		if (project.id === 1) {
			return 80
		} else {
			return 80 * project.id
		}
	}
	// radiusMultiplier()

	// Multiplier for the rotation of the planet from sun
	function rotationFromSunMultiplier() {
		if (project.id === 1) {
			return 0.001
		} else {
			return (0.001 * project.id) / 5
		}
	}

	const planetPosition = [
		{ x: radiusMultiplierResult, y: 0, z: 0 },
		{ x: radiusMultiplierResult, y: 0, z: 0 },
		{ x: radiusMultiplierResult, y: 0, z: 0 },
		{ x: radiusMultiplierResult, y: 0, z: 0 },
		{ x: radiusMultiplierResult, y: 0, z: 0 },
		{ x: radiusMultiplierResult, y: 0, z: 0 },
		{ x: radiusMultiplierResult, y: 0, z: 0 },
		{ x: radiusMultiplierResult, y: 0, z: 0 },
	]
	const dynamicPosition = new THREE.Vector3(
		planetPosition[projectId - 1].x,
		planetPosition[projectId - 1].y,
		planetPosition[projectId - 1].z
	)
	console.log(planetPosition[project.id - 1])
	// console.log(dynamicPosition)
	// Make the mesh rotate
	const planetPlanRef: any = useRef()
	const planetRef: any = useRef()
	useFrame(() => {
		planetRef.current.rotation.y += 0.005
		planetPlanRef.current.rotation.y += 0.001 + rotationFromSunMultiplier()
	})

	// Get the dynamic texture when the component is mounted
	useEffect(() => {
		setRadiusMultiplierResult(radiusMultiplier())
		getDynamicPlanetTexture()
	}, [])

	return (
		<mesh
			ref={planetPlanRef}
			key={project.id}
			rotation-y={Math.PI * 0.01}
			position={[0, 0, 0]}>
			<mesh
				ref={planetRef}
				rotation-y={Math.PI * 0.25}
				position={dynamicPosition}
				receiveShadow
				castShadow
				onClick={() => setSelected(!selected)}>
				{PlanetTexture}
				<meshStandardMaterial color={'#ffffff'} />
				{selected && (
					<mesh>
						<sphereGeometry args={[12, 32, 16]} />
						<meshStandardMaterial
							color={'#00d1ff'}
							side={THREE.FrontSide}
							blending={THREE.AdditiveBlending}
							opacity={0.7}
							transparent
						/>
					</mesh>
				)}
			</mesh>
		</mesh>
	)
}

Planets.propTypes = {
	project: PropTypes.shape({
		id: PropTypes.number.isRequired,
		name: PropTypes.string.isRequired,
		description: PropTypes.string.isRequired,
		git_url: PropTypes.string.isRequired,
		web_url: PropTypes.string.isRequired,
		nbWrittenLines: PropTypes.number.isRequired,
		created_at: PropTypes.any.isRequired,
		userId: PropTypes.number.isRequired,
	}).isRequired,
}
export default Planets

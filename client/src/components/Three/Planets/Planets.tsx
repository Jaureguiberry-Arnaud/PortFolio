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
	// Multiplier for the rotation of the planet from sun (center)
	function rotationFromSunMultiplier() {
		if (project.id === 1) {
			return 0.001
		} else {
			return (0.001 * project.id) / 5
		}
	}
	// Multiplier for the size of the planet
	function planetSizeMultiplierByWrittenLines() {
		if (project.nbWrittenLines < 5000) {
			return 1
		} else if (project.nbWrittenLines < 10000) {
			return 1.5
		} else if (project.nbWrittenLines < 20000) {
			return 2
		} else if (project.nbWrittenLines < 30000) {
			return 2.5
		} else if (project.nbWrittenLines < 50000) {
			return 3
		} else {
			return 4
		}
	}
	// Position of the planets
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
	// Dynamic position of the planet to export on the mesh
	const dynamicPosition = new THREE.Vector3(
		planetPosition[projectId - 1].x,
		planetPosition[projectId - 1].y,
		planetPosition[projectId - 1].z
	)
	// Make the mesh rotate
	const planetPlanRef: any = useRef()
	const planetRef: any = useRef()
	useFrame(() => {
		planetRef.current.rotation.y += 0.005
		planetPlanRef.current.rotation.y += rotationFromSunMultiplier()
	})
	// Get the dynamic planet texture and the radius multiplier
	// when the component is mounted
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
				scale={[
					planetSizeMultiplierByWrittenLines(),
					planetSizeMultiplierByWrittenLines(),
					planetSizeMultiplierByWrittenLines(),
				]}
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

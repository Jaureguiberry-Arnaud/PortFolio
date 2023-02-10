import PropTypes, { InferProps } from 'prop-types'
import * as THREE from 'three'
import React, { Suspense, useEffect, useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Vector3 } from 'three'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { useNavigate } from 'react-router-dom'

function Planets({
	project,
	selectedById,
	setSelectedById,
	setProjectId,
}: InferProps<typeof Planets.propTypes>) {
	// My State
	const [PlanetTexture, setPlanetTexture] = useState()
	const [radiusMultiplierResult, setRadiusMultiplierResult] = useState(Number)
	// const [projectId, setProjectId] = useState(project.id)
	const navigate = useNavigate()
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
			return 100
		} else {
			return 100 * project.id
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
		planetPosition[project.id - 1].x,
		planetPosition[project.id - 1].y,
		planetPosition[project.id - 1].z
	)
	// Get Id of the selected planet or change him to null
	function selectPlanet() {
		if (selectedById === project.id) {
			setSelectedById(null)
			navigate(-1)
		} else {
			setSelectedById(project.id)
			setProjectId(project.id)
			navigate(`/3DPlanet/${project.id}`)
		}
	}
	const deg2rad = (degrees: number) => degrees * (Math.PI / 180)
	// Make the mesh rotate
	const planetPlanRef: any = useRef()
	const planetRef: any = useRef()
	useFrame(() => {
		planetRef.current.rotation.y += 0.002
		planetPlanRef.current.rotation.y += rotationFromSunMultiplier()
	})

	// Get the texture for the selected cube
	const CubeTextureLoader = new THREE.TextureLoader()
	const textureCube = CubeTextureLoader.load(
		'/models/CubeSelectTexture/SelectedCube.png'
	)

	useEffect(() => {
		// Reset the selected planet(to reset the default camera) when the component is mounted
		setSelectedById(null)
		setRadiusMultiplierResult(radiusMultiplier())
		// Get the dynamic planet texture and the radius multiplier
		// when the component is mounted
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
				onClick={() => setSelectedById(selectPlanet)}>
				{PlanetTexture}
				<meshStandardMaterial color={'#ffffff'} />
				{selectedById === project.id && (
					<>
						<mesh>
							<boxGeometry args={[20, 20, 20]} />
							<meshStandardMaterial
								color={0xffffff}
								map={textureCube}
								side={THREE.FrontSide}
								blending={THREE.AdditiveBlending}
								transparent
							/>
						</mesh>
						<PerspectiveCamera
							makeDefault
							rotation={[deg2rad(-30), 0, 0]}
							position={[0, 100, 150]}
						/>
					</>
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
	selectedById: PropTypes.number,
	setSelectedById: PropTypes.func.isRequired,
	setProjectId: PropTypes.func.isRequired,
}
export default Planets

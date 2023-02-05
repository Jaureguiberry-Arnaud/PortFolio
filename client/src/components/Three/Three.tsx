import {
	PerspectiveCamera,
	OrbitControls,
	Environment,
	Stars,
	ScrollControls,
	GradientTexture,
} from '@react-three/drei'
import { Material } from 'three'
import { Outlet } from 'react-router-dom'
import { useFrame } from '@react-three/fiber'
import { angleToRadians } from '../../utils/angle'
import * as THREE from 'three'
import React, { useRef, useState, Suspense } from 'react'
import PropTypes, { InferProps } from 'prop-types'
// import { ExplodingPlanetType1 } from "./ExplodingPlanetType1"
import { Sun } from './Star_of_sun'
import { Planet } from './Planets/PlanetsAsset/Planet1'
// import { PlanetHighTech } from './Planets/PlanetsAsset/Planet2'
import OrbitalRings from './OrbitalRings/OrbitalRings'
import Planets from './Planets/Planets'

function Three({
	setActivePlanetAtom,
	activePlanetAtom,
	setActivePlanetHighTech,
	activePlanetHighTech,
	allProjects,
}: InferProps<typeof Three.propTypes>) {
	// exemple of pointer event:
	// onPointerOver={(e) => console.log("over")}
	// onClick={() => setActive(!active)}

	// State
	const [active, setActive] = useState({
		planetAtom: false,
		planetHighTech: false,
	})

	// Make the mesh rotate
	const sunRef: any = useRef()
	// const planetRef: any = useRef()
	// const planetHighTechRef: any = useRef()

	useFrame(() => {
		sunRef.current.rotation.y += 0.005
		// planetRef.current.rotation.y += 0.001
		// planetHighTechRef.current.rotation.y += 0.02
	})

	// function onClick(e): ThreeEvent<MouseEvent> {
	//     console.log()
	//   }
	return (
		<>
			<Outlet />
			{/* Camera */}
			<PerspectiveCamera
				makeDefault
				position={[0, 150, 350]}
			/>

			{/*Control camera */}
			<OrbitControls enablePan={false} />

			{/* Scroll Controll Camera */}
			{/* <ScrollControls /> */}

			{/* Sun */}
			<mesh
				scale={2.5}
				ref={sunRef}
				rotation-y={Math.PI * 0.25}
				position={[0, 0, 0]}>
				<Sun />
			</mesh>
			{/* Planets */}
			{allProjects.map((project) => {
				return (
					<Planets
						key={project.id}
						project={project}
					/>
				)
			})}
			{/* Orbitals Rings */}
			{allProjects.map((project) => {
				return (
					<OrbitalRings
						key={project.id}
						project={project}
					/>
				)
			})}
			{/* Ambient Light */}
			<ambientLight args={['#ffffff', 0.3]} />

			{/* Directional light */}
			<pointLight
				args={['#ffffff', 5, 1000]}
				position={[0, 0, 0]}
				castShadow
			/>

			{/* Stars background animated */}
			<Stars
				radius={1}
				depth={400}
				count={5000}
				factor={4}
				saturation={0}
				fade
				speed={1}
			/>

			{/* Environment */}
			<Environment background>
				<mesh scale={100}>
					<sphereGeometry args={[1, 64, 64]} />
					<meshBasicMaterial
						side={THREE.BackSide}
						color='#000000'
					/>
				</mesh>
			</Environment>
		</>
	)
}

Three.propTypes = {
	setActivePlanetAtom: PropTypes.func.isRequired,
	activePlanetAtom: PropTypes.bool.isRequired,
	setActivePlanetHighTech: PropTypes.func.isRequired,
	activePlanetHighTech: PropTypes.bool.isRequired,
	allProjects: PropTypes.array.isRequired,
}
export default Three

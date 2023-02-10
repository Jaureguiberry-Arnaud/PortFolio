import {
	PerspectiveCamera,
	OrbitControls,
	Environment,
	Stars,
} from '@react-three/drei'
import { Outlet } from 'react-router-dom'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { useRef, useState } from 'react'
import PropTypes, { InferProps } from 'prop-types'
import { Sun } from './Star_of_sun'
import OrbitalRings from './OrbitalRings/OrbitalRings'
import Planets from './Planets/Planets'

function Three({
	allProjects,
	setProjectId,
}: InferProps<typeof Three.propTypes>) {
	// State
	const [selectedById, setSelectedById] = useState(Number)

	// Make the mesh rotate
	const sunRef: any = useRef()

	useFrame(() => {
		sunRef.current.rotation.y += 0.002
	})
	return (
		<>
			{/* <Outlet /> */}
			{/* Camera */}
			{selectedById === null && (
				<>
					<PerspectiveCamera
						makeDefault
						position={[0, 300, 450]}
					/>
					{/*Control camera */}
					<OrbitControls enablePan={false} />
				</>
			)}

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
						selectedById={selectedById}
						setSelectedById={setSelectedById}
						setProjectId={setProjectId}
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
	allProjects: PropTypes.array.isRequired,
	setProjectId: PropTypes.func.isRequired,
}
export default Three

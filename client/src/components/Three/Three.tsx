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
import { PlanetAtom } from './PlanetAtom'
import { PlanetHighTech } from './PlanetHighTech'
import OrbitalRings from './Rings/Rings'

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
	const planetAtomRef: any = useRef()
	const planetHighTechRef: any = useRef()

	useFrame(() => {
		sunRef.current.rotation.y += 0.005
		planetAtomRef.current.rotation.y += 0.01
		planetHighTechRef.current.rotation.y += 0.02
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
				ref={sunRef}
				rotation-y={Math.PI * 0.25}
				position={[0, 0, 0]}>
				<Sun />

				{/* Orbitals Rings */}
				{allProjects.map((project) => {
					return (
						<OrbitalRings
							key={project.id}
							project={project}
						/>
					)
				})}
				{/* 1st ring */}
				{/* <mesh rotation-x={Math.PI * 0.5}>
					<torusGeometry args={[80, 0.2, 2, 200]} />
					<meshStandardMaterial
						color={'yellow'}
						metalness={0.7}
						roughness={0.3}
					/>
				</mesh> */}

				<mesh
					ref={planetAtomRef}
					rotation-y={Math.PI * 0.25}
					position={[-80, 0, 0]}
					receiveShadow
					castShadow
					onClick={() => setActivePlanetAtom(!activePlanetAtom)}>
					<PlanetAtom />
					<meshStandardMaterial color={'#ffffff'} />
					{activePlanetAtom && (
						<Suspense fallback={null}>
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
						</Suspense>
					)}
				</mesh>

				<mesh
					ref={planetHighTechRef}
					rotation-y={Math.PI * 0.25}
					position={[80, 0, 0]}
					receiveShadow
					castShadow
					onClick={() => setActivePlanetHighTech(!activePlanetHighTech)}>
					<PlanetHighTech />
					<meshStandardMaterial color={'#ffffff'} />
					{activePlanetHighTech && (
						<Suspense fallback={null}>
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
						</Suspense>
					)}
				</mesh>
			</mesh>

			{/* Ambient Light */}
			<ambientLight args={['#ffffff', 0.3]} />

			{/* Directional light */}
			<pointLight
				args={['#ffffff', 5, 300]}
				position={[0, 0, 0]}
				castShadow
			/>

			{/* Stars background animated */}
			<Stars
				radius={10}
				depth={200}
				count={5000}
				factor={4}
				saturation={0}
				fade
				speed={1}
			/>
			{/* <Stars radius={50} depth={50} count={2500} factor={4} saturation={0} fade speed={1} /> */}

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

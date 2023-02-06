import { useFrame } from '@react-three/fiber'
import PropTypes, { InferProps } from 'prop-types'
import { useRef, useState } from 'react'

function OrbitalRings({ project }: InferProps<typeof OrbitalRings.propTypes>) {
	// My state
	const [rotationMultiplierResult, setRotationMultiplierResult] =
		useState(Number)
	const projectId = project.id

	// My functions
	// Multiplier for the radius of the ring
	function radiusMultiplier() {
		if (projectId === 1) {
			return 100
		} else {
			return 100 * projectId
		}
	}

	return (
		<mesh rotation-x={Math.PI * 0.5}>
			<torusGeometry args={[radiusMultiplier(), 0.2, 64, 200]} />
			<meshStandardMaterial
				color={'yellow'}
				metalness={0.7}
				roughness={0.3}
			/>
		</mesh>
	)
}

OrbitalRings.propTypes = {
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
export default OrbitalRings

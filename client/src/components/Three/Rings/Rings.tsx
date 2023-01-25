import PropTypes, { InferProps } from 'prop-types'
import { useEffect, useState } from 'react'

function OrbitalRings({ project }: InferProps<typeof OrbitalRings.propTypes>) {
	// My state
	const projectId = project.id

	// My functions
	// Check if the project id is odd (i want only 1 ring every 2 projects)
	function projectIdOdd() {
		return projectId % 2 === 1
	}
	// Multiplier for the radius of the ring
	function radiusMultiplier() {
		if (projectId === 1) {
			return 80
		} else {
			return (80 * projectId) / 1.5
		}
	}
	return (
		<>
			{projectIdOdd() && (
				<mesh rotation-x={Math.PI * 0.5}>
					<torusGeometry args={[radiusMultiplier(), 0.2, 2, 200]} />
					<meshStandardMaterial
						color={'yellow'}
						metalness={0.7}
						roughness={0.3}
					/>
				</mesh>
			)}
		</>
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

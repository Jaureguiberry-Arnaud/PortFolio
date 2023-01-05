import { Canvas } from '@react-three/fiber'
import { Suspense, useState, useEffect } from 'react'
import axios from 'axios'
import { Routes, Route } from 'react-router-dom'
import './App.scss'
import Three from './components/Three/Three'
import Board from './components/Board/Board'
function App() {
	// My state
	const [activePlanetAtom, setActivePlanetAtom] = useState(false)
	const [activePlanetHighTech, setActivePlanetHighTech] = useState(false)

	// My function

	// do i really have to comment this?
	function postLogPortfolio() {
		axios({
			method: 'POST',
			url: `${import.meta.env.VITE_API_URL}/logs`,
			data: {
				projectId: 1,
			},
			headers: {},
		})
			.then(function (response) {
				console.log(response)
				console.log('log sent')
			})
			.catch(function (error) {
				console.log(error)
				console.log('log not sent')
			})
	}

	useEffect(() => {}, [postLogPortfolio()])
	return (
		<>
			<Board
				setActivePlanetAtom={setActivePlanetAtom}
				activePlanetAtom={activePlanetAtom}
				setActivePlanetHighTech={setActivePlanetHighTech}
				activePlanetHighTech={activePlanetHighTech}
			/>
			<Canvas
				id='three_canvas_container'
				shadows>
				<Suspense fallback={null}>
					<Three
						setActivePlanetAtom={setActivePlanetAtom}
						activePlanetAtom={activePlanetAtom}
						setActivePlanetHighTech={setActivePlanetHighTech}
						activePlanetHighTech={activePlanetHighTech}
					/>
				</Suspense>
			</Canvas>
		</>
	)
}

export default App

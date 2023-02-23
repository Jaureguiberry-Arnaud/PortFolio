import { Canvas } from '@react-three/fiber'
import { Suspense, useState, useEffect } from 'react'
import axios from 'axios'
import { Routes, Route, Outlet } from 'react-router-dom'
import './App.scss'
import Three from './components/Three/Three'
import Board from './components/Board/Board'
import Router from './Router/Router'

function App() {
	// My state
	const [allProjects, setAllProjects] = useState([])
	const [projectId, setProjectId] = useState(null)
	const [selectedById, setSelectedById] = useState(Number)

	// My function

	// Add log when user enter on portfolio
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
				// console.log(response)
				console.log('log sent')
			})
			.catch(function (error) {
				console.log(error)
				console.log('log not sent')
			})
	}
	// Get all projects
	function getAllProject() {
		axios
			.get(`${import.meta.env.VITE_API_URL}/projects`)
			.then(function (response: any) {
				setAllProjects(response.data)
			})
			.catch(function (error) {
				console.log(error)
			})
	}
	useEffect(() => {
		getAllProject()
		postLogPortfolio()
	}, [])
	return (
		<>
			<Board
				allProjects={allProjects}
				getAllProject={getAllProject}
				projectId={projectId}
				setProjectId={setProjectId}
				selectedById={selectedById}
				setSelectedById={setSelectedById}
			/>
			<Canvas
				id='three_canvas_container'
				shadows>
				<Suspense fallback={null}>
					<Three
						allProjects={allProjects}
						setProjectId={setProjectId}
						selectedById={selectedById}
						setSelectedById={setSelectedById}
					/>
				</Suspense>
			</Canvas>
		</>
	)
}

export default App

import { Canvas } from '@react-three/fiber'
import { Suspense, useState, useEffect } from 'react'
import axios from 'axios'
import { Routes, Route } from 'react-router-dom'
import './App.scss'
import Three from './components/Three/Three'
import Board from './components/Board/Board'
function App() {
	// My state
	const [allProjects, setAllProjects] = useState([])
	const [projectId, setProjectId] = useState(null)
	const [projectById, setProjectById] = useState()
	// const [valuesProjectById, setValuesProjectById] = useState({
	// 	name: projectById?.name,
	// 	description: projectById?.description,
	// 	nbWrittenLines: projectById?.nbWrittenLines,
	// 	git_url: projectById?.git_url,
	// 	web_url: projectById?.web_url,
	// })

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
	// Get project by id
	function getProjectById() {
		axios
			.get(`${import.meta.env.VITE_API_URL}/projects/${projectId}`)
			.then(function (response: any) {
				setProjectById(response.data)
			})
			.catch(function (error) {
				console.log(error)
			})
	}
	useEffect(() => {
		getAllProject()
		postLogPortfolio()
	}, [projectId])
	return (
		<>
			<Board
				allProjects={allProjects}
				getAllProject={getAllProject}
				projectId={projectId}
				setProjectId={setProjectId}
				projectById={projectById}
				setProjectById={setProjectById}
				getProjectById={getProjectById}
				// valuesProjectById={valuesProjectById}
				// setValuesProjectById={setValuesProjectById}
			/>
			<Canvas
				id='three_canvas_container'
				shadows>
				<Suspense fallback={null}>
					<Three
						allProjects={allProjects}
						getProjectById={getProjectById}
					/>
				</Suspense>
			</Canvas>
		</>
	)
}

export default App

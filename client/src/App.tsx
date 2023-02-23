import { Canvas } from '@react-three/fiber'
import { Suspense, useState, useEffect } from 'react'
import axios from 'axios'
import { Routes, Route, Outlet } from 'react-router-dom'
import './App.scss'
import Three from './components/Three/Three'
import Board from './components/Board/Board'
import Router from './Router/Router'
import dayjs from 'dayjs'

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
	// Add fake project
	// function pushFalseProject() {
	// 	interface ProjectById {
	// 		id: number
	// 		name: string
	// 		description: string
	// 		git_url: string
	// 		web_url: string
	// 		nbWrittenLines: number
	// 		created_at: any
	// 		userId: number
	// 	}

	// 	if (allProjects.length > 8) {
	// 		const falseProject = {
	// 			id: allProjects.length + 1,
	// 			name: 'fakeProject',
	// 			nbWrittenLines: Math.round(Math.random() * (50000 - 1000) + 1000),
	// 			description: 'fakeProject',
	// 			git_url: 'https://fakeProject.com',
	// 			web_url: 'https://fakeProject.com',
	// 			created_at: dayjs(),
	// 			userId: 1,
	// 		}
	// 		const newAllProjects: any[] = []
	// 		newAllProjects.push(...allProjects)
	// 		newAllProjects.push(falseProject)
	// 		setAllProjects(newAllProjects)
	// 	} else {
	// 		return null
	// 	}
	// }
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

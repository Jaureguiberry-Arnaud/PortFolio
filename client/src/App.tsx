import { Canvas } from '@react-three/fiber'
import { Suspense, useState, useEffect } from 'react'
import axios from 'axios'
import { Routes, Route, Outlet } from 'react-router-dom'
import './App.scss'
import Three from './components/Three/Three'
import Board from './components/Board/Board'
import Router from './Router/Router'
import dayjs from 'dayjs'
import toast, { Toaster } from 'react-hot-toast'

function App() {
	// My state
	const [allProjects, setAllProjects] = useState<ProjectById[]>([])
	const [projectId, setProjectId] = useState(null)
	const [selectedById, setSelectedById] = useState(Number)

	// My interface
	interface ProjectById {
		id: number
		name: string
		description: string
		git_url: string
		web_url: string
		nbWrittenLines: number
		created_at: any
		userId: number
	}
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
	function pushFalseProject() {
		if (allProjects.length < 8) {
			const falseProject = {
				id: allProjects.length + 1,
				name: 'fakeProject',
				nbWrittenLines: Math.round(Math.random() * (50000 - 1000) + 1000),
				description: 'fakeProject',
				git_url: 'https://fakeProject.com',
				web_url: 'https://fakeProject.com',
				created_at: dayjs(),
				userId: 1,
			}
			console.log('not enough project')
			setAllProjects([...allProjects, falseProject])
			toast.success('Fake project added successfully !')
		} else {
			console.log('enough project')
			toast.error("You can't have more than 8 projects !")
			return null
		}
	}
	// delete fake project
	function resetFakeProject() {
		const newAllProjects = allProjects.filter(
			(project) => project.name !== 'fakeProject'
		)
		setAllProjects(newAllProjects)
		toast.success('Fake project deleted successfully !')
	}

	useEffect(() => {
		getAllProject()
		postLogPortfolio()
	}, [])
	return (
		<>
			<Toaster
				toastOptions={{
					success: {
						style: {
							marginTop: '3rem',
							background: '#00d0ffaf',
							color: '#e5e5e5',
							border: '0.1rem solid #00d1ff',
							borderRadius: '0.7rem',
							boxShadow: '0 0 10px 1px #00d1ff, inset 0 0 10px 1px #00d1ff',
						},
					},
					error: {
						style: {
							marginTop: '3rem',
							background: '#ff0000af',
							color: '#e5e5e5',
							border: '0.1rem solid #ff0000',
							borderRadius: '0.7rem',
							boxShadow: '0 0 10px 1px #ff0000, inset 0 0 10px 1px #ff0000',
						},
					},
				}}
			/>
			<Board
				allProjects={allProjects}
				getAllProject={getAllProject}
				projectId={projectId}
				setProjectId={setProjectId}
				selectedById={selectedById}
				setSelectedById={setSelectedById}
				pushFalseProject={pushFalseProject}
				resetFakeProject={resetFakeProject}
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

import PropTypes, { InferProps } from 'prop-types'
import { Routes, Route, Outlet } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import './Board.scss'
import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer'
import NotFound from './Main/NotFound/NotFound'
import Projects from './Main/Projects/Projects'
import ProjectById from './Main/Projects/ProjectById/ProjectById'
import Cv from './Main/Cv/Cv'
import ModalLogin from './Main/ModalLogin/ModalLogin'
import Contact from './Main/Contact/Contact'
import AboutMe from './Main/AboutMe/AboutMe'
// import News from './Main/News/News'
import Stats from './Main/Stats/Stats'
import Router from '../../Router/Router'

function Board({
	allProjects,
	getAllProject,
	projectId,
	setProjectId,
}: InferProps<typeof Board.propTypes>) {
	// state
	const [toggleAddProject, setToggleAddProject] = useState(false)
	const [disabledLoginModal, setDisabledLoginModal] = useState(false)
	const [isLogged, setIsLogged] = useState(false)
	const [token, setToken] = useState('')
	const [values, setValues] = useState({
		pseudo: '',
		password: '',
	})

	// function
	function konami(callback: () => void): void {
		let codes: number[] = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65],
			position: number = 0
		document.addEventListener('keydown', function (event: KeyboardEvent): void {
			if (event.keyCode === codes[position]) {
				position++
				if (position === codes.length) {
					position = 0
					callback()
				}
			} else {
				position = 0
			}
		})
	}
	function toggleDisabledLoginModal() {
		setDisabledLoginModal(!disabledLoginModal)
	}

	useEffect(() => {}, [konami(toggleDisabledLoginModal), allProjects?.length])
	return (
		<section className='board'>
			<Router
				token={token}
				setToken={setToken}
				isLogged={isLogged}
				setIsLogged={setIsLogged}
				toggleAddProject={toggleAddProject}
				setToggleAddProject={setToggleAddProject}
				disabledLoginModal={disabledLoginModal}
				setDisabledLoginModal={setDisabledLoginModal}
				allProjects={allProjects}
				getAllProject={getAllProject}
				projectId={projectId}
				setProjectId={setProjectId}
			/>
			{/* <Header
				disabledLoginModal={disabledLoginModal}
				setDisabledLoginModal={setDisabledLoginModal}
				isLogged={isLogged}
			/>
			{disabledLoginModal && (
				<ModalLogin
					disabledLoginModal={disabledLoginModal}
					setDisabledLoginModal={setDisabledLoginModal}
					values={values}
					setValues={setValues}
					isLogged={isLogged}
					setIsLogged={setIsLogged}
					token={token}
					setToken={setToken}
				/>
			)}

			<Main
				token={token}
				setToken={setToken}
				allProjects={allProjects}
				getAllProject={getAllProject}
				projectId={projectId}
				setProjectId={setProjectId}
				projectById={projectById}
				setProjectById={setProjectById}
				getProjectById={getProjectById}
			/>

			<Footer /> */}
		</section>
		// <Routes>
		// 	<Route
		// 		path='/'
		// 		element={
		// 			<section className='board'>
		// 				<Header
		// 					disabledLoginModal={disabledLoginModal}
		// 					setDisabledLoginModal={setDisabledLoginModal}
		// 					isLogged={isLogged}
		// 				/>
		// 				{disabledLoginModal && (
		// 					<ModalLogin
		// 						disabledLoginModal={disabledLoginModal}
		// 						setDisabledLoginModal={setDisabledLoginModal}
		// 						values={values}
		// 						setValues={setValues}
		// 						isLogged={isLogged}
		// 						setIsLogged={setIsLogged}
		// 						token={token}
		// 						setToken={setToken}
		// 					/>
		// 				)}

		// 				<Main
		// 					token={token}
		// 					setToken={setToken}
		// 					allProjects={allProjects}
		// 					getAllProject={getAllProject}
		// 					projectId={projectId}
		// 					setProjectId={setProjectId}
		// 					projectById={projectById}
		// 					setProjectById={setProjectById}
		// 					getProjectById={getProjectById}
		// 				/>

		// 				<Footer />
		// 			</section>
		// 		}>
		// 		{/* <Route
		// 			path='projects'
		// 			element={
		// 				<Projects
		// 					allProjects={allProjects}
		// 					getAllProject={getAllProject}
		// 					projectId={projectId}
		// 					setProjectId={setProjectId}
		// 					projectById={projectById}
		// 					setProjectById={setProjectById}
		// 					getProjectById={getProjectById}
		// 					token={token}
		// 					setToken={setToken}
		// 				/>
		// 			}
		// 		/> */}
		// 		<Route
		// 			path='projects/:id'
		// 			element={
		// 				<ProjectById
		// 					token={token}
		// 					setToken={setToken}
		// 					projectId={projectId}
		// 					setProjectId={setProjectId}
		// 					projectById={projectById}
		// 					setProjectById={setProjectById}
		// 					getProjectById={getProjectById}
		// 					getAllProject={getAllProject}
		// 				/>
		// 			}
		// 		/>
		// 		<Route
		// 			path='stats'
		// 			element={<Stats />}
		// 		/>
		// 		<Route
		// 			path='cv'
		// 			element={<Cv />}
		// 		/>
		// 		<Route
		// 			path='contact'
		// 			element={<Contact />}
		// 		/>
		// 		<Route
		// 			path='about-me'
		// 			element={<AboutMe />}
		// 		/>
		// 	</Route>
		// 	<Route
		// 		path='*'
		// 		element={<NotFound />}
		// 	/>
		// </Routes>
	)
}

Board.propTypes = {
	allProjects: PropTypes.array.isRequired,
	getAllProject: PropTypes.func.isRequired,
	projectId: PropTypes.number,
	setProjectId: PropTypes.func.isRequired,
}

export default Board

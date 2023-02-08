import PropTypes, { InferProps } from 'prop-types'
import { Suspense, useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import axios from 'axios'

import './Main.scss'
import ModalPlanetById from './Projects/ProjectById/ProjectById'
import ModalLogin from './ModalLogin/ModalLogin'
import Cv from './Cv/Cv'
import Profil from './Profil/Profil'
import Projects from './Projects/Projects'
import NotFound from './NotFound/NotFound'
import Contact from './Contact/Contact'
import AboutMe from './AboutMe/AboutMe'
import Stats from './Stats/Stats'
import News from './News/News'
import ProjectById from './Projects/ProjectById/ProjectById'

function Main({
	token,
	setToken,
	allProjects,
	getAllProject,
	projectId,
	setProjectId,
	projectById,
	setProjectById,
	getProjectById,
}: InferProps<typeof Main.propTypes>) {
	// My state
	const [disabledNewsModal, setDisabledNewsModal] = useState(true)

	useEffect(() => {
		getAllProject()
	}, [allProjects?.length])
	return (
		<main className='main'>
			<Routes>
				<Route
					path='/'
					element={
						disabledNewsModal && (
							<News
								disabledNewsModal={disabledNewsModal}
								setDisabledNewsModal={setDisabledNewsModal}
							/>
						)
					}
				/>

				<Route
					path='projects'
					element={
						<Projects
							allProjects={allProjects}
							token={token}
							setToken={setToken}
							getAllProject={getAllProject}
							projectId={projectId}
							setProjectId={setProjectId}
							projectById={projectById}
							setProjectById={setProjectById}
							getProjectById={getProjectById}
						/>
					}
				/>
				<Route
					path='projects/:id'
					element={
						<ProjectById
							token={token}
							setToken={setToken}
							projectId={projectId}
							setProjectId={setProjectId}
							projectById={projectById}
							setProjectById={setProjectById}
							getProjectById={getProjectById}
							getAllProject={getAllProject}
						/>
					}
				/>
				<Route
					path='stats'
					element={<Stats />}
				/>
				<Route
					path='cv'
					element={<Cv />}
				/>
				<Route
					path='contact'
					element={<Contact />}
				/>
				<Route
					path='about-me'
					element={<AboutMe />}
				/>
			</Routes>
		</main>
	)
}

Main.propTypes = {
	token: PropTypes.string.isRequired,
	setToken: PropTypes.func.isRequired,
	allProjects: PropTypes.array.isRequired,
	getAllProject: PropTypes.func.isRequired,
	projectId: PropTypes.number,
	setProjectId: PropTypes.func.isRequired,
	projectById: PropTypes.shape({
		id: PropTypes.number,
		name: PropTypes.string,
		nbWrittenLines: PropTypes.number,
		git_url: PropTypes.string,
		web_url: PropTypes.string,
		description: PropTypes.string,
		created_at: PropTypes.string,
	}),
	setProjectById: PropTypes.func.isRequired,
	getProjectById: PropTypes.func.isRequired,
	valuesProjectById: PropTypes.shape({
		name: PropTypes.string,
		nbWrittenLines: PropTypes.number,
		git_url: PropTypes.string,
		web_url: PropTypes.string,
		description: PropTypes.string,
	}),
}
export default Main

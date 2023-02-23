import { createBrowserRouter, Route, Routes } from 'react-router-dom'
import PropTypes, { InferProps } from 'prop-types'

import ErrorPage from '../utils/error-page'
import App from '../App'
import Header from '../components/Board/Header/Header'
import Main from '../components/Board/Main/Main'
import Footer from '../components/Board/Footer/Footer'
import Projects from '../components/Board/Main/Projects/Projects'
import AddProject from '../components/Board/Main/Projects/AddProject/AddProject'
import ProjectById from '../components/Board/Main/Projects/ProjectById/ProjectById'
import Stats from '../components/Board/Main/Stats/Stats'
import Cv from '../components/Board/Main/Cv/Cv'
import Contact from '../components/Board/Main/Contact/Contact'
import AboutMe from '../components/Board/Main/AboutMe/AboutMe'

function Router({
	token,
	setToken,
	isLogged,
	setIsLogged,
	toggleAddProject,
	setToggleAddProject,
	disabledLoginModal,
	setDisabledLoginModal,
	allProjects,
	getAllProject,
	projectId,
	setProjectId,
	selectedById,
	setSelectedById,
}: InferProps<typeof Router.propTypes>) {
	return (
		<Routes>
			<Route
				path='/'
				element={
					<>
						<Header
							isLogged={isLogged}
							disabledLoginModal={disabledLoginModal}
							setDisabledLoginModal={setDisabledLoginModal}
						/>
						<Main />
						<Footer />
					</>
				}
				errorElement={<ErrorPage />}>
				<Route
					path='projects'
					element={
						<Projects
							token={token}
							setToken={setToken}
							allProjects={allProjects}
							getAllProject={getAllProject}
							projectId={projectId}
							setProjectId={setProjectId}
							toggleAddProject={toggleAddProject}
							setToggleAddProject={setToggleAddProject}
						/>
					}>
					<Route errorElement={<ErrorPage />} />
					<Route
						path=':projectId'
						element={
							<ProjectById
								token={token}
								setToken={setToken}
								projectId={projectId}
								setProjectId={setProjectId}
								getAllProject={getAllProject}
								selectedById={selectedById}
								setSelectedById={setSelectedById}
							/>
						}
					/>
				</Route>
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
				<Route
					path='3DPlanet/:planetId'
					element={
						<ProjectById
							token={token}
							setToken={setToken}
							projectId={projectId}
							setProjectId={setProjectId}
							getAllProject={getAllProject}
							selectedById={selectedById}
							setSelectedById={setSelectedById}
						/>
					}
				/>
			</Route>
		</Routes>
	)
}

Router.propTypes = {
	token: PropTypes.string.isRequired,
	setToken: PropTypes.func.isRequired,
	isLogged: PropTypes.bool.isRequired,
	setIsLogged: PropTypes.func.isRequired,
	toggleAddProject: PropTypes.bool.isRequired,
	setToggleAddProject: PropTypes.func.isRequired,
	disabledLoginModal: PropTypes.bool.isRequired,
	setDisabledLoginModal: PropTypes.func.isRequired,
	allProjects: PropTypes.array.isRequired,
	getAllProject: PropTypes.func.isRequired,
	projectId: PropTypes.number,
	setProjectId: PropTypes.func.isRequired,
	selectedById: PropTypes.number,
	setSelectedById: PropTypes.func.isRequired,
}
export default Router

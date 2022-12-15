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

function Main({
	activePlanetAtom,
	setActivePlanetAtom,
	activePlanetHighTech,
	setActivePlanetHighTech,
	disabledLoginModal,
	setDisabledLoginModal,
	values,
	setValues,
	isLogged,
	setIsLogged,
	token,
	setToken,
}: InferProps<typeof Main.propTypes>) {
	// My state
	const [allProjects, setAllProjects] = useState([])

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
	function getAllProject() {
		axios
			.get(`http://localhost:3001/projects`)
			.then(function (response: any) {
				setAllProjects(response.data)
			})
			.catch(function (error) {
				console.log(error)
			})
	}
	useEffect(() => {
		getAllProject()
	}, [konami(toggleDisabledLoginModal), allProjects?.length])
	return (
		<main className='main'>
			<Routes>
				<Route
					path='/'
					element={
						disabledLoginModal && (
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
						)
					}></Route>

				{/* <Route path='/profil' element={<Profil />} /> */}

				<Route
					path='projects'
					element={
						<Projects
							allProjects={allProjects}
							token={token}
							setToken={setToken}
							getAllProject={getAllProject}
						/>
					}
				/>

				<Route
					path='cv'
					element={<Cv />}
				/>

				{/* {activePlanetAtom || activePlanetHighTech && ()} */}
				{/* Route 404 */}
				{/* <Route path="*" element={<NotFound />} /> */}
			</Routes>
		</main>
	)
}

Main.propTypes = {
	setActivePlanetAtom: PropTypes.func.isRequired,
	activePlanetAtom: PropTypes.bool.isRequired,
	setActivePlanetHighTech: PropTypes.func.isRequired,
	activePlanetHighTech: PropTypes.bool.isRequired,
	disabledLoginModal: PropTypes.bool.isRequired,
	setDisabledLoginModal: PropTypes.func.isRequired,
	values: PropTypes.shape({
		pseudo: PropTypes.string.isRequired,
		password: PropTypes.string.isRequired,
	}).isRequired,
	setValues: PropTypes.func.isRequired,
	isLogged: PropTypes.bool.isRequired,
	setIsLogged: PropTypes.func.isRequired,
	token: PropTypes.string.isRequired,
	setToken: PropTypes.func.isRequired,
}
export default Main

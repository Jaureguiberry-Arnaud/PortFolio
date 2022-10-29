import PropTypes, { InferProps } from 'prop-types'
import { Suspense, useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import NotFound from './NotFound/NotFound'

import './Main.scss'
import ModalPlanetById from './ModalPlanetById/ModalPlanetById'
import ModalLogin from './ModalLogin/ModalLogin'
import Profil from './Profil/Profil'
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
	useEffect(() => {
		
	}, [konami(toggleDisabledLoginModal)])
	return (
    <main className='main'>
      <Routes>
        <Route path='/' element={ disabledLoginModal &&
            <ModalLogin
              disabledLoginModal={disabledLoginModal}
              setDisabledLoginModal={setDisabledLoginModal}
              values={values}
              setValues={setValues}
              isLogged={isLogged}
              setIsLogged={setIsLogged}
              token={token}
              setToken={setToken}
            /> } />

        {/* <Route path='/profil' element={<Profil />} /> */}

        <Route path="projects" element={<h1>Route Projects</h1>}>
          <Route path=":projectId" element={<ModalPlanetById />} />
          <Route path="new" element={ <h1>Route new project</h1> } />          
        </Route>
        {/* {activePlanetAtom || activePlanetHighTech && ()} */}
        {/* Route 404 */}
        <Route path="*" element={<NotFound />} />     
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
	token: PropTypes.shape({
		userId: PropTypes.number.isRequired,
		pseudo: PropTypes.string.isRequired,
		role: PropTypes.string.isRequired,
		iat: PropTypes.number.isRequired,
		exp: PropTypes.number.isRequired,
	}),
	setToken: PropTypes.func.isRequired,
}
export default Main

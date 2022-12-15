import PropTypes, { InferProps } from 'prop-types'
import { useState } from 'react'
import axios from 'axios'
import './Board.scss'
import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer'

function Board({
	setActivePlanetAtom,
	activePlanetAtom,
	setActivePlanetHighTech,
	activePlanetHighTech,
}: InferProps<typeof Board.propTypes>) {
	// state
	const [disabledLoginModal, setDisabledLoginModal] = useState(false)
  const [isLogged, setIsLogged] = useState(false)
	const [token, setToken] = useState('')
	const [values, setValues] = useState({
		pseudo: '',
		password: '',
	})

	return (   
      <section className='board'>
				<Header
					disabledLoginModal={disabledLoginModal}
          setDisabledLoginModal={setDisabledLoginModal}
					isLogged={isLogged}
				/>

				<Main
					activePlanetAtom={activePlanetAtom}
					setActivePlanetAtom={setActivePlanetAtom}
					activePlanetHighTech={activePlanetHighTech}
					setActivePlanetHighTech={setActivePlanetHighTech}
					disabledLoginModal={disabledLoginModal}
					setDisabledLoginModal={setDisabledLoginModal}
					values={values}
					setValues={setValues}
					isLogged={isLogged}
					setIsLogged={setIsLogged}
					token={token}
					setToken={setToken}
				/>

				<Footer />
			</section>
	)
}

Board.propTypes = {
	activePlanetAtom: PropTypes.bool.isRequired,
	setActivePlanetAtom: PropTypes.func.isRequired,
	activePlanetHighTech: PropTypes.bool.isRequired,
	setActivePlanetHighTech: PropTypes.func.isRequired,
}

export default Board

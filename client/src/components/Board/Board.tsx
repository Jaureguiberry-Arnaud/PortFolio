import PropTypes, { InferProps } from 'prop-types'
import { useState, useEffect } from 'react'
import './Board.scss'
import ModalLogin from './Main/ModalLogin/ModalLogin'
import Router from '../../Router/Router'

function Board({
	allProjects,
	getAllProject,
	projectId,
	setProjectId,
	selectedById,
	setSelectedById,
	pushFalseProject,
	resetFakeProject,
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
				selectedById={selectedById}
				setSelectedById={setSelectedById}
				pushFalseProject={pushFalseProject}
				resetFakeProject={resetFakeProject}
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
		</section>
	)
}

Board.propTypes = {
	allProjects: PropTypes.array.isRequired,
	getAllProject: PropTypes.func.isRequired,
	projectId: PropTypes.number,
	setProjectId: PropTypes.func.isRequired,
	selectedById: PropTypes.number,
	setSelectedById: PropTypes.func.isRequired,
	pushFalseProject: PropTypes.func.isRequired,
	resetFakeProject: PropTypes.func.isRequired,
}

export default Board

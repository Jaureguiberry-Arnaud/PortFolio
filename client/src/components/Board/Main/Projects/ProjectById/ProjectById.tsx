import './ProjectById.scss'
import PropTypes, { InferProps } from 'prop-types'
import { useState, useEffect, Suspense } from 'react'
import { useNavigate } from 'react-router-dom'
import axios, { AxiosResponse } from 'axios'
import jwt_decode from 'jwt-decode'

import iconCloseModal from '../../../../../assets/closeModal.png'
import iconDelete from '../../../../../assets/iconDelete.png'
import iconUpdate from '../../../../../assets/iconUpdate.png'
import iconWarning from '../../../../../assets/warningOrange.png'

function ProjectById({
	projectId,
	setProjectId,
	token,
	setToken,
	getAllProject,
}: InferProps<typeof ProjectById.propTypes>) {
	// My state
	const [projectById, setProjectById] = useState<ProjectById>()
	const [status, setStatus] = useState<null | string>(null)
	const [errorMessage, setErrorMessage] = useState()
	const [errorToggle, setErrorToggle] = useState<AxiosResponse | null | void>(
		null
	)
	const [toggleUpdate, setToggleUpdate] = useState(false)
	const [values, setValues] = useState<any>({
		name: projectById?.name,
		description: projectById?.description,
		nbWrittenLines: projectById?.nbWrittenLines,
		git_url: projectById?.git_url,
		web_url: projectById?.web_url,
	})

	const navigate = useNavigate()

	function onChange(e: { target: { name: any; value: any } }) {
		setValues({ ...values, [e.target.name]: e.target.value })
	}
	function getProjectById() {
		axios
			.get(`http://localhost:3001/projects/${projectId}`)
			.then(function (response: any) {
				setProjectById(response.data)
				setValues({
					name: response.data.name,
					description: response.data.description,
					git_url: response.data.git_url,
					web_url: response.data.web_url,
				})
			})
			.catch(function (error) {
				console.log(error)
			})
	}
	function onClickCloseModalProjectById(event: any) {
		event.preventDefault()
		setProjectId(null)
	}
	function onClickCloseModalSuccess(event: any) {
		event.preventDefault()
		setStatus(null)
		setToggleUpdate(!toggleUpdate)
	}
	function onClickDeleteById() {
		let tokenDecoded
		if (token) {
			tokenDecoded = jwt_decode<TokenDecoded>(token)
		}
		axios({
			method: 'DELETE',
			url: `http://localhost:3001/projects/${projectId}`,

			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
			validateStatus: function (status) {
				return status < 500 // Resolve only if the status code is less than 500
			},
		})
			.then(function (response) {
				if (response.status === 401) {
					setErrorToggle(response)
				} else {
					setStatus('Deleted successful')
					getAllProject()
				}
			})
			.catch(function (error) {
				setErrorMessage(error.message)
				console.error('There was an error!', error)
			})
	}
	function onClickUpdateById(event: any) {
		event.preventDefault()
		setToggleUpdate(true)
	}
	function onClickCloseUpdate() {
		setToggleUpdate(false)
	}
	function onClickCloseWarning(event: any) {
		setErrorToggle(null)
	}
	function handleSubmitUpdate(event: any) {
		event.preventDefault()
		let tokenDecoded
		if (token) {
			tokenDecoded = jwt_decode<TokenDecoded>(token)
		}
		axios({
			method: 'PUT',
			url: `http://localhost:3001/projects/${projectId}`,
			data: {
				name: values.name,
				description: values.description,
				nbWrittenLines: values.nbWrittenLines,
				git_url: values.git_url,
				web_url: values.web_url,
				userId: tokenDecoded?.userId,
			},
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
			validateStatus: function (status) {
				return status < 500 // Resolve only if the status code is less than 500
			},
		})
			.then(function (response) {
				if (response.status === 401) {
					setErrorToggle(response)
				} else {
					setStatus('Updated successful')
					getAllProject()
				}
			})
			.catch(function (error) {
				setErrorMessage(error.message)
				console.error('There was an error!', error)
			})
	}

	interface TokenDecoded {
		userId: number
		pseudo: string
		role: string
	}
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
	useEffect(() => {
		getProjectById()
	}, [projectId])
	return (
		<>
			{errorToggle ? (
				<section className='projectById_unauthorized'>
					<img
						className='projectById_unauthorized-warning'
						src={iconWarning}
						alt='warning icon'
					/>
					<div className='projectById_unauthorized-div'>
						<h2 className='projectById_unauthorized-title'>StatusCode:</h2>
						<p className='projectById_unauthorized-content'>
							{errorToggle.status}
						</p>
					</div>
					<div className='projectById_unauthorized-div'>
						<h2 className='projectById_unauthorized-title'>StatusPost:</h2>
						<p className='projectById_unauthorized-content'>
							{errorToggle.statusText}
						</p>
					</div>
					<div className='projectById_unauthorized-div'>
						<h2 className='projectById_unauthorized-title'>Request:</h2>
						<p className='projectById_unauthorized-content'>Failed</p>
					</div>
					<button
						className='projectById_unauthorized-btn'
						onClick={onClickCloseWarning}>
						Close
					</button>
				</section>
			) : (
				<section className='projectById'>
					{status && (
						<section className='projectById_deleteSuccess'>
							<h1
								id='anchor-success'
								className='projectById_deleteSuccess-title'>
								{status}
							</h1>
							{!toggleUpdate ? (
								<button
									className='projectById_deleteSuccess-btn'
									onClick={onClickCloseModalSuccess}>
									Close
								</button>
							) : (
								<button
									className='projectById_deleteSuccess-btn'
									onClick={onClickCloseModalProjectById}>
									Close
								</button>
							)}
						</section>
					)}

					{toggleUpdate ? (
						<Suspense fallback={null}>
							<form
								className='projectById_form'
								onSubmit={handleSubmitUpdate}>
								<img
									className='projectById-closeModal'
									src={iconCloseModal}
									alt='icon Close modal'
									onClick={onClickCloseUpdate}></img>

								<h1 className='projectById_form-title'>Update Project</h1>

								<label
									className='projectById_form-label'
									htmlFor='name'>
									Project Name:
								</label>
								<input
									type='text'
									className='projectById_form-input'
									name='name'
									id='name'
									value={values.name}
									onChange={onChange}
									required
								/>

								<h2 className='projectById-title'>Owner:</h2>
								<p className='projectById-content'>Jrgb</p>

								<h2 className='projectById-title'>Created here:</h2>
								<p className='projectById-content'>{projectById?.created_at}</p>

								<label
									className='projectById_form-label'
									htmlFor='nbWrittenLines'>
									Number of line written:
								</label>
								<input
									type='number'
									name='nbWrittenLines'
									className='projectById_form-input'
									value={values.nbWrittenLines}
									onChange={onChange}
									required></input>

								<label
									className='projectById_form-label'
									htmlFor='git_url'>
									Git Url:
								</label>
								<input
									type='url'
									pattern='https://.*'
									name='git_url'
									className='projectById_form-input'
									value={values.git_url}
									onChange={onChange}
								/>

								<label
									className='projectById_form-label'
									htmlFor='web_url'>
									Web Url:
								</label>
								<input
									type='url'
									pattern='https://.*'
									name='web_url'
									className='projectById_form-input'
									value={values.web_url}
									onChange={onChange}
								/>

								<label
									className='projectById_form-label'
									htmlFor='description'>
									Description:
								</label>
								<textarea
									name='description'
									className='projectById_form-input'
									value={values.description}
									onChange={onChange}
								/>

								<button className='projectById_form-btn'>Update</button>
							</form>
						</Suspense>
					) : (
						<>
							<img
								className='projectById-closeModal'
								src={iconCloseModal}
								alt='icon Close modal'
								onClick={onClickCloseModalProjectById}></img>
							<img
								className='projectById-delete'
								src={iconDelete}
								alt='icon Delete'
								onClick={onClickDeleteById}></img>
							<img
								className='projectById-update'
								src={iconUpdate}
								alt='icon Update'
								onClick={onClickUpdateById}></img>
							<h1 className='projectById-name'>{projectById?.name}</h1>
							<h2 className='projectById-title'>Owner:</h2>
							<p className='projectById-content'>Jrgb</p>
							<h2 className='projectById-title'>Created here:</h2>
							<p className='projectById-content'>{projectById?.created_at}</p>
							<h2 className='projectById-title'>Number of line written:</h2>
							<p className='projectById-content'>
								{projectById?.nbWrittenLines}
							</p>
							<h2 className='projectById-title'>Git Url:</h2>
							<a
								href={projectById?.git_url}
								target='_blank'
								className='projectById-content'>
								{projectById?.git_url}
							</a>
							<h2 className='projectById-title'>Web Url:</h2>
							<a
								href={projectById?.web_url}
								target='_blank'
								className='projectById-content'>
								{projectById?.web_url}
							</a>
							<h2 className='projectById-title'>Description:</h2>
							<p className='projectById-content'>{projectById?.description}</p>
						</>
					)}
				</section>
			)}
		</>
	)
}
ProjectById.propTypes = {
	projectId: PropTypes.number.isRequired,
	setProjectId: PropTypes.func.isRequired,
	token: PropTypes.string.isRequired,
	setToken: PropTypes.func.isRequired,
	getAllProject: PropTypes.func.isRequired,
}
export default ProjectById

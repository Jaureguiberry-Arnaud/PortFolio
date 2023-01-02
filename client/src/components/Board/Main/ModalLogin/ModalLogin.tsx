import PropTypes, { InferProps } from 'prop-types'
import { useEffect, useState } from 'react'
import axios from 'axios'
import jwt_decode from 'jwt-decode'

import './ModalLogin.scss'
import iconCloseModal from '../../../../assets/closeModal.png'

function ModalLogin({
	disabledLoginModal,
	setDisabledLoginModal,
	values,
	setValues,
	isLogged,
	setIsLogged,
	token,
	setToken,
}: InferProps<typeof ModalLogin.propTypes>) {
	// token typage
	interface MyToken {
		userId: number
		pseudo: string
		role: string
		exp: number
	}
	// Function to login
	function login() {
		axios
			.post(`http://localhost:3001/login`, {
				pseudo: values.pseudo,
				password: values.password,
			})
			.then(function (response: any) {
				setToken(response.data)
				setIsLogged(true)
			})
			.catch(function (error) {
				console.log(error)
			})
	}
	function onClick() {
		setDisabledLoginModal(!disabledLoginModal)
	}
	// catch user keyboard on input value
	const onChange = (e: { target: { name: string; value: string } }) => {
		setValues({ ...values, [e.target.name]: e.target.value })
	}
	// when we submit form
	const handleSubmit = (e: any) => {
		e.preventDefault()
		login()
	}

	useEffect(() => {}, [])
	return (
		<>
			{isLogged ? (
				<section className='logout'>
					<img
						className='logout-close-modal'
						src={iconCloseModal}
						alt='icon Close modal'
						onClick={onClick}></img>
					<h1> Do you want logout?</h1>
					<button className='logout-btn'> Logout </button>
				</section>
			) : (
				<section className='login-container'>
					<div className='login'>
						<img
							className='login-close-modal'
							src={iconCloseModal}
							alt='icon Close modal'
							onClick={onClick}></img>
						<form
							className='login_form'
							onSubmit={handleSubmit}>
							<h1 className='login_form-title'>Admin Dashboard</h1>
							<input
								type='text'
								className='login_form-input'
								placeholder='Pseudo'
								name='pseudo'
								value={values.pseudo}
								onChange={onChange}></input>
							<input
								type='password'
								className='login_form-input'
								placeholder='Password'
								name='password'
								value={values.password}
								onChange={onChange}></input>
							<button
								type='submit'
								className='login_form-btn'>
								Login
							</button>
						</form>
					</div>
				</section>
			)}
		</>
	)
}

ModalLogin.propTypes = {
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
export default ModalLogin

import './NotFound.scss'

import iconAlert from '../../../../assets/iconAlert.png'

function NotFound() {
	function onClick() {
		window.history.back()
	}
	return (
		<section className='notFound'>
			<img
				className='notFound-iconAlert--1'
				src={iconAlert}
				alt='icon alert'
			/>
			<img
				className='notFound-iconAlert--2'
				src={iconAlert}
				alt='icon alert'
			/>
			<img
				className='notFound-iconAlert--3'
				src={iconAlert}
				alt='icon alert'
			/>
			<img
				className='notFound-iconAlert--4'
				src={iconAlert}
				alt='icon alert'
			/>
			<h1 className='notFound-title'>404</h1>
			<h2 className='notFound-subtitle'>Page not found</h2>
			<button
				className='notFound-button'
				onClick={onClick}>
				Go back
			</button>
		</section>
	)
}

export default NotFound

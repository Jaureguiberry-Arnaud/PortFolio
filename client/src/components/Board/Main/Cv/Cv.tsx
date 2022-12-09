import './Cv.scss'

import cvProfilePicture from '../../../../assets/cvProfilePicture.png'

function Cv() {
	return (
		<section className='cv'>
			<img
				className='cv-profilePicture'
				src={cvProfilePicture}
				alt='cv profile picture'
			/>
			<h1 className='cv-title'>Dev Fullstack JS Web & WebMobile</h1>
			<section className='cv_contact'>
				<h2 className='cv_contact-title'>Contact</h2>
				<div className='cv_contact_div'>
					<h3 className='cv_contact_div-title'>Adress:</h3>
					<p className='cv_contact_div-text'>Mazerolles (64), France</p>
				</div>
				<div className='cv_contact_div'>
					<h3 className='cv_contact_div-title'>Phone:</h3>
					<p className='cv_contact_div-text'>+33 7 79 82 86 25</p>
				</div>
				<div className='cv_contact_div'>
					<h3 className='cv_contact_div-title'>Email:</h3>
					<p className='cv_contact_div-text'>jaureguiberry.arnaud@gmail.com</p>
				</div>
				<div className='cv_contact_div'>
					<h3 className='cv_contact_div-title'>Age:</h3>
					<p className='cv_contact_div-text'>26 ans</p>
				</div>
				<div className='cv_contact_div'>
					<h3 className='cv_contact_div-title'>Situation:</h3>
					<p className='cv_contact_div-text'>Pacsés, 2 enfants</p>
				</div>
				<div className='cv_contact_div'>
					<h3 className='cv_contact_div-title'>Permis:</h3>
					<p className='cv_contact_div-text'>B/A, Véhiculé</p>
				</div>
				<div className='cv_contact_div'>
					<h3 className='cv_contact_div-title'>LinkedIn:</h3>
					<a
						className='cv_contact_div-text'
						href='https://www.linkedin.com/in/arnaud-jaureguiberry/'
						target='_blank'>
						https://www.linkedin.com/in/arnaud-jaureguiberry/
					</a>
				</div>
				<div className='cv_contact_div'>
					<h3 className='cv_contact_div-title'>GitHub:</h3>
					<a
						className='cv_contact_div-text'
						href='https://github.com/Jaureguiberry-Arnaud'
						target='_blank'>
						https://github.com/Jaureguiberry-Arnaud
					</a>
				</div>
			</section>
		</section>
	)
}

export default Cv

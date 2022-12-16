import './Cv.scss'

import cvProfilePicture from '../../../../assets/cvProfilePicture.png'
import cv from '../../../../assets/cv/CV_Arnaud_Jaureguiberry.pdf'

function Cv() {
	return (
		<section className='cv'>
			<div className='cv_profile'>
				<img
					className='cv_profile-picture'
					src={cvProfilePicture}
					alt='cv profile picture'
				/>
				<a
					className='cv_profile-cv'
					href={cv}
					download>
					Download my CV in PDF
				</a>
			</div>
			<h1 className='cv-title'>Dev Fullstack JS Web & WebMobile</h1>
			<section className='cv_contact'>
				<h2 className='cv_contact-title'>Contact</h2>
				<div className='cv_contact_div'>
					<h3 className='cv_contact_div-title'>Address:</h3>
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
					<p className='cv_contact_div-text'>26</p>
				</div>
				<div className='cv_contact_div'>
					<h3 className='cv_contact_div-title'>Situation:</h3>
					<p className='cv_contact_div-text'>PACS, 2 children</p>
				</div>
				<div className='cv_contact_div'>
					<h3 className='cv_contact_div-title'>Driving Licence</h3>
					<p className='cv_contact_div-text'>B/A</p>
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
			<section className='cv_skills'>
				<h2 className='cv_skills-title'>Skills</h2>
				<div className='cv_skills_div'>
					<h3 className='cv_skills_div-title'>Project Management:</h3>
					<div className='cv_skills_div_list'>
						<p className='cv_skills_div_list-item'>Agile Methodology</p>
						<p className='cv_skills_div_list-item'>Scrum</p>
						<p className='cv_skills_div_list-item'>Kanban</p>
						<p className='cv_skills_div_list-item'>Git</p>
						<p className='cv_skills_div_list-item'>WireFrame</p>
						<p className='cv_skills_div_list-item'>User Stories</p>
						<p className='cv_skills_div_list-item'>MCD</p>
						<p className='cv_skills_div_list-item'>MLD</p>
						<p className='cv_skills_div_list-item'>MPD</p>
					</div>
				</div>
				<div className='cv_skills_div'>
					<h3 className='cv_skills_div-title'>Frontend:</h3>
					<div className='cv_skills_div_list'>
						<p className='cv_skills_div_list-item'>HTML5</p>
						<p className='cv_skills_div_list-item'>CSS3</p>
						<p className='cv_skills_div_list-item'>SASS</p>
						<p className='cv_skills_div_list-item'>JavaScript</p>
						<p className='cv_skills_div_list-item'>TypeScript</p>
						<p className='cv_skills_div_list-item'>React</p>
					</div>
				</div>
				<div className='cv_skills_div'>
					<h3 className='cv_skills_div-title'>Backend:</h3>
					<div className='cv_skills_div_list'>
						<p className='cv_skills_div_list-item'>NodeJS</p>
						<p className='cv_skills_div_list-item'>Express</p>
						<p className='cv_skills_div_list-item'>PostgreSQL</p>
						<p className='cv_skills_div_list-item'>JavaScript</p>
						<p className='cv_skills_div_list-item'>TypeScript</p>
						<p className='cv_skills_div_list-item'>TypeORM</p>
					</div>
				</div>
			</section>
			<section className='cv_experiences'>
				<h2 className='cv_experiences-title'>Experiences:</h2>
				<div className='cv_experiences_expe'>
					<h3 className='cv_experiences_expe-title'>
						Developer Web & WebMobile FullStack JS
					</h3>
					<h4 className='cv_experiences_expe-subtitle'>
						PortFolio / Personnal Project / Sept 2022-Today
					</h4>
					<p className='cv_experiences_expe-text'>
						-Application design (folder in my Github portfolio project){' '}
					</p>
					<p className='cv_experiences_expe-text'>
						{' '}
						-Backend development with NodeJs, Express, TypeScript, TypeORM and
						PostgreSQL.
					</p>
					<p className='cv_experiences_expe-text'>
						{' '}
						-Frontend development with React, ThreeJS, Three React Fiber, Three
						React Drei, TypeScript, Axios, SASS, HTML5 and CSS3.
					</p>
				</div>
				<div className='cv_experiences_expe'>
					<h3 className='cv_experiences_expe-title'>
						Developer Web & WebMobile FullStack JS
					</h3>
					<h4 className='cv_experiences_expe-subtitle'>
						Graduation Project / June 2022 (1 month)
					</h4>
					<p className='cv_experiences_expe-text'>
						-Production of the Front of an application in a team of 4 on a
						deadline of 1 month to complete the intensive training of Web &
						Webmobile Developer Fullstack JS.
					</p>

					<p className='cv_experiences_expe-text'>
						-This application was available here:{' '}
						<a href='https://www.bibino.fr'>https://www.bibino.fr</a>
					</p>
					<p className='cv_experiences_expe-text'>
						But the api was done, you can also access repo here:
					</p>
					<p className='cv_experiences_expe-text'>
						-Front:{' '}
						<a href='https://github.com/O-clock-Blob/projet-9-Bibino-front'>
							{' '}
							https://github.com/O-clock-Blob/projet-9-Bibino-front
						</a>
					</p>
					<p className='cv_experiences_expe-text'>
						-Back:{' '}
						<a href=' https://github.com/O-clock-Blob/projet-9-Bibino-back'>
							{' '}
							https://github.com/O-clock-Blob/projet-9-Bibino-back
						</a>
					</p>
				</div>
			</section>
			<section className='cv_education'>
				<h2 className='cv_education-title'>Training Resume:</h2>
				<div className='cv_education_training'>
					<h3 className='cv_education_training-title'>
						{' '}
						O'clock School / Developer FullStack JS Web & WebMobile
					</h3>
					<h4 className='cv_education_training-subtitle'>
						Full Remote / French Label "GEN" / January 2022 - July 2022
					</h4>
					<p className='cv_education_training-text'>
						-{'>'} Intensive training of 6 months <strong>(798 hours)</strong>{' '}
						to become a FullStack JS Developer.
					</p>
					<p className='cv_education_training-text'>
						-{'>'} 3 months of base: : HTML5 / CSS3 /JavaScript / PostgreSQL /
						NodeJS
					</p>
					<p className='cv_education_training-text'>
						-{'>'} 1 months of specialization: React
					</p>
					<p className='cv_education_training-text'>
						-{'>'} 1 month of project
					</p>
					<p className='cv_education_training-text'>
						-{'>'} Weekly pair-programming
					</p>
					<p className='cv_education_training-text'>
						-{'>'} Daily team work during daily challenges
					</p>
				</div>
			</section>
			<section className='cv_graduation'>
				<h2 className='cv_graduation-title'>Graduations:</h2>
				<div className='cv_graduation_grad'>
					<h3 className='cv_graduation_grad-title'>
						Professional Title "Developer Web & WebMobile"
					</h3>
					<h4 className='cv_graduation_grad-subtitle'>RNCP Level 5 (Bac+2)</h4>
					<p className='cv_graduation_grad-text'>Obtained on August 17, 2022</p>
				</div>
			</section>
		</section>
	)
}

export default Cv

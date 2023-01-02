import './AboutMe.scss'

import cvProfilePicture from '../../../../assets/cvProfilePicture.png'

function AboutMe() {
	return (
		<section className='aboutMe'>
			<h1 className='aboutMe-title'>About me</h1>
			<section className='aboutMe_skills'>
				<img
					className='aboutMe_skills-img'
					src={cvProfilePicture}
					alt='aboutMe_img'
				/>
				<h2 className='aboutMe_skills-title'>My Skills</h2>
				<article className='aboutMe_skills_article'>
					<h3 className='aboutMe_skills_article-title'>Project Management:</h3>
					<div className='aboutMe_skills_article_list'>
						<p className='aboutMe_skills_article_list-item'>Agile</p>
						<p className='aboutMe_skills_article_list-item'>Scrum</p>
						<p className='aboutMe_skills_article_list-item'>Kanban</p>
						<p className='aboutMe_skills_article_list-item'>Trello</p>
						<p className='aboutMe_skills_article_list-item'>Git</p>
						<p className='aboutMe_skills_article_list-item'>GitHub</p>
						<p className='aboutMe_skills_article_list-item'>WireFrame</p>
						<p className='aboutMe_skills_article_list-item'>User Stories</p>
						<p className='aboutMe_skills_article_list-item'>MCD</p>
						<p className='aboutMe_skills_article_list-item'>MLD</p>
						<p className='aboutMe_skills_article_list-item'>MPD</p>
					</div>
				</article>
				<article className='aboutMe_skills_article'>
					<h3 className='aboutMe_skills_article-title'>Front-end:</h3>
					<div className='aboutMe_skills_article_list'>
						<p className='aboutMe_skills_article_list-item'>HTML5</p>
						<p className='aboutMe_skills_article_list-item'>CSS3</p>
						<p className='aboutMe_skills_article_list-item'>SASS</p>
						<p className='aboutMe_skills_article_list-item'>JavaScript</p>
						<p className='aboutMe_skills_article_list-item'>TypeScript</p>
						<p className='aboutMe_skills_article_list-item'>ReactJS</p>
						<p className='aboutMe_skills_article_list-item'>ThreeJS</p>
						<p className='aboutMe_skills_article_list-item'>
							React-Three-Fiber
						</p>
						<p className='aboutMe_skills_article_list-item'>React-Three-Drei</p>
						<p className='aboutMe_skills_article_list-item'>Axios</p>
						<p className='aboutMe_skills_article_list-item'>JWT</p>
					</div>
				</article>
				<article className='aboutMe_skills_article'>
					<h3 className='aboutMe_skills_article-title'>Back-end:</h3>
					<div className='aboutMe_skills_article_list'>
						<p className='aboutMe_skills_article_list-item'>NodeJS</p>
						<p className='aboutMe_skills_article_list-item'>ExpressJS</p>
						<p className='aboutMe_skills_article_list-item'>PostgreSQL</p>
						<p className='aboutMe_skills_article_list-item'>JavaScript</p>
						<p className='aboutMe_skills_article_list-item'>TypeScript</p>
						<p className='aboutMe_skills_article_list-item'>TypeORM</p>
						<p className='aboutMe_skills_article_list-item'>JWT</p>
						<p className='aboutMe_skills_article_list-item'>Bcrypt</p>
						<p className='aboutMe_skills_article_list-item'>Axios</p>
						<p className='aboutMe_skills_article_list-item'>Postman</p>
					</div>
				</article>
			</section>
			<section className='aboutMe_bio'>
				<h2 className='aboutMe_bio-title'>My Bio</h2>
				<p className='aboutMe_bio-text'>
					Hi! My name is{' '}
					<span className='aboutMe_bio-text-name'>Jaureguiberry Arnaud</span>!
				</p>
				<p className='aboutMe_bio-text'>
					I am a FullStack Web Developer. I studied in O’Clock School from 17
					January to 2 July 2022.
				</p>
				<p className='aboutMe_bio-text'>
					The formation was composed by 3 months of learning JavaScripts basics,
					1 month of specialization in React and 4 weeks to create a project
					from scratch.
					<br />
					The project was made by a team of 4, during this time I was the front
					lead developer.
				</p>
				<p className='aboutMe_bio-text'>
					I obtained my Professional Title "Web and Mobile Web Developer" level
					V (Bac+2) on August 17, 2022.
				</p>
				<p className='aboutMe_bio-text'>
					Since September I’m working on my portfolio and decided to learn
					TypeScript, TypeORM and ThreeJs. I also continue to work with React,
					Node and PostgresSQL.
				</p>
				<p className='aboutMe_bio-text'>
					Here is my Github:{' '}
					<a href='https://github.com/Jaureguiberry-Arnaud'>
						https://github.com/Jaureguiberry-Arnaud
					</a>
				</p>

				<p className='aboutMe_bio-text'>
					Thank you for taking the time to discover my portfolio.
				</p>
				<p className='aboutMe_bio-text'>See you soon!</p>
				<p className='aboutMe_bio-text'>And may the force be with you!</p>
				<p className='aboutMe_bio-text'>
					<span className='aboutMe_bio-text-name'>Arnaud Jaureguiberry</span>
					<br></br>
					Full Stack Web Developer
				</p>
			</section>
		</section>
	)
}

export default AboutMe

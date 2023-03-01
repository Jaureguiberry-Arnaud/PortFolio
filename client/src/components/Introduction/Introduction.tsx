import './Introduction.scss'
import PropTypes, { InferProps } from 'prop-types'
import Cookies from 'js-cookie'
import { useEffect } from 'react'

function Introduction({
	setToggleIntroduction,
}: InferProps<typeof Introduction.propTypes>) {
	// My function
	function onClickCloseIntroductionWithCookie() {
		Cookies.set('toggleIntroduction', 'false', { expires: 1 })
		setToggleIntroduction(false)
	}

	// useEffect to check if the cookie is set
	useEffect(() => {
		if (Cookies.get('toggleIntroduction') === 'false') {
			setToggleIntroduction(false)
		}
	}, [])
	return (
		<section className='introduction'>
			<article className='introduction_article'>
				<h1 className='introduction_article-title'>
					Welcome to my Portfolio !
				</h1>
				<p className='introduction_article-text'>
					I'm glad you're here, I hope you'll enjoy your visit.
				</p>
				<p className='introduction_article-text'>
					3D is interactive, so you can select the project(planet) you want to
					see.
				</p>
				<p className='introduction_article-text'>
					You can also create a fake project, just click on the "Add false
					project" button, it will be added to the list and generate a new
					planet.
				</p>
				<p className='introduction_article-text'>
					You can find here all my projects, my skills and my contact
					information.
				</p>
				<p className='introduction_article-text'>
					I hope you'll find what you're looking for.
				</p>
				<p className='introduction_article-text'>
					If you have any questions, don't hesitate to contact me.
				</p>
				<div className='introduction_article_btnContainer'>
					<button
						className='introduction_article_btnContainer-btn'
						onClick={() => setToggleIntroduction(false)}>
						Close until next reload
					</button>
					<button
						className='introduction_article_btnContainer-btn'
						onClick={onClickCloseIntroductionWithCookie}>
						Close for 24h
					</button>
				</div>
			</article>
		</section>
	)
}
Introduction.propTypes = {
	setToggleIntroduction: PropTypes.func.isRequired,
}

export default Introduction

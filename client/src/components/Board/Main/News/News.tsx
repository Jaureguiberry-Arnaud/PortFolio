import PropTypes, { InferProps } from 'prop-types'
import { useState } from 'react'

import './News.scss'

function News({
	disabledNewsModal,
	setDisabledNewsModal,
}: InferProps<typeof News.propTypes>) {
	// My state
	const [toggleModal, setToggleModal] = useState(true)

	function onClickNews() {
		setToggleModal(!toggleModal)
	}
	return (
		<section className='news-update-container'>
			<nav className='news-update-nav'>
				<button
					id='news-link'
					className={toggleModal ? 'btn-on' : 'btn-off'}
					onClick={onClickNews}>
					Latest News
				</button>
				<button
					id='update-link'
					className={toggleModal ? 'btn-off' : 'btn-on'}
					onClick={onClickNews}>
					Latest Update
				</button>
			</nav>

			{toggleModal ? (
				<section className='news'>
					<h1 className='news-title'>Latest News</h1>
					<time
						className='news-date'
						dateTime='2022-12-28'>
						28/12/2020
					</time>
					<p className='news-content'>
						I'm actually working on this website.
						<br />
						<br />
						The next and most important step to finalize my beta portfolio is to
						reconcile my data project with my 3d Draft.
						<br />
						<br />
						After that, I will create a Stat component. Each project will have a
						stat component and there will be a global stat component.
					</p>
					<button
						className='news-close'
						onClick={() => setDisabledNewsModal(!disabledNewsModal)}>
						Close
					</button>
				</section>
			) : (
				<section className='update'>
					<h1 className='update_article-title'>Latest Update</h1>
					<article className='update_article'>
						<time
							className='update_article-date'
							dateTime='2022-12-29'>
							29/12/2020
						</time>
						<p className='update_article-content'>
							- Finished component News
							<br />- Fix some CSS
						</p>
						<button
							className='update_article-close'
							onClick={() => setDisabledNewsModal(!disabledNewsModal)}>
							Close
						</button>
					</article>
					<article className='update_article'>
						<time
							className='update_article-date'
							dateTime='2022-12-28'>
							28/12/2020
						</time>
						<p className='update_article-content'>
							- Finished adding component AboutMe
							<br />- Begin component News (and update)
						</p>
						<button
							className='update_article-close'
							onClick={() => setDisabledNewsModal(!disabledNewsModal)}>
							Close
						</button>
					</article>
				</section>
			)}
		</section>
	)
}

News.propTypes = {
	disabledNewsModal: PropTypes.bool.isRequired,
	setDisabledNewsModal: PropTypes.func.isRequired,
}
export default News

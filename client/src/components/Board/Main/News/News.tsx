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
					<h1 className='news_article-title'>Latest News</h1>
					<article className='news_article'>
						<time
							className='news_article-date'
							dateTime='2023-01-07'>
							07/01/2023
						</time>
						<p className='news_article-content'>
							Hello there !
							<br />
							<br />
							Happy new year !
							<br />
							<br />
							Today i turn on my server on a RaspberryPi4 <br />
							with Traefik, Docker and Docker-compose.
							<br />
							<br />
							Now i can deploy my portfolio on my server.
							<br />
							<br />
							I'm so excited to share my work with you !
							<br />
							<br />
							See you soon !
						</p>
						<button
							className='news_article-close'
							onClick={() => setDisabledNewsModal(!disabledNewsModal)}>
							Close
						</button>
					</article>
					<article className='news_article'>
						<time
							className='news_article-date'
							dateTime='2022-12-28'>
							28/12/2022
						</time>
						<p className='news_article-content'>
							I'm actually working on this website.
							<br />
							<br />
							The next and most important step to finalize my <br />
							beta portfolio is to reconcile my data project <br />
							with my 3d Draft.
							<br />
							<br />
							After that, I will create a Stat component. Each project <br />
							will have a stat component and there will be a global <br />
							stat component.
						</p>
						<button
							className='news_article-close'
							onClick={() => setDisabledNewsModal(!disabledNewsModal)}>
							Close
						</button>
					</article>
				</section>
			) : (
				<section className='update'>
					<h1 className='update_article-title'>Latest Update</h1>
					<article className='update_article'>
						<time
							className='update_article-date'
							dateTime='2023-01-07'>
							07/01/2023
						</time>
						<p className='update_article-content'>
							- Adding favicon
							<br />
							- Adding latest news and update
							<br />- Adding updated cv and skills section
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
							dateTime='2022-12-30'>
							30/12/2022
						</time>
						<p className='update_article-content'>
							- Adding axios post request to send logs into my database
							<br />
							before putting my portfolio online
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
							dateTime='2022-12-29'>
							29/12/2022
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
							28/12/2022
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

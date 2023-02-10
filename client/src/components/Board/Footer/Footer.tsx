import { Link } from 'react-router-dom'
import './Footer.scss'

function Footer() {
	return (
		<footer className='footer'>
			<nav className='footer_nav'>
				<Link to='/'>
					<p className='footer_nav-btn'>Home</p>
				</Link>
				<Link to='projects'>
					<p className='footer_nav-btn'>Projects</p>
				</Link>
				<Link to='stats'>
					<p className='footer_nav-btn'>Stats</p>
				</Link>
				<Link to='cv'>
					<p className='footer_nav-btn'>CV</p>
				</Link>
				<Link to='contact'>
					<p className='footer_nav-btn'>Contact</p>
				</Link>
				<Link to='about-me'>
					<p className='footer_nav-btn'>About me</p>
				</Link>
			</nav>
		</footer>
	)
}

export default Footer

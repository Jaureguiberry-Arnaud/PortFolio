import './Header.scss'
import PropTypes, { InferProps } from 'prop-types'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'

import notifLightSaber from '../../../assets/notif-sabre-laser.gif'

function Header({
	disabledLoginModal,
	setDisabledLoginModal,
	isLogged,
	pushFalseProject,
	resetFakeProject,
	toggleIntroduction,
	setToggleIntroduction,
}: InferProps<typeof Header.propTypes>) {
	const navigate = useNavigate()

	// My Functions
	// my function to show introduction and reset cookie
	function onClickShowIntroduction() {
		Cookies.remove('toggleIntroduction')
		setToggleIntroduction(true)
	}
	function onClickLogin() {
		setDisabledLoginModal(!disabledLoginModal)
	}
	return (
		<header className='header'>
			<h1
				className='header-title'
				onClick={() => navigate('/')}>
				JRGB's Development
			</h1>

			{!toggleIntroduction && (
				<div
					className='header_IntroductionToggle'
					onClick={onClickShowIntroduction}>
					<img
						className='header_IntroductionToggle-gif'
						src={notifLightSaber}
						alt='gif notif lightsaber'
					/>
				</div>
			)}

			<section className='header_menu'>
				<section className='header_menu_leftSection'>
					<div className='header_toggleKonamiCode'>
						<h2 className='header_toggleKonamiCode-title'>Konami Code:</h2>

						{disabledLoginModal ? (
							<div className='header_toggleKonamiCode_warning'>
								<div className='header_toggleKonamiCode_warning-greenCircle'></div>
								<p className='header_toggleKonamiCode_warning-greenText'>on</p>
							</div>
						) : (
							<div className='header_toggleKonamiCode_warning'>
								<div className='header_toggleKonamiCode_warning-redCircle'></div>
								<p className='header_toggleKonamiCode_warning-redText'>off</p>
							</div>
						)}
					</div>

					<div
						className='header_toggleAdminLogin'
						onClick={onClickLogin}>
						<h2 className='header_toggleAdminLogin-title'>Admin:</h2>

						{isLogged ? (
							<div className='header_toggleAdminLogin_warning'>
								<div className='header_toggleAdminLogin_warning-greenCircle'></div>
								<p className='header_toggleAdminLogin_warning-greenText'>
									connected
								</p>
							</div>
						) : (
							<div className='header_toggleAdminLogin_warning'>
								<div className='header_toggleAdminLogin_warning-redCircle'></div>
								<p className='header_toggleAdminLogin_warning-redText'>
									disconnected
								</p>
							</div>
						)}
					</div>
				</section>

				<section className='header_menu_rightSection'>
					<button
						className='header_menu_rightSection-addFalseProject'
						onClick={pushFalseProject}>
						Add false project
					</button>
					<button
						className='header_menu_rightSection-resetProject'
						onClick={resetFakeProject}>
						Reset project
					</button>
				</section>
			</section>
		</header>
	)
}
Header.propTypes = {
	disabledLoginModal: PropTypes.bool.isRequired,
	setDisabledLoginModal: PropTypes.func.isRequired,
	isLogged: PropTypes.bool.isRequired,
	pushFalseProject: PropTypes.func.isRequired,
	resetFakeProject: PropTypes.func.isRequired,
	toggleIntroduction: PropTypes.bool.isRequired,
	setToggleIntroduction: PropTypes.func.isRequired,
}
export default Header

import './Contact.scss'

function Contact() {
	return (
		<section className='contact'>
			<h2 className='contact-title'>Contact</h2>
			<div className='contact_container'>
				<div className='contact_container_left'>
					<div className='contact_container_left_item'>
						<h3 className='contact_container_left_item-title'>Email:</h3>
						<a
							className='contact_container_left_item-text'
							href='mailto:jaureguiberryarnaud@gmail.com'>
							jaureguiberry.arnaud@gmail.com
						</a>
					</div>
					<div className='contact_container_left_item'>
						<h3 className='contact_container_left_item-title'>Phone:</h3>

						<a
							className='contact_container_left_item-text'
							href='tel:+33779828625'>
							+33779828625{' '}
						</a>
					</div>
					<div className='contact_container_left_item'>
						<h3 className='contact_container_left_item-title'>Address:</h3>
						<a
							className='contact_container_left_item-text'
							href='https://goo.gl/maps/bT5q6TkTgioiQCKy5'
							target='_blank'>
							France, 64230 Mazerolles
						</a>
					</div>
				</div>
				<div className='contact_container_right'>
					<h1 className='contact_container_right-title'>Get in touch</h1>
					<p className='contact_container_right-text'>
						Feel free to contact me for any questions or suggestions
					</p>
					<p className='contact_container_right-text'>
						I will answer you as soon as possible
					</p>
					<p className='contact_container_right-text'>
						You can also find me on{' '}
						<a
							href='https://www.linkedin.com/in/arnaud-jaureguiberry/'
							target='_blank'>
							LinkedIn
						</a>
					</p>
					<p className='contact_container_right-text'>
						And feel free to follow my work here:{' '}
						<a
							href='https://github.com/Jaureguiberry-Arnaud/'
							target='_blank'>
							Github
						</a>
					</p>

					<form className='contact_container_right_form'>
						<input
							type='text'
							className='contact_container_right_form-input'
							placeholder='Name'
						/>
						<input
							type='email'
							className='contact_container_right_form-input'
							placeholder='Email'
						/>
						<input
							type='text'
							className='contact_container_right_form-input'
							placeholder='Subject'
						/>
						<textarea
							className='contact_container_right_form-input'
							placeholder='Message'
						/>
						<button className='contact_container_right_form-button'>
							Send
						</button>
					</form>
				</div>
			</div>
		</section>
	)
}

export default Contact

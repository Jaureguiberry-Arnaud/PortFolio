import './Contact.scss'

import { MutableRefObject, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

function Contact() {
	// My states
	const [emailSentToggle, setEmailSentToggle] = useState(false)
	const [emailSentError, setEmailSentError] = useState(null)
	// My functions
	function sendEmail(event: { preventDefault: () => void }) {
		event.preventDefault()
		emailjs
			.sendForm(
				import.meta.env.VITE_YOUR_EMAILJS_SERVICE_ID as string,
				import.meta.env.VITE_YOUR_EMAILJS_TEMPLATE_ID as string,
				formRef.current as HTMLFormElement,
				import.meta.env.VITE_YOUR_EMAILJS_PUBLIC_KEY as string
			)
			.then(
				(result) => {
					console.log(result.text)
					formRef.current?.reset()
					setEmailSentToggle(true)
				},
				(error) => {
					console.log(error.text)
					setEmailSentError(error.text)
				}
			)
	}
	// My refs
	const formRef: MutableRefObject<HTMLFormElement | null> = useRef(null)
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
				{emailSentToggle ? (
					<div className='emailSent'>
						<h1 className='emailSent-title'>Email sent</h1>
						<p className='emailSent-text'>Your email has been sent</p>
						<p className='emailSent-text'>
							I will answer you as soon as possible
						</p>
						<p className='emailSent-text'>Thank you for your interest</p>
						<p className='emailSent-text'>Best regards</p>
						<p className='emailSent-text'>Arnaud</p>
						<button
							className='emailSent-button'
							onClick={() => setEmailSentToggle(false)}>
							Close
						</button>
					</div>
				) : (
					<>
						{emailSentError ? (
							<div className='emailSentError'>
								<h1 className='emailSentError-title'> Error </h1>
								<p className='emailSentError-text'>
									{' '}
									Your email has not been sent{' '}
								</p>
								<p className='emailSentError-text'> {emailSentError} </p>
								<p className='emailSentError-text'> Please try again later</p>
								<button
									className='emailSentError-button'
									onClick={() => setEmailSentError(null)}>
									Close
								</button>
							</div>
						) : (
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

								<form
									ref={formRef}
									className='contact_container_right_form'
									onSubmit={sendEmail}>
									<input
										type='text'
										className='contact_container_right_form-input'
										placeholder='Name'
										name='name'
										required
									/>
									<input
										type='email'
										className='contact_container_right_form-input'
										placeholder='Email'
										name='email'
										required
									/>
									<input
										type='text'
										className='contact_container_right_form-input'
										placeholder='Subject'
										name='subject'
										required
									/>
									<textarea
										className='contact_container_right_form-input'
										placeholder='Message'
										name='message'
										required
									/>
									<button className='contact_container_right_form-button'>
										Send
									</button>
								</form>
							</div>
						)}
					</>
				)}
			</div>
		</section>
	)
}

export default Contact

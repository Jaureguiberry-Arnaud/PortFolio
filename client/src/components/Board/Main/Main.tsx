import PropTypes, { InferProps } from 'prop-types'
import { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'

import './Main.scss'
function Main({}: InferProps<typeof Main.propTypes>) {
	useEffect(() => {}, [])
	return (
		<main className='main'>
			<Outlet />
		</main>
	)
}

Main.propTypes = {}
export default Main

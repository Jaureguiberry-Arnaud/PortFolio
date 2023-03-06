import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import '../src/style/_reset.scss'
import './index.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</React.StrictMode>
)

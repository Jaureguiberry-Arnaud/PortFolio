import { Canvas } from '@react-three/fiber'
import { Suspense, useState, useEffect } from 'react'
import axios from 'axios'
import { Routes, Route } from 'react-router-dom'
import './App.scss'
import Three from './components/Three/Three'
import Board from './components/Board/Board'
function App() {
	// My state
	const [activePlanetAtom, setActivePlanetAtom] = useState(false)
	const [activePlanetHighTech, setActivePlanetHighTech] = useState(false)
	// const [konamiCode, setKonamiCode] = useState(false) A VOIR POUR SUPPRESSION

	useEffect(() => {}, [])
	return (
		<Routes>
			<Route
				path='/'
        element={
          <>
						<Board
							setActivePlanetAtom={setActivePlanetAtom}
							activePlanetAtom={activePlanetAtom}
							setActivePlanetHighTech={setActivePlanetHighTech}
							activePlanetHighTech={activePlanetHighTech}
            />
            <Canvas
                id='three_canvas_container'
                shadows>
                <Suspense fallback={null}>
                  <Three
                    setActivePlanetAtom={setActivePlanetAtom}
                    activePlanetAtom={activePlanetAtom}
                    setActivePlanetHighTech={setActivePlanetHighTech}
                    activePlanetHighTech={activePlanetHighTech}
                  />
                </Suspense>
              </Canvas>
          </>
				} /> 
		</Routes>
	)
}

export default App

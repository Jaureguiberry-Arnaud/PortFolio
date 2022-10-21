import { Canvas } from '@react-three/fiber'
import { Suspense, useState } from 'react'
import './App.scss'
import Three from './components/Three/Three'
import Board from './components/Board/Board'

function App() {
  // State
  // const [active, setActive] = useState({
  //   planetAtom: false,
  //   planetHighTech: false,
  // })
  const [activePlanetAtom, setActivePlanetAtom] = useState(false);
  const [activePlanetHighTech, setActivePlanetHighTech] = useState(false);
  
  return (
    <>
      <Board
        setActivePlanetAtom={setActivePlanetAtom}
        activePlanetAtom={activePlanetAtom}
        setActivePlanetHighTech={setActivePlanetHighTech}
        activePlanetHighTech={activePlanetHighTech}
      />
        

      <Canvas  id="three_canvas_container" shadows>
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
  )
}

export default App

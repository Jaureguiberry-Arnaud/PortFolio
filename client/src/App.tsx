import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import './App.scss'
import Three from './components/Three/Three'

function App() {
  return (
    <Canvas id="three_canvas_container" shadows>
      <Suspense fallback={null}>
        <Three />
      </Suspense>
    </Canvas>
  )
}

export default App

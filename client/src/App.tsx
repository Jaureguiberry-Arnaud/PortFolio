import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import './App.css'
import { Three } from './components/three'

function App() {
  return (
    <Canvas id="three_canvas_container">
      <Suspense fallback={null}>
        <Three />
      </Suspense>
    </Canvas>
  )
}

export default App

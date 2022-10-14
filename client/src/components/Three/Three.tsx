import { PerspectiveCamera, OrbitControls, Environment, Stars, ScrollControls } from '@react-three/drei';
import { useFrame } from '@react-three/fiber'
import { angleToRadians } from '../../utils/angle'
import * as THREE from "three"
import React, { useRef } from "react";
// import { ExplodingPlanetType1 } from "./ExplodingPlanetType1"
import { Sun } from "./Star_of_sun"
import { PlanetAtom } from "./PlanetAtom"
import { Material } from 'three';


function Three() {

    // Make the mesh rotate
    const sunRef: any = useRef();
    const planetAtomRef: any = useRef();

    useFrame(() => {
      sunRef.current.rotation.y += 0.005;
      planetAtomRef.current.rotation.y += 0.01
    });

  return (
    <>
      {/* Camera */}
      <PerspectiveCamera makeDefault position={[0, 150, 350]} />

      {/*Control camera */}
      <OrbitControls enablePan={false} />

      {/* Scroll Controll Camera */}
      {/* <ScrollControls /> */}

      {/* Sun */}
      <mesh  ref={sunRef} rotation-y={Math.PI * 0.25} position={[0, 0, 0]} >
        <Sun />
        

        {/* 1st ring */}
        <mesh rotation-x={Math.PI * 0.5}>
          <torusGeometry args={[80, 0.2, 2, 200]} />
          <meshStandardMaterial color={"yellow"} metalness={0.7} roughness={0.3} />
        </mesh>
        
          <mesh ref={planetAtomRef} rotation-y={Math.PI * 0.25} position={[-80, 0, 0]} receiveShadow castShadow >
            <PlanetAtom />
            <meshStandardMaterial color={"#ffffff"} metalness={0.7} roughness={0.3}/>
          </mesh>

        
      </mesh>
      

      {/* Ambient Light */}
      <ambientLight args={["#ffffff", 0.5]} />

      {/* Directional light */}
      <pointLight args={["#ffffff", 5, 300]} position={[0, 0, 0]} castShadow />
      
      {/* Stars background animated */}
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      {/* <Stars radius={50} depth={50} count={2500} factor={4} saturation={0} fade speed={1} /> */}

      {/* Environment */}
      <Environment background >
        <mesh scale={100} >
          <sphereGeometry args={[1, 64, 64]} />
          <meshBasicMaterial side={THREE.BackSide} color="#000000" />
        </mesh>
      </Environment>
    </>
  );
}

export default Three;
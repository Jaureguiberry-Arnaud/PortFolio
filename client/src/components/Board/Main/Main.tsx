import PropTypes, { InferProps } from "prop-types"
import {Suspense, useState, useEffect} from 'react'
// import Konami from 'react-konami-code'

import './Main.scss';
import ModalPlanetById from './ModalPlanetById/ModalPlanetById'
import ModalLogin from './ModalLogin/ModalLogin'
function Main({ setActivePlanetAtom, activePlanetAtom, setActivePlanetHighTech, activePlanetHighTech, setDisabledLoginModal, disabledLoginModal }: InferProps<typeof Main.propTypes>) {
  
  

  function konami(callback: () => void): void {
    let codes: number[] = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65],
        position: number = 0;
    document.addEventListener('keydown', function (event: KeyboardEvent): void {
        if (event.keyCode === codes[position]) {
            position++;
            if (position === codes.length) {
                position = 0;
                callback();
            }
        } else {
            position = 0;
        }
    });
  }
  function toggleDisabledLoginModal() {
    setDisabledLoginModal(!disabledLoginModal)
  }
  useEffect(() => {
    konami(toggleDisabledLoginModal)
  }, [])
  return (
    <main className="main">
      {disabledLoginModal &&
      <ModalLogin disabledLoginModal={disabledLoginModal} setDisabledLoginModal={setDisabledLoginModal} />
      }
      
      {activePlanetAtom || activePlanetHighTech &&
        <ModalPlanetById  />      
      }
    </main>
  )
}

Main.propTypes = {
  setActivePlanetAtom: PropTypes.func.isRequired,
  activePlanetAtom: PropTypes.bool.isRequired,
  setActivePlanetHighTech: PropTypes.func.isRequired,
  activePlanetHighTech: PropTypes.bool.isRequired,
  disabledLoginModal: PropTypes.bool.isRequired,
  setDisabledLoginModal: PropTypes.func.isRequired,
}
export default Main;
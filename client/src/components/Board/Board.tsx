import PropTypes, { InferProps } from "prop-types";
import {useState} from 'react'
import './Board.scss';
import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer'

function Board({ setActivePlanetAtom, activePlanetAtom, setActivePlanetHighTech, activePlanetHighTech, }: InferProps<typeof Board.propTypes>) {
  const [disabledLoginModal, setDisabledLoginModal] = useState(false)
  const [connected, setConnected] = useState(false)
  return (
    <section className="board-container">
      <section className="board">

        <Header disabledLoginModal={disabledLoginModal} connected={connected}/>

        <Main
          activePlanetAtom={activePlanetAtom}
          setActivePlanetAtom={setActivePlanetAtom}
          activePlanetHighTech={activePlanetHighTech}
          setActivePlanetHighTech={setActivePlanetHighTech}
          disabledLoginModal={disabledLoginModal}
          setDisabledLoginModal={setDisabledLoginModal}
        />
        
        <Footer />
        
      </section>
    </section>
  )
}

Board.propTypes = {
  activePlanetAtom: PropTypes.bool.isRequired,
  setActivePlanetAtom: PropTypes.func.isRequired,
  activePlanetHighTech: PropTypes.bool.isRequired,
  setActivePlanetHighTech: PropTypes.func.isRequired,
}

export default Board
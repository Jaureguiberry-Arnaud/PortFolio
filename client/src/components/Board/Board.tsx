import './Board.scss';
import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer'
import PropTypes, { InferProps } from "prop-types";

function Board({ setActivePlanetAtom, activePlanetAtom, setActivePlanetHighTech, activePlanetHighTech}: InferProps<typeof Board.propTypes>) {
  return (
    <section className="board-container">
      <section className="board">

        <Header />

        <Main
          setActivePlanetAtom={setActivePlanetAtom}
          activePlanetAtom={activePlanetAtom}
          setActivePlanetHighTech={setActivePlanetHighTech}
          activePlanetHighTech={activePlanetHighTech}
        />
        
        <Footer />
        
      </section>
    </section>
  )
}

Board.propTypes = {
  setActivePlanetAtom: PropTypes.func.isRequired,
  activePlanetAtom: PropTypes.bool.isRequired,
  setActivePlanetHighTech: PropTypes.func.isRequired,
  activePlanetHighTech: PropTypes.bool.isRequired,
}

export default Board
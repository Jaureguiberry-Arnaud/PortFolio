import './Main.scss';
import ModalPlanetById from './ModalPlanetById/ModalPlanetById'
import PropTypes, { InferProps } from "prop-types";

function Main({ setActivePlanetAtom, activePlanetAtom, setActivePlanetHighTech, activePlanetHighTech}: InferProps<typeof Main.propTypes>) {
  return (
    <main className="main">
      {activePlanetAtom || activePlanetHighTech &&
      <ModalPlanetById />      
      }
    </main>
  )
}

Main.propTypes = {
  setActivePlanetAtom: PropTypes.func.isRequired,
  activePlanetAtom: PropTypes.bool.isRequired,
  setActivePlanetHighTech: PropTypes.func.isRequired,
  activePlanetHighTech: PropTypes.bool.isRequired,
}
export default Main;
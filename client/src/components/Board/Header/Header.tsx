import './Header.scss';
import PropTypes, { InferProps } from "prop-types"



function Header({disabledLoginModal, setDisabledLoginModal, isLogged}: InferProps<typeof Header.propTypes>) {
  function onClickLogin() {
    setDisabledLoginModal(!disabledLoginModal)
  }
  return (
    <header className="header">

      <h1 className="header-title" >JRGB's Development</h1>

      <div className="header_toggleKonamiCode">
          <h2 className="header_toggleKonamiCode-title">Konami Code:</h2>
        
        {disabledLoginModal ?
          <div className="header_toggleKonamiCode_warning">
            <div className="header_toggleKonamiCode_warning-greenCircle"></div>
            <p className="header_toggleKonamiCode_warning-greenText">on</p>
          </div> 
          :
          <div className="header_toggleKonamiCode_warning">
            <div className="header_toggleKonamiCode_warning-redCircle"></div>
            <p className="header_toggleKonamiCode_warning-redText">off</p>
          </div>
        }
      </div>

      <div className="header_toggleAdminLogin" onClick={onClickLogin}>
          <h2 className="header_toggleAdminLogin-title">Admin:</h2>
        
        {isLogged ?
          <div className="header_toggleAdminLogin_warning">
            <div className="header_toggleAdminLogin_warning-greenCircle"></div>
            <p className="header_toggleAdminLogin_warning-greenText">connected</p>
          </div> 
          :
          <div className="header_toggleAdminLogin_warning">
            <div className="header_toggleAdminLogin_warning-redCircle"></div>
            <p className="header_toggleAdminLogin_warning-redText">disconnected</p>
          </div>
        }
      </div>
    </header>
      
  )
}
Header.propTypes = {
  disabledLoginModal: PropTypes.bool.isRequired,
  setDisabledLoginModal: PropTypes.func.isRequired,
  isLogged: PropTypes.bool.isRequired,
}
export default Header
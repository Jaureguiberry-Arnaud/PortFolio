import PropTypes, { InferProps } from "prop-types"
import {useEffect} from 'react'

import './ModalLogin.scss';
import iconCloseModal from '../../../../assets/closeModal.png'

function ModalLogin({disabledLoginModal, setDisabledLoginModal, }: InferProps<typeof ModalLogin.propTypes>) {
  
  function onClick() {
    setDisabledLoginModal(!disabledLoginModal)
  }

  useEffect(() => {
    
  }, [])
  return (
    <section className="login">
      <img className="login-close-modal" src={iconCloseModal} alt="icon Close modal" onClick={onClick} ></img>
      <form className="login_form">
        <h1 className="login_form-title">Admin Dashboard</h1>
        <input type="text" className="login_form-input"></input>
        <input type="password" className="login_form-input"></input>
        <button className="login_form-btn">Login</button>
      </form>
    </section>
  )
}

ModalLogin.propTypes = {
  disabledLoginModal: PropTypes.bool.isRequired,
  setDisabledLoginModal: PropTypes.func.isRequired,
}
export default ModalLogin;
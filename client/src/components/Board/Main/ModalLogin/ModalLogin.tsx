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
        <h1 className="login_form-title">Login</h1>
        <input className="login_form-pseudo"></input>
        <input className="login_form-password"></input>
      </form>
    </section>
  )
}

ModalLogin.propTypes = {
  disabledLoginModal: PropTypes.bool.isRequired,
  setDisabledLoginModal: PropTypes.func.isRequired,
}
export default ModalLogin;
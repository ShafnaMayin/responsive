import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import {FiPaperclip} from 'react-icons/fi'
import {FaBars, FaTimes} from 'react-icons/fa'
import {Button} from './Button'
import './Navbar.css'
import { IconContext } from 'react-icons/lib'

function Navbar() {
  const [click, setClick] = useState(false)
  const [button, setButton] = useState(true)

  const handleClick = () => setClick(!click)

  const closeMobileMenu = () => setClick(false)

  // se fija que size tiene el window actualmente y realiza la fn
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false)
    } else {
      setButton(true)
    }
  }

  useEffect(() => {
    showButton()
  }, [])

  // cuando se hace un resize, ejecuta la funcion
  window.addEventListener('resize', showButton)

  return (
    <>
    <IconContext.Provider value={{color: '#fff'}}>

      <div className="navbar">
        <div className="navbar-container container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <FiPaperclip className="navbar-icon" />
            QUIRE
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            {/* Cambia el icono del burger */}
            {click ? <FaTimes /> : <FaBars />} 
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/services" className="nav-links" onClick={closeMobileMenu}>
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/products" className="nav-links" onClick={closeMobileMenu}>
                Products
              </Link>
            </li>
            <li className="nav-btn">
            {/* Cambia el estilo del sign up para mobile */}
              {button ? (
                <Link to="/sign-up" className="btn-link">
                  <Button buttonStyle="btn--outline">SIGN UP</Button>
                </Link>
              ) : (
                <Link to="/sign-up" className="btn-link" onClick={closeMobileMenu}>
                  <Button buttonStyle="btn--outline" buttonSize="btn--mobile">
                    SIGN UP
                  </Button>
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </IconContext.Provider>
    </>
  )
}

export default Navbar
import React from 'react'

import { Link } from 'react-router-dom'

import landingImg from '../../assets/images/logo.svg'
import loginIcon from '../../assets/icons/login.svg'

import './styles.css'

function Landing () {
  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <p>Minha Estante</p>
          <h2>Todos os seus livros em um só lugar</h2>
        </div>

        <img src={ landingImg } alt="Hero Img" className="hero-image"/>

        <div className="button-login">
          <Link to="/login" className="login">
            <img src={ loginIcon } alt="Login"/>
            Login
          </Link>
        </div>

      </div>
    </div>
  )
}

export default Landing
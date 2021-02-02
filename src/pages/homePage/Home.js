import React from 'react'

import { Link } from 'react-router-dom'

import homeImg from '../../assets/images/home.svg'
import livroIcon from '../../assets/icons/livro.svg'

function Home () {
  
  var userId = window.location.href.toString().replace("https://mybookcaseproject.web.app/", '')

  const path = `bookcase/${userId}`

  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <p>Minha Estante</p>
          <h2>Todos os seus livros em um só lugar</h2>
        </div>

        <img src={ homeImg } alt="Hero Img" className="hero-image"/>

        <div className="button-login">
          <Link to={path} className="login">
            <img src={ livroIcon } alt="Livro"/>
            Minha estante
          </Link>
        </div>

      </div>
    </div>
  )
  
}

export default Home
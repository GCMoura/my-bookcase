import React from 'react'
import { Link } from 'react-router-dom'
import firebase from '../../config/config'
import 'firebase/analytics'
import 'firebase/auth'
import 'firebase/database'
import { useHistory } from 'react-router-dom'
import homeImg from '../../assets/images/home.svg'
import livroIcon from '../../assets/icons/livro.svg'
import Alert from '../../utils/buildAlert'

const baseURL = window.location.hostname.includes('localhost')
? 'http://localhost:3000/'
: 'https://mybookcaseproject.web.app/'

function Home () {
  const history = useHistory()
  
  var userId = window.location.href.toString().replace(baseURL, '')

  const path = `bookcase/${userId}`

  function handleLogout(){
    firebase.auth().signOut()
    .then(() => {
      Alert('Sign-out efetuado com sucesso', '#215992')
    })
    .then(() => {
      setTimeout(() => {
        history.push('/')
      }, 2000);
    })
    .catch((error) => {
      Alert(error.message, '#dd614a')
    });
  }

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

          <div className="logout" onClick={handleLogout}>
            <i className="fas fa-sign-out-alt fa-4x" id="logout-icon"></i>
            <h1>Sign-out</h1>
          </div>

        </div>

      </div>
    </div>
  )
  
}

export default Home
import React from 'react'
import { useHistory } from 'react-router-dom'
import firebase from '../../config/config'
import 'firebase/analytics'
import 'firebase/auth'
import 'firebase/database'
import landingImg from '../../assets/images/logo.svg'
import Alert from '../../utils/buildAlert'
import './styles.css'

function Landing () {

  const history = useHistory()

  function  handleLoginWithGithub() {
    var provider = new firebase.auth.GithubAuthProvider();
  
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        var user = result.user;
        history.push(`bookcase/${user.uid}`)
      })
      .catch((error) => {
        Alert(`Já existe um conta vinculada ao email ${error.email}. Tente novamente por outro método de Sign-In`, '#dd614a')
      });
    }

  function handleLoginWithGoogle(){
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth()
      .signInWithPopup(provider)
      .then((result) => {
        var user = result.user;
        history.push(`bookcase/${user.uid}`)
      }).catch((error) => {
        Alert(`Já existe um conta vinculada ao email ${error.email}. Tente novamente por outro método de Sign-In`, '#dd614a')
      });
  }

  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <p>Minha Estante</p>
          <h2>Todos os seus livros em um só lugar</h2>
        </div>

        <img src={ landingImg } alt="Hero Img" className="hero-image"/>

        <div className="button-login">
          <div className="login-github" onClick={handleLoginWithGithub}>
            <h1>Login com Github</h1>
            <i className="fab fa-github-square fa-5x" id="button-github"></i>
          </div>
          <div className="login-gmail" onClick={handleLoginWithGoogle}>
            <h1>Login com Google</h1>
            <i className="fab fa-google fa-4x" id="button-gmail"></i>
          </div>
        </div>
          
      </div>
    </div>
  )
}

export default Landing
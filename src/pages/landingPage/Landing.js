import React, {useState} from 'react'

import firebase from '../../config/config'

import { Link } from 'react-router-dom'

import landingImg from '../../assets/images/logo.svg'
import loginIcon from '../../assets/icons/login.svg'

import './styles.css'


function Landing () {
  
  const [user, setUser] = useState('')

  function  handleClick() {
    console.log('aqui')
    var provider = new firebase.auth.GithubAuthProvider();
  
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        var credential = result.credential;
  
        console.log(result)
  
        // This gives you a GitHub Access Token. You can use it to access the GitHub API.
        var token = credential.accessToken;
  
        // The signed-in user info.
        var user = result.user;
        
        setUser(user.uid)
        console.log(user.uid)
        // ...
      }).catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
    }

  const path = `/bookcase/${user}`

  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <p>Minha Estante</p>
          <h2>Todos os seus livros em um só lugar</h2>
        </div>

        <img src={ landingImg } alt="Hero Img" className="hero-image"/>

        <div className="button-login">
          <button id="button" onClick={handleClick}>Github</button>

          <Link to={path}> 
            {user}
          </Link>
          {/* <Link to="/login" className="login">
            <img src={ loginIcon } alt="Login"/>
            Login
          </Link> */}
        </div>

      </div>
    </div>
  )
}

export default Landing
import React from 'react'

import { Link } from 'react-router-dom'

import backIcon from '../../assets/icons/back.svg'

import './styles.css'

function Header(props) {
  return (
    <header className="page-header">
        <div className="top-bar-container">

          <Link to={ props.path }>
            <img src={ backIcon } alt="Voltar"/> 
          </Link>

          <div className="header-content">
            <strong>{ props.title }</strong>
            { props.description && <p>{ props.description }</p> }

            { props.children }
          </div>

        </div>

      </header>
  )
}

export default Header
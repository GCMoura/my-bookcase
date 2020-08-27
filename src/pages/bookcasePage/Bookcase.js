import React from 'react'
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'

import './styles.css'

function Bookcase(){
  const history = useHistory()

  var userId = window.location.href.toString().replace("http://localhost:3000/bookcase/", '')
  
  function handleChange(){
    history.push(`/register/${userId}`)
  }

  return (
    <>
      <h1>Bookcase</h1>
      <button onClick={handleChange}>
        Cadastrar Livro
      </button>
    </>
  )
}

export default Bookcase
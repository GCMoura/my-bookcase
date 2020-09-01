import React from 'react'
import { useHistory } from 'react-router-dom'
import db from '../../data/db.json'
import api from '../../backend/api'

import './styles.css'

function Bookcase(){
  const history = useHistory()

  var userId = window.location.href.toString().replace("http://localhost:3000/bookcase/", '')
  
  function handleChange(){
    history.push(`/register/${userId}`)
  }

  async function renderBook(db){

    const response = await api.get(`bookcase/${userId}`)

    return response

    // for(let i = 0; i < db.length; i++){
    //   console.log(db[i].book)
    //   console.log(db[i].name)
    // }
  }

  return (
    <div>
      <h1>Bookcase</h1>
      <button onClick={handleChange}>
        Cadastrar Livro
      </button>
      <br/>

          { db.map((db) => {
            
            return renderBook(db)
          })}
        
    </div>
  )
}

export default Bookcase
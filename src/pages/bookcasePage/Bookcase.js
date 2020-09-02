import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import db from '../../data/db.json'
import api from '../../backend/api'
import BookList from '../../components/bookList/BookList'

import './styles.css'

function Bookcase(){
  const history = useHistory()

  var userId = window.location.href.toString().replace("http://localhost:3000/bookcase/", '')
  
  function handleChange(){
    history.push(`/register/${userId}`)
  }

  const [books, setBooks] = useState([])

  useEffect(() => {
    renderBook()
  }, [])

  async function renderBook(){
    const response = await api.get(`bookcase/${userId}`, {
      params: {
        userId
      }
    })
    setBooks(response.data)    
  }

  return (
    <div id="page-user-form" className="containerList">
      <div id="title">
        <h1>Minha Estante</h1>
        <div id="book-search">
          <input type="text"/>
          <button id="search" onClick={handleChange}>
            Pesquisar
          </button>
        </div>
        <button id="register" onClick={handleChange}>
          Cadastrar Livro
        </button>
      </div> 
      
      <main>
            { books.map((book) => {
              return <BookList
                key={book.title}
                {...book}
                />
            })}
      </main>
    </div>
  )
}

export default Bookcase
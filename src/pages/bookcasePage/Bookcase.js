import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import api from '../../backend/api'
import BookList from '../../components/bookList/BookList'
import Header from '../../components/header/Header'

import './styles.css'

function Bookcase(){
  const history = useHistory()

  var userId = window.location.href.toString().replace("http://localhost:3000/bookcase/", '')

  const path = `/${userId}`
  
  const [books, setBooks] = useState([])
   
  useEffect(() => { 
    let isParam = true
    renderBook()
      .then( book => {
      if (isParam) {
        setBooks(book)
      }
    })
    return () => isParam = false  
  }, [books])
  
  function handleRegister(){
    history.push(`/register/${userId}`)
  }

  async function renderBook(){
    const response = await api.get(`bookcase/${userId}`, {
      params: {
        userId
      }
    })
    return response.data    
  }

  return (
    <div id="page-user-form" className="containerList">
        <Header 
          path={path}
          title="Minha Estante"
        />
      <div id="title">
        <button id="register" onClick={handleRegister}>
          Cadastrar Livro
        </button>
      </div>
      
      <main>
            { books.map((book) => {
              return <BookList key={book.title} {...book}/>
            })}
      </main>
    </div>
  )
}

export default Bookcase
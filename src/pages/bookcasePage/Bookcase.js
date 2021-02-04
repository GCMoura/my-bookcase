import React, { useState, useEffect } from 'react'
import firebase from '../../config/config'
import 'firebase/analytics'
import 'firebase/auth'
import 'firebase/database'
import { useHistory } from 'react-router-dom'

import BookList from '../../components/bookList/BookList'
import Header from '../../components/header/Header'

import './styles.css'

const baseURL = window.location.hostname.includes('localhost')
? 'http://localhost:3000/bookcase/'
: 'https://mybookcaseproject.web.app/bookcase/'

function Bookcase(){
  const history = useHistory()

  var userId = window.location.href.toString().replace(baseURL, '')

  const pathToRegister = `/register/${userId}`
  const pathToHome = `/${userId}`
    
  const [books, setBooks] = useState([])
   
  useEffect(() => { 
    renderBook()
  }, [])
  
  function handleRegister(){
    history.push(pathToRegister)
  }

  function renderBook(){

    var book = []
    
    firebase.database().ref('bookcase').on('value', (snapshot) => {
      snapshot.forEach((item) => {

        if(item.val().userId === userId){
          var title = item.val().title
          var author = item.val().author
          var genre = item.val().genre
          var cover = item.val().cover
          var note = item.val().note
  
          var data = {
            title,
            author,
            genre,
            cover,
            note
          }
  
          book.push(data)
        }
      })
      setBooks(book)
    })  
  }

  return (
    <div id="page-user-form" className="containerList">
        <Header 
          path={pathToHome}
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
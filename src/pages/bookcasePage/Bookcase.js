import React, { useState, useEffect } from 'react'
import firebase from '../../config/config'
import 'firebase/analytics'
import 'firebase/auth'
import 'firebase/database'
import { useHistory } from 'react-router-dom'

import BookList from '../../components/bookList/BookList'
import Header from '../../components/header/Header'

import './styles.css'

function Bookcase(){
  const history = useHistory()

  var userId = window.location.href.toString().replace("https://mybookcaseproject.web.app/", '')

  const path = `/${userId}`
  
  const [books, setBooks] = useState([])
   
  useEffect(() => { 
    let isParam = true
    renderBook()
    //   .then( book => {
    //   if (isParam) {
    //     setBooks(book)
    //   }
    // })
    // return () => isParam = false  
  }, [])
  
  function handleRegister(){
    history.push(`/register/${userId}`)
  }

  function renderBook(){

    var book = []
    
    firebase.database().ref('bookcase').on('value', (snapshot) => {
      snapshot.forEach((item) => {

        console.log(item.val().userId , ' - ', userId)

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
      })
      
      setBooks(book)
    })  
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
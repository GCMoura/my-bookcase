import React from 'react'

import './styles.css'

function BookList(props){
  return (
    <div id="container">
      <div id="book">
        <div id="book-cover">
          Cover
        </div>
        <div id="book-data">
          <p>Título: {props.title}</p>
          <p>Autor: {props.author}</p>
          <p>Gênero: {props.genre}</p>
          <p>Resumo: {props.resume}</p> 
        </div>
      </div>
    </div>
  )
}

export default BookList
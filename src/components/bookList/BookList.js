import React from 'react'
import deleteIcon from '../../assets/icons/delete.svg'
import buildAlert from '../../utils/buildAlert'
import api from '../../backend/api'

import './styles.css'

function BookList(props){

  var userId = window.location.href.toString().replace("http://localhost:3000/bookcase/", '')
  var title = props.title
  var author = props.author

  async function deleteBook(){

    const response = await api.delete(`bookcase/${userId}/${title}/${author}`, {
      params: {
        userId,
        title,
        author
      }
    })
    if(response.data === true){
      buildAlert('Livro removido com sucesso.', '#215992')
    }
    
  }
  return (
    <div id="container">
      <div id="book">
        <div id="book-cover">
        <img src={props.cover} alt="Capa"/>
        </div>
        <div id="book-data">
          <div>
            <p>Título: {props.title}</p>
            <p>Autor: {props.author}</p>
            <p>Gênero: {props.genre}</p>
            <p>Nota: {props.note}/5</p> 
          </div>
          <div>
            <img src={deleteIcon} alt="Delete" onClick={deleteBook}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookList
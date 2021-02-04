import React from 'react'
import firebase from '../../config/config'
import deleteIcon from '../../assets/icons/delete.svg'
import Alert from '../../utils/buildAlert'

import './styles.css'

function BookList(props){
 
  var title = props.title

  function deleteBook(){

    let result = window.confirm('Confirma a exclusão?')

    if(result){
      let db
      let id
      firebase.database().ref('bookcase').on('value', (snapshot) => {
        snapshot.forEach((item) => {
          if(item.val().title === title){
            db = item.ref.path.pieces_[0]
            id = item.ref.path.pieces_[1]
          }
        })
      })
  
      firebase.database().ref()
        .child(db + '/' + id)
        .remove()
        .then( () => {
          Alert('Livro removido com sucesso.', '#215992')
          setTimeout(() => {
            window.location.reload(true)
          }, 2000);
      })
        .catch(error => {
          Alert(error.message, '#dd614a')
      })
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
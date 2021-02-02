import React, { useState } from 'react'
import firebase from '../../config/config'
import { useHistory } from 'react-router-dom'
import Header from '../../components/header/Header'
import Input from '../../components/input/Input'
import buildAlert from '../../utils/buildAlert'

import warningIcon from '../../assets/icons/warning.svg'

function Register(){
  const history = useHistory()

  var userId = window.location.href.toString().replace("https://mybookcaseproject.web.app/", '')

  const path = `/bookcase/${userId}`

  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [genre, setGenre] = useState('')
  const [cover, setCover] = useState('')
  const [note, setNote] = useState('')
    
  async function handleSubmit(event) {
    event.preventDefault()

    var data ={
      userId, 
      title,
      author, 
      genre, 
      cover, 
      note
    }

    firebase.database().ref('bookcase').push(data)
    .then(() => {
      alert('livro cadastrado com sucesso')
    })
    .then(() => {
      setTimeout(() => {
        history.push(`/bookcase/${userId}`)
      }, 2000);
    })
    .catch(error => {
      console.log(error.code)
      console.log(error.message)
      alert('Falha ao cadastrar, verifique o erro no console')
    })


    // const response = await api.put(`register/${userId}`, {
    //   userId, 
    //   title,
    //   author, 
    //   genre, 
    //   cover, 
    //   note
    // })
    // if(response.data.length !== 0){
    //   buildAlert('Cadastro realizado com sucesso!', '#215992')
    //   setTimeout(() => {
    //     history.push(`/bookcase/${userId}`)
    //   }, 3000);
    // } else {
    //   buildAlert('Livro já cadastrado.', '#dd614a')
    // }
  }

  return (
    <div id="page-user-form" className="container">
      <Header 
        path={path}
        title="Minha Estante"
      />
      <main>
      <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>Dados do livro</legend>
            
            <Input 
              name="title" 
              label="Título" 
              value={title} 
              onChange={(event) => { setTitle(event.target.value) }}
            />
            <Input 
              name="author" 
              label="Autor"
              value={author} 
              onChange={(event) => { setAuthor(event.target.value) }}
            /> 
            <Input 
              name="genre" 
              label="Gênero"
              value={genre} 
              onChange={(event) => { setGenre(event.target.value) }}
            />     
            <Input 
              name="cover" 
              label="Capa"
              value={cover} 
              onChange={(event) => { setCover(event.target.value) }}
            />     
            <Input 
              name="note" 
              label="Nota"
              type='number'
              value={note}
              max='5'
              min='0'
              step='0.1'
              onChange={(event) => { setNote(event.target.value) }}
            /> 
                  
          </fieldset>
          <footer>
            <p>
              <img src={warningIcon} alt="Aviso"/>
              Importante! <br/>
              Preencha todos os dados
            </p>
            <button type="submit">
              Cadastrar livro
            </button>
          </footer>
        </form>

      </main>
    </div>

  )
}

export default Register
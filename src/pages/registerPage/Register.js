import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Textarea from '../../components/textarea/Textarea'
import Header from '../../components/header/Header'
import Input from '../../components/input/Input'
import api from '../../backend/api'

import warningIcon from '../../assets/icons/warning.svg'

import './styles.css'

function Register(){
  const history = useHistory()

  var userId = window.location.href.toString().replace("http://localhost:3000/register/", '')

  const path = `/bookcase/${userId}`

  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [genre, setGenre] = useState('')
  const [resume, setResume] = useState('')
    
  async function handleSubmit(event) {
    event.preventDefault()

    await api.put(`register/${userId}`, {
      userId, 
      title,
      author, 
      genre, 
      resume
    }).then(() => {
      alert('Cadastro realizado com sucesso!')
      history.push(`/bookcase/${userId}`)
    }).catch((err) => {
      alert(err)
    })
  }

  return (
    <div id="page-user-form" className="container">
      <Header 
        path={path}
        title="Minha Estante"
        description="Cadastre seu livro"
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
            <Textarea 
              name="resume" 
              label="Resumo"
              type="textarea"
              value={resume} 
              onChange={(event) => { setResume(event.target.value) }}
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
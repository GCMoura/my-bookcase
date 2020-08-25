import React from 'react'

import Textarea from '../../components/textarea/Textarea'
import Header from '../../components/header/Header'
import Input from '../../components/input/Input'

import warningIcon from '../../assets/icons/warning.svg'

import './styles.css'

function Register(){
  return (
    <div id="page-user-form" className="container">
      <Header 
        title="Minha Estante"
        description="Cadastre seu livro"
      />
      <main>
      <form >
          <fieldset>
            <legend>Dados do livro</legend>
            
            <Input 
              name="title" 
              label="Título" 
              // value={name} 
              // onChange={(event) => { setName(event.target.value) }}
            />
            <Input 
              name="author" 
              label="Autor"
              // value={password} 
              // type="password"
              // onChange={(event) => { setPassword(event.target.value) }}
            /> 
            <Input 
              name="genre" 
              label="Gênero"
              // value={password} 
              // type="password"
              // onChange={(event) => { setPassword(event.target.value) }}
            />     
            <Textarea 
              name="resume" 
              label="Resumo"
              // value={bio} 
              // onChange={(event) => { setBio(event.target.value) }} 
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
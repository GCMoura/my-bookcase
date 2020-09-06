import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Header from '../../components/header/Header'
import Input from '../../components/input/Input'
import buildAlert from '../../utils/buildAlert'
import api from '../../backend/api'

import warningIcon from '../../assets/icons/warning.svg'

import './styles.css'

function Login(){
  const history = useHistory()

  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  async function handleUserLogin(event){
    event.preventDefault()

    const response = await api.post('login', {
      name, 
      password 
    })

    if(response.data.length !== 0){
      buildAlert('Login efetuado com sucesso', '#215992')
      setTimeout(() => {
        history.push(`/${response.data}`)
      }, 3000);
    } else {
      buildAlert('Usuário ou senha incorreto. Por favor refaça o seu login.', '#dd614a')
    }
  }

  return (
    <div id="page-user-form" className="container">
      <Header 
        path='/'
        title="Minha Estante"
      />
      <main>
      <form onSubmit={handleUserLogin}>
          <fieldset>
            <legend>Faça seu login</legend>
            
            <Input 
              name="name" 
              label="Usuário" 
              value={name} 
              onChange={(event) => { setName(event.target.value) }}
            />
            <Input 
              name="password" 
              label="Senha"
              value={password} 
              type="password"
              onChange={(event) => { setPassword(event.target.value) }}
            />     
            <p>
              Ainda não possui uma conta?
              Cadastre-se gratuitamente clicando 
              <Link to="/account"> aqui</Link> 
            </p>       
          </fieldset>
          <footer>
            <p>
              <img src={warningIcon} alt="Aviso"/>
              Importante! <br/>
              Preencha todos os dados
            </p>
            <button type="submit">
              Fazer login
            </button>
          </footer>
        </form>

      </main>
    </div>
  )
}

export default Login
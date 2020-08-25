import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Header from '../../components/header/Header'
import Input from '../../components/input/Input'
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
      alert('Login efetuado com sucesso')      
      history.push(`/bookcase/${response.data}`)
    } else {
      alert('Usuário ou senha incorretos. Por favor refaça o seu login.')
    }
  }

  return (
    <div id="page-user-form" className="container">
      <Header 
        title="Minha Estante"
        description="Faça seu login"
      />
      <main>
      <form onSubmit={handleUserLogin}>
          <fieldset>
            <legend>Seus dados</legend>
            
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
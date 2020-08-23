import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Header from '../../components/header/Header'
import Input from '../../components/input/Input'
import api from '../../backend/api'

import warningIcon from '../../assets/icons/warning.svg'

import './styles.css'

function Account(){
  const history = useHistory()

  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  async function handleCreateUser(event){
    event.preventDefault()

    await api.post('account', {
      name, 
      password
    }).then(() => {
      alert('Cadastro realizado com sucesso!')
      history.push('/login')
    })
  }

  return (
    <div id="page-user-form" className="container">
      <Header 
        title="Minha Estante"
        description="Crie sua conta"
      />

      <main>
        <form onSubmit={handleCreateUser}>
          <fieldset>
            <legend>Seus dados</legend>
            
            <Input 
              name="name" 
              label="Usuário" 
              type="text"
              value={name} 
              onChange={ (event) => { setName(event.target.value) } }
            />
            <Input 
              name="password" 
              label="Senha"
              value={password} 
              type="password"
              onChange={ (event) => { setPassword(event.target.value) } }
            />      

          </fieldset>

          <footer>
            <p>
              <img src={warningIcon} alt="Aviso"/>
              Importante! <br/>
              Preencha todos os dados
            </p>
            <button type="submit">
              Criar conta
            </button>
          </footer>
        </form>
      </main>
    </div>
  )
}

export default Account
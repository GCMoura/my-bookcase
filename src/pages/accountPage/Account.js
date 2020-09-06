import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Header from '../../components/header/Header'
import Input from '../../components/input/Input'
import buildAlert from '../../utils/buildAlert'
import api from '../../backend/api'

import warningIcon from '../../assets/icons/warning.svg'

import './styles.css'

function Account(){
  const history = useHistory()

  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  async function handleCreateUser(event){
    event.preventDefault()

    const response = await api.post('account', {
      name, 
      password
    })
    
    if(response.data.length !== 0){
      buildAlert('Cadastro realizado com sucesso!', '#215992')
      setTimeout(() => {
        history.push('/login')
      }, 3000); 
    } else {
      buildAlert('Usuário já cadastrado. Refaça seu cadastro.', '#dd614a')
    }
  }

  return (
    <div id="page-user-form" className="container">
      <Header 
        path='/'
        title="Minha Estante"
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
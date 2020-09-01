import React from 'react'

import './styles.css'

function Input({ label, type, name, ...rest }) {
  return (
    <div className="input-block">
      <label htmlFor={ name }>{ label } </label>
      <input type={ type } id={ name } { ...rest } required/>
    </div>
  )
}

export default Input
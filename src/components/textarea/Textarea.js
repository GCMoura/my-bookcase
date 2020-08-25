import React from 'react'

import './styles.css'

function Textarea ({ label, name, ...rest }) {
  return (
    <div className="textarea-block">
      <label htmlFor={ name }>{ label } </label>
      <textarea  id={ name } { ...rest }/>
    </div>
  )
}

export default Textarea
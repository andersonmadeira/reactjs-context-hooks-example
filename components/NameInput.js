import React, { useContext } from 'react'
import LanguageContext from '../contexts/LanguageContext'

const NameInput = props => {
  const lang = useContext(LanguageContext)
  const label = lang === 'en' 
   ? 'Type your name' 
   : 'Digite seu nome'

  const onNameChange = event => {
    props.onChange(event.target.value)
  }

  return (
    <input
      type="text"
      name="name"
      placeholder={label}
      onChange={onNameChange}
      autoComplete="off"
    />
  )
}

export default NameInput

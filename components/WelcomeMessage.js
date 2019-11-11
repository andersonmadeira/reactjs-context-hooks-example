import React, { useContext } from 'react'
import LanguageContext from '../contexts/LanguageContext'
import ColorContext from '../contexts/ColorContext'

/**
 * Here we use the new hook useContext 
 * to read value from a context, pretty simple 
 * and cleaner than the old aproach with Consumers
 */
const WelcomeMessage = ({ name }) => {
  const color = useContext(ColorContext)
  const lang = useContext(LanguageContext)
  const message = lang === 'en'
      ? `Welcome ${name}!`
      : `Bem vindo ${name}!`

  return name 
   ? <p style={{color: color}}>{message}</p> 
   : null
}

export default WelcomeMessage

import React, { useContext } from 'react'
import LanguageContext from '../contexts/LanguageContext'

/**
 * Here we access the context through this.context
 * when we only care about one single context
 */
const Title = () => {
  const lang = useContext(LanguageContext)
  const title = lang === 'en' 
    ? 'Greetings!' 
    : 'Saudações!'

  return (
    <h3>{title}</h3>
  )
}

export default Title

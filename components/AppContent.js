import React, { useState } from 'react'
import Title from './Title'
import NameInput from './NameInput'
import WelcomeMessage from './WelcomeMessage'

/**
 * This intermediate component doesn't consume
 * context data, it just manages name changes
 * and sends those changes to a custom message comp
 */
const AppContent = () => {
  const [name, setName] = useState('')

  console.log('AppContent.render')

  return (
    <>
      <Title />
      <NameInput onChange={setName} />
      <WelcomeMessage name={name} />
    </>
  )
}

export default AppContent

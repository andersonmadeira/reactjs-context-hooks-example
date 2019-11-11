import React, { useState } from 'react'
import AppContent from './AppContent'
import ColorContext from '../contexts/ColorContext'
import LanguageContext from '../contexts/LanguageContext'

const App = () => {
  const [color, changeColor] = useState('blue')
  const [lang, changeLang] = useState('en')

  return (
    <>
      <p>Color?</p>
      <ul>
        <li>
          <a href="#?" onClick={() => changeColor("blue")}>
            blue
          </a>
        </li>
        <li>
          <a href="#?" onClick={() => changeColor("red")}>
            red
          </a>
        </li>
      </ul>
      <p>Language?</p>
      <ul>
        <li>
          <a href="#?" onClick={() => changeLang("pt-br")}>
            pt-br
          </a>
        </li>
        <li>
          <a href="#?" onClick={() => changeLang("en")}>
            en
          </a>
        </li>
      </ul>
      {/* Color and Language contexts' values are managed
          by the App state, whenever the user changes the color
          or language, the contexts are provided with the updated
          values that are then pushed down to nested components
          that consume those values */}
      <ColorContext.Provider value={color}>
        <LanguageContext.Provider value={lang}>
          <AppContent />
        </LanguageContext.Provider>
      </ColorContext.Provider>
    </>
  )
}

export default App

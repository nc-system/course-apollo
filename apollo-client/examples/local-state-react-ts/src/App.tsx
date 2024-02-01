
import { useState } from 'react'
import './App.css'

// Components
import Monitor from './modules/clients/views/Monitor'
import Control from './modules/clients/views/Control'

function App() {

  return (
    <>
      <Monitor/>
      <hr/>
      <Control/>
    </>
  )
}

export default App

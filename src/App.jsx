import { useState } from 'react'
import "./styles.css"
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'

function App() {

  return (
    <>
      <div className='bar'>
        <h3 className='name'>Elias</h3>
        <DarkModeOutlinedIcon className='dark-mode' fontSize='large'/>
      </div>
      <div>
        <h1 className='ocupation'>Frontend</h1>
        <h1 className='ocupation'>Developer</h1>
        <h4 className='ocupation-message'>I like to craft solid and scalable frontend projects with great user experiences.</h4>
        <h4 className='ocupation-message-orange'>My name's Elias Palmer</h4>
      </div>
    </>
  )
}

export default App

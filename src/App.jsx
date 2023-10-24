import { useState } from 'react'
import "./styles.css"
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'

function App() {

  return (
    <>
      <nav>
            <h1 className='name'>Elias</h1>
            <div className="right-nav">
                <DarkModeOutlinedIcon className='dark-mode' fontSize='large'/>
                <a
                  className="resume"
                  href="#"
                >
                  Resume
                </a>
            </div>
          </nav>
      <div className='info'>
        <h2 className='ocupation-message-orange'>Elias Palmer</h2>
        <h3 className='ocupation'>Frontend</h3>
        <h3 className='ocupation'>Developer</h3>
        <p className='ocupation-message'>I like to craft solid and scalable frontend projects with great user experiences.</p>
        
      </div>
    </>
  )
}

export default App

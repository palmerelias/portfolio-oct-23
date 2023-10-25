import { useState } from 'react'
import "./styles.css"
import Profile from "./profile.jpg"
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import GitHubIcon from '@mui/icons-material/GitHub';

function App() {

  return (
    <>
      <nav>
            <h1 className='name-logo'>Elias</h1>
            <div className="right-nav">
                <DarkModeOutlinedIcon className='dark-mode' fontSize='large'/>
                <a className="resume" href="#" >Resume</a>
            </div>
      </nav>
      <div className='info'>
        <h2 className='name'>Elias Palmer</h2>
        <h3 className='ocupation'>Frontend Dev Student</h3>
        <p className='ocupation-message'>I like to craft solid and scalable frontend projects with great user experiences.</p>
        <img className="profile-img" src={Profile} />
      </div>
      <div className='links'>
        <a href="https://github.com/palmerelias"><GitHubIcon/></a>
      </div>
    </>
  )
}

export default App

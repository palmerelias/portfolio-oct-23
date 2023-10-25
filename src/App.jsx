import React from 'react'
import "./styles.css"
import Profile from "./profile.jpg"
import ColorLensIcon from '@mui/icons-material/ColorLens';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function App() {

  return (
    <>
      <nav>
            <h1 className='name-logo'>Elias</h1>
            <div className="right-nav">
                <ColorLensIcon className='color-lens' fontSize='large'/>
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
        <a href="https://github.com/palmerelias"><GitHubIcon className='color-lens' fontSize='large'/></a>
        <a href="#"><LinkedInIcon className='color-lens' fontSize='large' /></a>
      </div>
    </>
  )
}

export default App

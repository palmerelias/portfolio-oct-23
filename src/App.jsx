import { useState} from 'react'
import "./styles.css"
import Profile from "./profile.jpg"
import ColorLensIcon from '@mui/icons-material/ColorLens';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function App() {
  const [colorTheme, setColorTheme] = useState(true)

  function changeColor() {
    setColorTheme(!colorTheme)

  }


  return (
    <main className={colorTheme ? "body" : "body-dark"}>
      <nav>
            <h1 className={colorTheme ? "name-logo" : "name-logo-dark"}>Elias</h1>
            <div className="right-nav">
                <ColorLensIcon className='color-lens' fontSize='large' onClick={changeColor}/>
                <a className={colorTheme ? "resume" : "resume-dark"} href="#" >Resume</a>
            </div>
      </nav>
      <div className='info'>
        <h2 className='name'>Elias Palmer</h2>
        <hr className='name-underline'></hr>
        <h3 className={colorTheme ? 'ocupation' : 'ocupation-dark'}>Frontend Dev Student</h3>
        <p className={colorTheme ? 'ocupation-message' : 'ocupation-message-dark'}>I like to craft solid and scalable frontend projects with great user experiences.</p>
        <img className="profile-img" src={Profile} />
      </div>
      <div className='links'>
        <a href="https://github.com/palmerelias"><GitHubIcon className='color-lens' fontSize='large'/></a>
        <a href="https://www.linkedin.com/in/elias-palmer-944357297/"><LinkedInIcon className='color-lens' fontSize='large' /></a>
      </div>
    </main>
  )
}

export default App

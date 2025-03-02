import "../styles/intro.css"
import { useEffect, useState } from "react"

function Intro() {
  const [extraClasses, setExtraClasses] = useState("")
  useEffect(() => {
    setExtraClasses("visible")
  }, [])

  return (
    <div id='intro' className={extraClasses}>
      <div className="intro-text">
        <p>
          I'm <span>Olha Solovei</span>,
        </p>
        <p>Frontend developer </p>
        <a href='#nav-contact'>Contact me</a>
      </div>
      <div className='img-box'>
        <img src='/olha-portrait.png' alt='portrait' />
      </div>
    </div>
  )
}

export default Intro

import "../styles/intro.css"
import { useEffect, useState } from 'react'


function Intro() {
    const [extraClasses, setExtraClasses] = useState('')
useEffect(() => {
    setExtraClasses('visible')
}, [])

  return (
    <div id='intro' className={extraClasses}>
      <div>
        <p>
          I'm <span>Olha Solovei</span>,
        </p>
        <p>Frontend developer </p>
        <p>(React.js) </p>
        <a href='#top'>Contact me</a>
      </div>
      <div>
        <img
          src='/my-photo-portfolio2.jpg'
          alt='portrait'
        />
      </div>
    </div>
  )
}

export default Intro

// import styles from "../styles/Intro.module.css"
import { useEffect, useState } from 'react'


function Intro() {
    const [classes, setClasses] = useState('')
useEffect(() => {
    setClasses('visible')
}, [])

  return (
    <div id='intro' className={classes}>
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

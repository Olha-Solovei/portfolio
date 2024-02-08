import "../styles/skills.css"
import { useInView } from "react-intersection-observer"
import { useEffect, useState } from "react"

function Skills() {
  const [active, setActive] = useState(false)
  const { ref, inView } = useInView({
    threshold: 0.1,
  })
  useEffect(() => {
    if (inView) {
      setActive(true)
    }
  }, [inView])

  return (
    <div
      id='skills'
      ref={ref}
      className={active ? "visible" : ""}>
      <h2>Skills</h2>
      <div className='skills'>
        <div className='skillbox'>
          <img src='../skills/html-css-js.jpg' alt='' />
          <span>HTML, CSS, JS</span>
        </div>
        <div className='skillbox'>
          <img src='../skills/react-img.jpg' alt='' />
          <span>React</span>
        </div>
        <div className='skillbox'>
          <img src='../skills/svelte-img.jpg' alt='' />
          <span>Svelte</span>
        </div>
        <div className='skillbox'>
          <img src='../skills/css-fr.jpg' alt='' />
          <span>CSS-frameworks</span>
        </div>
        <div className='skillbox'>
          <img src='../skills/git-img.jpg' alt='' />
          <span>Version Control/Git</span>
        </div>
        <div className='skillbox'>
          <img src='../skills/unit-testing.jpg' alt='' />
          <span>Unit-testing</span>
        </div>
        <div className='skillbox'>
          <img src='../skills/figma-img.jpg' alt='' />
          <span>Figma</span>
        </div>
        <div className='skillbox'>
          <img src='../skills/dom-img.jpg' alt='' />
          <span>DOM Manipulation</span>
        </div>
        <div className='skillbox'>
          <img src='../skills/responsive-img.jpg' alt='' />
          <span>Responsive Design</span>
        </div>
        <div className='skillbox'>
          <img src='../skills/inter-img.jpg' alt='' />
          <span>Interpersonal Skills</span>
        </div>
        <div className='skillbox'>
          <img src='../skills/eng-img.jpg' alt='' />
          <span>Advanced English level</span>
        </div>
      </div>
    </div>
  )
}

export default Skills

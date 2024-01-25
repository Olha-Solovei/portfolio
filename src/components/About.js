import styles from '../styles/About.module.css'

function About() {
  return (
    <div id={styles.about}>
      <h2>About</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing
        elit, sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua. Ut enim ad minim veniam, quis
        nostrud exercitation ullamco laboris nisi ut aliquip
        ex ea commodo consequat. <span>Duis aute irure dolor in
        reprehenderit in voluptate.</span> Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia
        deserunt mollit anim id est laborum.
      </p>
    </div>
  )
}

export default About

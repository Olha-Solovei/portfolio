import styles from "../styles/Header.module.css"
import Navbar from "./Navbar"

function Header() {
  return (
    <header>
      <div>
    <a className={styles.link} href="#top">
    <img
          className={styles.logo}
          src='/icon-portfolio.png'
          alt='logo'
        />
    </a>
      </div>
      <Navbar />
    </header>
  )
}

export default Header

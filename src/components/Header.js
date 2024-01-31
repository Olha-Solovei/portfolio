import styles from "../styles/Header.module.css"
import Navbar from "./Navbar"

function Header() {
  return (
    <header>
      <div>
        <img
          className={styles.logo}
          src='/icon-portfolio.png'
          alt='logo'
        />
      </div>
      <Navbar />
    </header>
  )
}

export default Header

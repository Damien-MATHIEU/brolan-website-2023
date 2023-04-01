import React, { useState } from 'react'
import styles from './internal/header.module.scss'
import { Hexagon } from 'react-feather'

function Header() {
  const [showMenu, setShowMenu] = useState(false)

  function toggleMenu() {
    setShowMenu(!showMenu)
  }

  return (
    <nav className={styles.container}>
      <div className={styles.logoContainer}>
        <Hexagon />
      </div>
      <div className={styles.linksContainer}>
        <a href="#" className={styles.linkContainer}>
          <p>Présentation</p>
        </a>
        <a href="#" className={styles.linkContainer}>
          <p>Les jeux</p>
        </a>
        <a href="#" className={styles.linkContainer}>
          <p>Equipes</p>
        </a>
        <a href="#" className={styles.linkContainer}>
          <p>S inscrire</p>
        </a>
      </div>
    </nav>
  )
}

export default Header

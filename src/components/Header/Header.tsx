import React, { useState, useEffect } from 'react'
import styles from './internal/header.module.scss'
import { Hexagon, Menu } from 'react-feather'

function Header() {
  const [showMenuIcon, setShowMenuIcon] = useState(false)
  const [showMenu, setShowMenu] = useState(false)

  function toggleMenu() {
    console.log('click')
    setShowMenu(!showMenu)
  }

  function handleBurgerButton() {
    if (window.innerWidth <= 768) {
      setShowMenuIcon(true)
    } else {
      setShowMenuIcon(false)
    }
  }

  useEffect(() => {
    handleBurgerButton()
  }, [])

  window.addEventListener('resize', handleBurgerButton)

  return (
    <nav className={styles.container}>
      <div className={styles.logoContainer}>
        <Hexagon />
      </div>
      {(showMenu || !showMenuIcon) && (
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
      )}
      {showMenuIcon && (
        <div
          onClick={() => {
            toggleMenu()
          }}>
          <Menu />
        </div>
      )}
    </nav>
  )
}

export default Header

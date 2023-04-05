import React, { useState, useEffect } from 'react'
import styles from './internal/header.module.scss'
import { Hexagon, Menu, X } from 'react-feather'

function Header() {
  const [showMenuIcon, setShowMenuIcon] = useState(false)
  const [showMenu, setShowMenu] = useState(false)

  function toggleMenu() {
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
      <div className={styles.subContainer}>
        <div className={styles.logoContainer}>
          <Hexagon color="#f7f7f2" size={24} />
        </div>
        {showMenuIcon && (
          <div
            className={styles.burgerMenuContainer}
            onClick={() => {
              toggleMenu()
            }}>
            {showMenu ? <X color="#f7f7f2" size={24} /> : <Menu color="#f7f7f2" size={24} />}
          </div>
        )}

        <div
          className={`${styles.linksContainer}
        ${showMenu || !showMenuIcon ? styles.showMobile : undefined}
         ${showMenuIcon ? styles.linksContainerActive : undefined}
        `}>
          <a href="#" className={styles.linkContainer}>
            <p className={styles.link}>Présentation</p>
          </a>
          <a href="#" className={styles.linkContainer}>
            <p className={styles.link}>Les jeux</p>
          </a>
          <a href="#" className={styles.linkContainer}>
            <p className={styles.link}>Equipes</p>
          </a>
          <a href="#" className={styles.linkContainer}>
            <p className={styles.link}>S inscrire</p>
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Header

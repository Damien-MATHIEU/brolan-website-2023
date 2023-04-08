import React, { useState, useEffect } from 'react'
import styles from './internal/header.module.scss'
import { Menu, X } from 'react-feather'
import logo from './../../assets/Logos/LogoBrolan.svg'
import ButtonOutline from '../Buttons/ButtonOutline/ButtonOutline'

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

  function handleMobileClick() {
    if (window.innerWidth <= 768) {
      setShowMenu(!showMenu)
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
          <img src={logo} className={styles.logo} alt="Logo de la Brolan" />
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
          <a href="/" className={styles.linkContainer} onClick={() => handleMobileClick()}>
            <p className={styles.link}>Accueil</p>
          </a>
          <a href="/games" className={styles.linkContainer} onClick={() => handleMobileClick()}>
            <p className={styles.link}>Jeux</p>
          </a>
          <a href="/contact" className={styles.linkContainer} onClick={() => handleMobileClick()}>
            <p className={styles.link}>Contact</p>
          </a>
          <a
            href="https://forms.gle/JV7X5dSvTJ6KSG5w6"
            target="blank"
            rel="noopener noreferrer"
            className={styles.linkContainer}
            onClick={() => handleMobileClick()}>
            <ButtonOutline
              fontSize="small"
              header={true}
              propsClassName={styles.buttonMobile}
              center={true}>
              S&apos;inscrire
            </ButtonOutline>
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Header

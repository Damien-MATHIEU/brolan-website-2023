import React, { useState, useEffect } from 'react'
import styles from './internal/header.module.scss'
import { X } from 'react-feather'
import logo from './../../assets/Logos/LogoBrolan.svg'
import ButtonOutline from '../Buttons/ButtonOutline/ButtonOutline'
import { Link } from 'react-router-dom'

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
          <Link to="/">
            <img src={'/logo.png'} className={styles.logo} alt="Logo de la Brolan" />
          </Link>
        </div>
        {showMenuIcon && (
          <div
            className={styles.burgerMenuContainer}
            onClick={() => {
              toggleMenu()
            }}>
            {showMenu ? (
              <X color="#f7f7f2" size={24} />
            ) : (
              <div className={styles.burgerMenu}>
                <div className={styles.burgerMenuBigStroke}></div>
                <div className={styles.burgerMenuLittleStroke}></div>
              </div>
            )}
          </div>
        )}

        <div
          className={`${styles.linksContainer}
        ${showMenu && showMenuIcon ? styles.showMobile : undefined}
        `}>
          <Link to="/" className={styles.linkContainer} onClick={() => handleMobileClick()}>
            <p className={styles.link}>Accueil</p>
          </Link>
          <Link to="/games" className={styles.linkContainer} onClick={() => handleMobileClick()}>
            <p className={styles.link}>Jeux</p>
          </Link>
          <Link to="/shop" className={styles.linkContainer} onClick={() => handleMobileClick()}>
            <p className={styles.link}>Boutique</p>
          </Link>
          <Link to="/contact" className={styles.linkContainer} onClick={() => handleMobileClick()}>
            <p className={styles.link}>Contact</p>
          </Link>
          <Link
            to="https://forms.gle/RKqX5eDDmtaPge1a9"
            className={styles.linkContainer}
            target="_blank"
            onClick={() => handleMobileClick()}>
            <ButtonOutline fontSize="small">S&apos;inscrire</ButtonOutline>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Header

import React from 'react'
import styles from './internal/contact.module.scss'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import TextNeon from '../../components/NeonComponents/TextNeon/TextNeon'
import LogoDiscord from './../../assets/Logos/LogoDiscord.svg'
import LogoTwitter from './../../assets/Logos/LogoTwitter.svg'
import LogoMail from './../../assets/Logos/LogoMail.svg'
import IconNeon from '../../components/NeonComponents/IconNeon/IconNeon'
import { Link } from 'react-router-dom'

function Contact() {
  return (
    <>
      <Header />
      <section className={styles.container}>
        <TextNeon propsClassName={styles.title}>Contact</TextNeon>
        <div className={styles.iconsContainer}>
          <Link
            to="https://discord.gg/jDmFTYwv"
            target="_blank"
            rel="noreferrer"
            className={styles.iconContainer}>
            <IconNeon icon={LogoDiscord} color="pink" />
            <h4 className={styles.iconText}>Discord</h4>
          </Link>
          <Link
            to="https://twitter.com/BROLAN_OFF"
            target="_blank"
            rel="noreferrer"
            className={styles.iconContainer}>
            <IconNeon
              icon={LogoTwitter}
              color="aquamarine"
              propsClassName={styles.iconTwitterMarginBottom}
            />
            <h4 className={styles.iconText}>Twitter</h4>
          </Link>
          <Link
            to={'mailto:contact.brolan@gmail.com'}
            target="_blank"
            rel="noreferrer"
            className={styles.iconContainer}>
            <IconNeon icon={LogoMail} color="pink" />
            <h4 className={styles.iconText}>Mail</h4>
          </Link>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Contact

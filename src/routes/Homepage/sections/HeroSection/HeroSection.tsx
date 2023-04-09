import React from 'react'
import styles from './internal/heroSection.module.scss'
import TextNeon from './../../../../components/TextNeon/TextNeon'
import ButtonOutline from './../../../../components/Buttons/ButtonOutline/ButtonOutline'
import Countdown from './../../../../components/Countdown/Countdown'
import ScrollIcon from './../../../../components/ScrollIcon/ScrollIcon'
import { Link } from 'react-router-dom'

function HeroSection() {
  return (
    <section className={styles.container}>
      <TextNeon
        color="pink"
        blinkingArrayFast={[2]}
        blinkingArraySlow={[4]}
        propsClassName={styles.title}>
        BROLAN
      </TextNeon>
      <Countdown propsClassName={styles.countdown} />
      <Link to="https://forms.gle/JV7X5dSvTJ6KSG5w6" target="blank" rel="noopener noreferrer">
        <ButtonOutline propsClassName={styles.registerButton} center={true} fontSize="large">
          S&apos;inscrire
        </ButtonOutline>
      </Link>
      <ScrollIcon propsClassName={styles.scrollIcon} />
    </section>
  )
}

export default HeroSection

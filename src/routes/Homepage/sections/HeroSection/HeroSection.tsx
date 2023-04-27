import React from 'react'
import styles from './internal/heroSection.module.scss'
import TextNeon from './../../../../components/NeonComponents/TextNeon/TextNeon'
import ButtonOutline from './../../../../components/Buttons/ButtonOutline/ButtonOutline'
import Countdown from './../../../../components/Countdown/Countdown'
import ScrollIcon from './../../../../components/ScrollIcon/ScrollIcon'

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
      <ButtonOutline
        propsClassName={styles.registerButton}
        center={true}
        fontSize="large"
        propsOnClick="https://forms.gle/JV7X5dSvTJ6KSG5w6"
        openNewTab={true}>
        S&apos;inscrire
      </ButtonOutline>
      <ScrollIcon propsClassName={styles.scrollIcon} />
    </section>
  )
}

export default HeroSection

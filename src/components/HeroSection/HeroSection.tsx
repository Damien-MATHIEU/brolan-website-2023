import React from 'react'
import styles from './internal/heroSection.module.scss'
import TextNeon from '../TextNeon/TextNeon'
import ButtonOutline from '../Buttons/ButtonOutline/ButtonOutline'
import Countdown from '../Countdown/Countdown'
import ScrollIcon from '../ScrollIcon/ScrollIcon'

function HeroSection() {
  return (
    <div className={styles.container}>
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
        fontSize="large">{`S'inscrire`}</ButtonOutline>
      <ScrollIcon propsClassName={styles.scrollIcon} />
    </div>
  )
}

export default HeroSection

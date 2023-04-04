import React from 'react'
import styles from './internal/heroSection.module.scss'
import TextNeon from '../TextNeon/TextNeon'
import ButtonOutline from '../Buttons/ButtonOutline/ButtonOutline'
import Countdown from '../Countdown/Countdown'

function HeroSection() {
  return (
    <div>
      <TextNeon
        color="pink"
        blinkingArrayFast={[2]}
        blinkingArraySlow={[4]}
        propsClassName={styles.title}>
        BROLAN
      </TextNeon>
      <Countdown />
      <ButtonOutline propsClassName={styles.centerButton}>{`S'inscrire`}</ButtonOutline>
    </div>
  )
}

export default HeroSection

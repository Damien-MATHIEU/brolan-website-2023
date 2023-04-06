import React from 'react'
import styles from './internal/carouselSection.module.scss'
import Carousel from '../../../../components/Carousel/Carousel'
import ButtonOutline from '../../../../components/Buttons/ButtonOutline/ButtonOutline'
import TextNeon from '../../../../components/TextNeon/TextNeon'

function CarouselSection() {
  return (
    <div className={styles.container}>
      <TextNeon propsClassName={styles.subTitle} blinkingArraySlow={[3]}>
        JEUX
      </TextNeon>
      <Carousel />
      <ButtonOutline center={true} fontSize="medium">
        Tous les jeux
      </ButtonOutline>
    </div>
  )
}

export default CarouselSection

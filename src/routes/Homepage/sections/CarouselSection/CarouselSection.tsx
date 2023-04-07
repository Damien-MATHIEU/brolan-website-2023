import React from 'react'
import styles from './internal/carouselSection.module.scss'
import Carousel from '../../../../components/Carousel/Carousel'
import ButtonOutline from '../../../../components/Buttons/ButtonOutline/ButtonOutline'
import TextNeon from '../../../../components/TextNeon/TextNeon'

function CarouselSection() {
  return (
    <section className={styles.container} id="carouselSection">
      <TextNeon propsClassName={styles.subTitle} blinkingArraySlow={[3]}>
        JEUX
      </TextNeon>
      <Carousel />
      <ButtonOutline center={true}>Tous les jeux</ButtonOutline>
    </section>
  )
}

export default CarouselSection

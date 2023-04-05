import React from 'react'
import styles from './internal/carouselSection.module.scss'
import Carousel from '../../../../components/Carousel/Carousel'

function CarouselSection() {
  return (
    <div className={styles.container}>
      <Carousel />
    </div>
  )
}

export default CarouselSection

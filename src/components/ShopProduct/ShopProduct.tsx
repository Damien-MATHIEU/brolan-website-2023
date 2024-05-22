import React from 'react'
import styles from './internal/shopProduct.module.scss'
import ButtonOutline from '../Buttons/ButtonOutline/ButtonOutline'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Scrollbar } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

export default function ShopProduct({ name, price, images }: ShopProduct) {
  function sliderImages() {
    if (images.length <= 1) {
      return <img src={images[0]} className={styles.image} />
    }
    const slides = images.map((image, index) => {
      return (
        <SwiperSlide key={index}>
          <img src={image} className={styles.carouselImage} />
        </SwiperSlide>
      )
    })
    return (
      <div className={styles.carouselContainer}>
        <Swiper
          loop={true}
          grabCursor={true}
          scrollbar={{
            hide: true
          }}
          pagination={{
            clickable: true
          }}
          modules={[Scrollbar, Pagination]}
          className={styles.carousel}>
          {slides}
        </Swiper>
      </div>
    )
  }
  return (
    <div className={styles.container}>
      {sliderImages()}
      <div className={styles.infosContainer}>
        <div className={styles.namePriceContainer}>
          <h3 className={styles.name}>{name}</h3>
          <h3 className={styles.price}>{price}</h3>
        </div>
        <Link
          to={
            'https://docs.google.com/forms/d/e/1FAIpQLSevQAu11a2VbZ__WPGPxb6q3fHZhYxqrPdxUh1A4mnuWD8auA/viewform?usp=sf_link'
          }
          target="_blank"
          className={styles.linkContainer}>
          <ButtonOutline>Commander</ButtonOutline>
        </Link>
      </div>
    </div>
  )
}

interface ShopProduct {
  name: string
  price: string
  images: string[]
}

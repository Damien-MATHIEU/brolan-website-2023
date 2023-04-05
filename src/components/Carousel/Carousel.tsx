import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import styles from './internal/carousel.module.scss'
import FallGuys from './../../assets/Games/FallGuys.png'
import Fortnite from './../../assets/Games/Fortnite.png'
import GeoGuesser from './../../assets/Games/GeoGuesser.png'
import Minecraft from './../../assets/Games/Minecraft.png'
import Osu from './../../assets/Games/Osu.png'
import TrackMania from './../../assets/Games/TrackMania.png'

function Carousel() {
  return (
    <div>
      <Swiper navigation={true} modules={[Navigation, Pagination]} className={styles.mySwiper}>
        <SwiperSlide>{FallGuys}</SwiperSlide>
        <SwiperSlide>{Fortnite}</SwiperSlide>
        <SwiperSlide>{GeoGuesser}</SwiperSlide>
        <SwiperSlide>{Minecraft}</SwiperSlide>
        <SwiperSlide>{Osu}</SwiperSlide>
        <SwiperSlide>{TrackMania}</SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Carousel

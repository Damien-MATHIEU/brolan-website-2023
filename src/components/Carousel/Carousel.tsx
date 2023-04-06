import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Scrollbar } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
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
      <Swiper
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false
        }}
        grabCursor={true}
        pagination={{
          clickable: true
        }}
        scrollbar={{
          hide: true
        }}
        modules={[Autoplay, Pagination, Scrollbar]}
        className={styles.mySwiper}>
        <SwiperSlide>
          <div className={styles.carouselSlideContainer}>
            <img src={TrackMania} className={styles.carouselImage} />
            <div className={styles.carouselTextContainer}>
              <p className={styles.carouselText}>TrackMania</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={styles.carouselSlideContainer}>
            <img src={Minecraft} className={styles.carouselImage} />
            <div className={styles.carouselTextContainer}>
              <p className={styles.carouselText}>Minecraft</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={styles.carouselSlideContainer}>
            <img src={Fortnite} className={styles.carouselImage} />
            <div className={styles.carouselTextContainer}>
              <p className={styles.carouselText}>Fortnite</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={styles.carouselSlideContainer}>
            <img src={GeoGuesser} className={styles.carouselImage} />
            <div className={styles.carouselTextContainer}>
              <p className={styles.carouselText}>GeoGuesser</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={styles.carouselSlideContainer}>
            <img src={FallGuys} className={styles.carouselImage} />
            <div className={styles.carouselTextContainer}>
              <p className={styles.carouselText}>Fall Guys</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={styles.carouselSlideContainer}>
            <img src={Osu} className={styles.carouselImage} />
            <div className={styles.carouselTextContainer}>
              <p className={styles.carouselText}>Osu</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Carousel

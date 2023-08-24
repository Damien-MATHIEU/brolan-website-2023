import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Scrollbar } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

import styles from './internal/carousel.module.scss'
import FallGuys from './../../assets/Games/FallGuys.png'
import Fortnite from './../../assets/Games/Fortnite.png'
import GeoGuessr from './../../assets/Games/GeoGuessr.png'
import Minecraft from './../../assets/Games/Minecraft.png'
import Osu from './../../assets/Games/Osu.png'
import TrackMania from './../../assets/Games/TrackMania.png'
import Darts from './../../assets/Games/darts.jpg'
import Petanque from './../../assets/Games/petanque.jpg'
import PingPong from './../../assets/Games/pingPong.jpg'
import Tennis from './../../assets/Games/tennis.jpg'
import Triathlon from './../../assets/Games/triathlon.jpg'

function Carousel() {
  return (
    <div className={styles.container}>
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
        className={styles.carousel}>
        <SwiperSlide>
          <div className={styles.carouselSlideContainer}>
            <img
              src={TrackMania}
              className={styles.carouselImage}
              alt="Une image du jeu vidéo TrackMania"
            />
            <div className={styles.carouselTextContainer}>
              <p className={styles.carouselText}>TrackMania</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={styles.carouselSlideContainer}>
            <img
              src={Tennis}
              className={styles.carouselImage}
              alt="Une image d'une rasuette et une balle de tennis"
            />
            <div className={styles.carouselTextContainer}>
              <p className={styles.carouselText}>Tennis</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={styles.carouselSlideContainer}>
            <img
              src={Minecraft}
              className={styles.carouselImage}
              alt="Une image du jeu vidéo Minecraft"
            />
            <div className={styles.carouselTextContainer}>
              <p className={styles.carouselText}>Minecraft</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={styles.carouselSlideContainer}>
            <img
              src={Petanque}
              className={styles.carouselImage}
              alt="Une image de boules de pétanques"
            />
            <div className={styles.carouselTextContainer}>
              <p className={styles.carouselText}>Pétanque</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={styles.carouselSlideContainer}>
            <img
              src={Fortnite}
              className={styles.carouselImage}
              alt="Une image du jeu vidéo Fortnite"
            />
            <div className={styles.carouselTextContainer}>
              <p className={styles.carouselText}>Fortnite</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={styles.carouselSlideContainer}>
            <img src={Darts} className={styles.carouselImage} alt="Une partie de fléchette" />
            <div className={styles.carouselTextContainer}>
              <p className={styles.carouselText}>Fléchettes</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={styles.carouselSlideContainer}>
            <img
              src={GeoGuessr}
              className={styles.carouselImage}
              alt="Une image du jeu vidéo GeoGuessr"
            />
            <div className={styles.carouselTextContainer}>
              <p className={styles.carouselText}>GeoGuessr</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={styles.carouselSlideContainer}>
            <img
              src={PingPong}
              className={styles.carouselImage}
              alt="Une raquette et une balle de ping pong "
            />
            <div className={styles.carouselTextContainer}>
              <p className={styles.carouselText}>Ping Pong</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={styles.carouselSlideContainer}>
            <img
              src={FallGuys}
              className={styles.carouselImage}
              alt="Une image du jeu vidéo Fall Guys"
            />
            <div className={styles.carouselTextContainer}>
              <p className={styles.carouselText}>Fall Guys</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={styles.carouselSlideContainer}>
            <img
              src={Triathlon}
              className={styles.carouselImage}
              alt="Un homme sur une piste de course"
            />
            <div className={styles.carouselTextContainer}>
              <p className={styles.carouselText}>Triathlon</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={styles.carouselSlideContainer}>
            <img src={Osu} className={styles.carouselImage} alt="Une image du jeu vidéo Osu" />
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

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Scrollbar } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import styles from './internal/carousel.module.scss'

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
              src={'/games/rocketLeague.webp'}
              className={styles.carouselImage}
              alt="Une image du jeu vidéo Rocket League"
            />
            <div className={styles.carouselTextContainer}>
              <p className={styles.carouselText}>Rocket League</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={styles.carouselSlideContainer}>
            <img
              src={'/games/tennis.webp'}
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
              src={'/games/squiz.webp'}
              className={styles.carouselImage}
              alt="Une image du mot Quiz"
            />
            <div className={styles.carouselTextContainer}>
              <p className={styles.carouselText}>sQuiz</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={styles.carouselSlideContainer}>
            <img
              src={'/games/petanque.webp'}
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
              src={'/games/tft.webp'}
              className={styles.carouselImage}
              alt="Une image du jeu vidéo TeamFight Tactics"
            />
            <div className={styles.carouselTextContainer}>
              <p className={styles.carouselText}>TFT</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={styles.carouselSlideContainer}>
            <img
              src={'/games/darts.webp'}
              className={styles.carouselImage}
              alt="Une partie de fléchette"
            />
            <div className={styles.carouselTextContainer}>
              <p className={styles.carouselText}>Fléchettes</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={styles.carouselSlideContainer}>
            <img
              src={'/games/Minecraft.webp'}
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
              src={'/games/pingPong.webp'}
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
              src={'/games/knightSquadTwo.webp'}
              className={styles.carouselImage}
              alt="Une image du jeu vidéo Knight Squad 2"
            />
            <div className={styles.carouselTextContainer}>
              <p className={styles.carouselText}>Knight Squad 2</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={styles.carouselSlideContainer}>
            <img
              src={'/games/triathlon.webp'}
              className={styles.carouselImage}
              alt="Un homme sur une piste de course"
            />
            <div className={styles.carouselTextContainer}>
              <p className={styles.carouselText}>Triathlon</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Carousel

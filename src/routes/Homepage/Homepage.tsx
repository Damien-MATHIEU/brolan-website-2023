import React from 'react'
import styles from './internal/homepage.module.scss'
import Header from '../../components/Header/Header'
import HeroSection from './sections/HeroSection/HeroSection'
import PresentationSection from './sections/PresentationSection/PresentationSection'
import CarouselSection from './sections/CarouselSection/CarouselSection'
import TeamsSection from './sections/TeamsSection/TeamsSection'
import Footer from '../../components/Footer/Footer'

function Homepage() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <HeroSection />
        <PresentationSection />
        <CarouselSection />
        <TeamsSection />
      </div>
      <Footer />
    </>
  )
}

export default Homepage

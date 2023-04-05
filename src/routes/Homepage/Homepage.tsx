import React from 'react'
import styles from './internal/homepage.module.scss'
import Header from '../../components/Header/Header'
import HeroSection from '../../components/HeroSection/HeroSection'

function Homepage() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <HeroSection />
      </div>
    </>
  )
}

export default Homepage

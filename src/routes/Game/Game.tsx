import React from 'react'
import styles from './internal/game.module.scss'
import GameComponent from '../../components/Game/GameComponent/GameComponent'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

function Game() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <GameComponent />
      </div>
      <Footer />
    </>
  )
}

export default Game

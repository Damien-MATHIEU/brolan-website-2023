import React from 'react'
import styles from './internal/games.module.scss'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import GameThumbnail from '../../components/Game/GameThumbnail/GameThumbnail'
import TrackMania from './../../assets/Games/TrackMania.png'
import Minecraft from './../../assets/Games/Minecraft.png'
import Fortnite from './../../assets/Games/Fortnite.png'
import GeoGuesser from './../../assets/Games/GeoGuesser.png'
import FallGuys from './../../assets/Games/FallGuys.png'
import Osu from './../../assets/Games/Osu.png'

function Games() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <GameThumbnail
          imageSrc={TrackMania}
          gameName="TrackMania"
          color="aquamarine"
          propsClassName={styles.scrollSnapOne}
        />
        <GameThumbnail
          imageSrc={Minecraft}
          gameName="Minecraft"
          color="pink"
          propsClassName={styles.scrollSnapTwo}
        />
        <GameThumbnail
          imageSrc={Fortnite}
          gameName="Fortnite"
          color="aquamarine"
          propsClassName={styles.scrollSnapFour}
        />
        <GameThumbnail
          imageSrc={GeoGuesser}
          gameName="GeoGuesser"
          color="pink"
          propsClassName={styles.scrollSnapFive}
        />
        <GameThumbnail
          imageSrc={FallGuys}
          gameName="FallGuys"
          color="aquamarine"
          propsClassName={styles.scrollSnapSix}
        />
        <GameThumbnail imageSrc={Osu} gameName="Osu" color="pink" />
      </div>
      <Footer />
    </>
  )
}

export default Games

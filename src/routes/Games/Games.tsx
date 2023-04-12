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
import TextNeon from '../../components/TextNeon/TextNeon'

function Games() {
  return (
    <>
      <Header />
      <section className={styles.container}>
        <TextNeon>LES JEUX</TextNeon>
        <div className={styles.gamesContainer}>
          <GameThumbnail
            imageSrc={TrackMania}
            gameName="TrackMania"
            color="aquamarine"
            propsOnClick="/game/trackmania"
            propsAlt="Une image du jeu vidéo TrackMania"
          />
          <GameThumbnail
            imageSrc={Minecraft}
            gameName="Minecraft"
            color="pink"
            propsOnClick="/game/minecraft"
            propsAlt="Une image du jeu vidéo Minecraft"
          />
          <GameThumbnail
            imageSrc={Fortnite}
            gameName="Fortnite"
            color="aquamarine"
            propsOnClick="/game/fortnite"
            propsAlt="Une image du jeu vidéo Fortnite"
          />
          <GameThumbnail
            imageSrc={GeoGuesser}
            gameName="GeoGuesser"
            color="pink"
            propsOnClick="/game/geoguesser"
            propsAlt="Une image du jeu vidéo GeoGuesser"
          />
          <GameThumbnail
            imageSrc={FallGuys}
            gameName="FallGuys"
            color="aquamarine"
            propsOnClick="/game/fallguys"
            propsAlt="Une image du jeu vidéo FallGuys"
          />
          <GameThumbnail
            imageSrc={Osu}
            gameName="Osu"
            color="pink"
            propsOnClick="/game/osu"
            propsAlt="Une image du jeu vidéo Osu"
          />
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Games

import React from 'react'
import styles from './internal/games.module.scss'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import GameThumbnail from '../../components/Game/GameThumbnail/GameThumbnail'
import TrackMania from './../../assets/Games/TrackMania.png'
import Minecraft from './../../assets/Games/Minecraft.png'
import Fortnite from './../../assets/Games/Fortnite.png'
import GeoGuessr from './../../assets/Games/GeoGuessr.png'
import FallGuys from './../../assets/Games/FallGuys.png'
import Osu from './../../assets/Games/Osu.png'
import Tennis from './../../assets/Games/tennis.jpg'
import Petanque from './../../assets/Games/petanque.jpg'
import Darts from './../../assets/Games/darts.jpg'
import PingPong from './../../assets/Games/pingPong.jpg'
import Triathlon from './../../assets/Games/triathlon.jpg'
import TextNeon from '../../components/NeonComponents/TextNeon/TextNeon'

function Games() {
  return (
    <>
      <Header />
      <section className={styles.container}>
        <TextNeon size="h1">LES JEUX</TextNeon>
        <div className={styles.gamesContainer}>
          {/* Video games */}
          <GameThumbnail
            imageSrc={TrackMania}
            gameName="TrackMania"
            color="aquamarine"
            propsOnClick="/game/trackmania"
            propsAlt="Une image du jeu vidéo TrackMania"
            tagMode="Mise à jour"
            tagColor="aquamarine"
          />
          <GameThumbnail
            imageSrc={Minecraft}
            gameName="Minecraft"
            color="pink"
            propsOnClick="/game/minecraft"
            propsAlt="Une image du jeu vidéo Minecraft"
            tagMode="Mise à jour"
            tagColor="pink"
          />
          <GameThumbnail
            imageSrc={Fortnite}
            gameName="Fortnite"
            color="aquamarine"
            propsOnClick="/game/fortnite"
            propsAlt="Une image du jeu vidéo Fortnite"
            tagMode="Mise à jour"
            tagColor="aquamarine"
          />
          <GameThumbnail
            imageSrc={GeoGuessr}
            gameName="GeoGuessr"
            color="pink"
            propsOnClick="/game/geoguessr"
            propsAlt="Une image du jeu vidéo GeoGuessr"
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
            tagMode="Mise à jour"
            tagColor="pink"
          />
          {/* IRL */}
          <GameThumbnail
            imageSrc={Tennis}
            gameName="Tennis"
            color="aquamarine"
            propsOnClick="/game/tennis"
            propsAlt="Une image d'une raquette de tennis et une balle de tennis"
            tagMode="Nouveau"
            tagColor="aquamarine"
          />
          <GameThumbnail
            imageSrc={Petanque}
            gameName="Pétanque"
            color="pink"
            propsOnClick="/game/petanque"
            propsAlt="Une image de boules de pétanques"
            tagMode="Nouveau"
            tagColor="pink"
          />
          <GameThumbnail
            imageSrc={PingPong}
            gameName="Ping Pong"
            color="aquamarine"
            propsOnClick="/game/pingpong"
            propsAlt="Une image d'une raquette de ping pong et une balle de ping pong"
            tagMode="Nouveau"
            tagColor="aquamarine"
          />
          <GameThumbnail
            imageSrc={Darts}
            gameName="Fléchettes"
            color="pink"
            propsOnClick="/game/darts"
            propsAlt="Une d'un jeu de fléchette"
            tagMode="Nouveau"
            tagColor="pink"
          />
          <GameThumbnail
            imageSrc={Triathlon}
            gameName="Triathlon"
            color="aquamarine"
            propsOnClick="/game/triathlon"
            propsAlt="Une homme sur une piste de course"
            tagMode="Nouveau"
            tagColor="aquamarine"
          />
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Games

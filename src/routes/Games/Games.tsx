import React from 'react'
import styles from './internal/games.module.scss'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import GameThumbnail from '../../components/Game/GameThumbnail/GameThumbnail'
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
            imageSrc={'/games/rocketLeague.webp'}
            gameName="Rocket League"
            color="aquamarine"
            propsOnClick="/game/rocket-league"
            propsAlt="Une image du jeu vidéo Rocket League"
          />
          <GameThumbnail
            imageSrc={'/games/squiz.webp'}
            gameName="sQuiz"
            color="pink"
            propsOnClick="/game/squiz"
            propsAlt="Le mot Quiz"
          />
          <GameThumbnail
            imageSrc={'/games/tft.webp'}
            gameName="TFT"
            color="aquamarine"
            propsOnClick="/game/teamfight-tactics"
            propsAlt="Une image du jeu vidéo TeamFight Tactics"
          />
          <GameThumbnail
            imageSrc={'/games/Minecraft.webp'}
            gameName="Minecraft"
            color="pink"
            propsOnClick="/game/minecraft"
            propsAlt="Une image du jeu vidéo Minecraft"
          />
          <GameThumbnail
            imageSrc={'/games/knightSquadTwo.webp'}
            gameName="Knight Squad 2"
            color="aquamarine"
            propsOnClick="/game/knight-squad-two"
            propsAlt="Une image du jeu vidéo Knight Squad 2"
          />
          {/* IRL */}
          <GameThumbnail
            imageSrc={'/games/tennis.webp'}
            gameName="Tennis"
            color="pink"
            propsOnClick="/game/tennis"
            propsAlt="Une image d'une raquette de tennis et une balle de tennis"
            tagMode="IRL"
            tagColor="pink"
          />
          <GameThumbnail
            imageSrc={'/games/petanque.webp'}
            gameName="Pétanque"
            color="aquamarine"
            propsOnClick="/game/petanque"
            propsAlt="Une image de boules de pétanques"
            tagMode="IRL"
            tagColor="aquamarine"
          />
          <GameThumbnail
            imageSrc={'/games/pingPong.webp'}
            gameName="Ping Pong"
            color="pink"
            propsOnClick="/game/pingpong"
            propsAlt="Une image d'une raquette de ping pong et une balle de ping pong"
            tagMode="IRL"
            tagColor="pink"
          />
          <GameThumbnail
            imageSrc={'/games/darts.webp'}
            gameName="Fléchettes"
            color="aquamarine"
            propsOnClick="/game/darts"
            propsAlt="Une d'un jeu de fléchette"
            tagMode="IRL"
            tagColor="aquamarine"
          />
          <GameThumbnail
            imageSrc={'/games/triathlon.webp'}
            gameName="Triathlon"
            color="pink"
            propsOnClick="/game/triathlon"
            propsAlt="Une homme sur une piste de course"
            tagMode="IRL"
            tagColor="pink"
          />
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Games

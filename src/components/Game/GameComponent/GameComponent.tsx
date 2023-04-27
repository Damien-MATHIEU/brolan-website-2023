import React from 'react'
import styles from './internal/gameComponent.module.scss'
import TextNeon from '../../NeonComponents/TextNeon/TextNeon'
import ButtonOutline from '../../Buttons/ButtonOutline/ButtonOutline'
import { Link } from 'react-router-dom'

function GameComponent() {
  return (
    <div className={styles.container}>
      <TextNeon propsClassName={styles.title} blinkingArrayFast={[2]} blinkingArraySlow={[9]}>
        COMING SOON
      </TextNeon>
      <h2 className={styles.subTitle}>
        Les règles de chaque jeux arriveront une fois les inscriptions terminées
      </h2>
      <ButtonOutline center={true} propsOnClick="/">
        Accueil
      </ButtonOutline>
    </div>
  )
}

export default GameComponent

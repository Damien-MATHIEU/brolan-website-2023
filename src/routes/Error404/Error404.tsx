import React from 'react'
import styles from './internal/error404.module.scss'
import TextNeon from '../../components/TextNeon/TextNeon'
import ButtonOutline from '../../components/Buttons/ButtonOutline/ButtonOutline'

function Error404() {
  return (
    <div className={styles.container}>
      <TextNeon propsClassName={styles.title} blinkingArrayFast={[2]} blinkingArraySlow={[9]}>
        Erreur 404
      </TextNeon>
      <h2 className={styles.subTitle}>La page que vous avez demandé n'existe pas</h2>
      <a href="/">
        <ButtonOutline center={true}>Accueil</ButtonOutline>
      </a>
    </div>
  )
}

export default Error404

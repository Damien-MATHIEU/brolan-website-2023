import React from 'react'
import styles from './internal/error404.module.scss'
import TextNeon from '../../components/TextNeon/TextNeon'
import ButtonOutline from '../../components/Buttons/ButtonOutline/ButtonOutline'
import { Link } from 'react-router-dom'

function Error404() {
  return (
    <section className={styles.container}>
      <TextNeon propsClassName={styles.title} blinkingArrayFast={[2]} blinkingArraySlow={[9]}>
        Erreur 404
      </TextNeon>
      <h2 className={styles.subTitle}>La page que vous avez demandé n&apos;existe pas</h2>
      <ButtonOutline center={true} propsOnClick="/">
        Accueil
      </ButtonOutline>
    </section>
  )
}

export default Error404

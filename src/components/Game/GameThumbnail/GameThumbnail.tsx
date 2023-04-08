import React from 'react'
import styles from './internal/gameThumbnail.module.scss'
import IGameThumbnail from './internal/gameThumbnail.interface'

function GameThumbnail({ imageSrc, gameName, color = 'pink', propsClassName }: IGameThumbnail) {
  return (
    <div
      className={`${styles.container} ${
        color === 'aquamarine' ? styles.aquamarineGlow : styles.pinkGlow
      } ${propsClassName}`}>
      <div className={styles.imageContainer}>
        <img src={imageSrc} className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <p className={styles.text}>{gameName}</p>
      </div>
    </div>
  )
}

export default GameThumbnail

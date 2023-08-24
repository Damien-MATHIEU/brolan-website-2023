import React from 'react'
import styles from './internal/gameThumbnail.module.scss'
import IGameThumbnail from './internal/gameThumbnail.interface'
import { useNavigate } from 'react-router-dom'
import Tag from '../../Tag/Tag'

function GameThumbnail({
  imageSrc,
  gameName,
  color = 'pink',
  propsClassName,
  propsOnClick,
  propsAlt,
  tagMode,
  tagColor
}: IGameThumbnail) {
  const navigate = useNavigate()

  function handleOnClick(propsOnClick?: string) {
    if (propsOnClick) {
      navigate(propsOnClick)
    }
  }
  return (
    <div
      className={`${styles.container} ${
        color === 'aquamarine' ? styles.aquamarineGlow : styles.pinkGlow
      } ${propsClassName}`}
      onClick={() => handleOnClick(propsOnClick)}>
      {tagMode && <Tag tagMode={tagMode} color={tagColor} />}
      <div className={styles.imageContainer}>
        <img src={imageSrc} className={styles.image} alt={propsAlt} />
      </div>
      <div className={styles.textContainer}>
        <p className={styles.text}>{gameName}</p>
      </div>
    </div>
  )
}

export default GameThumbnail

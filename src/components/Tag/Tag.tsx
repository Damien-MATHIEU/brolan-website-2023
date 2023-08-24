import React from 'react'
import styles from './internal/Tag.module.scss'
import ITag from './internal/Tag.interface'

function Tag({ tagMode, propsClassName, color }: ITag) {
  return (
    <div
      className={`${styles.container} ${
        color === 'pink' ? styles.pinkGlow : styles.aquamarineGlow
      } ${propsClassName}`}>
      <p>{tagMode}</p>
    </div>
  )
}

export default Tag

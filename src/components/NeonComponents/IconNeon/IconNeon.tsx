import React from 'react'
import IIconNeon from './internal/iconNeon.interface'
import styles from './internal/iconNeon.module.scss'

function IconNeon({
  icon,
  color = 'pink',
  propsClassName,
  blinkingFast = false,
  blinkingSlow = false,
  propsAlt
}: IIconNeon) {
  return (
    <div className={styles.container}>
      <img
        src={icon}
        className={`${styles.icon} ${
          color === 'aquamarine' ? styles.iconAquamarine : styles.iconPink
        } ${blinkingFast ? styles.iconBlinkingFast : undefined} ${
          blinkingSlow ? styles.iconBlinkingSlow : undefined
        } ${propsClassName}`}
        alt={propsAlt}
      />
    </div>
  )
}

export default IconNeon

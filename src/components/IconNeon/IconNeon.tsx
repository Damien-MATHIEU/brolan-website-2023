import React from 'react'
import IIconNeon from './internal/iconNeon.interface'
import styles from './internal/iconNeon.module.scss'

function IconNeon({
  icon,
  color = 'pink',
  propsClassName,
  blinkingFast = false,
  blinkingSlow = false
}: IIconNeon) {
  let animationStyle: string = styles.iconPink
  if (blinkingFast || blinkingSlow) {
    if (color === 'pink' && blinkingFast) {
      animationStyle = styles.iconPinkBlinkingFast
    } else if (color === 'pink' && blinkingSlow) {
      animationStyle = styles.iconPinkBlinkingSlow
    } else if (color === 'aquamarine' && blinkingFast) {
      animationStyle = styles.iconAquamarineBlinkingFast
    } else if (color === 'aquamarine' && blinkingSlow) {
      animationStyle = styles.iconAquamarineBlinkingSlow
    }
  } else {
    if (color === 'aquamarine') {
      animationStyle = styles.iconAquamarine
    }
  }

  return (
    <div className={styles.container}>
      <img src={icon} className={`${styles.icon} ${animationStyle} ${propsClassName}`} />
    </div>
  )
}

export default IconNeon

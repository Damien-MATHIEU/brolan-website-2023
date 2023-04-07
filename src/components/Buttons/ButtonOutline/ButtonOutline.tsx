import React from 'react'
import IButtonOutline from './internal/buttonOutline.interface'
import styles from './internal/buttonOutline.module.scss'

function ButtonOutline({
  children,
  outlineColor = 'pink',
  propsClassName,
  center = false,
  fontSize = 'medium',
  header = false
}: IButtonOutline) {
  let fontSizeStyle = styles.mediumFontSize
  switch (fontSize) {
    case 'veryLarge':
      fontSizeStyle = styles.veryLargeFontSize
      break
    case 'large':
      fontSizeStyle = styles.largeFontSize
      break
    case 'medium':
      fontSizeStyle = styles.mediumFontSize
      break
    case 'small':
      fontSizeStyle = styles.smallFontSize
      break

    default:
      fontSizeStyle = styles.mediumFontSize
      break
  }
  return (
    <div className={`${propsClassName} ${center ? styles.centerButton : undefined}`}>
      <button
        className={`${styles.buttonOutline} ${
          outlineColor === 'aquamarine' ? styles.outlineAquamarine : styles.outlinePink
        } ${fontSizeStyle} ${header ? styles.buttonHeader : undefined}`}>
        {children}
      </button>
    </div>
  )
}

export default ButtonOutline

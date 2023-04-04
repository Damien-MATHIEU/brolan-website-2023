import React from 'react'
import IButtonOutline from './internal/buttonOutline.interface'
import styles from './internal/buttonOutline.module.scss'

function ButtonOutline({ children, outlineColor = 'pink', propsClassName }: IButtonOutline) {
  return (
    <button
      className={`${styles.buttonOutline} ${
        outlineColor === 'aquamarine' ? styles.outlineAquamarine : styles.outlinePink
      } ${propsClassName}`}>
      {children}
    </button>
  )
}

export default ButtonOutline

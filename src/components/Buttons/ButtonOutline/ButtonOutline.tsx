import React from 'react'
import IButtonOutline from './internal/buttonOutline.interface'
import styles from './internal/buttonOutline.module.scss'

function ButtonOutline({ children, outlineColor = 'pink', propsClassName }: IButtonOutline) {
  return (
    <div className={propsClassName}>
      <button
        className={`${styles.buttonOutline} ${
          outlineColor === 'aquamarine' ? styles.outlineAquamarine : styles.outlinePink
        }`}>
        {children}
      </button>
    </div>
  )
}

export default ButtonOutline

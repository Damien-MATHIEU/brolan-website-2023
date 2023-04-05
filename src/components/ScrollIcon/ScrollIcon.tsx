import React from 'react'
import { ChevronDown } from 'react-feather'
import styles from './internal/scrollIcon.module.scss'
import IScrollIcon from './internal/scrollIcon.interface'

function ScrollIcon({ propsClassName }: IScrollIcon) {
  return (
    <div className={`${styles.container} ${propsClassName}`}>
      <ChevronDown color="#f7f7f2" size={24} />
      <ChevronDown color="#f7f7f2" size={24} className={styles.translateAnim} />
    </div>
  )
}

export default ScrollIcon

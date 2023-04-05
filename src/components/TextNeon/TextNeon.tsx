import React from 'react'
import ITextNeon from './internal/textNeon.interface'
import styles from './internal/textNeon.module.scss'

function TextNeon({
  children,
  color = 'pink',
  blinkingArrayFast = null,
  blinkingArraySlow = null,
  size = 'h1',
  propsClassName
}: ITextNeon) {
  const splitedText = children.split('')

  const styledText = splitedText.map((letter, index) => {
    return (
      <span
        key={index}
        className={`${styles.letter} ${
          blinkingArrayFast?.includes(index) ? styles.letterBlinkFast : undefined
        } ${blinkingArraySlow?.includes(index) ? styles.letterBlinkSlow : undefined}`}>
        {letter}
      </span>
    )
  })

  switch (size) {
    case 'h1':
      return (
        <h1
          className={`${styles.word} ${
            color === 'aquamarine' ? styles.wordAquamarine : styles.wordPink
          } ${propsClassName}`}>
          {styledText}
        </h1>
      )

    case 'h2':
      return (
        <h2
          className={`${styles.word} ${
            color === 'aquamarine' ? styles.wordAquamarine : styles.wordPink
          } ${propsClassName}`}>
          {styledText}
        </h2>
      )

    case 'h3':
      return (
        <h3
          className={`${styles.word} ${
            color === 'aquamarine' ? styles.wordAquamarine : styles.wordPink
          } ${propsClassName}`}>
          {styledText}
        </h3>
      )

    default:
      return (
        <h1
          className={`${styles.word} ${
            color === 'aquamarine' ? styles.wordAquamarine : styles.wordPink
          } ${propsClassName}`}>
          {styledText}
        </h1>
      )
  }
}

export default TextNeon

import React, { useEffect, useState } from 'react'
import ICountdown from './internal/countdown.interface'
import styles from './internal/countdown.module.scss'
import TextNeon from '../TextNeon/TextNeon'

function Countdown() {
  const targetDate = '2023-04-28T18:00:00.000Z'

  const calculateTimeLeft = (): ICountdown => {
    const difference = new Date(targetDate).getTime() - new Date().getTime()
    let timeLeft: ICountdown = {
      days: '00',
      hours: '00',
      minutes: '00',
      seconds: '00'
    }

    if (difference > 0) {
      timeLeft = {
        days: ('0' + Math.floor(difference / (1000 * 60 * 60 * 24))).slice(-2),
        hours: ('0' + Math.floor((difference / (1000 * 60 * 60)) % 24)).slice(-2),
        minutes: ('0' + Math.floor((difference / 1000 / 60) % 60)).slice(-2),
        seconds: ('0' + Math.floor((difference / 1000) % 60)).slice(-2)
      }
    }

    return timeLeft
  }

  const [timeLeft, setTimeLeft] = useState<ICountdown>(calculateTimeLeft())

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearTimeout(timer)
  })

  const timerComponents: JSX.Element[] = []

  Object.keys(timeLeft).forEach((interval, index) => {
    const key = interval as keyof ICountdown

    if (!timeLeft[key]) {
      return
    }

    if (index !== Object.keys(timeLeft).length - 1) {
      timerComponents.push(
        <div key={key} className={styles.unitContainer}>
          <TextNeon propsClassName={styles.countdownNumber} color="aquamarine" size="h2">
            {timeLeft[key]}
          </TextNeon>
          <p className={styles.countdownText}>{key}</p>
        </div>
      )
    } else {
      timerComponents.push(
        <div key={key} className={styles.unitContainer}>
          <TextNeon propsClassName={styles.countdownNumber} color="aquamarine" size="h2">
            {timeLeft[key]}
          </TextNeon>
          <p className={styles.countdownText}>{key}</p>
        </div>
      )
    }
  })

  return (
    <div>
      {timerComponents.length ? (
        <div className={styles.container}>{timerComponents}</div>
      ) : (
        <span>Inscriptions terminées !</span>
      )}
    </div>
  )
}

export default Countdown

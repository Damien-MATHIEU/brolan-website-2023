import React from 'react'
import styles from './internal/footer.module.scss'
import LogoBrolan from './../../assets/Logos/LogoBrolan.svg'
import { ExternalLink } from 'react-feather'

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        <div className={styles.logoContainer}>
          <img src={LogoBrolan} className={styles.logo} />
        </div>
        <div className={styles.brolanContainer}>
          <h4 className={styles.brolan}>©Brolan 2023</h4>
        </div>
        <div className={styles.otherContainer}>
          <a
            href="https://www.paypal.com/paypalme/BROLANOFF?country.x=FR&locale.x=fr_FR"
            target="blank"
            className={styles.link}>
            <p>
              Faire un don{' '}
              <span>
                <ExternalLink color="#f7f7f2" size={16} />
              </span>
            </p>
          </a>
          <a href="#" className={styles.link}>
            <p>Mentions légales</p>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer

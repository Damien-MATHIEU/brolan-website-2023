import React from 'react'
import styles from './internal/footer.module.scss'
import { ExternalLink } from 'react-feather'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        <div className={styles.logoContainer}>
          <img src={'/logo.png'} className={styles.logo} alt="Logo de la Brolan" />
        </div>
        <div className={styles.brolanContainer}>
          <h4 className={styles.brolan}>©Brolan 2023</h4>
        </div>
        <div className={styles.otherContainer}>
          <Link
            to="https://www.paypal.com/paypalme/BROLANOFF?country.x=FR&locale.x=fr_FR"
            target="blank"
            className={styles.link}>
            <p>
              Faire un don{' '}
              <span>
                <ExternalLink color="#f7f7f2" size={16} />
              </span>
            </p>
          </Link>
          <Link to="/mentions-legales" className={styles.link}>
            <p>Mentions légales</p>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Footer

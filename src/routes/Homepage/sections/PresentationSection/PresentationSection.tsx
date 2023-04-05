import React from 'react'
import styles from './internal/presentationSection.module.scss'
import LogoDiscord from './../../../../assets/Logos/LogoDiscord.svg'
import LogoTwitter from './../../../../assets/Logos/LogoTwitter.svg'
import IconNeon from '../../../../components/IconNeon/IconNeon'
import { ExternalLink } from 'react-feather'

function PresentationSection() {
  return (
    <div className={styles.container}>
      <h2 className={`${styles.centerText} ${styles.subTitle}`}>
        Bienvenue sur la page officielle de la BROLAN !
      </h2>
      <div className={styles.paragrapheContainer}>
        <p className={styles.paragraphe}>
          Le tournoi annuel de jeux vidéos qui vous permet de vous surpasser et de montrer enfin de
          quoi vous êtes capables derrière un écran. Chaque année, des joueurs et joueuses de tout
          horizon se réunissent en binôme pour participer à un tournoi en deux temps :<br />
          <br />- <span className={styles.bold}>Qualifications</span> : ouvertes à tous, elles se
          déroulent en ligne. Les jeux sont annoncés un mois à l'avance pour que vous puissiez vous
          entraîner et passer à l'étape suivante. Tous les jeux sont joués le même soir en direct de
          Twitch ! <br />
          <br />- <span className={styles.bold}>Jour J</span> : Vous faites partie des qualifiés à
          la suite des qualifications ? FÉLICITATIONS ! Prenez votre setup et direction le sud de la
          France dans une villa prévue pour l'événement ! Sur ce format de finaliste, tout est
          possible ! Jeux vidéos, épreuves physiques, défis, il faudra tout donner pour espérer
          soulever le titre. L'objectif, mettre en avant un format compétitif d'eSport, à notre
          échelle, à travers un tournoi multi-gaming pendant l'année. Le point fort ? Participer
          gratuitement à une LAN avec cashprize sur les jeux du moment dans la bonne humeur avec ton
          binôme favori. Alors ne manquez pas votre chance de participer à cette expérience unique
          et de rencontrer d'autres passionnés de jeux vidéos. <br />
          <br />
        </p>
        <p className={styles.centerText}>
          Suivez nos réseaux pour toutes les dernières mises à jour et pour vous inscrire à la
          prochaine édition !
        </p>
      </div>
      <div className={styles.iconsContainer}>
        <a
          href="https://discord.gg/jDmFTYwv"
          target="_blank"
          rel="noreferrer"
          className={styles.iconContainer}>
          <IconNeon icon={LogoDiscord} color="pink" blinkingFast={true} />
          <h4 className={`${styles.centerText} ${styles.iconText}`}>
            Discord{' '}
            <span>
              <ExternalLink color="#f7f7f2" size={16} />
            </span>
          </h4>
        </a>
        <a
          href="https://twitter.com/BROLAN_OFF"
          target="_blank"
          rel="noreferrer"
          className={styles.iconContainer}>
          <IconNeon
            icon={LogoTwitter}
            color="aquamarine"
            blinkingSlow={true}
            propsClassName={styles.iconTwitterMarginBottom}
          />
          <h4 className={`${styles.centerText} ${styles.iconText}`}>@BROLAN_OFF</h4>
        </a>
      </div>
    </div>
  )
}

export default PresentationSection

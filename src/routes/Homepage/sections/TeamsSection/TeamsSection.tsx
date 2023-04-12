import React from 'react'
import styles from './internal/teamsSection.module.scss'
import TableNeon from '../../../../components/TableNeon/TableNeon'
import TextNeon from '../../../../components/TextNeon/TextNeon'
import ButtonOutline from '../../../../components/Buttons/ButtonOutline/ButtonOutline'
import { Link } from 'react-router-dom'
import Teams from './../../../../data/teams.json'

function TeamsSection() {
  return (
    <section className={styles.container} id="teamsSection">
      <TextNeon blinkingArrayFast={[1]} blinkingArraySlow={[4]} propsClassName={styles.subTitle}>
        EQUIPES
      </TextNeon>
      {/* @ts */}
      <TableNeon tableContent={Teams} tableHeaders={["Nom d'équipe", 'Joueurs']} />
      <Link to="https://forms.gle/JV7X5dSvTJ6KSG5w6" target="blank" rel="noopener noreferrer">
        <ButtonOutline center={true}>S&apos;inscrire</ButtonOutline>
      </Link>
    </section>
  )
}

export default TeamsSection

import React from 'react'
import styles from './internal/teamsSection.module.scss'
import TableNeon from '../../../../components/NeonComponents/TableNeon/TableNeon'
import TextNeon from '../../../../components/NeonComponents/TextNeon/TextNeon'
import ButtonOutline from '../../../../components/Buttons/ButtonOutline/ButtonOutline'
import Teams from './../../../../data/teams.json'

function TeamsSection() {
  return (
    <section className={styles.container} id="teamsSection">
      <TextNeon blinkingArrayFast={[1]} blinkingArraySlow={[4]} propsClassName={styles.subTitle}>
        EQUIPES
      </TextNeon>
      {/* @ts */}
      <TableNeon tableContent={Teams} tableHeaders={["Nom d'équipe", 'Joueurs']} />
      <ButtonOutline
        center={true}
        propsOnClick="https://forms.gle/JV7X5dSvTJ6KSG5w6"
        openNewTab={true}>
        S&apos;inscrire
      </ButtonOutline>
    </section>
  )
}

export default TeamsSection

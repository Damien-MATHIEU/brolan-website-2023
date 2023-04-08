import React from 'react'
import styles from './internal/teamsSection.module.scss'
import TableNeon from '../../../../components/TableNeon/TableNeon'
import TextNeon from '../../../../components/TextNeon/TextNeon'
import ButtonOutline from '../../../../components/Buttons/ButtonOutline/ButtonOutline'

function TeamsSection() {
  return (
    <section className={styles.container} id="teamsSection">
      <TextNeon blinkingArrayFast={[1]} blinkingArraySlow={[4]} propsClassName={styles.subTitle}>
        EQUIPES
      </TextNeon>
      <TableNeon
        tableContent={[
          { TOP1OURIEN: ['Dam', 'Ben'] },
          { 'Morbi ex': ['Roscoe', 'Jace '] },
          { 'finibus vel elit': ['Manuel', 'Abby'] }
        ]}
        tableHeaders={["Nom d'équipe", 'Joueurs']}
      />
      <a href="https://forms.gle/JV7X5dSvTJ6KSG5w6" target="blank" rel="noopener noreferrer">
        <ButtonOutline center={true}>S&apos;inscrire</ButtonOutline>
      </a>
    </section>
  )
}

export default TeamsSection

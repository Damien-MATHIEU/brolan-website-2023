import React from 'react'
import styles from './internal/teamsSection.module.scss'
import TableNeon from '../../../../components/TableNeon/TableNeon'
import TextNeon from '../../../../components/TextNeon/TextNeon'
import ButtonOutline from '../../../../components/Buttons/ButtonOutline/ButtonOutline'

function TeamsSection() {
  return (
    <div className={styles.container}>
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
      <ButtonOutline center={true}>S&apos;inscrire</ButtonOutline>
    </div>
  )
}

export default TeamsSection

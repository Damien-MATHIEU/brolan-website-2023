import React from 'react'
import styles from './internal/teamsSection.module.scss'
import TableNeon from '../../../../components/NeonComponents/TableNeon/TableNeon'
import TextNeon from '../../../../components/NeonComponents/TextNeon/TextNeon'

import Teams from './../../../../data/teams.json'

function TeamsSection() {
  return (
    <section className={styles.container} id="teamsSection">
      <TextNeon blinkingArrayFast={[1]} blinkingArraySlow={[4]} propsClassName={styles.subTitle}>
        EQUIPES
      </TextNeon>
      <TableNeon tableContent={Teams} tableHeaders={["Nom d'équipe", 'Joueurs']} />
    </section>
  )
}

export default TeamsSection

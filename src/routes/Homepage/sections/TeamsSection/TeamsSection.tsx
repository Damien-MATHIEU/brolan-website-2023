import React from 'react'
import styles from './internal/teamsSection.module.scss'
import TableNeon from '../../../../components/TableNeon/TableNeon'
import TextNeon from '../../../../components/TextNeon/TextNeon'

function TeamsSection() {
  return (
    <div className={styles.container}>
      <TextNeon>EQUIPES</TextNeon>
      <TableNeon
        tableContent={[
          'TOP1OURIEN',
          'Morbi ex',
          'finibus vel elit',
          'Sed at erat',
          'laoreet',
          'Morbi lobortis'
        ]}
        tableHeaders={["Nom d'équipe"]}
      />
    </div>
  )
}

export default TeamsSection

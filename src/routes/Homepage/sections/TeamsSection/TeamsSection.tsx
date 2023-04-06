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
          'TOP1OURIEN',
          'Morbi ex',
          'finibus vel elit',
          'Sed at erat',
          'laoreet',
          'Morbi lobortis'
        ]}
        tableHeaders={["Nom d'équipe"]}
      />
      <ButtonOutline center={true}>S&apos;inscrire</ButtonOutline>
    </div>
  )
}

export default TeamsSection

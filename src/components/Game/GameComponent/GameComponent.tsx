import React from 'react'
import styles from './internal/gameComponent.module.scss'
import TextNeon from '../../NeonComponents/TextNeon/TextNeon'
import ButtonOutline from '../../Buttons/ButtonOutline/ButtonOutline'
import { Link, useParams } from 'react-router-dom'
import TableNeon from '../../NeonComponents/TableNeon/TableNeon'
import TrackmaniaRules from './../../../data/rules/trackmania.json'
import FallGuysRules from './../../../data/rules/fallguys.json'
import FortniteRules from './../../../data/rules/fortnite.json'
import GeoGuessrRules from './../../../data/rules/geoguessr.json'
import OsuRules from './../../../data/rules/osu.json'
import MinecraftRules from './../../../data/rules/minecraft.json'

function GameComponent() {
  const { gameName } = useParams()

  console.log(gameName)

  if (gameName == undefined) {
    return null
  }
  let tableRule = null

  switch (gameName) {
    case 'trackmania':
      tableRule = TrackmaniaRules
      break
    case 'minecraft':
      tableRule = MinecraftRules
      break
    case 'fortnite':
      tableRule = FortniteRules
      break
    case 'fallguys':
      tableRule = FallGuysRules
      break
    case 'geoguessr':
      tableRule = GeoGuessrRules
      break
    case 'osu':
      tableRule = OsuRules
      break

    default:
      break
  }

  return (
    <div className={styles.container}>
      <TextNeon propsClassName={styles.title} blinkingArrayFast={[2]} blinkingArraySlow={[9]}>
        {gameName}
      </TextNeon>
      <TableNeon tableContent={tableRule} noHeader={true} />
      {/* <h2 className={styles.subTitle}>
        Les règles de chaque jeux arriveront une fois les inscriptions terminées
      </h2>
      <ButtonOutline center={true} propsOnClick="/">
        Accueil
      </ButtonOutline> */}
    </div>
  )
}

export default GameComponent

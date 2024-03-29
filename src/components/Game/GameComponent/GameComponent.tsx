import React from 'react'
import { useParams } from 'react-router-dom'
import styles from './internal/gameComponent.module.scss'
import TextNeon from '../../NeonComponents/TextNeon/TextNeon'
import TableNeon from '../../NeonComponents/TableNeon/TableNeon'

import TrackmaniaRules from './../../../data/rules/trackmania.json'
import FallGuysRules from './../../../data/rules/fallguys.json'
import FortniteRules from './../../../data/rules/fortnite.json'
import GeoGuessrRules from './../../../data/rules/geoguessr.json'
import OsuRules from './../../../data/rules/osu.json'
import MinecraftRules from './../../../data/rules/minecraft.json'
import DartsRules from './../../../data/rules/darts.json'
import PetanqueRules from './../../../data/rules/petanque.json'
import PingPongRules from './../../../data/rules/pingpong.json'
import TennisRules from './../../../data/rules/tennis.json'
import TriathlonRules from './../../../data/rules/triathlon.json'

import GameHomepage from './../../../assets/Tutorial/Minecraft/GameHomepage.jpg'
import Tlauncher from './../../../assets/Tutorial/Minecraft/Tlauncher.jpg'
import WebsiteHomepage from './../../../assets/Tutorial/Minecraft/WebsiteHomepage.jpg'
import AddServer from './../../../assets/Tutorial/Minecraft/AddServer.jpg'
import EnterIpAddress from './../../../assets/Tutorial/Minecraft/EnterIpAddress.jpg'
import TrackmaniaImage from './../../../assets/Tutorial/Trackmania/image.jpg'

function GameComponent() {
  const { gameName } = useParams()

  if (gameName == undefined) {
    return null
  }
  let tableRule = null
  let tableHeader = null

  switch (gameName) {
    // Video games
    case 'trackmania':
      tableRule = TrackmaniaRules
      tableHeader = ['Type', 'Partie personnalisée']
      break
    case 'minecraft':
      tableRule = MinecraftRules
      tableHeader = ['Type', 'Parkour']
      break
    case 'fortnite':
      tableRule = FortniteRules
      tableHeader = ['Type', 'Tilted Zone War']
      break
    case 'fallguys':
      tableRule = FallGuysRules
      tableHeader = ['Type', 'Partie personnalisée']
      break
    case 'geoguessr':
      tableRule = GeoGuessrRules
      tableHeader = ['Type', 'World']
      break
    case 'osu':
      tableRule = OsuRules
      tableHeader = ['Type', 'Format de carte classique']
      break
    // IRL
    case 'tennis':
      tableRule = TennisRules
      tableHeader = ['Type', 'Match 2 v 2']
      break
    case 'darts':
      tableRule = DartsRules
      tableHeader = ['Type', 'Match 2 v 2']
      break
    case 'petanque':
      tableRule = PetanqueRules
      tableHeader = ['Type', 'Match 2 v 2']
      break
    case 'pingpong':
      tableRule = PingPongRules
      tableHeader = ['Type', 'Match 2 v 2']
      break
    case 'triathlon':
      tableRule = TriathlonRules
      tableHeader = ['Type', 'Match 2 v 2']
      break

    default:
      break
  }

  return (
    <div className={styles.container}>
      <TextNeon propsClassName={styles.title} blinkingArrayFast={[2]} blinkingArraySlow={[9]}>
        {gameName}
      </TextNeon>

      <TableNeon
        // @ts-ignore
        tableContent={tableRule}
        // @ts-ignore
        tableHeaders={tableHeader}
        propsClassName={styles.gameTableRules}
      />
      {gameName === 'minecraft' && (
        <div className={styles.additionnalInfos}>
          <p className={styles.additionnalInfo}>
            Hello et bienvenu dans ce superbe tutoriel à but non lucratif, qui te permettra de jouer
            sur le serveur en totale gratuité et légalité ! (oupsi pas sûr de cette partie là). Dans
            un premier temps tu te rends sur ton navigateur préféré (genre Opera, faut oublier
            explorer c&apos;est vraiment plus à la mode), et tu télécharge Tlauncher.
          </p>
          <img src={WebsiteHomepage} className={styles.image} />
          <p className={styles.additionnalInfo}>
            Ensuite tu arrives sur le superbe screen suivant :{' '}
          </p>
          <img src={Tlauncher} className={styles.image} />
          <p className={styles.additionnalInfo}>
            Sur la partie du bas, deux éléments sont importants : Le pseudo (normalement c&apos;est
            toi qui le choisi, fin c&apos;est mieux), et le truc à droite (pose pas de question), tu
            sélectionne « Optifine 1.18.2 » et tu cliques sur le gros bouton Jaune sur la droite
            (Jaune ou orange ? vrai débat, laisse un comm).
          </p>
          <p className={styles.additionnalInfo}>
            Ensuite, tu cliques sur multiplayer (c&apos;est mieux pour jouer à plusieurs)
          </p>
          <img src={GameHomepage} className={styles.image} />
          <p className={styles.additionnalInfo}>
            Puis sur « Add server » pour ajouter un serveur (c&apos;est la traduction littérale en
            anglais en fait).
          </p>
          <img src={AddServer} className={styles.image} />
          <p className={styles.additionnalInfo}>
            Une fois que t&apos;en est là, t&apos;as fait à peu près 5%, t&apos;y es presque !{' '}
          </p>
          <p className={styles.additionnalInfo}>
            Dans Srver address tu rentres : « 62.210.41.50:27323 » et tu fais Done.
          </p>
          <img src={EnterIpAddress} className={styles.image} />
          <p className={styles.additionnalInfo}>
            Voilà le serv est maintenant dans ta liste, tu peux cliquer droit sur les différents
            niveaux qui te sont proposés (spoiler alert, le jour J ils seront fait dans
            l&apos;ordre), bon training 😉
          </p>
        </div>
      )}
      {gameName === 'trackmania' && (
        <div className={styles.additionnalInfos}>
          <img src={TrackmaniaImage} className={styles.image} />
        </div>
      )}
    </div>
  )
}

export default GameComponent

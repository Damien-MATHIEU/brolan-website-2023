import React from 'react'
import styles from './internal/legalNotice.module.scss'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

function LegalNotice() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <h1>MENTIONS LÉGALES</h1>
        <p>
          Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour la confiance en
          l&apos;économie numérique, il est précisé aux utilisateurs du site Brolan l&apos;identité
          des différents intervenants dans le cadre de sa réalisation et de son suivi.
        </p>
        <h2>Edition du site</h2>
        <p>
          Le présent site, accessible à l&apos;URL https://brolan.fr (le « Site »), est édité par :
          <br />
          Damien Mathieu, résidant 1 Place de l&apos;Hotel de Ville 13100 Aix-en-Provence, de
          nationalité Française (France), né(e) le 06/02/1998,
        </p>
        <h2>Hébergement</h2>
        <p>
          Le Site est hébergé par la société OVH SAS, situé 2 rue Kellermann - BP 80157 - 59053
          Roubaix Cedex 1, (contact téléphonique ou email : 1007).
        </p>
        <h2>Directeur de publication</h2>
        <p>Le Directeur de la publication du Site est Damien Mathieu.</p>
        <h2>Nous contacter</h2>
        <p>
          Par téléphone : +33649305746 Par email : contact.brolan@gmail.com Par courrier : 1 Place
          de l&apos;Hotel de Ville 13100 Aix-en-Provence
        </p>
      </div>
      <Footer />
    </>
  )
}

export default LegalNotice

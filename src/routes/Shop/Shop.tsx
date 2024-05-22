import React from 'react'
import styles from './internal/shop.module.scss'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import TextNeon from '../../components/NeonComponents/TextNeon/TextNeon'
import ShopProduct from '../../components/ShopProduct/ShopProduct'

function Shop() {
  const products = [
    {
      image: ['/shop/blackTeeShirt/front.webp', '/shop/blackTeeShirt/back.webp'],
      name: "T shirt Noir édition brolan 2024 : FOURNI GRATUITEMENT AUX QUALIFIES LE JOUR DE L'IRL",
      price: '29,99€'
    },
    {
      image: ['/shop/whiteTeeShirt/front.webp', '/shop/whiteTeeShirt/back.webp'],
      name: 'T shirt Blanc édition Brolan prestige 2024',
      price: '34,99€'
    },
    {
      image: ['/shop/cap/whiteCap.webp'],
      name: 'Casquette blanche édition prestige 2024',
      price: '24,99€'
    },
    {
      image: ['/shop/bonnet/whiteBonnet.webp'],
      name: 'Bonnet blanc édition prestige 2024',
      price: '19,99€'
    },
    {
      image: ['/shop/short/whiteShort.webp'],
      name: 'Short blanc édition prestige 2024',
      price: '44,99€'
    },
    {
      image: ['/shop/collage/collage.webp'],
      name: 'Pack tout compris ( sauf t shirt noir )',
      price: '109,99€'
    }
  ]

  function Products() {
    const results = products.map((product, index) => {
      return (
        <ShopProduct images={product.image} name={product.name} price={product.price} key={index} />
      )
    })

    return results
  }

  return (
    <>
      <Header />
      <section className={styles.container}>
        <TextNeon propsClassName={styles.title} blinkingArrayFast={[1]} blinkingArraySlow={[7]}>
          Boutique
        </TextNeon>
        {Products()}
      </section>
      <Footer />
    </>
  )
}

export default Shop

import React from 'react'
import TextNeon from '../TextNeon/TextNeon'

function HeroSection() {
  return (
    <TextNeon color="pink" blinkingArrayFast={[2]} blinkingArraySlow={[4]}>
      BROLAN
    </TextNeon>
  )
}

export default HeroSection

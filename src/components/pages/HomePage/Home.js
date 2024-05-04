import React from 'react'
import HomeSection from '../../HomeSection'
import Pricing from '../../Pricing'
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from '../../../Data'

function Home() {
  return (
    <>
      <HomeSection {...homeObjOne} />
      <HomeSection {...homeObjThree} />
      <HomeSection {...homeObjTwo} />
      <Pricing />
      <HomeSection {...homeObjFour} />
    </>
  )
}

export default Home
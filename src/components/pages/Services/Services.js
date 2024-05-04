import React from 'react'
import HomeSection from '../../HomeSection'
import Pricing from '../../Pricing'
import { homeObjOne } from '../../../Data'

function Services() {
  return (
    <>
      <Pricing />
      <HomeSection {...homeObjOne} />
    </>
  )
}

export default Services
import React from 'react'
import HomeSection from '../../HomeSection'
import Pricing from '../../Pricing'
import { homeObjTwo } from '../../../Data'

function Products() {
  return (
    <>
      <HomeSection {...homeObjTwo} />
      <Pricing />
    </>
  )
}

export default Products
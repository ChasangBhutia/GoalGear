import React from 'react'
import Hero from "../components/Hero"
import NewlyAdded from '../components/NewlyAdded'
import Featured from '../components/Featured'

const Shop = () => {
  return (
    <div>
        <Hero/>
        <Featured/>
        <NewlyAdded/>
    </div>
  )
}

export default Shop
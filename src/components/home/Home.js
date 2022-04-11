import React from 'react'
import FeaturedInfo from '../featuredInfo/FeaturedInfo'
import "./home.scss"

function Home() {
  return (
    <div className='home'>
      <FeaturedInfo type="user" />
      <FeaturedInfo type="order" />
      <FeaturedInfo type="earning" />
      <FeaturedInfo type="balance" />


    </div>
  )
}

export default Home
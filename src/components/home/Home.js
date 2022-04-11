import React from 'react'
import FeaturedInfo from '../featuredInfo/FeaturedInfo'
import Graph from '../graph/Graph'
import Revenue from '../revenue/Revenue'
import "./home.scss"

function Home() {
  return (
    <div className='home'>
      <div className="cardRow">
        <FeaturedInfo type="user" />
        <FeaturedInfo type="order" />
        <FeaturedInfo type="earning" />
        <FeaturedInfo type="balance" />
      </div>

      <div className="revenueAndGraphRow">
        <Revenue/>
        <Graph/>
      </div>
      
    </div>
  )
}

export default Home
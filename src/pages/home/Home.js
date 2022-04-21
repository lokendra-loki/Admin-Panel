import React from 'react'
import "./home.scss"
import Graph from '../../components/graph/Graph'
import LatestTransaction from '../../components/latestTransaction/LatestTransaction'
import Revenue from '../../components/revenue/Revenue'
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import Topbar from '../../components/topbar/Topbar'
import Leftbar from '../../components/leftbar/Leftbar'

function Home() {
  return (
    <div className='home'>
      <Topbar />

      <div className="homePageWrapper">



        <div className="homeLeftBar">
          <Leftbar />
        </div>

        <div className="homePageRightbar">
          <div className="cardRow">
            <FeaturedInfo type="user" />
            <FeaturedInfo type="order" />
            <FeaturedInfo type="earning" />
            <FeaturedInfo type="balance" />
          </div>

          <div className="revenueAndGraphRow">
            <Revenue />
            <Graph />
          </div>
          <LatestTransaction />
        </div>



      </div>
    </div>
  )
}

export default Home
import React from 'react'
import "./singlePage.scss"
import Topbar from '../../components/topbar/Topbar'
import Leftbar from '../../components/leftbar/Leftbar'
import UserInfoCard from '../../components/userInfoCard/UserInfoCard'


function SinglePage() {
    return (
        <div className='singlePageCon'>
            <Topbar />

            <div className="singlePageWrapper">
                <Leftbar className="singlePageLeftBar" />

                <div className="singlePageRightWholeCon">
                    <div className="singlePageRightSideFirstRow">
                        <UserInfoCard/>
                        
                    </div>

                <span>Table</span>
                    

                </div>
                

            </div>

        </div>
    )
}

export default SinglePage
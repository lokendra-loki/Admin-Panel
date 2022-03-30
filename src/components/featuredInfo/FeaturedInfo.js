import { PersonOutlined } from '@mui/icons-material'
import React from 'react'
import "./featuredinfo.scss"


function FeaturedInfo() {
    return (
        <div className='featured'>
            <div className="boxContainer">

                {/* 1st Row---------------------------- */}
                <div className="firstRowContainerOfBoxContainer">
                    <span className="titleOfBox">USERS</span>
                    <span className="increasePercentageText"> ^ +5 %</span>
                </div>


                {/* 2nd Row---------------------------- */}
                <div className="secondRowContainerOfBoxContainer">
                    <span className="numberDataOfBox">720</span>
                </div>


                {/* 3rd Row---------------------------- */}
                <div className="thirdRowContainerOfBoxContainer">
                    <span className="thirdRowTitle">See all users</span>
                    <PersonOutlined className='thirdRowIcon'/>
                </div>





               


            </div>
        </div>
    )
}

export default FeaturedInfo
import { AccountBalanceWalletOutlined, MonetizationOnOutlined, PersonOutlined, ShoppingCartOutlined} from '@mui/icons-material'
import React from 'react'
import "./featuredinfo.scss"


function FeaturedInfo() {
    return (
        <div className='featured'>

            {/* USERS-----------------------------------------------*/}
            <div className="boxContainer">
                {/* 1st Row----------------*/}
                <div className="firstRowContainerOfBoxContainer">
                    <span className="titleOfBox">USERS</span>
                    <span className="increasePercentageText"> ^ +5 %</span>
                </div>
                {/* 2nd Row-------------*/}
                <div className="secondRowContainerOfBoxContainer">
                    <span className="numberDataOfBox">720</span>
                </div>
                {/* 3rd Row------------*/}
                <div className="thirdRowContainerOfBoxContainer">
                    <span className="thirdRowTitle">See all users</span>
                    <PersonOutlined className='thirdRowIcon' />
                </div>
            </div>


            {/* ORDERS-----------------------------------------------*/}
            <div className="boxContainer">
                {/* 1st Row---------------------------- */}
                <div className="firstRowContainerOfBoxContainer">
                    <span className="titleOfBox">ORDERS</span>
                    <span className="increasePercentageText"> ^ +5 %</span>
                </div>
                {/* 2nd Row---------------------------- */}
                <div className="secondRowContainerOfBoxContainer">
                    <span className="numberDataOfBox">260</span>
                </div>
                {/* 3rd Row---------------------------- */}
                <div className="thirdRowContainerOfBoxContainer">
                    <span className="thirdRowTitle">View all orders</span>
                    <ShoppingCartOutlined className='thirdRowIcon' />
                </div>

            </div>


          {/* EARNING------------------------------------------------*/}
            <div className="boxContainer">
                {/* 1st Row---------------------------- */}
                <div className="firstRowContainerOfBoxContainer">
                    <span className="titleOfBox">EARNINGS</span>
                    <span className="increasePercentageText"> ^ +5 %</span>
                </div>
                {/* 2nd Row---------------------------- */}
                <div className="secondRowContainerOfBoxContainer">
                    <span className="numberDataOfBox">$4.6k</span>
                </div>
                {/* 3rd Row---------------------------- */}
                <div className="thirdRowContainerOfBoxContainer">
                    <span className="thirdRowTitle">View net earning</span>
                    {/* <PersonOutlined className='thirdRowIcon' /> */}
                  <MonetizationOnOutlined className='thirdRowIcon'/>
                </div>
            </div>

            {/* MY BALABCE------------------------------------------------*/}
            <div className="boxContainer">
                {/* 1st Row---------------------------- */}
                <div className="firstRowContainerOfBoxContainer">
                    <span className="titleOfBox">MY BALANCE</span>
                    <span className="increasePercentageText"> ^ +5 %</span>
                </div>
                {/* 2nd Row---------------------------- */}
                <div className="secondRowContainerOfBoxContainer">
                    <span className="numberDataOfBox">$7.8k</span>
                </div>
                {/* 3rd Row---------------------------- */}
                <div className="thirdRowContainerOfBoxContainer">
                    <span className="thirdRowTitle">See details</span>
                 
                    <AccountBalanceWalletOutlined className='thirdRowIcon'/>
                </div>

            </div>
        </div>
    )
}

export default FeaturedInfo
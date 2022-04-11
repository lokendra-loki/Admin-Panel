import { AccountBalanceWalletOutlined, MonetizationOnOutlined, PersonOutlined, ShoppingCartOutlined } from '@mui/icons-material'
import React from 'react'
import "./featuredinfo.scss"


function FeaturedInfo({ type }) {
    let data;


    //temporary  data
    const amount = 100;
    const diff = 20;

    switch (type) {
        case 'user':
            data = {
                titleOfBox: 'USERS',
                isMoney: false,
                thirdRowTitleLink: "View all orders",
                thirdRowIcon: (<PersonOutlined className='thirdRowIcon' />),
            }
            break;

        case 'order':
            data = {
                titleOfBox: 'ORDERS',
                isMoney: false,
                thirdRowTitleLink: "See all users",
                thirdRowIcon: (<ShoppingCartOutlined className='thirdRowIcon' />),
            }
            break;

        case 'earning':
            data = {
                titleOfBox: 'EARNINGS',
                isMoney: true,
                thirdRowTitleLink: "View net earnings",
                thirdRowIcon: (<MonetizationOnOutlined className='thirdRowIcon' />),
            }
            break;


        case 'balance':
            data = {
                titleOfBox: 'BALANCE',
                isMoney: true,
                thirdRowTitleLink: "See details",
                thirdRowIcon: (<AccountBalanceWalletOutlined className='thirdRowIcon' />),
            }
            break;
        default: break;
    }









    return (
        <div className='featured'>
            {/* USERS-----------------------------------------------*/}
            <div className="boxContainer">
                {/* 1st Row----------------*/}
                <div className="firstRowContainerOfBoxContainer">
                    <span className="titleOfBox">{data.titleOfBox}</span>
                    <span className="increasePercentageText"> {diff}%</span>
                </div>
                {/* 2nd Row-------------*/}
                <div className="secondRowContainerOfBoxContainer">
                    <span className="numberDataOfBox">{data.isMoney && "$"}{amount}</span>
                </div>
                {/* 3rd Row------------*/}
                <div className="thirdRowContainerOfBoxContainer">
                    <span className="thirdRowTitleLink">{data.thirdRowTitleLink}</span>
                    {/* <PersonOutlined className='thirdRowIcon' /> */}
                    {data.thirdRowIcon}
                </div>
            </div>
        </div>
    )
}

export default FeaturedInfo
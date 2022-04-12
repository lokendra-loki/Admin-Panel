import React from 'react'
import "./userInfoCard.scss"
import Graph from '../graph/Graph'
import DataTable from '../datatable/DataTable'


function UserInfoCard() {
    return (
        <div className="userInfoCardCon">
            <div className="singlePageRowOne">
                <div className="userInfoCardConWrapper">
                    <span className="informationTxt">User Information</span>
                    <div className="avatarAndNameRow">
                        <div className="avatrColumn">
                            <img className='avatarPic' src="https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
                        </div>
                        <div className="userNameAndInfoColumn">
                            <span className="userInfoName"> Loki Chaulagain</span>

                            <div className="userInfoKeyValue">
                                <div className="userInfoKey">Email: </div>
                                <div className="userInfoValue"> lokendra@gmail.com</div>
                            </div>

                            <div className="userInfoKeyValue">
                                <div className="userInfoKey">Phone: </div>
                                <div className="userInfoValue"> +977 0948453563</div>
                            </div>

                            <div className="userInfoKeyValue">
                                <div className="userInfoKey">Country: </div>
                                <div className="userInfoValue"> Nepal</div>
                            </div>

                            <div className="userInfoKeyValue">
                                <div className="userInfoKey">Address: </div>
                                <div className="userInfoValue"> Kathmandu </div>
                            </div>

                            <button className='userInfoEditButton'>Edit</button>
                        </div>
                    </div>
                </div>
                <div className="singlePageChart">
                    <Graph aspect={8 / 2.2} chartTitle="User Spending (Last 6 months)" />
                </div>


            </div>

            <div className="singlePageTable">
                <span className='singlePageTableTitle'>Last Transaction</span>
                <DataTable/>
            </div>

        </div>
    )
}

export default UserInfoCard
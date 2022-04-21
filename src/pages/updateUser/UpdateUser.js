import React from 'react'
import Leftbar from '../../components/leftbar/Leftbar'
import Topbar from '../../components/topbar/Topbar'
import './updateUser.scss'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocationCityOutlinedIcon from '@mui/icons-material/LocationCityOutlined';


function UpdateUser() {
    return (
        <div className='updateUserPage'>
            <Topbar />

            <div className="userUpdatePageWrapper">
                <div className="userUpdatePageLeftBar">
                    <Leftbar />
                </div>

                <div className="userUpdatePageRightBar">
                    <span className='userUpdatePageTitle'>Edit User</span>

                    <div className="userUpdatePageTwoConRow">
                        <div className="oldDetail">
                            <div className="oldDetailProfileAndName">
                                <div className="oldCircleAvatar">
                                    <img className='oldProfileImg' src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />

                                </div>
                                <div className="nameProfession">
                                    <span className='oldName' >Loki Chaulagain</span>
                                    <span className='oldProfession' >Software Engineer</span>
                                </div>
                            </div>

                            <span className=" accountDetail" >Account Details</span>
                            <div className="iconDetailRow">
                                <PersonOutlineIcon className='oldIcon' />
                                <span>Loki986</span>
                            </div>

                            <div className="iconDetailRow">
                                <CalendarMonthOutlinedIcon  className='oldIcon' />
                                <span>2022/12/2</span>
                            </div>





                            <span className='contactDetail'>Contact Details</span>
                            <div className="iconDetailRow">
                                <PhoneOutlinedIcon className='oldIcon'  />
                                <span>9876452737</span>
                            </div>

                            <div className="iconDetailRow">
                                <EmailOutlinedIcon className='oldIcon' />
                                <span>lokendra@gmail.com</span>
                            </div>

                            <div className="iconDetailRow">
                               <LocationCityOutlinedIcon  className='oldIcon' />
                                <span>Kathmandu Nepal</span>
                            </div>











                        </div>




                        <div className="newDetail">new</div>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default UpdateUser
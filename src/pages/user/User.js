import React from 'react'
import Leftbar from '../../components/leftbar/Leftbar'
import Topbar from '../../components/topbar/Topbar'
import './user.scss'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocationCityOutlinedIcon from '@mui/icons-material/LocationCityOutlined';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';


function User() {
    return (
        <div className='updateUserPage'>
            <Topbar />
            <div className="userUpdatePageWrapper">
                <div className="userUpdatePageLeftBar">
                    <Leftbar />
                </div>

                {/* Left Side Container */}
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
                                <CalendarMonthOutlinedIcon className='oldIcon' />
                                <span>2022/12/2</span>
                            </div>

                            <span className='contactDetail'>Contact Details</span>
                            <div className="iconDetailRow">
                                <PhoneOutlinedIcon className='oldIcon' />
                                <span>9876452737</span>
                            </div>

                            <div className="iconDetailRow">
                                <EmailOutlinedIcon className='oldIcon' />
                                <span>lokendra@gmail.com</span>
                            </div>

                            <div className="iconDetailRow">
                                <LocationCityOutlinedIcon className='oldIcon' />
                                <span>Kathmandu Nepal</span>
                            </div>
                        </div>

                        {/* Right Side Container ====================================*/}
                        <div className="newDetail">
                            <span className="userEditTitle">Edit</span>
                            <form action="" className="userUpdateForm">
                                <div className="userUpdateFormLeft">
                                    <div className="userUpdateItem">
                                        <label >Username</label>
                                        <input className='userUpdateInput' type="text" placeholder="loki " />
                                    </div>

                                    <div className="userUpdateItem">
                                        <label className='userUpdateItemLabel'>Full Name</label>
                                        <input className='userUpdateInput' type="text" placeholder="Loki Chaulagain" />
                                    </div>

                                    <div className="userUpdateItem">
                                        <label >Email</label>
                                        <input className='userUpdateInput' type="email" placeholder="loki chaulagain" />
                                    </div>

                                    <div className="userUpdateItem">
                                        <label >Phone</label>
                                        <input className='userUpdateInput' type="text" placeholder="+977 9865346835" />
                                    </div>

                                    <div className="userUpdateItem">
                                        <label >Address</label>
                                        <input className='userUpdateInput' type="text" placeholder="Tikapur kailali" />
                                    </div>



                                </div>

                                <div className="userUpdateFormRight">
                                    <div className="userUpdateFormRightRow">
                                        <img className='userUpdateImg' src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
                                        <label htmlFor="file">
                                            <FileUploadOutlinedIcon className='userUpdateImgIcon' />
                                        </label>
                                        <input type="file" id='file'  style={{display: "none"}}/>
                                    </div>


                                    <button className='userUpdateFormRightUpdateBut'> Update </button>

                                </div>

                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default User
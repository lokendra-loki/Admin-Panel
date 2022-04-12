import React from 'react'
import "./addNewUserPage.scss"
import Leftbar from '../../components/leftbar/Leftbar'
import Topbar from '../../components/topbar/Topbar'


function AddNewUserPage() {
    return (
        <div className='addNewUserPage'>
            <Topbar />

            <div className="addNewUserWrapper">
                <Leftbar className=" addNewUserLeftBar" />
                <div className="addNewUserRightBar">
                    <div className="addNewUserTitleCon">Add New User</div>

                    <div className="addNewUserFormCon">
                        <div className="addNewUserCircleAvatar">
                            <img className='addNewUserCircleAvatarImg' src="https://avatars.githubusercontent.com/u/81034183?v=4" alt="" />
                        </div>

                        <form className="addNewUserInputForm">
                            <div className="addNewUserFormInput1">
                                <label className='addNewUserLabel' >Name and Surname</label>
                                <input className='addNewUserInput' type="text" placeholder='Loki Chaulagain' />

                                <label className='addNewUserLabel'>Phone</label>
                                <input className='addNewUserInput' type="text" placeholder='Loki Chaulagain' />

                                <label className='addNewUserLabel'>Address</label>
                                <input className='addNewUserInput' type="text" placeholder='Loki Chaulagain' />

                                <label className='addNewUserLabel'>Username</label>
                                <input className='addNewUserInput' type="text" placeholder='Loki Chaulagain' />
                            </div>

                            <div className="addNewUserFormInput2">
                                <label className='addNewUserLabel'>Email</label>
                                <input className='addNewUserInput' type="email" placeholder='Loki Chaulagain' />

                                <label className='addNewUserLabel'>Password</label>
                                <input className='addNewUserInput' type="text" placeholder='1736382' />

                                <label className='addNewUserLabel'>Country</label>
                                <input className='addNewUserInput' type="text" placeholder='Nepal' />
                                <button className='addUserButton'  type='submit'  >Add User</button>
                                
                            </div>
                            



                        </form>

                    </div>
                </div>
            </div>







        </div>
    )
}

export default AddNewUserPage
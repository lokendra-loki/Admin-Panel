import { Language, NotificationsNone, Settings } from '@mui/icons-material'
import React from 'react'
import "./topbar.scss"

function Topbar() {
    return (
        <div className='topbar'>
            <div className="topBarWrapper">

                {/* TopBarLeft------------------------------------------ */}
                <div className="topBarLeft">
                    <span className="logoText">LokiAdmin</span>
                </div>

                {/* TopBarRight------------------------------------------ */}
                <div className="topBarRight">
                    {/* Icon and Badge container */}
                    <div className="topBarRightIconContainer">
                        <NotificationsNone className='topBarNotificationIcon' />
                        {/* <span className='topIconBadge'>5</span> */}
                    </div>

                    <div className="topBarRightIconContainer">
                        <Language className='topBarLanguageIcon' />
                        
                    </div>

                    <div className="topBarRightIconContainer">
                       <Settings className='topBarSettingsIcon' />
                    </div>
                
                {/* Profile Image----------------------- */}
                    <img className='topAvatar' src="/assets/person/1.jpeg" alt="" />
                </div>

            </div>
        </div>
    )
}

export default Topbar
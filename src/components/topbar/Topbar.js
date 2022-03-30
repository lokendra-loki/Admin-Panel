import { ChatBubbleOutline, DarkMode, Dehaze, Language, NotificationsNone, Settings, ZoomOutMap } from '@mui/icons-material'
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
                        <Language  />
                        English
                    </div>

                    <div className="topBarRightIconContainer">
                       <DarkMode/>
                    </div>

                    <div className="topBarRightIconContainer">
                       <ZoomOutMap/>
                    </div>


                    
                    <div className="topBarRightIconContainer">
                        <NotificationsNone  />
                        <span className='topIconBadge'>5</span>
                    </div>

                    <div className="topBarRightIconContainer">
                        <ChatBubbleOutline/>
                        <span className='topIconBadge'>5</span>
                    </div>

                    


                    <div className="topBarRightIconContainer">
                       <Dehaze/>
                    </div>

                    
                    

                    <div className="topBarRightIconContainer">
                       <Settings  />
                    </div>
                
                {/* Profile Image----------------------- */}
                    <img className='topAvatar' src="/assets/person/1.jpeg" alt="" />
                </div>

            </div>
        </div>
    )
}

export default Topbar
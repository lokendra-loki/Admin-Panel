import { AccountBox, Assessment, Dashboard, ExitToApp, LocalShippingOutlined, Notifications, PersonOutline, SettingsApplications, ShoppingCartOutlined, StoreMallDirectory } from '@mui/icons-material'
import React from 'react'
import "./leftbar.scss"

function Leftbar() {
    return (
        <div className='leftBar'>
            <div className="leftBarWrapper">
                <div className="leftBarMenu">
                    {/* MAIN--------------------------- */}
                    <h3 className="leftBarTitle">MAIN</h3>
                    <ul className="leftBarList">
                        <li className="leftBarListItem active "  >
                            <Dashboard className='leftBarIcons' />
                            <span className='leftBarIconTitle'>Dashboard</span>
                        </li>
                    </ul>
                </div>


                {/* LISTS---------------------------------- */}
                <div className="leftBarMenu">
                    <h3 className="leftBarTitle">LISTS</h3>
                    <ul className="leftBarList">
                        <li className="leftBarListItem">
                            <PersonOutline className='leftBarIcons' />
                            <span className='leftBarIconTitle'> Users</span>

                        </li>
                        <li className="leftBarListItem">
                            <StoreMallDirectory className='leftBarIcons' />
                            <span className='leftBarIconTitle'> Products</span>

                        </li>
                        <li className="leftBarListItem">
                            <ShoppingCartOutlined className='leftBarIcons' />
                            <span className='leftBarIconTitle'>Orders</span>

                        </li>
                        <li className="leftBarListItem">
                            <LocalShippingOutlined className='leftBarIcons' />
                            <span className='leftBarIconTitle'>Delivery</span>

                        </li>
                    </ul>
                </div>


                {/* USEFUL---------------------------- */}
                <div className="leftBarMenu">
                    <h3 className="leftBarTitle">USEFUL</h3>
                    <ul className="leftBarList">
                        <li className="leftBarListItem">
                            <Assessment className='leftBarIcons' />
                            <span className='leftBarIconTitle'> Stats</span>

                        </li>
                        <li className="leftBarListItem">
                            <Notifications className='leftBarIcons' />
                            <span className='leftBarIconTitle'>Notifications</span>

                        </li>
                    </ul>
                </div>


                {/* SERVICE------------------------------------ */}
                <div className="leftBarMenu">
                    <h3 className="leftBarTitle">SERVICE</h3>
                    <ul className="leftBarList">
                        <li className="leftBarListItem">
                            <SettingsApplications className='leftBarIcons' />
                            <span className='leftBarIconTitle'>System Health</span>

                        </li>
                        <li className="leftBarListItem">
                            <SettingsApplications className='leftBarIcons' />
                            <span className='leftBarIconTitle'>Logs</span>

                        </li>
                        <li className="leftBarListItem">
                            <SettingsApplications className='leftBarIcons' />
                            <span className='leftBarIconTitle'>Settings</span>

                        </li>
                    </ul>
                </div>


                {/* USER-------------------------------- */}
                <div className="leftBarMenu">
                    <h3 className="leftBarTitle">USER</h3>
                    <ul className="leftBarList">
                        <li className="leftBarListItem">
                            <AccountBox className='leftBarIcons' />
                            <span className='leftBarIconTitle'>Profile</span>

                        </li>
                        <li className="leftBarListItem">
                            <ExitToApp className='leftBarIcons' />
                            <span className='leftBarIconTitle'>Logout</span>
                        </li>
                    </ul>
                </div>




            </div>
        </div>
    )
}

export default Leftbar
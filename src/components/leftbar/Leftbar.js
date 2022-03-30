import { Dashboard,LocalShippingOutlined,PersonOutline,ShoppingCartOutlined,Timeline } from '@mui/icons-material'
import React from 'react'
import "./leftbar.scss"

function Leftbar() {
    return (
        <div className='leftBar'>
            <div className="leftBarWrapper">

                <div className="leftBarMenu">
                    <h3 className="leftBarTitle">MAIN</h3>
                    <ul className="leftBarList">
                        <li className="leftBarListItem">
                           <Dashboard/>
                            Dashboard
                        </li>
                        <li className="leftBarListItem">
                           <PersonOutline/>
                            Analytics
                        </li>
                        <li className="leftBarListItem">
                           <ShoppingCartOutlined/>
                            Sales
                        </li>
                    </ul>
                </div>



                <div className="leftBarMenu">
                    <h3 className="leftBarTitle">LISTS</h3>
                    <ul className="leftBarList">
                        

                        <li className="leftBarListItem">
                            <Timeline />
                            Orders
                        </li>

                        <li className="leftBarListItem">
                            <LocalShippingOutlined/>
                            Delivery
                        </li>

                    </ul>


                </div>



                <div className="leftBarMenu">
                    <h3 className="leftBarTitle">USEFUL</h3>
                    <ul className="leftBarList">
                       

                        <li className="leftBarListItem">
                            <Timeline />
                            Notification
                        </li>


                    </ul>


                </div>




            </div>
        </div>
    )
}

export default Leftbar
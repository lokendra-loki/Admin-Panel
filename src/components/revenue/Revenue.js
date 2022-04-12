import React from 'react'
import "./revenue.scss"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { KeyboardArrowDown } from '@mui/icons-material';
import { KeyboardArrowUp } from '@mui/icons-material';

function Revenue() {
    return (
        <div className='revenueCon'>

            <div className="revenueTopRow">
                <span className="revenueTitle">Total Revenue</span>
                <MoreVertIcon className="moreIcon" />
            </div>

            <div className="revenueBottom">
                <div className="progressBarCon">
                    <CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
                </div>
                <span className='totalSaleMade'>Total sales made today</span>
                <span className='totalSaleMadeAmount'>$420</span>
                <span className='totalRevDescription'>Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem lokebdra mouse laptop soupper.
                </span>

                <div className="revenueSummary">

                    <div className="revenueSummaryItem">
                        <span className='revenueSummaryItemTitle'>Target</span>
                        <div className="revenueSummaryItemResult positive">
                            <KeyboardArrowUp className="summaryArrowUpIcon" />
                            <span className='revenueSummaryItemResultAmount'>$420</span>

                        </div>
                    </div>

                    <div className="revenueSummaryItem">
                        <span className='revenueSummaryItemTitle'>Last Week</span>
                        <div className="revenueSummaryItemResult negative">
                            <KeyboardArrowUp className="summaryArrowUpIcon" />
                            <span className='revenueSummaryItemResultAmount'>$420</span>

                        </div>
                    </div>

                    <div className="revenueSummaryItem">
                        <span className='revenueSummaryItemTitle'>Last Month</span>
                        <div className="revenueSummaryItemResult positive">
                            <KeyboardArrowUp className="summaryArrowUpIcon" />
                            <span className='revenueSummaryItemResultAmount'>$420</span>

                        </div>
                    </div>



                </div>

            </div>


        </div>
    )
}

export default Revenue
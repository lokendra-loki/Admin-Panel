import React from 'react'
import "./list.scss"
import Leftbar from '../../components/leftbar/Leftbar'
import Topbar from '../../components/topbar/Topbar'
import DataTable from '../../components/datatable/DataTable'

function List() {
    return (
        <div className='listPage'>
            <Topbar />

            <div className="listContainer">
                <Leftbar className="leftBarInListPage" />
                <div className="dataTableInListPage">
                    <DataTable />

                </div>

            </div>

        </div>
    )
}

export default List
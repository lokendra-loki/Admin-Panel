import React from 'react'
import "./dataTable.scss"
import { DataGrid } from '@mui/x-data-grid';
import { userRows, userColumns } from "../../dataTableSource.js";


function DataTable() {

    const actionColumn = [
        { field: "action" ,headerName:"Action", width:200,renderCell:()=>{
            return(
                <div className="cellAction">
                    <div className="viewButton">View</div>
                    <div className="deleteButton">Delete</div>
                </div>
            )
        }}
    ]






    return (
        <div className="dataTableCon">
            <div style={{ height: 600,  }}>
                <DataGrid
                    rows={userRows}
                    columns={userColumns.concat(actionColumn)}
                    pageSize={9}
                    rowsPerPageOptions={[0]}
                    checkboxSelection
                />
            </div>










        </div>
    )
}

export default DataTable
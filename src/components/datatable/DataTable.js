import React from 'react'
import "./dataTable.scss"
import { DataGrid } from '@mui/x-data-grid';
import { userRows, userColumns } from "../../dataTableSource.js";
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { Link } from "react-router-dom";
import { useState } from 'react';




function DataTable() {
    const [data,setData]=useState(userRows)
    const handleDelete=(id)=>{
        setData(data.filter(item=>item.id!==id))
    }



    const actionColumn = [
        {
            field: "action", headerName: "Action", width: 200, renderCell: (params) => {
                return (
                    <div className="cellAction">

                        <Link to={"/user/"+params.row.id}>
                        <div className="actionEditButton">Edit</div>
                        </Link>
                       
                        <DeleteOutlinedIcon className="actionDeleteIcon"  onClick={()=>handleDelete(params.row.id)} />
                    </div>
                )
            }
        }
    ]

    return (
        <div className="dataTableCon">
            <div style={{ height: 600, }}>
                <DataGrid
                    rows={data}
                    columns={userColumns.concat(actionColumn)}
                    pageSize={9}
                    rowsPerPageOptions={[0]}
                    checkboxSelection
                    disableSelectionOnClick
                />
            </div>
        </div>
    )
}

export default DataTable
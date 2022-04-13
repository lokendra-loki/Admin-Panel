import React from 'react'
import Leftbar from '../../components/leftbar/Leftbar'
import Topbar from '../../components/topbar/Topbar'
import "./addProduct.scss"


export default function AddProduct() {
    return (
        <div className='addNewProductPage'>
            <Topbar />
            <div className="addNewProductPageWrapper">
                <div className="addNewProductLeftSide">
                    <Leftbar />
                </div>
                <div className="addNewProductRightSide">

                    <form className='addNewProductForm' action="">
                        <span className='addNewProductTxt'>Add New Product</span>

                        <label  className='addNewProductChooseFileLabel' htmlFor="">Upload Picture</label>
                        <input className='addNewProductChooseFileInput' type="file" name="" id="" />



                        <label className='addNewProductFormLabel' htmlFor="">Name</label>
                        <input className='addNewProductFormInput' type="text" />
                        <label className='addNewProductFormLabel' htmlFor="">Stock</label>
                        <input className='addNewProductFormInput' type="text" />
                        <label className='addNewProductFormLabel' htmlFor="">Active</label>
                        <select className='addNewProductFormInput' id="">
                            <option value="">Yes</option>
                            <option value="">No</option>
                        </select>
                        <button className='addNewProductFormButton'>Create</button>




                    </form>

                </div>

            </div>

        </div>
    )
}

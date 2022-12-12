import React, { useEffect, useState } from 'react'
import "./CustomCSS/ModelPopup.css"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { AiOutlineClose } from 'react-icons/ai';

const ModelPopup = ({ open, handleClose, data, id }) => {
    //Check if the popup is open or not
    if (!open) return null

    return (
        <div className='modelPopupContainer d-flex flex-column justify-content-center align-items-center'>
            <div className='modelpopup'>
                <div className='d-flex justify-content-end align-items-center'>
                    <div className='mr-2'><AiOutlineClose onClick={handleClose} size={25} /></div>
                </div>
                <h5 className='p-2'>Leads Information</h5>
                <p className='p-2'>Popup with Lead Information</p>

                {/* Logic to show the data dynamically onclick of any row */}

                {Array.isArray(data) ? data.filter(data => data.Lead_ID.includes(id)).map(filteredLeads => {
                    return (
                        <div>
                            <h3 className='p-2'>Customer Name: {filteredLeads.Customer}</h3>
                            <p className='p-2'>Location: {filteredLeads.Location}</p>
                            <p className='p-2'>Status: {filteredLeads.Status}</p>

                        </div>
                    )
                }) : null}
            </div>

        </div>
    )
}

export default ModelPopup
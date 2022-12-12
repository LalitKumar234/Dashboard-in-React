import React from 'react'
import "./CustomCSS/TopNav.css"
import { MdOutlineAdd } from 'react-icons/md';

const TopNav = () => {
    return (
        <div className='topNavContainer d-flex flex-row justify-content-between align-items-center'>
            <h1>Leads</h1>
            <div className='d-flex flex-row m-2 align-items-center'>
                <form class="form-inline my-lg-0 m-2">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                </form>
                <button className='my-btn'><MdOutlineAdd size={20} />Add New</button>
                <button className='my-btn'>Assign to Admin</button>
            </div>
        </div>
    )
}

export default TopNav
import React from 'react'
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./CustomCSS/SideNavbar.css"
import { MdOutlineExpandMore } from 'react-icons/md';
import { AiOutlineHome, AiOutlineDashboard, AiOutlineFileDone, AiOutlineSchedule } from 'react-icons/ai';
import { FiSettings} from 'react-icons/fi';
import "./CustomCSS/ReponsiveSideNav.css"

const ResponsiveSideNav = () => {
    return (
        <div className=''>
            <div className='text-white p-3 h-100 fixed-top d-flex flex-column sideNavbarContainer'>
                <div className="logo d-flex justify-content-center align-items-center">KMK</div>
                <div className="telecaller mt-4 flex-row justify-content-between align-items-center p-2">
                    <div className="profilePic"></div>
                    <div className='info d-flex flex-column'>
                        <h1 className=''>Ashish Kumar</h1>
                        <p className='designation'>Telecaller</p>
                    </div>
                    <div className="expand flex-end justify-content-end align-items-center">
                        <MdOutlineExpandMore />
                    </div>
                </div>
                <ul className='menus mt-2 d-flex flex-column justify-content-start'>
                    <li className='pt-4 d-flex flex-row menu-items'>
                        <AiOutlineDashboard size={20} />
                        <p>Dashboard</p>
                    </li>
                    <a href="/">
                        <li className='pt-4 d-flex flex-row menu-items'>
                            <AiOutlineHome size={20} />
                            <p>Leads</p>
                        </li>
                    </a>
                    <a href="/projecttracking">
                        <li className='pt-4 d-flex flex-row menu-items'>
                            <AiOutlineFileDone size={20} />
                            <p>Project Tracking</p>
                        </li>
                    </a>
                    <li className='pt-4 d-flex flex-row menu-items'>
                        <AiOutlineSchedule size={20} />
                        <p>Scheduling Meeting</p>
                    </li>
                    <li className='pt-4 d-flex flex-row menu-items'>
                        <FiSettings size={18} />
                        <p>Settings</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default ResponsiveSideNav
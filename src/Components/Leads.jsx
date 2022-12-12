import React, { useEffect, useState } from 'react'
import "./CustomCSS/Leads.css"
import { AiOutlineEye, AiOutlineSearch } from 'react-icons/ai';
import { BsPencil } from 'react-icons/bs';
import { MdOutlineDeleteOutline } from 'react-icons/md';
import datas from "./Data.json" //Importing data from Data.Json to show the data dynamically
import TopNav from './TopNav';
import { Link } from "react-router-dom";
import ModelPopup from './ModelPopup';
import { AiOutlineClose } from 'react-icons/ai';

const Leads = () => {
    const [model, setModel] = useState(false);
    const [lData, setLData] = useState('');
    const [id, setId] = useState();
    const [alert, setAlert] = useState(true)



    const handleClose = () => {
        setAlert(!alert)

    }
    //Use Effect to display data present in Data.json
    useEffect(() => {
        setLData(datas)
    }, []);
    
    //On click function to show the data on popup
    const handlePopup = (id) => {
        setId(id)
        setModel(true)
    }

    return (
        <>

            <div className='leadsContainer'>
                {
                    alert ? <div class="alert alert-success d-flex justify-content-between" role="alert">
                        Try Clicking on any row and check the model popup displaying data dynamically. For Project tracking UI click on Project tracking in the Side Navbar
                        <AiOutlineClose size={22} onClick={handleClose} className='cursor-pointer' />
                    </div> : null
                }

                <TopNav />
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label class="form-check-label" for="flexCheckDefault">
                                        Customer Name
                                    </label>
                                </div>
                            </th>
                            <th scope="col">Lead ID</th>
                            <th scope="col">Location</th>
                            <th scope="col">Event Date</th>
                            <th scope="col">Status</th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <Link to="/courses?sort=name" />

                        {Array.isArray(lData) ? lData.map((data) => {
                            return (

                                <tr className='tableRow' onClick={() => handlePopup(data.Lead_ID)}>
                                    <td scope="row">
                                        <div key={data.Lead_ID} class="form-check check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label" for="flexCheckDefault">
                                                <strong>{data.Customer}</strong>
                                            </label>
                                        </div>
                                    </td>

                                    <td className='dataLead'>{data.Lead_ID}</td>

                                    <td >{data.Location}</td>
                                    <td >{data.Event_Date}</td>
                                    <td >{data.Status}</td>
                                    <td><AiOutlineEye size={20} /></td>
                                    <td><BsPencil size={18} /></td>
                                    <td><MdOutlineDeleteOutline size={20} /></td>
                                    <td><AiOutlineSearch size={20} /></td>
                                </tr>
                            )
                        }) : null}

                    </tbody>
                </table>
            </div>
            <ModelPopup open={model} data={lData} id={id} handleClose={() => setModel(false)} />
        </>
    )
}

export default Leads
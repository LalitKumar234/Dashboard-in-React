import React from 'react'
import "./CustomCSS/ProjectTracking.css"
import { MdOutlineAdd } from 'react-icons/md';
import Accordion from 'react-bootstrap/Accordion';
import BudgetInfo from './BudgetInfo';

const ProjectTracking = () => {
    return (
        <>
            <div className='projectContainer d-flex justify-content-between flex-column'>
                <div className="topNav d-flex justify-content-between">
                    <div className='d-flex flex-column'>
                        <h3>Project Tracking</h3>
                        <div className='d-flex flex-row align-items-center projectTracking'>
                            <p className='P-id'>006676</p>
                            <p className='p-tracking'>Project Tracking</p>
                        </div>
                    </div>
                    <div>
                        <input type="text" />
                        <button className='my-btn'><MdOutlineAdd size={25} />Add New</button>
                    </div>
                </div>
                <Accordion defaultActiveKey="4">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Client Information</Accordion.Header>
                        <Accordion.Body>
                            Client Information
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Event Information</Accordion.Header>
                        <Accordion.Body>
                            Event Information
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>KMK Information</Accordion.Header>
                        <Accordion.Body>
                            KMK Information
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                        <Accordion.Header >Budget Information</Accordion.Header>
                        <Accordion.Body>
                            <BudgetInfo />
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="5">
                        <Accordion.Header>Gallery</Accordion.Header>
                        <Accordion.Body>
                            Gallery
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </>
    )
}

export default ProjectTracking
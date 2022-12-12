import React from 'react'
import "./CustomCSS/BudgetInfo.css"

const BudgetInfo = () => {
    return (
        <div className='budgetInfoContainer'>
            <ul className='d-flex p-2 tab-content'>
                <li className='tabs active'>Decoration</li>
                <li className='tabs'>Food</li>
                <li className='tabs'>VAS</li>
                <li className='tabs'>Others</li>
            </ul>
            <ul className='d-flex p-2 tab-menus'>
                <li className='tab_menu tab-active'>
                    <p>Decoration & Props</p> </li>
                <li className='tab_menu'><p>Floral</p></li>
                <li className='tab_menu'><p>Logistics</p></li>
                <li className='tab_menu'><p>Conceptual Lighting</p></li>
                <li className='tab_menu'><p>Sound</p></li>
            </ul>
            <div className="d-flex justify-content-end">
                <button className='my-btn'>Add</button>
            </div>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Particulars</th>
                        <th scope="col">UOM</th>
                        <th scope="col">Qty</th>
                        <th scope="col">Rate</th>
                        <th scope="col">Amount</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">Main Entry</th>
                        <td><input value="NOS"/></td>
                        <td><input value="2"/></td>
                        <td><input value="1200"/></td>
                        <td><input value="1200"/></td>
                    </tr>
                    <tr>
                        <th scope="row">VIP Entry, Main Road</th>
                        <td><input value="NOS"/></td>
                        <td><input value="2"/></td>
                        <td><input value="1200"/></td>
                        <td><input value="1200"/></td>
                    </tr>
                    <tr>
                        <th scope="row">Passage 100'x30'</th>
                        <td><input value="NOS"/></td>
                        <td><input value="2"/></td>
                        <td><input value="1200"/></td>
                        <td><input value="1200"/></td>
                    </tr>
                    <tr>
                        <th scope="row">VIP Passage & General Passage 250'+250</th>
                        <td><input value="NOS"/></td>
                        <td><input value="2"/></td>
                        <td><input value="1200"/></td>
                        <td><input value="1200"/></td>
                    </tr>
                    <tr>
                        <th scope="row">Main Mandap and Backdrop</th>
                        <td><input value="NOS"/></td>
                        <td><input value="2"/></td>
                        <td><input value="1200"/></td>
                        <td><input value="1200"/></td>
                    </tr>
                    <tr>
                        <th scope="row">Water Body Included</th>
                        <td><input value="NOS"/></td>
                        <td><input value="2"/></td>
                        <td><input value="1200"/></td>
                        <td><input value="1200"/></td>
                    </tr>
                    <tr>
                        <th scope="row">Lounge 80x20</th>
                        <td><input value="NOS"/></td>
                        <td><input value="2"/></td>
                        <td><input value="1200"/></td>
                        <td><input value="1200"/></td>
                    </tr>
                    <tr>
                        <th scope="row">Thematic food courts 3'</th>
                        <td><input value="NOS"/></td>
                        <td><input value="2"/></td>
                        <td><input value="1200"/></td>
                        <td><input value="1200"/></td>
                    </tr>
                </tbody>
            </table>
            <div className="d-flex justify-content-between border-bottom p-2">
                <p className='text-red'><strong>Total</strong></p>
                <p className='text-red'><strong>Rs. 50,000</strong></p>
            </div>
            <div className="d-flex justify-content-between border-bottom p-2">
                <p className='text-red'><strong>Grand Total</strong></p>
                <p className='text-red'><strong>Rs. 20,00,000</strong></p>
            </div>
            <div className="d-flex justify-content-end pt-2 pb-2">
                <button className='disable'>Cancel</button>
                <button className='my-btn'>Save</button>
            </div>
        </div>
    )
}

export default BudgetInfo
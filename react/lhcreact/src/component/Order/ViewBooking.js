import React from 'react';
import './order.css'

const ViewBooking=(props)=>{
    const renderTable = ({bookData}) => {
        if(bookData){
            return bookData.map((item) => {
                return(
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.product_name}</td>
                        <td>{item.name}</td>
                        <td>{item.phone}</td>
                        <td>{item.email}</td>
                        <td>Rs. {item.price}/-</td>
                        <td>{item.date}</td>
                        <td>{item.bank_status}</td>
                        <td>{item.Bank}</td>
                    </tr>
                )
            })
        }

    }
    return(
        <div className="container">
            <center><h2>Orders List</h2></center>
            <table className="table">
                <thead>
                    <tr>
                        <th>OrderId</th>
                        <th>Souvenior</th>
                        <th>Customer Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Price</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th>Bank</th>
                    </tr>
                </thead>
                <tbody>
                    {renderTable(props)}
                </tbody>
            </table>
        </div>
    )
}
export default ViewBooking
import React from 'react'
import { useSelector } from 'react-redux'
import CustomerItem from './CustomerItem'
import "./CustomerList.css"


const CustomerList = (props) => {
    const customers = useSelector((state) => {
        return state.customers
    } )
    
    return (
        <div >
         {customers.length === 0 ? (
             <div class="center">
             <h4>No customers found</h4>
                <p>Add your first customer</p>
                </div>
            ) : (
                <div>
                    <br/>
                <h4>No of Customers - { customers.length } </h4>
                    <CustomerItem />
                </div>
            )}
         </div>
                
           
    )
}

export default CustomerList
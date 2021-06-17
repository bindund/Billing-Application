import React from 'react'
import { useSelector } from 'react-redux'
import CustomerItem from './CustomerItem'

const CustomerList = (props) => {
    const customers = useSelector((state) => {
        return state.customers
    } )
    
    return (
        <div >
            {customers.length === 0 ? (
                <p>No customers found</p>
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
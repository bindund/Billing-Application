import React from 'react'
import CustomerForm from './CustomerForm'
import CustomerList from './CustomerList'

const Customer = (props) => {
    return(
        <div>
            <CustomerForm />
            <CustomerList/>
        </div>
    )
}
export default Customer
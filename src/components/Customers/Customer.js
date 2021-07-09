import React ,{useState}from 'react'
import CustomerForm from './CustomerForm'
import CustomerList from './CustomerList'
import './Customer.css'

const Customer = (props) => {
    return(
        <main>
            <div class="block1">  
            <CustomerForm />
            </div>
            <div class="block2">
            <CustomerList/>
            </div>
        </main>
    )
}
export default Customer
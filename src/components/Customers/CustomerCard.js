import React, { useState } from 'react'
import {  useDispatch } from 'react-redux'
import {Link} from 'react-router-dom'
import { startDeleteCust } from '../../actions/customerActions'
import Modal from 'react-modal'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'
import CustomerForm from './CustomerForm'
import Button from '@material-ui/core/Button';
import "./CustomerItem.css" 

const CustomerCard = (props) => {
    const {customer} = props
    const [open, setOpen] = useState(false)
    const [id, setId] = useState('')
    const [name, setName] = useState('')
    const [mobile, setMobile] = useState('')
    const [email, setEmail] = useState('')
    

    
    const dispatch = useDispatch()

    const deleteCustomer = (_id) => {
        const confirmRemove = window.confirm('Are you sure ?')
        if(confirmRemove) {
            dispatch(startDeleteCust(_id))
    }
}
    const handleToggle = () => {
        setOpen(!open)
    }

    const handleEdit = (customer) => {
        handleToggle()
        setId(customer._id)
        setName(customer.name)
        setMobile(customer.mobile)
        setEmail(customer.email)
    }

    return (
            <>
        
                <div class="mui-card xs-shadow">
                            <img src="./logo.jpg" class="card-img-top1" alt="..."/>
                            <div class="card-body">
                            <h5 class="card-title">{customer.name}</h5>
                            <p>{customer.email}</p>
                            <p>{customer.mobile}</p>
                            <h5><Link to= {`/bills/${customer._id}`}>show Bills</Link></h5>
                            <Button onClick={() => {
                                handleEdit(customer)
                            }}><EditIcon/></Button>
                            <Button onClick={() => {
                                deleteCustomer(customer._id)
                            }}><DeleteIcon/></Button>
                            </div>
                        </div>
    
            {open && (
                    <Modal isOpen={open}>
                    <CustomerForm
                        id={id}
                        name={name}
                        mobile={mobile}
                        email={email}
                        handleToggle={handleToggle}
                    />
                    <button onClick={() => {
                        handleToggle()
                    }}>close</button>
                    </Modal>
                )}
        </>    
    )
}

export default CustomerCard
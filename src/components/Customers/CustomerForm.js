import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {Paper,TextField} from '@material-ui/core' 
import validator from 'validator'
import { startEditCust, startPostCust } from '../../actions/customerActions'

const CustomerForm = (props) => {
    const { handleToggle, id, name, mobile: phone, email: eMail  } = props 
    
    const dispatch = useDispatch()    
    const [userName, setUserName] = useState(name ? name : '')
    const [mobile, setMobile] = useState(phone ? phone : '')
    const [email, setEmail] = useState(eMail ? eMail : '')
    const [formErrors, setFormErrors] = useState({})
    const errors = {}
    


    const handleInputChange = (e) => {
        const attr = e.target.name

        if(attr === 'userName') {
            setUserName(e.target.value)
        } else if(attr === 'mobile') {
            setMobile(e.target.value)
        } else if(attr === 'email') {
            setEmail(e.target.value)
        }
    }

    const runValidations = () => {
        if(userName.trim().length === 0) {
            errors.userName = 'name cannot be blank'
        } else if(userName.trim().length < 5) {
            errors.userName = 'name should have more than 5 characters'
        }

        
        
        if(mobile.trim().length === 0) {
            errors.mobile = 'mobile cannot be blank'
        } else if(mobile.length !== 10) {
            errors.mobile = 'mobile should be 10 digits'
        }

        
        if(email.trim().length === 0) {
            errors.email = 'email cannot be blank'
        } else if(!validator.isEmail(email)) {
            errors.email = 'invalid email format'
        }

    }

    const resetForm = () => {
        setUserName('')
        setMobile('')
        setEmail('')
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        runValidations()

        if(Object.keys(errors).length === 0){
            setFormErrors({})

            const formData = {
                name: userName,
                mobile: mobile,
                email: email
            }
            
            if(!(id)) {
                dispatch(startPostCust(formData))
                resetForm()
            } else {
                dispatch(startEditCust(id,formData))
                handleToggle()
            }


        } else {
            console.log('form errors', errors)
            setFormErrors(errors)
        }

    }


    return (
        <>
        
        <Paper className="customer_style">
            <h3>Add Customer</h3>
            <form onSubmit={handleSubmit}>
            <TextField  id="outlined-basic" label='Name' 
                    type='text'
                    name='userName'
                    placeholder="enter name"
                    value={userName}
                    onChange={handleInputChange}
                /><br />
                {formErrors.userName && <span style={{color:'red'}}> { formErrors.userName } </span>}<br />

                <TextField  id="outlined-basic" label='Mobile' 
                    type='text'
                    name='mobile'
                    placeholder='enter number'
                    value={mobile}
                    onChange={handleInputChange}
                /><br />
                {formErrors.mobile && <span style={{color:'red'}}> { formErrors.mobile } </span>}<br />

                <TextField  id="outlined-basic" label='Email' 
                    name='email'
                    value={email}
                    onChange={handleInputChange}
                    placeholder='enter email'
                /><br />
                {formErrors.email && <span style={{color:'red'}}> { formErrors.email } </span>}<br />
                
                <input  type='submit' value={id ? 'Save' : 'Add'} class="btn btn-primary mr-3" />

                <input  type='button' value='cancel' onClick={() => { resetForm() }} class="btn btn-danger" />
            </form>
            </Paper>
        
            </> 
            
    )
    
}

export default CustomerForm
import React ,{useState } from 'react'
import validator from 'validator'
import {useDispatch } from 'react-redux'
import {formSubmit} from '../actions/loginActions'
import {Button,Grid,TextField,Paper} from '@material-ui/core'



const Register = (props) => {
    const [userName , setUserName] = useState('')
    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')
    const [businessName , setBusinessName] = useState('')
    const [address , setAddress] = useState('')
    const [forms , setForms] = useState({})
    const errors = {}

    const dispatch = useDispatch()

    const handleBack = (e) => {
        props.history.push("/")
    }
    const handleCancel = (e) => {
        window.location.reload()
    }
    const handleRedirect = () => {
        props.history.push("/login")
    }
    const handleReset = () => {
        setUserName('')
        setEmail('')
        setPassword('')
        setBusinessName('')
        setAddress('')
    }

    const changeName = (e) => {
        setUserName(e.target.value)
    }
    const changeEmail = (e) => {
        setEmail(e.target.value)
    }
    const changePassword = (e) => {
        setPassword(e.target.value)
    }
    const changeBusiness = (e) => {
        setBusinessName(e.target.value)
    }
    const changeAddress = (e) => {
        setAddress(e.target.value)
    }
    const runValidations = () => {
        if(userName.trim().length === 0){
            errors.userName = "enter your Name"
        }
        if(email.trim().length === 0){
            errors.email = "enter your Email"
        }else if(!validator.isEmail(email)){
            errors.email = 'invalid email'
        }
        if(password.trim().length === 0){
            errors.password = 'enter your password'
        }
        if(businessName.trim().length === 0){
            errors.businessName = 'enter businessName'
        }
        if(address.trim().length === 0){
            errors.address = "enter address"
        }
    }
    const handleChange = (e) => {
        e.preventDefault()
        runValidations()
        if(Object.keys(errors).length === 0){
            setForms({})
            const formData = {
                username : userName ,
                email : email ,
                password : password ,
                businessName : businessName,
                address : address
            }
            console.log(formData)
            dispatch(formSubmit(formData,handleRedirect))
            handleReset()
           
        }else{
            setForms(errors)
        }

        }
        
    return(
        <div>
         
            <button onClick={handleBack} class="btn btn-danger">Back</button>
            <div className="loginPaper">
            <Paper elevation={3}>
            <h3>Register</h3><br/>
            <Grid align="center">
            <form onSubmit={handleChange}>
                <TextField id="outlined-name" 
                 type="text"  placeholder=" name" 
                 value={userName} onChange={changeName} /> <br/>
                 { forms.userName && <span>{forms.userName}</span>}<br/>
                <TextField id="outlined-basic" 
                type="text" 
                placeholder=" email" 
                value={email} 
                onChange={changeEmail}
                /><br/>
                {
                    forms.email && <span>{forms.email}</span>
                }<br/>
                <TextField id="outlined-basic" 
                type="password" 
                placeholder=" password" 
                value={password} 
                onChange={changePassword}
                /><br/>
                {
                    forms.password && <span>{forms.password}</span>
                }
                <br/>
                <TextField id="outlined-basic"
                type="text"
                 placeholder=" businessName" 
                 value={businessName} 
                 onChange={changeBusiness}
                 /><br/>
                {
                    forms.businessName && <span>{forms.businessName}</span>
                }
                <br/>
                <TextField id="outlined-basic" 
                value={address} 
                onChange={changeAddress} 
                placeholder=" address"
                /><br/>
                {
                    forms.address && <span>{forms.address}</span>
                }
                <br/>
                <Button onClick={handleCancel} class="btn btn-danger">Cancel</Button><input class="btn btn-success" type="submit" value="Register"/>
            </form>
                </Grid>
                </Paper>
        </div>
        </div>
    
    )
}
export default Register
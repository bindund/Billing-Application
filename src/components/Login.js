import React , {useState} from 'react'
import validator from 'validator'
import {useDispatch} from 'react-redux'
import {loginformSubmit} from '../actions/loginActions'
import {Button,Grid,TextField,Paper} from '@material-ui/core'

const Login = (props) => {
    
    const [email ,setEmail] = useState('')
    const [password , setPassword] = useState('')
    const [forms , setForms] = useState(false)
    const errors = {}

    const dispatch = useDispatch()

    const handleRedirect = () => {
        props.history.push("/")
    }

    const handleReset = (e) => {
        setEmail ('')
        setPassword('')
    }
    const changeEmail = (e) => {
        setEmail(e.target.value)
    }
    const changePassword = (e) => {
        setPassword(e.target.value)
    }

    const runValidations = () => {
        if(email.trim().length === 0){
            errors.email = "enter email"
        }else if(!validator.isEmail(email)){
            errors.email = "enter valid email"
        }

        if(password.trim().length === 0){
            errors.password = "Enter password"
        }

    }
    const handleChange = (e) => {
        e.preventDefault()
        runValidations()
        if(Object.keys(errors).length === 0){
        const formData = {
            email : email ,
            password : password
        }
        console.log(formData)
        dispatch(loginformSubmit(formData,handleRedirect))
         }else{
        setForms(errors)
    }
    }
    return(
        <div>
            
            <div className="loginPaper">
            <Paper elevation={3}>
            <h3>Login</h3>
            <Grid align="center">
            <form onSubmit={handleChange}><br/>
            <TextField  id="outlined-basic"   type="text" value={email} onChange={changeEmail} placeholder="enter email"/><br/>
            {
                forms.email && <span>{forms.email}</span>
            }<br/>
            
            <TextField  id="outlined-basic" type="password" value={password} onChange={changePassword} placeholder="enter password"/><br/>
            {
                forms.password && <span>{forms.password}</span>
            }<br/>
            <Button variant="contained" class="btn btn-danger" onClick={handleReset}>Reset</Button><Button variant="contained" class="btn btn-success"  onClick={ handleChange}>Login</Button>
            </form>
            </Grid>
            </Paper>
            
             </div>   
        </div>
    )
}
export default Login
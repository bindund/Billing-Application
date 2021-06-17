import React from 'react'
import { Route , Switch} from 'react-router-dom'
import PrivateRoute from '../components/PrivateRoute'
import {useDispatch ,useSelector} from 'react-redux'
import {toggleStatus} from '../actions/loginActions'
import {StyledLink} from '../styling/app-styled'
import {Paper} from '@material-ui/core'
import Register from './Register'
import Login from './Login'
import Home from './Home'
import Accounts from './Accounts'
import DashBoard from './DashBoard'
import Customer from './Customers/Customer'
import ProductContainer from './Products/ProductContainer'
import AllBill from '../components/Bill-operations/AllBill'
import BillGenerator from '../components/Bill-operations/BillGenerator'
import ShowBills from '../ShowBills'
import swal from "sweetalert"

const Navbar = (props) => {
    const loggedIn = useSelector((state) => {
        return state.log
    })
    const dispatch = useDispatch()
    return(
        <div> 
       <div className="navbarpaper">
           <Paper elevation={2}>
            {
                loggedIn ? (
                    <div>
                        <StyledLink to="/">Home</StyledLink>&nbsp;|
                        <StyledLink to="/dashboard">DashBoard</StyledLink>&nbsp;|
                        <StyledLink to="/account">Account</StyledLink>&nbsp;|
                        <StyledLink to="/customers">Customers</StyledLink>&nbsp;|
                        <StyledLink to="/products">Products</StyledLink>&nbsp;|
                        <StyledLink to="/billings">Billings</StyledLink>&nbsp;|
                        <StyledLink to="/" onClick={()=>{
                                localStorage.removeItem('token')
                                dispatch(toggleStatus())
                                swal("Cool!", "You have logged out successfully!", "success")
                            }}>logout</StyledLink>&nbsp;
                             </div>
                ):(
                    <div>
                        <StyledLink to="/">Home</StyledLink>&nbsp;|
                        <StyledLink to="/register">Register</StyledLink>&nbsp;|
                        <StyledLink to="/login">Login</StyledLink>&nbsp;
                     </div>
                )
            }
             </Paper>
               </div>
                 <div>
                        <Switch>
                        <Route path="/" component={Home} exact={true}/>
                        <Route path="/register" component={Register} exact={true}/>
                        <Route path="/login" component={Login} exact={true}/>
                        <PrivateRoute path="/account" component={Accounts} exact={true}/>
                        <PrivateRoute path="/dashboard" component={DashBoard} exact={true}/>
                        <PrivateRoute path="/customers" component={Customer} exact={true}/>
                        <PrivateRoute path="/products" component={ProductContainer} exact={true}/>
                        <PrivateRoute path="/billings" component={BillGenerator} exact={true}/>
                        <PrivateRoute path="/Allbills" component={AllBill} exact={true}/>
                        <PrivateRoute path="/bills/:id" component={ShowBills} exact={true} />
                        </Switch>
                    </div>
                        </div>
                    )
                }
export default Navbar
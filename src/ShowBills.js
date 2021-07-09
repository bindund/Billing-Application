import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {startDeleteBill} from './actions/billActions'
import "./ShowBill.css"

const ShowBills =(props)=>{
    const id = props.match.params.id;

    const bills = useSelector((state) => {
         return state.allBillReducer
    })
    const customers = useSelector((state) => { 
        return state.customers
    })
    const products = useSelector((state) => { 
        return state.products
    })

    const dispatch = useDispatch()
    
    let arr=[]
    let arr1=[]

    const pbills = bills.filter((bill)=>{
        return bill.customer === id
    })

    const displayname =(id)=>{
        arr = products.filter((product)=>{
            return product._id === id
        })
        return arr[0]?.name;
    }
    const displayCustomername =(id)=>{
        arr1 = customers.filter((customer)=>{
            return customer._id === id
        })
        return arr1[0]?.name
    }

    
    const removeBill=(id)=>{
        dispatch(startDeleteBill(id))
    }
    
    
    return(<>
        {
            pbills.length >0 ? (<div>
                {
                    pbills.map((bill)=>{
                        return (
                            <div class="mui-card-bills xs-shadow">
                            
                                    <img src="/bill.jpg" class="card-img-top-bills" alt="..."/>
                                    <div class="card-body">
                                    <h5 class="card-title">  Customer Name : {displayCustomername(bill.customer)}</h5>
                                    <p>Date : {bill.date.slice(0, bill.date.indexOf("T")).split("-").join("/")}</p>
                                    <p>Purchase Details</p>
                                    {
                                    bill.lineItems.map((item)=>{
                                        return <li>{displayname(item.product)} -{item.price}rs * {item.quantity} = {item.subTotal}</li>
                                    })
                                    }
                                <p>Total Bill Amount - {bill.total}rs</p>
                                <button onClick={()=>{
                                    removeBill(bill._id)}} className="btn btn-danger">Delete Bill</button>
                        
                        
                            </div>
                             
                                        </div>
                                
                        )
                    })
                }
                </div>
                ):(<div><p>No transactions made</p></div>)
        }
    </>)
        
}

export default ShowBills
import React , {useState} from 'react'
import {useSelector} from 'react-redux'
import {StyledLink} from '../../styling/app-styled'
import Lineitems from './LineItems'
import "./BillGenerator.css"



const BillGenerator = (props) => {
    const [date , setDate] = useState('')
    const [customerId , setSuctomerId] = useState('')

    const customers = useSelector((state) => {
        return state.customers
    })

    const changeDate = (e) => {
        setDate(e.target.value)
    }
    const customerChange = (e) => {
        setSuctomerId(e.target.value)
    }

    return(
        <div class="items">
              <div class="arrow">
                  <div  class="arrow-link">
                      <StyledLink to="/Allbills" >All-Bills</StyledLink>  
                   </div>
              </div>
            
            <input type="date" value={date} onChange={changeDate}/><br/>
            <select value={customerId} onChange={customerChange}>
            <option value="">Select Customer</option>
            {
                customers.map((customer) => {
                    return <option value={customer._id}>{customer.name}</option>
                })
            }
            </select><br/>
            <Lineitems customerId={customerId} date={date}/>
            </div>
        
    )
}
export default BillGenerator
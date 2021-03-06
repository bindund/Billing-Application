import React from 'react'
import {useSelector , useDispatch } from 'react-redux'
import {removeLineItems} from '../../actions/billActions'

const ShowaddedProducts = (props) => {
    const {generatebill} = props

    const products = useSelector((state) => {
        return state.products
    })
    const lineItems = useSelector((state) => {
        return state.lineItems
    })

    const dispatch = useDispatch()
    
    let arr=[]

    
    const displayName =(id)=>{
        arr = products.filter((product)=>{
            return product._id === id
        })
        return arr[0].name;
    }

    const removeItem =(id)=>{
        dispatch(removeLineItems(id));

    }
    return (<div>
        <br/>
       {
           lineItems.length > 0 ? (<div>
               <table border="1" className="table">
                 <thead> <tr><th>Product Name</th><th>Price</th><th>Quantity</th><th>sub Total</th><th>Remove</th></tr></thead>
                   <tbody>
                            {
                                lineItems.map((item)=>{
                                    return (
                                        <tr>
                                            <td>{displayName(item.product)}</td>
                                            <td>{arr[0].price}</td>
                                            <td>{item.quantity}</td>
                                            <td>{arr[0].price * item.quantity}</td>
                                            <td><button onClick={()=>{
                                                removeItem(item.product)
                                            }} className="btn btn-danger">Remove</button></td>
                                        </tr>
                                    )
                                    
                                    
                                })
                            }
                   </tbody>
               </table><br/>
               <button onClick={generatebill} className="btn btn-primary">Generate Bill</button>
           </div>):(<div></div>)
           }
       
    </div>)
}

export default ShowaddedProducts
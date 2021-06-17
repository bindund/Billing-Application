import React,{useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {startGetAllBill} from '../../actions/billActions'



const BillDetails =(props)=>{
    const  currentBill = useSelector((state) => {
        return state.currentBill
    })
    const products = useSelector((state) => {
        return state.products
    })
    
    const dispatch =useDispatch()

    let arr=[]
    
    useEffect(()=>{
        dispatch(startGetAllBill())
    },[dispatch])
    
    const displayname =(id)=>{
        arr = products.filter((product)=>{
            return product._id === id
        })
        return arr[0].name;
    }

    return (<div>
            {
                currentBill.length >0 && <div>
                    <p>Invoice</p>
                    <p>Bill id -{currentBill[0]._id}</p>
                    <table border="1" className="table">
                        <thead><tr><th>Product Name</th><th>Price</th><th>Quantity</th><th>Sub Total</th></tr></thead>
                        <tbody>
                            {
                            currentBill[0].lineItems.map((ele)=>{
                                return(
                                    <tr>
                                        <td>{displayname(ele.product)}</td>
                                        <td>{ele.price}</td>
                                        <td>{ele.quantity} </td>
                                        <td>{ele.subTotal}</td>
                                    </tr>
                                )
                            })
                        }
                        </tbody>
                    </table>
                    <p>Total Amount -{currentBill[0].total}</p>
                </div>
            }
           
        
    </div>)
}

export default BillDetails
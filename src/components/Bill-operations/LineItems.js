import React ,{ useState} from 'react'
import {useSelector , useDispatch} from 'react-redux'
import {addLineItems,CreateBill} from '../../actions/billActions'
import ShowaddedProducts from './ShowaddedProducts'
import BillDetails from './BillDetails'

const Lineitems = (props) => {
    const {customerId , date} = props
    const [productId , setProductId] = useState('')
    const [quantity , setQuantity] = useState(1)

    const products = useSelector((state) => {
        return state.products
    })
    const lineItems = useSelector((state) => {
        return state.lineItems
    })

    const dispatch = useDispatch()

    const handleChange = (e) => {
        setProductId(e.target.value)
    }
    const handledecquantiy = () => {
        if(quantity > 1){
            setQuantity( quantity - 1)
        }
    }

    const handleIncQuantity = () => {
        setQuantity(quantity + 1)
    }
    
    const handleAdd =()=>{
        if(productId && quantity){
            const data ={product:productId,quantity:quantity};
            dispatch(addLineItems(data))
            setQuantity(0)
            setProductId("")   
        }
    }

    const generatebill =()=>{
        const data = {
            date : date,
            customer : customerId,
            lineItems : lineItems
        }
        dispatch(CreateBill(data))  
    }

    return (
    <div>
        <select value={productId} onChange={handleChange}>
            <option value="">Select</option>
            {
                products.map((product) => {
                    return <option value={product._id}>{product.name}</option>
                })
            }
        </select>
        {
            productId.length > 0 ? (<div>
                <button onClick={handledecquantiy}>-</button>{quantity}
                <button onClick={handleIncQuantity}>+</button>
                <button onClick={handleAdd}>Add</button><br/></div>
                  ):(
                  <div></div>
                  )
        }
        <ShowaddedProducts generatebill={generatebill}/>
        <BillDetails />

    </div>
    )
}
export default Lineitems
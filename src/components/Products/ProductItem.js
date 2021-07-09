import React,{ useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'
import Modal from 'react-modal'
import { startDeleteProd } from '../../actions/productsActions'
import ProductForm from './ProductForm'
import Button from '@material-ui/core/Button';
import "./ProductItem.css"


const ProductItem = (props) => {
    const [open, setOpen] = useState(false)
    const [id, setId] = useState('')
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const products = useSelector((state) => { 
        return state.products
    })
    const dispatch = useDispatch()

    const deleteProduct = (id) => {
        const confirmRemove = window.confirm('Are you sure?')
        if(confirmRemove) {
            dispatch(startDeleteProd(id))
        }
    }

    const handleToggle = () => {
        setOpen(!open)
    }

    const handleEdit = (product) => {
        handleToggle()
        setId(product._id)
        setName(product.name)
        setPrice(product.price)
    }

    return (
       
        <>
        <div>
            {products.map((product) => {
                return (
                    <div class="mui-card-product xs-shadow">
                            <img src="./foodie.jpg" class="card-img-top" alt="..."/>
                            <div class="card-body">
                            <h5 class="card-title">{product.name}</h5>
                            <p>Price :{product.price}rs</p>
                            <Button onClick={() => {
                                handleEdit(product)
                            }}><EditIcon/></Button>
                            <Button onClick={() => {
                                deleteProduct(product._id)
                            }}><DeleteIcon/></Button>
                            </div>
                        </div>
                )
            })}
        
        
                <div>
                {open && (
                    <Modal 
                     isOpen={open}>
                    <ProductForm
                        id={id}
                        name={name}
                        price={price}
                        handleToggle={handleToggle}
                    />
                    <button onClick={() => {
                        handleToggle()
                    }} className="btn-danger">close</button>
                    </Modal>
                )}
            </div>
            </div>
        </>
        
    
    )
}

export default ProductItem
import React from 'react'
import { useSelector} from 'react-redux'
import ProductItem from './ProductItem'

const ProductList = (props) => {
    
    const products = useSelector(state => state.products)
    
    return (
        
        <div >
            {products.length === 0 ? (
                <div class="center">
                <h5>No products found</h5>
                <p>Add your products</p>
                </div>
            ) : (
                <div>
                <h3>No of Products - { products.length } </h3>
                <ProductItem />  
                </div> 
             )}
        </div>
    )
}

export default ProductList
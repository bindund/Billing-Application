import React from 'react'
import ProductForm from './ProductForm'
import ProductList from './ProductList'

const ProductContainer = (props) => {


    return (
        <div className="container">
            <ProductForm />
            <ProductList />
            
            
        </div>
    )
}

export default ProductContainer
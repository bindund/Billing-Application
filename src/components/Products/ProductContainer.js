import React from 'react'
import ProductForm from './ProductForm'
import ProductList from './ProductList'
import '../Customers/Customer.css'
const ProductContainer = (props) => {


    return (
        <main>
            <div class="block1">
            <ProductForm />
            </div>
            <div class="block2">
            <ProductList />
             </div>
        </main>
    )
}

export default ProductContainer
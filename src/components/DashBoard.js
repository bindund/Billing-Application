import React from 'react'
import {useSelector} from 'react-redux'
import {Paper} from '@material-ui/core'

const DashBoard =(props)=>{

    const products = useSelector((state) => {
        return state.products
    })
    const customers = useSelector((state) => {
        return state.customers
    })

return (
    <div>
        <br/>
            <div className="dasboardpapercontainer">
            <div className="dashboardpaper">
            <Paper elevation={6}>
                <h1>Total Customers</h1><br/>
                <h2>{customers.length}</h2>
            </Paper> 
        </div>
        <div className="dashboardpaper">
        <Paper elevation={6}>
            <h1>Total Products</h1><br/>
            <h2>{products.length}</h2>
        </Paper> 
        </div>
        </div>
</div>
)
}           

export default DashBoard
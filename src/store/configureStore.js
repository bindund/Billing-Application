import {createStore , combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {logReducer , accountReducer} from '../reducers/loginReducers'
import customerReducers from '../reducers/customerReducers'
import {productReducers} from '../reducers/productReducers'
import {currentBillReducer , lineItems , allBillReducer} from '../reducers/billReducers'



const root = {
        log : logReducer,
        customers: customerReducers,
        products: productReducers,
        profile :accountReducer,
        currentBill : currentBillReducer,
        lineItems:lineItems,
        allBillReducer : allBillReducer
        
}

const configureStore = () => {
    const store = createStore(combineReducers(root),applyMiddleware(thunk))
    return store
}
export default configureStore


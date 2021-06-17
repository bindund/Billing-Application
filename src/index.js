import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import './components/app.css'
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import configureStore from './store/configureStore'
import {startGetAccount} from './actions/loginActions'
import { startGetAllCust } from './actions/customerActions'
import { startGetAllProd } from './actions/productsActions'
import {startGetAllBill} from './actions/billActions'



const store = configureStore()

if(localStorage.getItem('token')){
    store.dispatch(startGetAllCust())
    store.dispatch(startGetAllProd())
    store.dispatch(startGetAccount())
    store.dispatch(startGetAllBill())
  }


const ele = (
    <div>
        <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
        </BrowserRouter>
    </div>
)
ReactDOM.render(ele , document.getElementById('root'))
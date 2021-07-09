import axios from '../config/axios'
import swal from 'sweetalert'


 export const startPostCust = (cust) => {
    return (dispatch) => {
        axios.post('/customers',cust,{
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then((response) => {
            const result = response.data
            if(result.hasOwnProperty('errors')) {
                alert(result.errors)
            } else {
                dispatch(addCust(result))
                
                
            }
        })
        .catch((err) => {
            alert(err.message)
        })
    }
}

const addCust = (cust) => {
    return {
        type: 'ADD_CUST',
        payload: cust
    }
}

export const startGetCust = (id) => {
    return (disptach) => {
        axios.get(`/customers/${id}`,{
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then((response) => {
            const result = response.data 
            if(result.hasOwnProperty('errors')) {
                alert(result.errors)
            }else{
                alert(`Name - ${result.name}
                Email - ${result.email}
                Mobile - ${result.mobile}
                Profile created on - ${result.createdAt}`)
            }
        })
        .catch((err) => {
            alert(err.message)
        })
    }
}

export const startDeleteCust = (id) => {
    return (dispatch) => {
        axios.delete(`customers/${id}`,{
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then((response) => {
            const result = response.data 
            if(result.hasOwnProperty('errors')) {
                alert(result.errors)
            }else{
                dispatch(deleteCust(result))
            }
        })
        .catch((err) => {
            alert(err.message)
        })
    }
}

const deleteCust = (cust) => {
    return {
        type:'DELETE_CUST',
        payload: cust
    }
}

export const startGetAllCust = () => {
    return (dispatch) => {
        axios.get('/customers',{
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then((response) => {
            const result = response.data 
            if(result.hasOwnProperty('errors')) {
                alert(result.errors)
            }else{    
                dispatch(getAllCust(result))
            }
        })
        .catch((err) => {
            alert(err.message)
        })
            
    }
}


const getAllCust = (cust) => {
    return {
        type: 'ALL_CUST',
        payload: cust
    }
}

export const startEditCust = (id, cust) => {
    return (dispatch) => {
        axios.put(`/customers/${id}`,cust,{
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then((response) => {
            const result = response.data 
            if(result.hasOwnProperty('errors')) {
                alert(result.errors)
            } else {
                dispatch(editCust(result))
                
            }
        })
        .catch((err) => {
            alert(err.message)
        })
    }
}


const editCust = (cust) => {
    return {
        type: 'EDIT_CUST',
        payload: cust
    }
}
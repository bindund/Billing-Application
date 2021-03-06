import axios from '../config/axios'


 export const startGetAllProd = () => {
    return (dispatch) => {
        axios.get('/products',{
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then((response) => {
            const result = response.data 
            if(result.hasOwnProperty('errors')) {
                alert(result.errors)
            }else{
                dispatch(getAllProd(result))
            }
        })
        .catch((err) => {
            alert(err.message)
        })
    }
}


const getAllProd = (prod) => {
    return {
        type: 'ALL_PROD',
        payload: prod
    }
}



export const startPostProd = (prod) => {
    console.log(prod);
    return (dispatch) => {
        axios.post('/products',prod,{
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then((response) => {
            const result = response.data 
            console.log(result)
            if(result.hasOwnProperty('errors')) {
                alert(result.errors)
            } else {
                dispatch(postProd(result))
            }
        })
        .catch((err) => {
            alert(err.message)
        })
    }
}

const postProd = (prod) => {
    return {
        type: 'ADD_PROD',
        payload: prod
    }
}

export const startGetProd = (id) => {
    return (dispatch) => {
        axios.get(`/products/${id}`,{
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then((response) => {
            const result = response.data 
            if(result.hasOwnProperty('errors')) {
                alert(result.errors)
            }else{
                alert(`Product Name - ${result.name}
                    Product Price - ${result.price}
                    Product created on -${result.createdAt}`)
            }
        })
        .catch((err) => {
            alert(err.message)
        })
    }
}




export const startDeleteProd = (id) => {
    return (dispatch) => {
        axios.delete(`/products/${id}`,{
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then((response) => {
            const result = response.data 
            if(result.hasOwnProperty('errors')) {
                alert(result.errors)
            }else{
                dispatch(deleteProd(result))
            }
        })
        .catch((err) => {
            alert(err.message)
        })
    }
}


const deleteProd = (prod) => {
    return {
        type:'DELETE_PROD',
        payload: prod
    }
}

export const startEditProd = (id,prod) => {
    return (dispatch) => {
        axios.put(`/products/${id}`,prod, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then((response) => {
            const result = response.data 
            if(result.hasOwnProperty('errors')) {
                alert(result.errors)
            }else {
                dispatch(editProd(result))
            }
        })
        .catch((err) => {
            alert(err.message)
        })
    }
}

const editProd = (prod) => {
    return {
        type: 'EDIT_PROD',
        payload: prod
    }
}
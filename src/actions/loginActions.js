import axios from '../config/axios'
import swal from 'sweetalert'


export const formSubmit =(data,handleRedirect)=>{
    return(dispatch)=>{
        axios.post("/users/register",data)
        .then((response)=>{
            const result = response.data
            if(result.hasOwnProperty('errors')) {
                alert(result.message)
            }else{
            handleRedirect()
            swal("cool", "You have Registered in successfully!", "success")
        }
        })
        .catch((err)=>{
            console.log(err.message)
        })
    }
}


export const loginformSubmit =(data,handleRedirect)=>{
    return(dispatch)=>{
        axios.post("/users/login",data)
        .then((response)=>{
            const result = response.data
            if(result.hasOwnProperty('errors')) {
                alert(result.message)
            }else{
                dispatch(login())
                localStorage.setItem('token',result.token)
            handleRedirect()
            swal("cool", "You have loggedIN successfully!", "success")
        }
        })
        .catch((err)=>{
            console.log(err.message)
        })
    }

    }

    const login =() =>{
        return {type : 'TOGGLE_STATE'}
    }

    export const toggleStatus=()=>{
        return {type : 'TOGGLE_STATE'}
    }

    const adminAccount = (data) => {
        return { type: "ADD_ADMIN", payload: data }
      }
      
      export const startGetAccount = () => {
        return (dispatch) => {
          axios
            .get("/users/account", {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
            })
            .then((response) => {
              const result = response.data
              dispatch(adminAccount(result))
            })
            .catch((err) => alert(err.message))
        }
      }
    










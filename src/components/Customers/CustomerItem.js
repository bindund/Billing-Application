import React , {useState , useEffect} from 'react'
import SearchIcon from '@material-ui/icons/Search';
import { useSelector } from 'react-redux'
import CustomerCard from './CustomerCard'
import "./CustomerItem.css" 

const CustomerItem = (props) => {
    const [search , setSearch] = useState('')
    const [fill , setFill] = useState([])
    const customers = useSelector(state => state.customers)

    useEffect(()=> {
        setFill(customers)
    },[customers])

    const changeSearch = (e) => {
        setSearch(e.target.value)
        const filtered = customers.filter((ele) => {
            return (ele.name.toLowerCase().includes(search.toLowerCase()))
        })
        setFill(filtered)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(e.target.value == ""){
            setFill(customers)
        }
    }

    
    
    return (
        <div class="card_align">
            <div>
                 <form onSubmit={handleSubmit}>
                <div class="searchbar" >
                <i class="fa fa-search" class="icon"><SearchIcon/></i>
                 <input   type="search" class="search" placeholder="Search..." value={search} onChange={changeSearch} />
                 
                 </div>
                
            </form>

            <div>
            {fill.map((customer) => {
                return <CustomerCard key={customer._id} customer={customer}/>
            })}
                </div>  
        </div>    
        </div>
 )   
}

export default CustomerItem
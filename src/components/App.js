import React,{useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {LinkWrapper, Wrapper } from '../styling/app-styled'
import {toggleStatus} from '../actions/loginActions'
import Navbar from './Navbar'

const App=(props)=>{

  const dispatch = useDispatch()

  useEffect(()=>{
    if(localStorage.getItem('token'))
    dispatch(toggleStatus())
  },[dispatch])


  return(
    <div>
      
    <Wrapper>
      <LinkWrapper>
    <Navbar/>
    </LinkWrapper>
    </Wrapper>
    
    </div>
  )
}

export default App;

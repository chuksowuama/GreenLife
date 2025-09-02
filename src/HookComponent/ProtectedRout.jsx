import React from 'react'
import SignInPage from '../WEBPAGES/SignInPage'
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const ProtectedRout = ({children}) => {
    const user=useSelector(state=>state.stored.ActiveUser)
    if(!user){
        return <Navigate to={"/SignInPage"} replace />
    }
    return children
}

export default ProtectedRout
